import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
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
                height="20vh"
                justifyContent="center"
                position="absolute"
                top="25%"
                width="30vw"
                zIndex="15"
            >
                {/* eslint-disable-next-line */}
                {!winner ? (
                    <Heading>Draw!</Heading>
                ) : (
                    <Heading>
                        Player{' '}
                        <Text
                            as="span"
                            color={turn === 'x' ? '#DF367C' : '#0EA5E9'}
                        >
                            {turn === 'o' ? 'X' : 'O'}
                        </Text>{' '}
                        wins!
                    </Heading>
                )}
            </Box>
            <HStack position="absolute" spacing="10" top="50%" zIndex="15">
                <Button
                    _hover={{
                        bg: '#DF367C',
                    }}
                    bg="#0EA5E9"
                    fontSize="2xl"
                    fontWeight="bold"
                    onClick={() => handleNewGame(winner, turn)}
                    p="6px 24px"
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
                    fontSize="2xl"
                    fontWeight="bold"
                    onClick={() => handleResetGame()}
                    p="6px 24px"
                    size="lg"
                    variant="ghost"
                >
                    Reset game
                </Button>
            </HStack>
        </>
    );
};
