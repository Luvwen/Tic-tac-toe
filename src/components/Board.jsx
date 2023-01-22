import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { PLAYER_OR_IA, TURNS } from '../constants/constants';
import { Square } from './Square';
import { WinnerModal } from './WinnerModal';
import { SelectOponentModal } from './SelectOponentModal';
import { getWinner } from '../utils/getWinner';
import { getAmountOfWins } from '../utils/getAmountOfWins';

export const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.x);
    const [winner, setWinner] = useState(null);
    const [amountOfWins, setAmountOfWins] = useState([]);
    const [openSelectPlayerModal, setOpenSelectPlayerModal] = useState(true);
    const [playerOrIa, setPlayerOrIa] = useState(PLAYER_OR_IA.player);

    const handleResetGame = () => {
        resetBoardTurnAndWinner();
        setAmountOfWins([]);
        setPlayerOrIa(PLAYER_OR_IA.player);
        setOpenSelectPlayerModal(true);
    };

    const resetBoardTurnAndWinner = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.x);
        setWinner(null);
    };

    const handleUpdateBoard = (index) => {
        if (board[index] !== null || winner === true || playerOrIa === 'ia') {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const newTurn = turn === '❌' ? '⚪' : '❌';
        setTurn(newTurn);

        const newWinner = getWinner(newBoard);
        const draw = newBoard.every((square) => square !== null);

        if (newWinner) {
            // Winner
            setWinner(true);
        } else if (draw && !newWinner) {
            // Draw
            setWinner(false);
        }
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
            resetBoardTurnAndWinner();
        }
        resetBoardTurnAndWinner();
    };

    const handlePlayerVsIaTurn = (index) => {
        const isPlayerTurn =
            board.filter((square) => square !== null).length % 2 === 0;
        if (isPlayerTurn && board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = '❌';
            setBoard(newBoard);
            const newTurn = '⚪';
            setTurn(newTurn);
        }
        const newWinner = getWinner(board);
        const draw = board.every((square) => square !== null);
        if (newWinner) {
            // Winner
            setWinner(true);
        } else if (draw && !newWinner) {
            // Draw
            setWinner(false);
        }
    };

    useEffect(() => {
        if (winner !== null && turn !== '⚪') return;

        const newWinner = getWinner(board);
        const draw = board.every((square) => square !== null);

        if (newWinner) {
            // Winner
            setWinner(true);
        } else if (draw && !newWinner) {
            // Draw
            setWinner(false);
        } else {
            setTimeout(() => {
                const isIaTurn =
                    board.filter((square) => square !== null).length % 2 === 1;

                if (isIaTurn && playerOrIa === 'ia' && winner === null) {
                    const putComputerAt = (index) => {
                        const newSquares = [...board];
                        newSquares[index] = '⚪';
                        setBoard([...newSquares]);
                    };
                    const emptySquares = board
                        .map((square, index) =>
                            square === null ? index : null
                        )
                        .filter((value) => value !== null);

                    const randomIndex =
                        emptySquares[
                            Math.ceil(Math.random() * emptySquares.length)
                        ];

                    putComputerAt(randomIndex);
                    const newTurn = '❌';
                    setTurn(newTurn);
                }
            }, 100);
        }
    }, [board]);

    const { totalOfWinsFromX, totalOfWinsFromO, totalOfDraws } =
        getAmountOfWins(amountOfWins);

    return (
        <Box
            bg={winner !== null ? 'background' : 'background'}
            height="100vh"
            overflowY="hidden"
            width="100vw"
        >
            <Stack
                alignItems="center"
                color="white"
                height="100vh"
                justifyContent="center"
                spacing={['5', '10', '2', '10']}
            >
                <Stack
                    color="white"
                    direction="row"
                    fontSize={['3xl', '5xl']}
                    fontWeight="bold"
                    pb={['25px', '25px', '0', '25px']}
                >
                    <Text color="secondary">TIC</Text>
                    <Text color="white">-</Text>
                    <Text color="secondary">TAC</Text>
                    <Text color="white">-</Text>
                    <Text color="secondary">TOE</Text>
                </Stack>
                <Stack alignItems="center" direction={['column']}>
                    <Stack direction={['row']} spacing={['3', '7', '10']}>
                        <Heading
                            color="primary"
                            fontSize={['2xl', '3xl']}
                            mb={'0'}
                        >
                            Player ❌: {totalOfWinsFromX}
                        </Heading>
                        <Heading
                            color="primary"
                            fontSize={['2xl', '3xl']}
                            mb={'0'}
                        >
                            {playerOrIa === 'player'
                                ? 'Player ⚪'
                                : 'Computer ⚪'}
                            : {totalOfWinsFromO}
                        </Heading>
                    </Stack>
                    <Heading
                        color="primary"
                        fontSize={['2xl', '3xl']}
                        pb={['30px', '30px', '10px', '0']}
                    >
                        Draws 🤷‍♂️: {totalOfDraws}
                    </Heading>
                </Stack>
                <Grid gridTemplateColumns="repeat(3, 1fr)">
                    {board.map((squareValue, index) => {
                        return (
                            <Square
                                handlePlayerVsIaTurn={handlePlayerVsIaTurn}
                                handleUpdateBoard={handleUpdateBoard}
                                index={index}
                                key={index}
                                playerOrIa={playerOrIa}
                                turn={turn}
                            >
                                {squareValue}
                            </Square>
                        );
                    })}
                </Grid>
                <Heading
                    pb={['0', '0', '20px', '0']}
                    pt={['0', '0', '15px', '0']}
                >
                    Turn :{' '}
                    <Text
                        as="span"
                        bg="hover"
                        borderRadius="4px"
                        p="4px 24px 8px"
                    >
                        {turn}
                    </Text>
                </Heading>
                <WinnerModal
                    handleNewGame={handleNewGame}
                    handleResetGame={handleResetGame}
                    turn={turn}
                    winner={winner}
                />
                {openSelectPlayerModal && (
                    <SelectOponentModal
                        setOpenSelectPlayerModal={setOpenSelectPlayerModal}
                        setPlayerOrIa={setPlayerOrIa}
                    />
                )}
            </Stack>
        </Box>
    );
};
