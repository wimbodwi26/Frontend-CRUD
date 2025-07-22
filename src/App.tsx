import type { FC } from "react";

import AppRoutes from "./routes";

import { Link } from "react-router";

const App: FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
        <Link to="/" className="navbar-brand">HOME</Link>
        <button
        className="navbar-toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="">Aku</a>
            </li>
          </ul>
        </div>
        </div>
        </nav> 

        <div className="container mt-5">
          <AppRoutes />
        </div>     
    </div>
  )
}

export default App