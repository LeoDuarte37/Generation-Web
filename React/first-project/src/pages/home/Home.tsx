import React, { useState, useEffect } from 'react';
import './Home.css';

interface myProps {
    title: string;
    description: string;
}

function Home(props:myProps) {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a tarefa!');
        }
    }, [completed]); 

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="container">
            {loggedIn ? (
                <>
                    <div> 
                        <h1 className='titulo'>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                    
                    <div>
                        <h2>Tarefa</h2>
                        <h4>{tarefa}</h4>
                        <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
                    </div>
                </>
            ) : (
                <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )} 
        </div>
    );
}

export default Home;