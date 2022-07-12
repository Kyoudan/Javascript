
        var a = 10
        var b = 20
        var c = null
        

        document.write('A: ' + a + '<br />')
        document.write('B: ' + b + '<br />')
        document.write('C: ' + c + '<br />')

        document.write('<hr />')
        c = 10
        var res = a + c
        var ress = b - c
        
        document.write('A: ' + res +'<br />')
        document.write('B: ' + ress + '<br />')

        c = null

        document.write('C: ' + c + '<br />')

        document.write('<hr />')
        
                    //ou

        var d = 10
        var e = 20
        var f = null

         document.write('A: ' + d + '<br />')
        document.write('B: ' + e + '<br />')
        document.write('C: ' + f + '<br />')

        document.write('<hr />')

        f = d
        d = e
        e = f
        f = null

        document.write('A: ' + d + '<br />')
        document.write('B: ' + e + '<br />')
        document.write('C: ' + f + '<br />')

        
