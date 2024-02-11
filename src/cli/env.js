import * as process from 'node:process';

const PREFIX = 'RSS_';

const parseEnv = () => {
    const valueToLog = Object.keys(process.env)
        .filter(key => key.startsWith(PREFIX))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');

    console.log(valueToLog);
};

parseEnv();