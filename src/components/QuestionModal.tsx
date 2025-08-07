import {useState} from "react";

interface Props {
    title: string,
    price: number,
    question: string,
    answer: string,
    onClose: () => void
    onCorrect: () => void
}

const QuestionModal = ({title, price, question, answer, onClose, onCorrect}: Props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="question-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{title}</h2>
                <div className="price">${price}</div>
                <div className="question">{question}</div>
                {!showAnswer ? (
                    <button
                        className="show-answer-btn"
                        onClick={() => setShowAnswer(true)}
                    >
                        Показать ответ
                    </button>
                ) : (
                    <div className="answer-container">
                        <div className="answer">{answer}</div>
                        <button
                            className="close-btn"
                            onClick={()=>{
                                onCorrect();
                                onClose()}}
                        >
                            Правильно
                        </button>
                        <button
                            className="close-btn"
                            onClick={onClose}
                        >
                            Неправильно
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionModal;