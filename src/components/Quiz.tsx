import React, { useState } from 'react';

const Quiz = () => {
    const [questions] = useState([
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        }
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (option: string) => {
        setUserAnswers([...userAnswers, option]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const renderResults = () => {
        return (
            <div>
                <h2>Quiz Results</h2>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        <p>Your answer: {userAnswers[index]}</p>
                        <p>Correct answer: {question.answer}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {quizCompleted ? (
                renderResults()
            ) : (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;