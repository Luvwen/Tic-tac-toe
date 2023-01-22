import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { PLAYER_OR_IA } from '../constants/constants';

export const SelectOponentModal = ({
    setOpenSelectPlayerModal,
    setPlayerOrIa,
}) => {
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
            width={['80vw', '30vw']}
            zIndex="15"
        >
            <Stack direction={['column', 'row', 'row']} spacing="5">
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
                        setPlayerOrIa(PLAYER_OR_IA.ia);
                    }}
                    p={['10px', '6px 24px']}
                    size="lg"
                    variant="ghost"
                >
                    Versus IA
                </Button>
            </Stack>
        </Box>
    );
};
