import { WINNING_COMBINATIONS } from '../constants/constants';

export const getWinner = (newBoard) => {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        if (
            newBoard[a] &&
            newBoard[a] === newBoard[b] &&
            newBoard[a] === newBoard[c]
        ) {
            return newBoard[a];
        }
    }

    return null;
};
