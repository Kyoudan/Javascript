

        function ola (nome){
            console.log('Olá' + nome)
        }
        function usuario(callback){
            var usuario = 'Gustavo'
            callback(usuario)
        }
        usuario(ola)

