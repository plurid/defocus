import {
    DefocusCompilerData,
    DefocusCompilerOptions,
    DefocusCompileResult,
} from '../../data/interfaces';

import {
    resolveCompilerOptions,
} from '../../services/logic';



class DefocusCompiler {
    private source: string;
    private options: DefocusCompilerOptions;

    constructor(
        data: DefocusCompilerData,
    ) {
        const {
            source,
            options,
        } = data;

        this.source = source;
        this.options = resolveCompilerOptions(options);
    }

    compile(): DefocusCompileResult {
        return {
            source: '',
        };
    }
}


export default DefocusCompiler;
