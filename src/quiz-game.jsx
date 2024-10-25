import React, { useState, useEffect } from "react";

function QuizGame() {
  const questionsData = [
    {
      question: "1. What is the data type of the variable 'x' if it's assigned the value 10?",
      answers: ["String", "Number", "Boolean"]
    },
    {
      question: "2. What is the output of the following code: `console.log(true && false)`?",
      answers: ["true", "false", "error"]
    },
    {
      question: "3. What does the following loop do: `for (let i = 0; i < 5; i++) { console.log(i); }`?",
      answers: ["Prints numbers from 1 to 5", "Prints numbers from 0 to 4", "Prints the value of i 5 times"]
    },
    {
      question: "4. What is the function that reverses a string in JavaScript?",
      answers: ["reverseString()", ".reverse()", "String.reverse()"]
    },
    {
      question: "5. What is the purpose of an if statement in programming?",
      answers: ["Executes code conditionally", "Defines a variable", "Creates a loop"]
    },
    {
      question: "6. What is the difference between a variable and a constant in programming?",
      answers: ["Variables can change, constants cannot", "Variables store data, constants perform calculations", "There is no difference"]
    },
    {
      question: "7. How do you add comments to your code in Python?",
      answers: ["// This is a comment", "# This is a comment", "-- This is a comment"]
    },
    {
      question: "8. What does the following code do: `let x = [1, 2, 3]; x.push(4); console.log(x);`?",
      answers: ["Prints [1, 2, 3, 4]", "Adds 4 to all elements in x", "Creates an array with values 1 to 4"]
    },
    {
      question: "9. What is an API in programming?",
      answers: ["A way for programs to communicate", "A type of data structure", "A software application"]
    },
    {
      question: "10. What is the time complexity of a linear search algorithm?",
      answers: ["O(log n)", "O(n)", "O(1)"]
    },
  ];
  
  const correctAnswers = [
    "Number",
    "false",
    "Prints numbers from 0 to 4",
    "String.reverse()",
    "Executes code conditionally",
    "Variables can change, constants cannot",
    "# This is a comment",
    "Prints [1, 2, 3, 4]",
    "A way for programs to communicate",
    "O(n)",
  ];
  

  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  let [allCorrectAnswers, setAllCorrectAnswers] = useState(0)
  let [allWrongAnswers, setAllWrongAnswers] = useState(0)


  function handleClick(e) {
    const selectedAnswer = e.target.textContent; // This refers to the button you pressed
    if (selectedAnswer === correctAnswers[currentQuestionIndex]) { // check pressed button equal to the correct answer // set the display to Correct
      setAllCorrectAnswers(c => c + 1);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      
    } else {
      setAllWrongAnswers(c=>c+1);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1); // and display will be Wrong answer!
    }
  }

  function reset() {
    setAllCorrectAnswers(allCorrectAnswers = 0)
    setAllWrongAnswers(allWrongAnswers = 0)
    setCurrentQuestionIndex(currentQuestionIndex = 0)
  }
  
  return (
    <>
      {currentQuestionIndex == questionsData.length && <div className="quiz-block">
        <p className="correct-answers">Your Correct answers is : {allCorrectAnswers}</p>
        <p className="wrong-answers">Your Wrong answers is : {allWrongAnswers}</p>
        <div className="reset-container">
          <button className="reset-button" onClick={reset}>Repeat</button>
        </div>
      </div>}
    
      {currentQuestionIndex<=questionsData.length-1 && <div className="quiz-block">
        <p className="question-data-display">{questionsData[currentQuestionIndex].question}</p>
        <div className="buttons-container">

          {questionsData[currentQuestionIndex].answers.map((answer, index) => (
          <button className="button-answers" key={index} onClick={handleClick}>
            {`${answer}`}
          </button>
        ))}

        </div>
        <div className="reset-container">
        <button className="reset-button" onClick={reset}>Reset</button><br/>

      </div>
    </div>}

    </>
    
  );
}

export default QuizGame;
