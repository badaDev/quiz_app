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
                    <Helmet><title>badaDev Quiz Portal</title></Helmet>
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
                                            <Link className="subject_link" onClick={() => {this.handleModal()}}>English</Link>
                                            <Modal show={this.state.show}>
                                                <Modal.Header>
                                                        <h3 className="modal-head">Instructions</h3>
                                                        <Button onClick={() => {this.closeModal()}}>&times;</Button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>You have 10 minutes to finish this quiz</p>
                                                    <p>You have two 50/50 lifelines "this takes away two incorrect answers from the options"</p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Link  to="/english">
                                                        <Button>Start Quiz</Button>
                                                    </Link>
                                                </Modal.Footer>
                                            </Modal>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/mathematics" className="subject_link">Mathematics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/physics" className="subject_link">Physics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/biology" className="subject_link">Biology</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4">
                                    <ul>
                                        <li className="subject_list">
                                            <Link to="/chemistry" className="subject_link">Chemistry</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/literature" className="subject_link">Literature in English</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/government" className="subject_link">Government</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/history" className="subject_link">History</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4">
                                    <ul>
                                        <li className="subject_list">
                                            <Link to="/accounting" className="subject_link">Principles of Accounting</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/commerce" className="subject_link">Commerce</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/economicst" className="subject_link">Economics</Link>
                                        </li>
                                        <li className="subject_list">
                                            <Link to="/civic" className="subject_link">Civic Education</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <footer className="container-fluid footer">
                            <div className="row">
                                <div className="col-12 text-right">
                                    <span className="fa fa-copyright">Designed by badaDev</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
        );
    }
}

export default Subjects;