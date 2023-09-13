import { useState } from "react";
import "./css/YoutubeSearch.scss"
import moment from "moment";
import axios from "axios";


const YoutubeSearch = () => {
    const [search, setSearch] = useState('');
    const [dataSearch, setdataSearch] = useState([]);

    const handSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyD_q968B1dtCGevT0HOcIn0QczZtuBPIMY',
                'q': search
            }

        })
        if (res.data && res.data.items) {
            let data = res.data.items
            let result = [];
            data.map(item => {
                let video = {};
                video.id = item.id.videoId;
                video.channel = item.snippet.channelTitle;
                video.title = item.snippet.title;
                video.description = item.snippet.description;
                video.createdAt = item.snippet.publishedAt
                return(
                    result.push(video)
                )
            })
            setdataSearch(result);
        }
    };


    return (
        <>
            <div className="search">
                <input type="text" className="inputSearch" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="BtnSearch" onClick={() => { handSearchYoutube() }}>Tìm kiếm</button>
            </div>

            <div className="container">
                {dataSearch && dataSearch.length > 0 &&
                    dataSearch.map((item, index) => {
                        return (
                            < >
                            <div className="container-yt" key={index} >
                                <div className="left" >
                                    <iframe width="420" height="250" title="YouTube video player" allowFullScreen className="iframe" src={`https://www.youtube.com/embed/${item.id}`}>
                                    </iframe>
                                </div>
                                <div className="right"  >
                                    <div>
                                        <h5 className="content">{item.title}</h5>
                                    </div>
                                    <div className="creatAt">
                                        Ngày đăng tải: {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                    </div>
                                    <div className="author">
                                        Tác giả: {item.channel}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
};

export default YoutubeSearch;