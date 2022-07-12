
        function calcularAreaTerreno ( largura, comprimento ){
            var area = largura * comprimento
            return area

        }

        var largura = prompt('digite a largura')
        var comprimento = prompt('digite o comprimento')

        var area = calcularAreaTerreno(largura, comprimento)
        
        document.write(area)
