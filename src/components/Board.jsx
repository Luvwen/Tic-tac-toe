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
            } else if (getWinner === '⚪') {
                newAmountOfWins.push('⚪');
                setAmountOfWins(newAmountOfWins);
            }
        } else {
            const newAmountOfDraws = [...amountOfWins];
            newAmountOfDraws.push('draw');
            setAmountOfWins(newAmountOfDraws);
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

    const totalOfDraws = amountOfWins.filter((draw) => draw === 'draw').length;

    return (
        <Box
            bg={winner !== null ? '#304E4F' : '#1FB2A7'}
            height="100vh"
            overflow="hidden"
            width="100vw"
        >
            <Stack
                alignItems="center"
                color="white"
                height="100vh"
                justifyContent="center"
                spacing={['5', '10']}
            >
                <Stack
                    color="white"
                    direction="row"
                    fontSize={['3xl', '5xl']}
                    fontWeight="bold"
                    pb="25px"
                >
                    <Text color="#DF367C">TIC</Text>
                    <Text color="#FF506E">-</Text>
                    <Text color="#642CA9">TAC</Text>
                    <Text color="#FF506E">-</Text>
                    <Text color="#F29559">TOE</Text>
                </Stack>
                <Stack alignItems="center" direction={['column']}>
                    <Stack direction={['row']} spacing={['7', '10']}>
                        <Heading fontSize={['2xl', '3xl']} mb={'0'}>
                            Player ❌: {totalOfWinsFromX}
                        </Heading>
                        <Heading fontSize={['2xl', '3xl']} mb={'0'}>
                            Player ⚪: {totalOfWinsFromO}
                        </Heading>
                    </Stack>
                    <Heading fontSize={['2xl', '3xl']} pb={['30px', '0']}>
                        Draws 🤷‍♂️: {totalOfDraws}
                    </Heading>
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
                        bg={turn === '❌' ? '#0EA5E9' : '#DF367C'}
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
