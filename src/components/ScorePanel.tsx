import {useContext} from "react";
import {GameContext} from "../utils/GameContext.ts";

const ScorePanel = () => {

    const { score, correctAnswer} = useContext(GameContext);

    return (
        <div className="absolute top-4 left-4 bg-white/10 text-white p-4 rounded-xl shadow-lg backdrop-blur-md z-50">
            <h1 className="text-xl font-bold">Выигрыш: {score}</h1>
            <h2 className="text-md">Правильно отвечено: {correctAnswer}</h2>
        </div>
    );
};

export default ScorePanel;