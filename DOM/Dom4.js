
    <style>
        .estilo1{
            padding: 20px;
            border-radius: 20px;
            background: linear-gradient(aquamarine, blue);
            color: black;
            height: 150px;
            width: 150px;
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .estilo2{
            padding: 20px;
            border-radius: 20px;
            background: linear-gradient(Yellow, rgb(255, 255, 170));
            color: black;
            height: 150px;
            width: 150px;
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    </style>



        function clique(){
            document.getElementById('manipulando').className = 'estilo2'
        }
        function voltar(){
            document.getElementById('manipulando').className = 'estilo1'
        }


