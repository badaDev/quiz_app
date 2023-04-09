import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import M from 'materialize-css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../Styles/chemistry.css';
import '../assets/fonts/fonts.css';
import badaDev from '../assets/images/badaDev.png';
import '../assets/font_awesome/css/font-awesome.min.css';
import chemistry from './questions/chemistry.json';

class Chemistry extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            chemistry,
            currentQuestion: {},
            nextQuestion: {},
            prevQuestion: {},
            answer: "",
            numberofQuestion: 0,
            numberofAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswer: 0,
            wrongAnswers: 0,
            timer: {}
       }
       this.interval = null
    }
    

    displayQuestions = (chemistry = this.state.chemistry, currentQuestion, nextQuestion, prevQuestion) => {
        //destructure the currentQuestionIndex
        let { currentQuestionIndex } = this.state;
        //check if our question array is empty
        if (this.state.chemistry !== undefined || this.state.chemistry !== null || (typeof this.state.chemistry !== Object
            && Object.keys(this.state.chemistry).length !== 0) || (typeof this.state.chemistry !== String
                && this.state.chemistry.trim().length !== 0)) {
            chemistry = this.state.chemistry;
            currentQuestion = chemistry[currentQuestionIndex];
            nextQuestion = chemistry[currentQuestionIndex + 1];
            prevQuestion = chemistry[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            //now we want to update our state
            this.setState({
                currentQuestion,
                nextQuestion,
                prevQuestion,
                numberofQuestion: chemistry.length,
                answer
            })
        }
    };
    componentDidMount() {
        const { chemistry, currentQuestion, nextQuestion, prevQuestion } = this.state;
        this.displayQuestions(chemistry, currentQuestion, nextQuestion, prevQuestion);
        this.startTimer();
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }
/*because this fxn was called as an event handler it has access to the event that was 
  called so we just put in the parameter "e" */ 
    handleOptionClicked = (e) => {
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }
    }

    //next button function
    handleNextButton = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(
                    this.state.chemistry, 
                    this.state.currentQuestion, 
                    this.state.nextQuestion, 
                    this.state.prevQuestion); //calling this fxn here will display the next question
            }); 
        }
    }

    //previous button function
    handlePrevButton = () => {
        if (this.state.prevQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(
                    this.state.chemistry, 
                    this.state.currentQuestion, 
                    this.state.nextQuestion, 
                    this.state.prevQuestion); //calling this fxn here will display the next question
            }); 
        }
    }

    //once the quit button is clicked it should take the user back to the homepage
    handleQuitButton =() => {
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    } 

    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer',
            classes: 'toast-valid',
            displayLenght: 2000
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswer: prevState.correctAnswer + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(
                this.state.chemistry, 
                this.state.currentQuestion, 
                this.state.nextQuestion, 
                this.state.prevQuestion); //calling this fxn here will display the next question    
            }
        });
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: 'Wrong Answer',
            classes: 'toast-invalid',
            displayLenght: 2000
        });
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(
                this.state.chemistry, 
                this.state.currentQuestion, 
                this.state.nextQuestion, 
                this.state.prevQuestion); //calling this fxn here will display the next question    
            }
        });
    }

    //we call this function in the componentDidMount
    startTimer = () => {
        const countDownTime = Date.now() + 300000;
        this.interval = setInterval(() => {
            //getting the current time
            const now = new Date();
            //getting the distance i.e where we will be counting down to
            const distance = countDownTime - now;

            //getting the minutes
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));

            //getting the seconds
            const seconds = Math.floor((distance % (1000 * 60) / 1000));

            //check if the user has time if not the quiz should end and redirect back to the home page
            if (distance <= 0) {
                clearInterval(this.interval);
                this.setState({
                    timer: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    timer: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }

    //create an endgame function that handles when the game ends
    endGame = () => {
        alert('Quiz has ended');
        //destructure the state here so we can have access to its propeties
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberofQuestion: state.numberofQuestion,
            numberofAnsweredQuestions: state.numberofAnsweredQuestions,
            correctAnswer: state.correctAnswer,
            wrongAnswers: state.wrongAnswers
        };
        // console.log(playerStats);
        setTimeout(() => {
            this.props.history.push('/components/quiz_score', playerStats);
        }, 1000)
    }

    render() {
        const { 
            currentQuestion, 
            currentQuestionIndex, 
            timer
        } = this.state;
        return (
            <div>
                <Helmet><title>badaDev Quiz Portal</title></Helmet>
                <div id="chemistry">
                    <div id="chm_banner" className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Link to='/'>
                                    <img src={badaDev} className="w-25" alt=""/>
                                </Link>
                            </div>

                            <div className="col-md-6">
                                <h1 className="heading_6">Quiz Portal</h1>
                            </div>
                        </div>
                    </div>

                    <div className="container questions">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <span className="no_of-ques text-success">{currentQuestionIndex + 1} of 10</span>
                                </div>

                                <div className="col-6 text-right">
                                    <span className="fa fa-clock-o timer text-success">
                                        {timer.minutes}:{timer.seconds}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid questions_container">
                            <h5 className="text-muted">
                                {currentQuestion.question}
                            </h5>
                        </div>
                        <div className="container-fluid options-container">
                            <div className="row">
                                <div className="col-md-6 options_container">
                                    <Button onClick={this.handleOptionClicked} className="options d-block w-75 mx-auto my-2">
                                        {currentQuestion.optionA}
                                    </Button>
                                    <Button onClick={this.handleOptionClicked} className="options d-block w-75 mx-auto my-2">
                                        {currentQuestion.optionB}
                                    </Button>
                                </div>
                                <div className="col-md-6 options_container">
                                    <Button onClick={this.handleOptionClicked} className="options d-block w-75 mx-auto my-2">
                                        {currentQuestion.optionC}
                                    </Button>
                                    <Button onClick={this.handleOptionClicked} className="options d-block w-75 mx-auto my-2">
                                        {currentQuestion.optionD}
                                    </Button>
                                </div>
                            </div>
                            <div className="row btn-container mt-3">
                                <Button className="bg-secondary ml-3" onClick={this.handlePrevButton}>Previous</Button>
                                <Button className="bg-success ml-3" onClick={this.handleNextButton}>Next</Button>
                                <Button className="bg-danger ml-3" onClick={this.handleQuitButton}>Quit</Button>
                            </div>
                        </div>
                    </div>

                    {/* <footer className="container-fluid chm-footer">
                        <div className="row">
                            <div className="col-12 text-right">
                                <span className="fa fa-copyright"></span>
                                <span>Designed by badaDev</span>
                            </div>
                        </div>
                    </footer> */}


                </div>
            </div>
        )
    }
    
}



export default Chemistry;