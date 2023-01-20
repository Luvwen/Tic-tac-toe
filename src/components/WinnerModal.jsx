import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const WinnerModal = ({
    winner,
    turn,
    handleNewGame,
    handleResetGame,
}) => {
    if (winner === null) return;
    return (
        <>
            <Box
                alignItems="center"
                bg="#0D9488"
                borderRadius="24px"
                display="flex"
                flexDirection={['column', 'row']}
                height={['25vh', '20vh']}
                justifyContent={['space-evenly', 'center']}
                position="absolute"
                top={['35%']}
                width={['80vw', '30vw']}
                zIndex="15"
            >
                {/* eslint-disable-next-line */}
                {!winner ? (
                    <Heading pb={['0', '55px']}>Draw!</Heading>
                ) : (
                    <Heading pb={['0', '55px']}>
                        Player{' '}
                        <Text
                            as="span"
                            color={turn === '❌' ? '#DF367C' : '#0EA5E9'}
                        >
                            {turn === '⚪' ? '❌' : '⚪'}
                        </Text>{' '}
                        wins!
                    </Heading>
                )}
                <Stack
                    direction={['row']}
                    position={['initial', 'absolute']}
                    spacing={['5', '10']}
                    top={['65%', '60%']}
                    zIndex="15"
                >
                    <Button
                        _hover={{
                            bg: '#DF367C',
                        }}
                        bg="#0EA5E9"
                        fontSize={['xl', '2xl']}
                        fontWeight="bold"
                        onClick={() => handleNewGame(winner, turn)}
                        p={['10px', '6px 24px']}
                        size="lg"
                        variant="ghost"
                    >
                        New game
                    </Button>
                    <Button
                        _hover={{
                            bg: '#DF367C',
                        }}
                        bg="#0EA5E9"
                        fontSize={['xl', '2xl']}
                        fontWeight="bold"
                        onClick={() => handleResetGame()}
                        p={['10px', '6px 24px']}
                        size="lg"
                        variant="ghost"
                    >
                        Reset game
                    </Button>
                </Stack>
            </Box>
        </>
    );
};
