import React from 'react'

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 shadow fixed-top">
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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#learn" className="nav-link text-info">Learn</a>
                            </li>
                            <li className="nav-item">
                                <a href="#teach" className="nav-link text-info">Teach</a>
                            </li>
                            <li className="nav-item">
                                <a href="#library" className="nav-link text-info">Library</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link text-info">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#forum" className="nav-link text-info">Forum</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link text-info">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link text-info">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#faq" className="nav-link text-info">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            {/* <!-- Showcase --> */}
            <section
            className="c-section"
            >
                <div className='container'>
                    <div className='hero text-center'>
                        <h1>A teaching and learning tool</h1>
                        <p className='lead'>Designed for anyone interested in uninterupted and self paced learning or teaching</p>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Home
