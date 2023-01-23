export const getAmountOfWins = (amountOfWins: string[]) => {
    const totalOfWinsFromX = amountOfWins.filter((x) => x === '❌').length;

    const totalOfWinsFromO = amountOfWins.filter((o) => o === '⚪').length;

    const totalOfDraws = amountOfWins.filter((draw) => draw === 'draw').length;

    return { totalOfWinsFromX, totalOfWinsFromO, totalOfDraws };
};
