// complexidade quadratica O(n2)
// // forma simples 


// let temporaria
// function bubleSort(a, b) {
//     if (a > b) {
//         temporaria = a
//         a = b
//         console.log(a)
//         b = temporaria


//         console.log(`os valore ordenados são ${a} e ${b}`)
//     }


// }

// console.log(bubleSort(5, 1))

let arrayAleatorios = []
let temporaria

function geraArrayaletorio(tamanho){
    
    for (let index = 0; index < tamanho; index++) {
       arrayAleatorios.push(Math.floor(Math.random() * 1000))
       
    }
}

function bubleSort(arrayAleatorios){
        for (let index1 = 0; index1 < arrayAleatorios.length; index1++) {
            for (let index2 = 0; index2 < (arrayAleatorios.length); index2++) {
                if(arrayAleatorios[index2] > arrayAleatorios[index2 + 1]){
                    temporaria = arrayAleatorios[index2]
                    arrayAleatorios[index2] = arrayAleatorios[index2+1]
                    arrayAleatorios[index2+1] = temporaria
                }
                
            }
        }
       
}
geraArrayaletorio(100)
bubleSort(arrayAleatorios)
console.log(arrayAleatorios)




