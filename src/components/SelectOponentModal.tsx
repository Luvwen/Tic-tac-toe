import { Box, Button, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { PlayerOrIa } from '../types/types';

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
            height={openInstructionsModal ? ['80vh', '30vh'] : ['25vh', '20vh']}
            justifyContent={['space-evenly', 'space-evenly']}
            pl="15px"
            position="absolute"
            top={openInstructionsModal ? ['12%', '35%'] : ['35%']}
            width={openInstructionsModal ? ['90vw', '55vw'] : ['80vw', '30vw']}
            zIndex="15"
        >
            {openInstructionsModal && (
                <Stack>
                    <UnorderedList pr="15px" spacing="2">
                        <ListItem fontSize="xl" fontWeight="bold">
                            Players must take turns, making only 1 mark with
                            each turn.
                        </ListItem>
                        <ListItem fontSize="xl" fontWeight="bold">
                            Marks can only be placed in empty squares, and once
                            it is placed, it is permanent.
                        </ListItem>
                        <ListItem fontSize="xl" fontWeight="bold">
                            The winner is the first player to get 3 of their
                            marks in a straight line (the line can be positioned
                            diagonally, vertically, or horizontally).
                        </ListItem>
                        <ListItem fontSize="xl" fontWeight="bold">
                            If neither player has a straight line of 3 marks, it
                            is considered a tie.
                        </ListItem>
                    </UnorderedList>
                </Stack>
            )}
            <Stack direction={['row']} spacing="7">
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
