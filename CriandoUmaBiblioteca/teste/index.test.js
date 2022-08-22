import pegarArquivo from '../arquivos/PegandoDadosComRegex'

const arrayResult = [
    {
        nome: 'FileList',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegarArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegarArquivo('teste/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegarArquivo('teste/arquivos/texto1-sem-link.md')
        expect(resultado).toBe('não há links')
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegarArquivo('passando/parametro/errado.md')).rejects.toThrow('Ouve um erro ao acessar o arquivo!')
    })
})
