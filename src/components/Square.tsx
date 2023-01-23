import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { PlayerOrIa, Turns } from '../types/types';

interface SquareProps {
    children: null | Turns;
    index: number;
    handleUpdateBoard: (index: number) => void;
    handlePlayerVsIaTurn: (index: number) => void;
    playerOrIa: PlayerOrIa;
    turn: Turns;
}

export const Square = ({
    children,
    index,
    handleUpdateBoard,
    handlePlayerVsIaTurn,
    playerOrIa,
    turn,
}: SquareProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const styles = [
        '0 3px 3px 0',
        '0 3px 3px 3px',
        '0 0 3px 3px',
        '3px 3px 3px 0',
        '3px 3px 3px 3px',
        '3px 0 3px 3px',
        '3px 3px 0 0',
        '3px 3px 0 3px',
        '3px 0 0 3px',
    ];
    return (
        <Box
            alignItems="center"
            border="solid #CBD5E1"
            borderWidth={styles[index]}
            cursor="pointer"
            display="flex"
            fontSize="5xl"
            height={['100px', '150px']}
            justifyContent="center"
            key={index}
            onClick={() => {
                if (playerOrIa === 'player') {
                    handleUpdateBoard(index);
                    setHover(false);
                } else {
                    handlePlayerVsIaTurn(index);
                    setHover(false);
                }
            }}
            onMouseEnter={() => {
                if (children === null && playerOrIa === 'ia' && turn === '❌') {
                    setHover(true);
                } else if (children === null && playerOrIa === 'player') {
                    setHover(true);
                } else {
                    setHover(false);
                }
            }}
            onMouseLeave={() => setHover(false)}
            width={['100px', '150px']}
        >
            {hover ? turn : children}
        </Box>
    );
};
