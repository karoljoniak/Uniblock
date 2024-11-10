import Fs from 'fs';
import Path from 'path';
import Sass from 'node-sass';
import { log } from 'console';

const res = Sass.renderSync({
    data: Fs.readFileSync(
        Path.resolve('src/global.scss')
    ).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')]
})

Fs.writeFileSync(
    Path.resolve('src/lib/global.css'),
    res.css.toString()
)