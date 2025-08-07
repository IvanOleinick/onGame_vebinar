import {createContext} from "react";
import type {GameContextValue} from "./types";


export const GameContext = createContext<GameContextValue>({
    score: 0,
    setScore: (sum: number) => {
        console.log(sum)
    },
    correctAnswer: 0,
    setCorrectAnswer: (prev:number) => {
        console.log(prev)
    }

})
;