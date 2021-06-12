import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'
import path from 'path'
import { terser } from 'rollup-plugin-terser'

import packageJSON from './package.json'

const externals = Object.keys({
    ...(packageJSON.dependencies || {}),
    ...(packageJSON.peerDependencies || {}),
})

export default {
    input: './src/index.ts',
    output: [
        {
            file: packageJSON.main,
            format: 'cjs',
            globals: externals,
        },
        {
            file: packageJSON.module,
            format: 'es', // the preferred format
            globals: externals,
        },
    ],
    external: externals,
    plugins: [
        image(),
        json(),
        typescript({
            typescript: require('typescript'),
            tsconfigOverride: {
                exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.spec.tsx'],
                include: ['src/**/*.(js|jsx|ts|tsx)', 'css.modules.d.ts'],
            },
        }),
        postcss({
            modules: true,
            minimize: true,
            extract: path.resolve('dist/styles.css'),
            use: ['sass'],
            plugins: [
                require('postcss-preset-env')({
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                }),
            ],
        }),
        terser(), // minifies generated bundles
    ],
}
