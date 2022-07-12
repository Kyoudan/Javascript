
        //true   &&  true  &&    false    = false
        if(2 == 2 && 3>= 1 && 'a' == 'b'){  // false
            document.write('Verdadeiro <br />')

        } else{
            document.write('Falso <br />')
        }


        //-----------------------------------------------

         //true   &&  true  &&    false    = true
        if(2 == 2 || 3>= 1 || 'a' == 'b'){  // true
            document.write('Verdadeiro <br />')

        } else{
            document.write('Falso <br />')
        }


        //-----------------------------------------------
        //   false   = true
        if(!(4 == 2)){  //true     o comando "!" inverte o resultado final, sendo assim "4 == 2" é false, mas com o operador "!" é true 
            document.write('Verdadeiro <br />')

        } else{
            document.write('Falso <br />')
        }

        //-----------------------------------------------

        document.write('<hr />')
        document.write('---Pratica--- <br />')

        //-----------------------------------------------

        var nota = prompt('Digite a nota do aluno')
        var media = 7
        var faltas_maximas = 10
        var faltas = prompt('Digite o número de faltas')

        if(nota >= media && faltas <= faltas_maximas){
            document.write('aprovado')
        } else{
            document.write('reprovado')
        }
