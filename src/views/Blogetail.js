import { useParams } from "react-router-dom/cjs/react-router-dom";
import Fetch from "./fetchData";

const BlogDetail = () => {
    let { id } = useParams();
    let { data, loading } = Fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
    let BlogDetail = data.photo;
    console.log(BlogDetail);
    return (
        <>
            <div className="border container ">
                <div>
                    BLOG ID: {id} {loading === true &&
                        <span>Loading...</span>
                    }
                </div>
                {loading === false && BlogDetail &&
                    <>
                        <div>
                            <img src={BlogDetail.url} style={{ width: 300, height: 300, objectFit: "cover" }}  alt="HÌnh Blog" />
                        </div>
                        <div className="mt-3">
                            <h3>{BlogDetail.title}</h3>
                            <p>
                                {BlogDetail.description}
                            </p>
                        </div>
                    </>
                }
            </div>
        </>
    )
};

export default BlogDetail;