import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Subjects from './components/Subjects';
import English from './components/English';
import Mathematics from './components/Mathematics';
import Chemistry from './components/Chemistry';
import Quiz_Score from './components/Quiz_Score';
import Physics from './components/Physics';
import Biology from './components/Biology';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    // const { English } = this.state;

    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/components/subjects" component={Subjects} />
        <Route path="/components/english" component={English} />
        <Route path="/components/mathematics" component={Mathematics} />
        <Route path="/components/chemistry" component={Chemistry} />
        <Route path="/components/physics" component={Physics} />
        <Route path="/components/biology" component={Biology} />
        <Route path="/components/quiz_score" component={Quiz_Score} />
      </Router>
    )
  }
}

export default App;
