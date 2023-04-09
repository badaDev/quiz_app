import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import '../Styles/subjects.css'
import '../assets/fonts/fonts.css'
import badaDev from '../assets/images/badaDev.png'


class Subjects extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false
        };
    }
    
    handleModal = () => {
        this.setState({show: true});
    }

    closeModal = () => {
        this.setState({show: false});
    }

    render() {
        return (
                <div>
                    <Helmet><title>Spakxx Exam Portal</title></Helmet>
                    <div id="subjects">
                        <div id="banner" className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to='/'>
                                        <img src={badaDev} className="w-25" alt=""/>
                                    </Link>
                                </div>

                                <div className="col-md-6">
                                    <h1 className="heading_2">Quiz Portal</h1>
                                </div>
                            </div>
                        </div>

                        <div id="subject_body" className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <ul>
                                        <li className="subject_list">
                                            <Link to="/components/english" className="subject_link">English</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/mathematics" className="subject_link">Mathematics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/physics" className="subject_link">Physics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/biology" className="subject_link">Biology</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4">
                                    <ul>
                                        <li className="subject_list">
                                            <Link to="/components/chemistry" className="subject_link">Chemistry</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/literature" className="subject_link">Literature in English</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/government" className="subject_link">Government</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/history" className="subject_link">History</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4">
                                    <ul>
                                        <li className="subject_list">
                                            <Link to="/components/accounting" className="subject_link">Principles of Accounting</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/commerce" className="subject_link">Commerce</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/economicst" className="subject_link">Economics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/components/civic_education" className="subject_link">Civic Education</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <footer className="container-fluid footer">
                            <div className="row">
                                <div className="col-12 text-right">
                                    <span className="fa fa-copyright"></span>
                                    <span className="text">Designed by badaDev</span>
                                </div>
                            </div>
                        </footer> */}
                    </div>
                </div>
        );
    }
}

export default Subjects;