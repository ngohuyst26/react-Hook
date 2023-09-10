import Fetch from "./fetchData";


const User = () => {
    let { data: NewData, loading } = Fetch('http://universities.hipolabs.com/search?country=Viet+Nam');
    return (

        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên trường</th>
                    <th scope="col">Trang Web</th>
                    <th scope="col">Quốc Gia</th>
                </tr>
            </thead>
            <tbody>
                {NewData && NewData.length > 0 &&
                    NewData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row"  >{index + 1}</th>
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