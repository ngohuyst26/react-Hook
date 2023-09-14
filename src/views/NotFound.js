import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundError = () => {
    let history = useHistory();
    const GoHome = () => {
        history.push("/");
    }
    return (
        <div className="d-flex align-items-center justify-content-center ">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist..
                </p>
                <button  className="btn btn-primary" onClick={() => { GoHome() }}>Go Home</button>
            </div>
        </div>
    )
};

export default NotFoundError;