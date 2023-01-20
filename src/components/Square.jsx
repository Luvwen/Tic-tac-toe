import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

export const Square = ({ children, index, handleUpdateBoard, turn }) => {
    const [hover, setHover] = useState(false);
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
            fontSize="5xl"
            height={['100px', '150px']}
            justifyContent="center"
            key={index}
            onClick={() => {
                handleUpdateBoard(index);
                setHover(false);
            }}
            onMouseEnter={() => {
                if (children === null) {
                    setHover(true);
                } else {
                    setHover(false);
                }
            }}
            onMouseLeave={() => setHover(false)}
            width={['100px', '150px']}
        >
            {hover ? turn : children}
        </Box>
    );
};
