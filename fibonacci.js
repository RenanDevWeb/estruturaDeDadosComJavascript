var fibonaci = []

fibonaci[0] = 0
fibonaci[1] = 1
fibonaci[2] = 2



    for(var i = 3 ; i < 100 ; i++){
        fibonaci[i] = fibonaci[i -1 ] + fibonaci[i -2]
    }
    




for(var l = 0 ; l <=  fibonaci.length; l++){
    console.log(fibonaci[l ])
}
