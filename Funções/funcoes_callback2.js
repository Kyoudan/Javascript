
        function exibirArtigo (id, callbacksucesso, callbackerro){
            if(true){
                callbacksucesso('Funções de callback em JS', 'Funções de callback são muito...')
        }   else{
                callbackerro('erro ao recuperar dados')
        }
        }
        // crianção das funções através do método wrapper

        //no callbackSucesso o titulo como parametro vai receber o 'Funções de callback em JS' e a descrição como parametro vai receber 'Funções de callback são muito...'
        var callbacksucesso = function(titulo, descricao){
            document.write('<h1>' + titulo + '</h1>')
            document.write('<hr />')
            document.write('<p>' + descricao + '</p>')
        }

        // o erro como parametro vai receber a frase 'erro ao recuperar dados'
            var callbackerro = function(erro){
                document.write('<p><b>Erro:</b>' + erro + '</p>')
            }

        // para exibir o resultado é chamada a função exibirArtigo (as funções callback sucesso e callbackerro sem os parenteses no final por serer WRAPPER)
        
        // As funções poderiam ser criadas nos parametros porém a técnica do wrapper é a mais recomendada
        
        exibirArtigo(1, callbacksucesso, callbackerro)
        
        
