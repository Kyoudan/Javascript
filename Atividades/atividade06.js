
        var objetos = ['cadeira', 'impressora', 'garfo']

        function adicionar(){ 
            var resul = document.getElementById('adicionando').value
            if(resul == ''){
                alert('informe um valor válido')
            } else if(objetos.indexOf(resul) != -1){
                alert('Esse objeto já existe')
            } else {
              objetos.push(resul)
              document.getElementById('adicionando').value = ''
            }
            console.log(resul)
            console.log(objetos)
        }
        
        function ordenar(){
            objetos.sort()
            console.log(objetos)
        }


