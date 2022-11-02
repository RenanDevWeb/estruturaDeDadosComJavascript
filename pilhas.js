//pilhas 

function Stack() {
    var items = []
    

  this.push =  function(element){
    //adicionar um item da pilha 
    items.push(element)

  }
  this.pop =  function(element){
    //remover um item da pilha 
    return items.pop()
    
  }
  this.peek =  function(element){
    //imprime  o elemento no topo da pilha
        return items[items.length - 1]
       
  }

  this.isEmpty =  function(element){
    //pilha vazia ou nao 
    return  items.length  == 0 ? "vazia" : "nao vazia"
    
  }

  this.clear =  function(element){
    //limpar a pilha 
    items = []
  }
  this.size =  function(element){
    //informa o tamanho da pilha 
    return  items.length; 

//     var totalStack = 0
//     for(let i = 0 ; i <= items.length  -1 ; i++){
//        totalStack +=1
//     }

//    return console.log(totalStack);
  }
  this.print =  function(element){
    //imprime toda a pilha 
 return console.log(items.toString());
        // for(let i = 0 ; i <= items.length -1; i++){
        //     console.log(items[i]);
        // }
  }
}

var stack = new Stack()

stack.push(2)
stack.push(2)
stack.push(2)
stack.push(2)
stack.push(2)
stack.push(2)
stack.push(28)
console.log(stack.peek());
stack.print()


