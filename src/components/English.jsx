import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import '../Styles/english.css'
import '../assets/fonts/fonts.css'
import badaDev from '../assets/images/badaDev.png'
import '../assets/font_awesome/css/font-awesome.min.css'

class English extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <Helmet><title>badaDev Quiz Portal</title></Helmet>
                <div id="english">
                    <div id="eng_banner" className="container-fluid">
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

                    <div className="container questions">
                        <div className="container-fluid lifeline">
                            <div className="row">
                                <div className="col-6">
                                    <span className="fa fa-adjust fifty_fifty">2</span>
                                </div>

                                <div className="col-6 text-right">
                                    <span className="fa fa-lightbulb-o">2</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <span className="no_of-ques">10</span>
                                </div>

                                <div className="col-6 text-right">
                                    <span className="timer"></span>
                                </div>
                            </div>
                        </div>
                        <div className="questions_container">
                            <h5>
                                1. Choose the word that best describes the meaning of the underlined words 
                                'In the match against the uplanders 
                                team, the sub mariners turned out to be the <u>dark horse</u>
                            </h5>
                        </div>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-md-6 options_container">
                                    <p className="">played most brilliantly</p>
                                    <p className="">played below their usual form</p>
                                </div>
                                <div className="col-md-6 options_container">
                                    <p className="">won unexpectedly</p>
                                    <p className="">lost as expected</p>
                                </div>
                            </div>
                            <div className="row btn-container">
                                <Button>Previous</Button>
                                <Button>Next</Button>
                                <Button>Quit</Button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
    
}

export default English;