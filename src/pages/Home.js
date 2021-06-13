import React from 'react'

import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Home() {
    return (
        <div className="route-div">
            <Nav/>
            <section className="bg-dark text-light p-5 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center mb-md-5 justify-content-between">
                    <div>
                        <h1>A <span className="text-primary">Teaching</span> and <span className="text-primary">Learning</span> Tool</h1>
                        <p className="lead my-4">
                        Well designed platform for students, teachers and anyone interested in uninterupted and self paced online learning or teaching.
                        </p>
                        <div className="row g-4">
                            <div className="col-sm">
                                <button
                                    className="btn btn-primary px-5 btn-lg"
                                    data-bs-toggle="modal"
                                    data-bs-target="#enroll"
                                >
                                    Register
                                </button>
                            </div>
                            <div className="col-sm">
                                <button
                                    className="btn btn-success px-5 btn-lg"
                                    data-bs-toggle="modal"
                                    data-bs-target="#enroll"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <img
                        className="img-fluid w-50 d-none d-sm-block"
                        src="./assets/svgs/showcase.svg"
                        alt=""
                    />
                    </div>
                </div>
            </section>
            {/* why doline school */}
            <div className="container p-5">
                <div className="col-md-10" style={{margin: '0px auto'}}>
                    <div className="row text-center g-4">
                        <div className='col-md'>
                            <div className="bg-lightblue p-5 text-center">
                                <img src="./assets/images/ua.png" alt="Unlimited Access" className="img-fluid"/>
                                <h4 className="my-3 text-light fw-bold">Unlimited <br></br> Access</h4>
                            </div>
                        </div>
                        <div className='col-md'>
                            <div className="bg-lightgreen p-5 text-center">
                                <img src="./assets/images/up.png" alt="Uninterupted progress" className="img-fluid"/>
                                <h4 className="my-3 text-light fw-bold">Unintrupted <br></br> Progress</h4>
                            </div>
                        </div>
                        <div className='col-md'>
                            <div className="bg-redish p-5 text-center">
                                <img src="./assets/images/rr.png" alt="Reliable resources" className="img-fluid"/>
                                <h4 className="my-3 text-light fw-bold">Reliable <br></br> Resources</h4>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Learning */}
            <section id="learn" className="p-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <img src="./assets/svgs/studying.svg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md p-5">
                        <h2>Learn From The Industrial Experts</h2>
                        <p className="lead">
                            Transform your life through education
                        </p>
                        <p>
                            Lean on your schedule and learn from anywhere at an time, tacking advantage of our active community of
                            instructors and teachers to help you learn new skills, advance your career and explore your hobbies by
                            sharing their knowledge with you.
                        </p>
                        <p>
                            <span className="fw-bold">Choose who to teach you</span> and join millions of students advancing thier careers
                        </p>
                        <a href="#uiiw" className="btn btn-info mt-3">
                            <i className="bi bi-chevron-right"></i> Find Out How
                        </a>
                    </div>
                    </div>
                </div>
            </section>

            {/* Teaching */}

            <section id="learn" className="p-5 bg-dark text-light">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-md p-5">
                        <h2>Teach the easy way</h2>
                        <p className="lead">
                            Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.
                        </p>
                        <p>
                            Lean on your schedule and teach from anywhere at an time, tacking advantage of our active community of
                            learners who are ready to learn new skills, advance their career and explore their hobbies from a great instructor or teacher like you.
                        </p>
                        <p>
                            <span className="fw-bold">Choose who to teach</span> and join millions of Instructors and Teachers creating a global impact.
                        </p>
                        <a href="#" className="btn btn-primary mt-3">
                            <i className="bi bi-chevron-right"></i> Find Out How
                        </a>
                    </div>
                    <div className="col-md">
                        <img src="./assets/svgs/teaching_r.svg" className="img-fluid" alt="" />
                    </div>
                    </div>
                </div>
            </section>
            {/* How it all Starts */}
            
            <section id="questions" className="p-5">
                <div className="container text-center">
                    <h2 className="text-center mb-4">Getting Started</h2>
                    <p className="lead px-5 py-3 text-center">
                        It all starts by creating your free account then you are asshered into your dashboard.
                        In the dashbnoard, you can create or search courses, class lectures and so on. You can 
                        search and get paired with your favourite teachers or students.
                    </p>
                    <a href="#ek" className="btn btn-outline-success">Sign Up Now</a>
                </div>
            </section>


            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Home
