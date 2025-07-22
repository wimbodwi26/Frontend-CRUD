import type { FC } from "react";

import { Link } from "react-router-dom";

const Home: FC = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-5 shadow-sm">
            <div className="container-fluid py-5">
                <h1 className="">FullStack Developer</h1>
                <p className="">Belajar FullStack Developer dengan golang dan react typescript di santrikoding.com</p>
                <hr />
                <Link to="/register" className="btn btn-primary btn-lg me-3">REGISTER</Link>
                <Link to="/login" className="btn btn-scondary btn-lg">LOGIN</Link>
            </div>
        </div>
    )
}
 
export default Home;