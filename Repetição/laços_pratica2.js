
    for(var y = 1; y <=20; y++){
        for(var x = 1; x <= 20; x++) {
            document.write(y  +'x' + x + '=' + (y*x) )
            document.write('<br />')
        if(x == 20 ){
            document.write('<hr>')
            continue
        }
        }
    }
