import React, { useState } from 'react';
import { Box, Grid, Square } from '@chakra-ui/react';
import { boardSquares } from '../constants/constants';

export const Board = () => {
    const [board, setBoard] = useState(boardSquares);
    return (
        <Box bg="#20232A" height="100vh" width="100vw">
            <Grid
                gridColumn="repeat(3, 1fr)"
                height="50vh"
                placeItems="center"
                width="50vw"
            >
                <Square></Square>
            </Grid>
        </Box>
    );
};
