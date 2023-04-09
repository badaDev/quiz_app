import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../Styles/quiz_score.css';
import '../assets/font_awesome/css/font-awesome.min.css';
import '../assets/fonts/fonts.css';
import badaDev from '../assets/images/badaDev.png';
import '../assets/font_awesome/css/font-awesome.min.css';


class Quiz_Score extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        score: 0,
        numberofQuestion: 0,
        numberofAnsweredQuestions: 0,
        correctAnswer: 0,
        wrongAnswers: 0
    };
}

componentDidMount() {
    const { state } = this.props.location; //this is the props that was passed in from the previous page
    this.setState({
        score: (state.score / state.numberofQuestion) * 100, //this will convert the score to percentage
        numberofQuestion: state.numberofQuestion,
        numberofAnsweredQuestions: state.numberofAnsweredQuestions,
        correctAnswer: state.correctAnswer,
        wrongAnswers: state.wrongAnswers
    })
}

    render() {
        const { state, score } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30) {
            remark = 'You need more practice';            
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time';
        } else if (userScore > 50 && userScore <= 70) {
            remark = 'You can do better';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did good';
        } else {
            remark = 'You did great';
        }

        //check if stats are available
        if (state !== undefined) {
            stats = (
                <div className="container text-center">
                    <div className="row">
                        <span className="col-12 fa fa-check-circle-o success-icon"></span>
                    </div>
                    <div>
                        <h3 className="head navy-text">Quiz has ended</h3>
                        <h4 className="head2 navy-text">
                            {remark}
                        </h4>
                        <h3 className="head2 navy-text">
                            Your score: {this.state.score.toFixed(0)}&#37;
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">Total number of questions</p>
                                </div>
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">
                                        {this.state.numberofQuestion}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">Number of attempted questions</p>
                                </div>
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">
                                        {this.state.numberofAnsweredQuestions}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">Number of correct answers</p>
                                </div>
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">
                                        {this.state.correctAnswer}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">Number of wrong answers</p>
                                </div>
                                <div className="col-6">
                                    <p className="quiz_score-para navy-text">
                                        {this.state.wrongAnswers}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link to='/'>
                                <Button>Back to homepage</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            stats = (
                <div className="container-fluid">
                    <h1>No stats please take a quiz</h1>
                    <div className="col-12">
                        <Link to='/'>
                            <Button>Back to homepage</Button>
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Helmet><title>badaDev Quiz Portal</title></Helmet>
                <div id="quiz_score">
                    <div id="quiz_score_banner" className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Link to='/'>
                                    <img src={badaDev} className="w-25" alt=""/>
                                </Link>
                            </div>

                            <div className="col-md-6">
                                <h1 className="heading_4">Quiz Portal</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {stats}
                </div>
                {/* <footer className="container-fluid quiz_score-footer">
                    <div className="row">
                        <div className="col-12 text-right">
                            <span className="fa fa-copyright"></span>
                            <span className="text">Designed by badaDev</span>
                        </div>
                    </div>
                </footer> */}
            </div>
        );
    }
}



export default Quiz_Score;