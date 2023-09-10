import axios from "axios";
import { useEffect, useState } from "react";



const Fetch = (url) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        async function fetchData() {
            setTimeout(async () => {
                try {
                    let UserGet = await axios.get(url,
                        {
                            cancelToken: ourRequest.token,
                        }
                    );
                    let NewData = UserGet && UserGet.data ? UserGet.data : [];
                    setData(NewData);
                    setLoading(false);       
                }
                catch (err) {
                    console.log('There was a problem or request was cancelled.');
                }
            }, 2000);
            
        }
        fetchData();
        
        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url]);
    
    return {
        data, loading
    }
};



export default Fetch;