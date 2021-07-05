import React, { useEffect, useState } from 'react';
import getQuestions from './api/api';
import './app.css';
import Question from './components/Question/Question';
import Option from './components/Option/Option';

// const optionsArr = [
//   {
//     name: 'HoneyComb',
//   },
//   {
//     name: 'Froyo',
//   },
//   {
//     name: 'Eclair',
//   },
//   {
//     name: 'Marshmellow',
//   },
// ];

function App() {
  const [selected, setSelected] = useState('');
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);

  const checkAnswer = () => {
    if (selected === question.correct_answer) {
      console.log('CORRECT');
      setQuestions();
    } else {
      console.log('INCORRECT');
    }
  };
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  const setQuestions = () => {
    getQuestions().then((res) => {
      let quizQuestion = res.data.results[0];
      let optionsArray = [
        ...quizQuestion.incorrect_answers,
        quizQuestion.correct_answer,
      ];
      shuffle(optionsArray);
      setQuestion(quizQuestion);
      setOptions(optionsArray);
      console.log(quizQuestion);
    });
  };

  useEffect(() => {
    setQuestions();
  }, []);

  return (
    <div className="container">
      <div className="heading-container">
        <h3>
          Question <span>1/12</span>
        </h3>
        <h3>
          Score <span>04</span>
        </h3>
      </div>
      <Question title={question.question} />
      <div className="option-container">
        {options.map((item, i) => {
          return (
            <Option
              name={item}
              i={i + 1}
              key={i}
              handleSelect={(item) => setSelected(item)}
              selected={selected}
            />
          );
        })}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
}

export default App;
