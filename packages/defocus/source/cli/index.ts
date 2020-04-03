import program, {
    CommanderStatic,
} from 'commander';

import {
    compileCommand,
} from '../commands';

import {
    CompileData,
} from '../data/interfaces';



const main = async (
    program: CommanderStatic,
) => {
    program
        .name('datasign')
        .usage('<files>')
        .version('0.1.0', '-v, --version')
        .action(async (_, files) => {
            if (!files) {
                program.outputHelp();
                return;
            }
        });

    program
        .option(
            '-t, --target <type>',
            'description',
            'default',
        );

    program.parseAsync(process.argv);
}


const cli = () => {
    main(program);
}


export default cli;
