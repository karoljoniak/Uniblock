import Fs from 'fs';
import Path from 'path';
import Sass from 'node-sass';

const getComponents = () => {
    let allComponents = []

    const types = ['atoms', 'molecules', 'organisms']

    types.forEach((type) => {
        const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
            input: `src/${type}/${file}`,
            output: `lib/${file.slice(0, -4) + 'css'}`
        }))
        
        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })

    return allComponents;
}


const compile = (path, filename) => {
    const result = Sass.renderSync({
        data: Fs.readFileSync(
            Path.resolve(path)
        ).toString(),
        outputStyle: 'expanded',
        outFile: 'global.css',
        includePaths: [Path.resolve('src')]
    });

    Fs.writeFileSync(
        Path.resolve(filename),
        result.css.toString()
    )
}

compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
    compile(component.input, component.output)
})