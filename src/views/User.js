import axios from "axios";
import { useEffect, useState } from "react";


const User = () => {
    let [user, setUser] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(async () => {
        setTimeout( async () => {
            let UserGet = await axios.get('http://universities.hipolabs.com/search?country=United+States');
            setUser(UserGet.data);
            setLoading(false);
        }, 2000)
    }, []);



    return (

        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên trường</th>
                    <th scope="col">Trang Web</th>
                    <th scope="col">Quốc Gia</th>
                </tr>
            </thead>
            <tbody>
                {user && user.length > 0 &&
                    user.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.web_pages[0]}</td>
                                <td>{item.country}</td>
                            </tr>
                        )
                    })
                }
                {loading === true &&
                    <tr>
                        <td colSpan={4}> Loading... </td>
                    </tr>
                }
            </tbody>
        </table>

    )
}


export default User;