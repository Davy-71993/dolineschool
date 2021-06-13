import React from 'react'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow py-3 fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand text-success fw-bold">DOLINESCHOOL</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#forum" className="nav-link">Forum</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faq" className="nav-link">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
