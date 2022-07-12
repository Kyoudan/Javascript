
        function processo(){
        var valor = document.getElementById('digitar').value

        document.getElementById('digitar').value = ''

        valor.trim()

        switch(valor){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                document.getElementById('Numeros').value += valor
            break;
            
            default:
                document.getElementById('Letras').value += valor
            }
