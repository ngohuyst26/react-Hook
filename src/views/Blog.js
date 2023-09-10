import Fetch from "./fetchData";
import { Link } from "react-router-dom";

const Blog = () => {
    let { data, loading } = Fetch(
        "https://api.slingacademy.com/v1/sample-data/photos"
    );
    console.log(data.photos);
    return (
        <div className="container">
            <div className="row">
                {loading === false &&
                    data.photos &&
                    data.photos.length > 0 &&
                    data.photos.map((item) => {
                        return (
                            <div className="col-lg-4 mb-4" key={item.id}>
                                <div className="card">
                                    <img src={item.url} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link
                                            to={`/blog/` + item.id}
                                            className="btn btn-outline-success btn-sm"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                {loading === true && <div>loading data...</div>}
            </div>
        </div>
    );
};

export default Blog;
