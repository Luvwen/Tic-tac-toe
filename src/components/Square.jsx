import { Box } from '@chakra-ui/react';
import React from 'react';

export const Square = ({ children, index, handleUpdateBoard }) => {
    const styles = [
        '0 3px 3px 0',
        '0 3px 3px 3px',
        '0 0 3px 3px',
        '3px 3px 3px 0',
        '3px 3px 3px 3px',
        '3px 0 3px 3px',
        '3px 3px 0 0',
        '3px 3px 0 3px',
        '3px 0 0 3px',
    ];
    return (
        <Box
            alignItems="center"
            border="solid #F29559"
            borderWidth={styles[index]}
            cursor="pointer"
            display="flex"
            fontSize="6xl"
            height="150px"
            justifyContent="center"
            key={index}
            onClick={() => handleUpdateBoard(index)}
            width="150px"
        >
            {children}
        </Box>
    );
};
