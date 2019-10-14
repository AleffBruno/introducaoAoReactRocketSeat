module.exports = {
    presets: [
        '@babel/preset-env', // responsavel por alterar as funcionalidades do JS que o navegador ainda nao entende, ex: import,arrow functions,etc...
        '@babel/preset-react', // responsavel por alterar as funcionalidades do REACT que o navegador ainda nao entende, ex: JSX
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}