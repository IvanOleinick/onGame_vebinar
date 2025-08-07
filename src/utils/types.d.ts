
export interface GameContextValue {
    score: number;
    setScore:Dispatch<SetStateAction<number>>;
    correctAnswer: number,
    setCorrectAnswer:Dispatch<SetStateAction<number>>;


}