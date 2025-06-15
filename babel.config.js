export default {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-typescript', { jsxPragma: 'React' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
        // 仅在测试环境转换 ESM 为 CommonJS
        process.env.NODE_ENV === 'test' && '@babel/plugin-transform-modules-commonjs'
    ].filter(Boolean),
};