import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundError = () => {
    let history = useHistory();
    const GoHome = () => {
        history.push("/");
    }
    return (
        <div class="d-flex align-items-center justify-content-center ">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist..
                </p>
                <a class="btn btn-primary" onClick={() => { GoHome() }}>Go Home</a>
            </div>
        </div>
    )
};

export default NotFoundError;