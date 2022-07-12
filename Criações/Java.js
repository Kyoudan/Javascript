
        function num1(primeironumero){
            var numero = document.getElementById('num1').value
            var numero = parseInt(numero)
            primeironumero(numero)

        }

        function num2(segundoonumero){
            var numero = document.getElementById('num2').value
            var numero = parseInt(numero)
            segundoonumero(numero)

        }

        function foco(resultado){
            var operacao = document.getElementById('operacao').value 
            if(operacao == 'Soma' || 'soma'){
                document.write()
            } else if (operacao == 'Subtração' || 'subtração'){
                var operation = soma
            } else if (operacao == 'Multiplicação' || 'multiplicação'){
                var operation = soma
            } else if (operacao == 'Divisão' || 'divisão'){
                var operation = soma
            } else if (operacao == 'Potencia' || 'potencia'){
                var operation = soma
            
            }

            resultado(soma)
        }

        resultado(primerionumero + segundoonumero)

        var final = (primeironumero + segundonumero)
        console.log(final)

        function clique(primeironumero, segundonumero, resultado){
            document.write(resultado)
        }
        

