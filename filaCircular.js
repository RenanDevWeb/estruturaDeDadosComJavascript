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

function hotPotato(nameList, num ){
    let queue = new Queue()

    for (let index = 0; index < nameList.length; index++) {
        queue.enqueue(nameList[index])
    }
    let eliminated = ""

    while (queue.size() > 1) {
        for (let index = 0; index < num; index++) {
            queue.enqueue(queue.dequeue())
            
        }
        eliminated = queue.dequeue()
        console.log(eliminated + ' was eliminated for the potato game')
    }
    return queue.dequeue()

}


const nomes = ["joao","jose","joao","Maria", "luvcas"]
const winner = hotPotato(nomes, 7 )
console.log("the winner is " + winner);