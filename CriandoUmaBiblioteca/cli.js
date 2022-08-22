import chalk from 'chalk'
import pegarArquivo from './arquivos/PegandoDadosComRegex.js'
import validaURLs from './arquivos/validando-http.js';


/* pegando parametros para biblioteca chamando ela node cli.js ./texto/texto1.md */
// npm run rodaScript

const caminho = process.argv;


async function processaTexto(caminhoArquivo){
    const resultado = await pegarArquivo(caminhoArquivo)

   if(caminho[3] === 'validar'){
        console.log(await validaURLs(resultado))
    }else{
        console.log(chalk.yellow('lista Links'), resultado)
    }
}




processaTexto(caminho[2])
