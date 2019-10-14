const path = require('path');

module.exports = {
    //arquivo de entrada da aplicação
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //onde sera 'jogado' o codigo transpilado pelo webpack
    output: {
        //caminho para a pasta
        path: path.resolve(__dirname, 'public'),
        //nome do arquivo gerado
        filename: 'bundle.js'
    },
    devServer: {
        // caminho para o webpack-dev-server encontrar o arquivo transpilado
        contentBase: path.resolve(__dirname,'public'),
    },
    module:{
        // para cada tipo de arquivo, que regras devem ser utilizadas, por exemplo: quem vai lidar com arquivos JS é o babel, imagens e css nao é com o babel
        rules: [
            {
                // expressao regular para aplicar a regra nesse tipo de arquivo
                test: /\.js$/, //essa expressao significa, procure arquivos que terminem com .js
                exclude: /node_modules/, // exclui node_modules, pq nao faz sentido tratar os arquivos de dentro de node_modules
                use: {
                    loader: 'babel-loader' //loader responsavel por fazer o tratamento, $ yarn add babel-loader -D
                }
            },{
                test: /\.css$/, //arquivos que terminam com .css
                use: [
                    { loader: 'style-loader' }, //coloca o css dentro de uma tag 'style' dentro do html
                    { loader: 'css-loader' } //usado para o 'explicar' para o webpack, como funciona importação de imagem/outros arquivos
                ]
            },{
                test: /.*\.(gif|png|jpe?g)$/i, // arquivos que terminam com .gif|png|jpeg/jpg
                use: {
                    loader: 'file-loader' // explica para o webpack a importaçãode imagens
                }
            }
        ]
    }

}