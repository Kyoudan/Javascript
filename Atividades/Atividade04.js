
        var num1 = prompt('digite um numero')
        var operacao = prompt('Digite a operação desejada')
        var num2 = prompt('digite outro numero')
        var resul = null
        function calculo(num1, num2, operacao){
            
            var num1 = parseFloat(num1)
            var num2 = parseFloat(num2)
            
        if(operacao == 'soma'){
            var resul = (num1 + num2)
        } else if(operacao == 'subtração'){
            var resul = (num1 - num2)
        } else if(operacao == 'multiplicação'){
            var resul = (num1 * num2)
        } else if(operacao == 'divisão'){
            var resul = (num1 / num2)
        } else if(operacao == 'potencia'){
            var resul = (num1 ** num2)
        } else{
            document.write('Erro Inesperado <br />')
            document.write('O site só tem as seguintes operações disponivel: <br /> <br />')
            document.write('<li>Soma</li><br /> ')
            document.write('<li>Subtração</li><br /> ')
            document.write('<li>Multiplicação</li><br /> ')
            document.write('<li>Divisão</li><br /> ')
            document.write('<li>Potencia</li><br /> ')
            document.write('<hr />')
        }
            return resul
        }

        document.write('O resultado é: ' + calculo(num1, num2, operacao))
