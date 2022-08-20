import file, { fstat } from 'fs'
import chalk from 'chalk'

const dadosCapturadosArquivos = (nome, url) => {
    return {
        nome,
        url,
    }
}

const tratarErroArquivo = (erro) => {
    throw new Error(chalk.red(erro.code, 'Ouve um erro ao acessar o arquivo!'))
}

function extraiLink (texto) {
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;

    const arrayDados = [];

    let temp;

    while((temp =regex.exec(texto)) !== null){
        arrayDados.push(dadosCapturadosArquivos(temp[1], temp[2]))
    }

    return arrayDados.length === 0 ? 'não há links' : arrayDados;
}

 const pegarArquivo = async (caminho) => {
    var encoding = 'utf-8'

    try{
        const texto = await file.promises.readFile(caminho, encoding)

        return extraiLink(texto)
    }
    catch(erro){
        tratarErroArquivo(erro)
    }
}

export default pegarArquivo;


//pegarArquivo('../texto/texto1.md')
