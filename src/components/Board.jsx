import React, { useState } from 'react';
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { TURNS, WINNING_COMBINATIONS } from '../constants/constants';
import { Square } from './Square';
import { WinnerModal } from './WinnerModal';

export const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.x);
    const [winner, setWinner] = useState(null);
    const [amountOfWins, setAmountOfWins] = useState([]);

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.x);
        setWinner(null);
        setAmountOfWins([]);
    };

    const handleUpdateBoard = (index) => {
        if (board[index] !== null || winner === true) return;

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const newTurn = turn === '❌' ? '⚪' : '❌';
        setTurn(newTurn);

        const newWinner = handleWinner(newBoard);
        const draw = newBoard.every((square) => square !== null);

        if (newWinner) {
            // Winner
            setWinner(true);
        } else if (draw && !newWinner) {
            // Draw
            setWinner(false);
        }
    };

    const handleWinner = (newBoard) => {
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

    const handleNewGame = (winner, turn) => {
        if (winner) {
            const getWinner = turn === '❌' ? '⚪' : '❌';
            const newAmountOfWins = [...amountOfWins];
            if (getWinner === '❌') {
                newAmountOfWins.push('❌');
                setAmountOfWins([...newAmountOfWins]);
            } else {
                newAmountOfWins.push('⚪');
                setAmountOfWins(newAmountOfWins);
            }
            setBoard(Array(9).fill(null));
            setTurn(TURNS.x);
            setWinner(null);
        }
        setBoard(Array(9).fill(null));
        setTurn(TURNS.x);
        setWinner(null);
    };
    const totalOfWinsFromX = amountOfWins.filter((x) => x === '❌').length;

    const totalOfWinsFromO = amountOfWins.filter((o) => o === '⚪').length;

    return (
        <Box
            bg={winner !== null ? '#304E4F' : '#1FB2A7'}
            height="100vh"
            width="100vw"
        >
            <Stack
                alignItems="center"
                color="white"
                height="100vh"
                justifyContent="center"
                spacing="10"
            >
                <Heading color="white" fontSize="5xl" fontWeight="bold">
                    TIC TAC TOE
                </Heading>
                <Stack>
                    <Heading>Player ❌: {totalOfWinsFromX}</Heading>
                    <Heading>Player ⚪: {totalOfWinsFromO}</Heading>
                </Stack>
                <Grid gridTemplateColumns="repeat(3, 1fr)">
                    {board.map((squareValue, index) => {
                        return (
                            <Square
                                handleUpdateBoard={handleUpdateBoard}
                                index={index}
                                key={index}
                                turn={turn}
                            >
                                {squareValue}
                            </Square>
                        );
                    })}
                </Grid>
                <Heading>
                    Turn :{' '}
                    <Text
                        as="span"
                        bg={turn === '❌' ? '#DF367C' : '#0EA5E9'}
                        borderRadius="4px"
                        p="4px 24px 8px"
                    >
                        {turn}
                    </Text>
                </Heading>
                {/* <Button
                    _hover={{ background: '#DF367C' }}
                    bg="#0EA5E9"
                    height="50px"
                    onClick={() => handleResetGame()}
                    width="150px"
                >
                    Reset
                </Button> */}
                <WinnerModal
                    handleNewGame={handleNewGame}
                    handleResetGame={handleResetGame}
                    turn={turn}
                    winner={winner}
                />
            </Stack>
        </Box>
    );
};
