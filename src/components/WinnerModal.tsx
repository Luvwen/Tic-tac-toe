import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { Turns } from './Board';

interface WinnerModalProps {
    winner: boolean | null;
    turn: Turns;
    handleNewGame: (winner: boolean | null, turn: Turns) => void;
    handleResetGame: () => void;
}
export const WinnerModal = ({
    winner,
    turn,
    handleNewGame,
    handleResetGame,
}: WinnerModalProps) => {
    if (winner === null) return null;
    return (
        <Box
            alignItems="center"
            bg="primary"
            borderRadius="24px"
            display="flex"
            flexDirection={['column', 'row']}
            height={['25vh', '20vh']}
            justifyContent={['space-evenly', 'center']}
            position="absolute"
            top={['35%']}
            width={['90vw', '80vw', '30vw']}
            zIndex="15"
        >
            {/* eslint-disable-next-line */}
            {!winner ? (
                <Heading color="light" pb={['0', '55px']}>
                    Draw!
                </Heading>
            ) : (
                <Heading color="light" pb={['0', '55px']}>
                    Player{' '}
                    <Text
                        as="span"
                        color={turn === '❌' ? '#DF367C' : '#0EA5E9'}
                    >
                        {turn === '❌' ? '⚪' : '❌'}
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
                        bg: 'hover',
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
                        bg: 'hover',
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
    );
};
