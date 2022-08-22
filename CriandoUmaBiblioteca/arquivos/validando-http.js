import fetch from 'node-fetch'

function tratarErro(erro){
    throw new Error(erro, 'ouve um erro ao acessar os links.')
}

function montaRetornoStatus(objetoRequisicao, status, urlEhValida){
    return {
        ...objetoRequisicao, // pego todos os dados do objeto anterior e adiciono novos.
        Status: status,
        UrlValida: urlEhValida
    }
}

async function checaStatus(arrayUrls){
    try{
        const arrayStatus = await Promise.all(
            arrayUrls.map(async requisicao => {
                const resultado = await fetch(requisicao.url)
                return montaRetornoStatus(requisicao, `${resultado.status} - ${resultado.statusText}`, resultado.ok);
            })
        );
        
        return arrayStatus;
    }
    catch(erro){
        tratarErro(erro);
    }

}

const validaURLs = async (array) => {
    const status = await checaStatus(array)
    
    return status
}

export default validaURLs