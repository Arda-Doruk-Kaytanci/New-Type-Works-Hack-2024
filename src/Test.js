import React, { useState } from 'react';

const QuizForm = (props) => {
    const [userAnswers, setUserAnswers] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState(false)
    const [score, setScore] = useState(0)
    const handleInputChange = (event, questionKey) => {
        setUserAnswers({
            ...userAnswers,
            [questionKey]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        props.ref2.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setShowResult(true)
        event.preventDefault();
        console.log(userAnswers)
        let realScore = 0
        Object.entries(props.form).forEach(([questionKey, questionObj]) => {
            console.log(questionObj.correctAnswer)
            if (userAnswers[questionKey] === questionObj.correctAnswer) {
                realScore +=1
                console.log("true")
            }
        });
        setScore(realScore)
        if (realScore >= 8) {
            setResult(true)
        }
        else setResult(false)
    };
    const ShowResult = () => {
        return (
            <>
                <div className="result-container">
                    <span className={`result-status ${!result ? 'fail' : ''}`}>
                        Your result is: {result ? "Pass" : "Fail"}
                    </span>
                    <br />
                    <span className="score">
                        Your point is: {score}
                    </span>
                </div>
            </>

        );
    }
    return (
        <>
            {showResult && <ShowResult />}
            <form onSubmit={handleSubmit} className='form-conta'>
                {Object.entries(props.form).map(([questionKey, questionObj], index) => (
                    <div key={questionKey} className="question-block">
                        <label id={`question${index}`} htmlFor={questionKey}>
                            {index + 1}. {questionObj.question}
                        </label>
                        <br />
                        <div className="answers">
                            {questionObj.options && Object.entries(questionObj.options).map(([optionKey, optionValue]) => (
                                <div key={`${questionKey}-${optionKey}`}>
                                    <input
                                        type="radio"
                                        id={`${questionKey}-${optionKey}`}
                                        name={questionKey}
                                        value={optionKey}
                                        onChange={(event) => handleInputChange(event, questionKey)}
                                    />
                                    <label htmlFor={`${questionKey}-${optionKey}`}>{optionKey}. {optionValue}</label>
                                    <br />
                                </div>
                            ))}
                        </div>
                        <br />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default QuizForm;