import { Box, Button, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';

export type PlayerOrIa = 'player' | 'ia';

interface SelectOponentModalProps {
    setOpenSelectPlayerModal: (boolean: boolean) => void;
    setPlayerOrIa: (playerOrIa: PlayerOrIa) => void;
}

export const SelectOponentModal = ({
    setOpenSelectPlayerModal,
    setPlayerOrIa,
}: SelectOponentModalProps) => {
    const [openInstructionsModal, setOpenInstructionsModal] = useState(false);
    return (
        <Box
            alignItems="center"
            bg="primary"
            borderRadius="24px"
            display="flex"
            flexDirection={['column', 'column']}
            height={
                openInstructionsModal
                    ? ['50vh', '70vh', '55vh', '50vh', '35vh']
                    : ['25vh', '25vh', '23vh', '20vh']
            }
            justifyContent={['space-evenly', 'space-evenly']}
            pl={['0', '0', '0', '0', '15px']}
            position="absolute"
            top={
                openInstructionsModal
                    ? ['22%', '15%', '20%', '20%', '35%']
                    : ['35%']
            }
            width={
                openInstructionsModal
                    ? ['90vw', '75vw', '65vw']
                    : ['85vw', '75vw', '50vw', '40vw', '35vw']
            }
            zIndex="15"
        >
            {openInstructionsModal && (
                <Stack>
                    <UnorderedList pl="15px" spacing="2">
                        <ListItem
                            fontSize={['md', 'xl', 'xl']}
                            fontWeight="bold"
                        >
                            Players must take turns, making only 1 mark with
                            each turn.
                        </ListItem>
                        <ListItem
                            fontSize={['md', 'xl', 'xl']}
                            fontWeight="bold"
                        >
                            Marks can only be placed in empty squares, and once
                            it is placed, it is permanent.
                        </ListItem>
                        <ListItem
                            fontSize={['md', 'xl', 'xl']}
                            fontWeight="bold"
                        >
                            The winner is the first player to get 3 of their
                            marks in a straight line (the line can be positioned
                            diagonally, vertically, or horizontally).
                        </ListItem>
                        <ListItem
                            fontSize={['md', 'xl', 'xl']}
                            fontWeight="bold"
                        >
                            If neither player has a straight line of 3 marks, it
                            is considered a tie.
                        </ListItem>
                    </UnorderedList>
                </Stack>
            )}
            <Stack
                direction={['row']}
                pb={['15px', '10px', '0', '0', '0']}
                spacing="7"
            >
                <Button
                    _hover={{
                        bg: 'hover',
                    }}
                    bg="#0EA5E9"
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    onClick={() => setOpenSelectPlayerModal(false)}
                    p={['10px', '6px 24px']}
                    size="lg"
                    variant="ghost"
                >
                    Versus P2
                </Button>
                <Button
                    _hover={{
                        bg: 'hover',
                    }}
                    bg="#0EA5E9"
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    onClick={() => {
                        setOpenSelectPlayerModal(false);
                        setPlayerOrIa('ia');
                    }}
                    p={['10px', '6px 24px']}
                    size="lg"
                    variant="ghost"
                >
                    Versus IA
                </Button>
            </Stack>
            {!openInstructionsModal && (
                <Button
                    _hover={{
                        bg: 'hover',
                    }}
                    bg="#0EA5E9"
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    onClick={() => {
                        setOpenInstructionsModal(true);
                    }}
                    p={['10px', '6px 24px']}
                    size="lg"
                    variant="ghost"
                >
                    Instructions
                </Button>
            )}
        </Box>
    );
};
