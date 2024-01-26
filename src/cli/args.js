import * as process from 'node:process';

const PROP_NAME_PREFIX = '--';

const parseArgs = () => {
    const valueToLog = process.argv
        .slice(2)
        .reduce((acc, value) => {
            if (value.startsWith(PROP_NAME_PREFIX)) {
                const valueWithoutPrefix = value.slice(PROP_NAME_PREFIX.length);
                const templateCommonPart = `${valueWithoutPrefix} is`;

                return acc
                    ? `${acc}, ${templateCommonPart}`
                    : templateCommonPart;
            }

            return `${acc} ${value}`;
        }, '');


    console.log(valueToLog);
};

parseArgs();