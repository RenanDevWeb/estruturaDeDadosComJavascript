function Queue(){
    let items  = []

this.enqueue =  function(elemento){
        items.push(elemento)
}

this.dequeue = function(){
   return items.shift()
}

this.front = function(){
    return items[0]
}
this.isEmpty = function(){
return items.length == 0 ? "Vazia" : "Não esta vazia"
   
}
this.size = function() {
   return items.length
}

this.print = function(){
  items.forEach(item => {
   console.log(item)
  })
}

   }


const fila = new Queue()


fila.enqueue("carlos")
fila.enqueue("Lucas")
fila.enqueue("Ana")
console.log(fila.print())

fila.dequeue()
console.log(fila.print())
