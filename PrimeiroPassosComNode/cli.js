/* pegando parametros para biblioteca chamando ela node cli.js ./texto/texto1.md */
const caminho = process.argv;
import chalk from 'chalk'

import pegarArquivo from './arquivos/PegandoDadosComRegex.js'

async function processaTexto(caminhoArquivo){
    const resultado = await pegarArquivo(caminhoArquivo)
    console.log(chalk.yellow('lista Links'), resultado)
}

processaTexto(caminho[2])
