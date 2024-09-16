import React, { useState } from 'react';

const QuizForm = (props) => {
    const [userAnswers, setUserAnswers] = useState([])
    const handleInputChange = (event, questionKey) => {
        setUserAnswers({
            ...userAnswers,
            [questionKey]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let score = 0;
        Object.entries(props.form).forEach(([questionKey, questionObj]) => {
            if (userAnswers[questionKey] === questionObj.correctAnswer) {
                score += 1;
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className='form-conta'>
            {Object.entries(props.form).map(([questionKey, questionObj], index) => (
                <div key={index} className="question-block">
                    <label id={`question${index}`} htmlFor={questionKey}>
                        {index + 1}. {questionObj.question}
                    </label><br />
                    <div className="answers">
                        {questionObj.options && Object.entries(questionObj.options).map(([optionKey, optionValue]) => (
                            <>
                                <input
                                    type="radio"
                                    id={`${questionKey}-${optionKey}`}
                                    name={questionKey}
                                    value={optionValue}
                                    onChange={(event) => handleInputChange(event, questionKey)}
                                />
                                <label htmlFor={`${questionKey}-${optionKey}`}>{optionKey}. {optionValue}</label><br />
                            </>
                        ))}
                    </div><br />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuizForm;