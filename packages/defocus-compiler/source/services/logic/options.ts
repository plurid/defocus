import {
    DefocusCompilerOptions,
} from '../../data/interfaces';

import {
    defaultDefocusCompilerOptions,
} from '../../data/constants';



const resolveCompilerOptions = (
    options: Partial<DefocusCompilerOptions> | undefined
) => {
    if (!options) {
        return defaultDefocusCompilerOptions;
    }

    const compilerOptions: DefocusCompilerOptions = {
    };
    return compilerOptions;
}


export default resolveCompilerOptions;
