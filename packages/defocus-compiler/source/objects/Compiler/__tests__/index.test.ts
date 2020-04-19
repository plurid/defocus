import Compiler from '../';



describe('Compiler', () => {
    it('works', () => {
        const source =
`
from all
    defocus some
`;
        const defocusCompiler = new Compiler({
            source,
        });
        const result = defocusCompiler.compile();
        console.log(result);
    });
});
