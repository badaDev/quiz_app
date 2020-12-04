import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Subjects from './components/Subjects'
import English from './components/English'

class App extends Component {
  constructor() {
    super()
    this.state = {
      English: [
        {
            question: `1. Choose the word that best describes the meaning of the underlined words 'In the match against the uplanders team, the sub mariners turned out to be the <u>dark horse</u>'`, 
            optionA: "played most brilliantly", 
            optionB: "played below their usual form", 
            optionC: "won unexpectedly",
            optionD: "lost as expected",
            answer: "won unexpectedly"
        },
        {
            question: `2. In the question below choose the option nearest in meaning to the word(s) or phrase underlined:
            "Look at the <u>tell-tale</u> signs of battering on her"`, 
            optionA: "confirming looks", 
            optionB: "suspicious marks", 
            optionC: "revealing marks",
            optionD: "signifying marks",
            answer: "revealing marks" 
        },
        {
            question: `3. In the question below choose the word(s) or phrase(s) which best fill(s) the gap:
            After Jerry had made the bed, he .... on it`,
            optionA: `layed`,
            optionB: `laid`,
            optionC: `lied`,
            optionD: `lay`,
            answer: `laid`
        },
        {
            question: `4. Select the option that best explains the information conveyed in the sentence.
            Imona couldn't have attended lectures yesterday?`,
            optionA: `it was possible that Imona attended lectures yesterday`,
            optionB: `It was possible that Imona didn't attend lectures yesterday`,
            optionC: `It was possible that Imona attended lectures yesterday`,
            optionD: `It was impossible that Imona didn't attend lectures yesterday`,
            answer: `It was possible that Imona didn't attend lectures yesterday`
        },
        {
            question: `5. Select the option that best explains the information conveyed in the sentence.
            If I left the country, I would arrange for my family to join me?`,
            optionA: `He left the country and his family joined him`,
            optionB: `In the event of his leaving the country, his family would join him`,
            optionC: `He did not leave the country and his family did not join him`,
            optionD: `He may not leave the country`,
            answer: `In the event of his leaving the country, his family would join him`
        },
        {
            question: `6. Fill each of the gap with the appropriate option from the list following the the gap.
            That centre-forward was....... consequently the goal was not disallowed?`,
            optionA: `very well positioned`,
            optionB: `in an off-side position`,
            optionC: `a brilliant player`,
            optionD: `the captain of the team`,
            answer: `very well positioned`
        },
        {
            question: `7. Identify the word that has the stress on the first syllable.`,
            optionA: `dismiss`,
            optionB: `intact`,
            optionC: `confuse`,
            optionD: `comment`,
            answer: `comment`
        },
        {
            question: `8. Choose the option that best completes the gap(S).
            Is it true that Okoro ........ when the gates were closed?`,
            optionA: `had returned`,
            optionB: `could return`,
            optionC: `should return`,
            optionD: `would return`,
            answer: `had returned`
        },
        {
            question: `9. Choose the the appropriate stress pattern from the options. The syllables are written in capital letters.
            "Understandable"?`,
            optionA: `UnDERstandable`,
            optionB: `UnderstandABLE`,
            optionC: `UNderstandable`,
            optionD: `UnderSTANDable`,
            answer: `UNderstandable`
        },
        {
            question: `10. Choose the option opposite in meaning to the underlined word(s).
            Her <u>ingenuous</u> smile drew our attention?`,
            optionA: `witty`,
            optionB: `naive`,
            optionC: `clever`,
            optionD: `arrogant`,
            answer: `arrogant`
        }
    ]
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/english" component={English} />
      </Router>
    )
  }
}

export default App;
