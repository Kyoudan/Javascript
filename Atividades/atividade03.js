
        var nome = prompt('Digite seu nome')
        var altura = prompt('Digite sua altura em cm')
        var peso = prompt('Digite seu peso')
        var massa = null
        var resultado = null
        altura = parseFloat(altura)
        peso = parseFloat(peso)
        altura /= 100

        var massa = peso / altura ** 2
        

        if(massa < 16){
            var resultado = ('Baixo peso, muito grave')
        } else if(massa >= 16 && massa <= 16.99 ){
            var resultado = ('Baixo peso, grave')
        } else if(massa >= 17 && massa <= 18.49){
            var resultado =('baixo peso')
        } else if(massa >= 18,50 && massa <= 24.99){
            var resultado = ('Peso normal')
        } else if(massa >= 25 && massa <= 29.99){
            var resultado = ('Sobrepeso')
        } else if(massa >= 30 && massa <= 34.99){
            var resultado = ('Obesidade grau 1')
        } else if(massa >= 35 && massa <= 39.99){
            var resultado = ('Obesidade grau 2')
        } else if(massa >= 40){
            var resultado = ('Obesidade grau 3')
        }

        //var massa = parseInt(massa)

        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ' + resultado)


