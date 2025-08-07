import {useContext, useState} from "react";
import GameBoard from "./GameBoard.tsx";
import {topics} from "../data/questions.ts";
import QuestionModal from "./QuestionModal.tsx";
import {GameContext} from "../utils/GameContext.ts";
import ScorePanel from "./ScorePanel.tsx";

const Game = () => {
    const [selected, setSelected] = useState<{
        title: string,
        price: number,
        question: string,
        answer: string
    } | null>(null);
    const {setScore, setCorrectAnswer} = useContext(GameContext);
    const handleCorrect = () => {
        setScore(sum => sum + selected!.price);
        setCorrectAnswer(prev => prev + 1);
    };


    const handleCloseModal = () => {
        setSelected(null);
    };

    return (
        <>
            <ScorePanel/>

            {!selected && (
                <GameBoard
                    topics={topics}
                    onQuestionClick={setSelected}
                />
            )}
            {selected && (
                <QuestionModal
                    title={selected.title}
                    price={selected.price}
                    question={selected.question}
                    answer={selected.answer}
                    onClose={handleCloseModal}
                    onCorrect={handleCorrect}
                />
            )}
        </>
    )
};

export default Game;