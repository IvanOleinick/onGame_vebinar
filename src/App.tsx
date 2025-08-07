import './App.css'
import Game from "./components/Game.tsx";
import {Route, Routes} from "react-router";
import Login from "./components/Login.tsx";
import {useState} from "react";
import {UserNameContext} from "./utils/context.ts";
import {GameContext} from "./utils/GameContext.ts";


function App() {
    const [userName, setUserName] = useState("");
    const[score, setScore] = useState(0);
    const[correctAnswer, setCorrectAnswer] = useState(0);


    return (
        <div>
            <UserNameContext value={{userName, setUserName}}>
                <GameContext value={{score,setScore,correctAnswer,setCorrectAnswer}}>
                <Routes>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </GameContext>
            </UserNameContext>

        </div>
    )

}

export default App
