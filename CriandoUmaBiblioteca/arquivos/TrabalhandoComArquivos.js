import file, { fstat } from 'fs'
import chalk from 'chalk'

const tratarErroArquivo = (erro) => {
    throw new Error(chalk.red(erro.code, 'Ouve um erro ao acessar o arquivo!'))
}

/* utilizando assinc await*/ 

const pegarArquivo = async (caminho) => {
    var encoding = 'utf-8'

    try{
        const texto = await file.promises.readFile(caminho, encoding)

        console.log(chalk.bgBlue(texto))
    }
    catch(erro){
        tratarErroArquivo(erro)
    }
}

/*
const pegarArquivo = (caminho) => {
    var encoding = 'utf-8'
    file.promises
    .readFile(caminho, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => tratarErroArquivo(erro))
}
*/

/*
const pegarArquivo = (caminho) => {
    var encoding = 'utf-8'

    file.readFile(caminho, encoding , (erro, texto) => {
        if(erro){
            tratarErroArquivo(erro)
        }
        console.log(chalk.green(texto))
    })
}
*/

pegarArquivo('../texto/texto1.md')

const PegaURlTexto = (texto) => {



}


