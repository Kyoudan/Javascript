
        var lista = Array()
        lista['Frutas'] = ['Banana', 'Maça', 'Pera']
        lista['Pessoas'] = ['Gustavo', 'Nyckolas', 'Keissy']

        lista['Frutas'].push('Uva') // push coloca no final
        lista['Frutas'].unshift('Manga') // unshift coloca no começo

        lista['Pessoas'].pop() // pop tira do começo
        lista['Pessoas'].shift() // shift tira do final

        console.log(lista)
