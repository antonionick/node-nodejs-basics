import * as process from 'node:process';

const PREFIX = 'RSS_';

const parseEnv = () => {
    const valueToLog = process.argv
        .slice(2)
        .filter(value => value.startsWith(PREFIX))
        .reduce((acc, value) => acc ? `${acc}; ${value}` : value, '');

    console.log(valueToLog);
};

parseEnv();