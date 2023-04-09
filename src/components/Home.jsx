import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import '../Styles/home.css'
import '../assets/fonts/fonts.css'
// import badaDev from '../assets/images/badaDev.png'
import spakxx from '../assets/images/SPAKXX LOGO.png'
 

class Home extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: false
        }
    }

    handleModal = () => {
        this.setState({show: true});
    }

    closeModal = () => {
        this.setState({show: false});
    }
    
    render() {
        return( 
            <div>
                <Helmet><title>Spakxx Exam Portal</title></Helmet>
                <div id="home">
                    <section>
                        <div>
                            <img src={spakxx} className="myLogo" alt="Logo"/>
                        </div>

                        <div>
                            <h3 className="heading">Exam Portal</h3>
                        </div>

                        <div>               
                            <Button onClick={() => {this.handleModal()}} className="quiz-btn">Take Quiz </Button>
                            <Modal show={this.state.show}>
                                <Modal.Header>
                                        <h3 className="modal-head">Instructions</h3>
                                        <Button onClick={() => {this.closeModal()}}>&times;</Button>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul>
                                        <li class="modal-instructions">
                                            You will be given a total of 10 questions in each subject
                                        </li>
                                        <li class="modal-instructions">
                                            The questions will be presented 1 each in series
                                        </li>
                                        <li class="modal-instructions">
                                            Once you have answered a question you will be required
                                            to click on the next button to move to the next one
                                        </li>
                                        <li class="modal-instructions">
                                            Click on finish when you are done with all questions
                                        </li>
                                        <li class="modal-instructions">
                                            If at any time you can no longer continue you can 
                                            click on finish exam to see your performance
                                        </li>
                                        <li class="modal-instructions">
                                            You will have a total of 10 minutes to complete each subject
                                        </li>
                                        <li class="modal-instructions">
                                            In case you haven't answered all the questions before the time stops the quiz 
                                            will be submitted automatically
                                        </li>
                                        <li>Click on continue to select your preffered subject</li>
                                    </ul>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Link to="/components/subjects">
                                        <Button>Continue</Button>
                                    </Link>
                                </Modal.Footer>
                            </Modal>

                            <ul>
                                <li className="home_list">
                                    <Link to="#" className="nav-link btn btn-lg text-white login-btn">Login</Link>
                                </li>
                                <li className="home_list">
                                    <Link to="#" className="nav-link btn btn-lg text-white signup-btn">Sign Up</Link>
                                </li>
                            </ul>

                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;