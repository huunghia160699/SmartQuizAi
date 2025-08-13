import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to SmartQuizAi</h1>
            <p>Your go-to platform for interactive quizzes powered by AI.</p>
            <p>Get started by taking a quiz!</p>
            <a href="/quiz">Start Quiz</a>
        </div>
    );
};

export default Home;