function linkedList() {
   var Node = function(element){
    this.element = element
    this.next = null
   }

  var length = 0
  var head = null


  
this.append = function(element){
   // adicionar elemento ao final da lista
    
    var node = new Node(element)
    var current 

    if(head === null ){
      head = node
    }else{
      current = head

      while (current.next != null) {
         current = current.next
      }

      current.next = node
    }

    length++

}


this.insert = function(position,element){
   // adiciona um elemento em uma posição especifica 
}


this.removeAt = function(position){
   // remove um item em uma posição especifica  
}
this.remove = function(element){
   // remove um elemento
}

this.indexOf = function(element){
   // retorna a posiçao do elemento
}
this.isEmpty = function(element){
   // retorna se a lista esta vazia ou nao 
}

 this.size = function(){
   // retorna o tamanho da instancia
  
 }

 this.toString = function(){
   // converte em string
   var current = head
   string = ''
   while (current) {
      string +=  current.element +"\n"
      current = current.next
   }
   return string
 }



 this.print = function(){
   // retorna o tamanho da instancia
   console.log(`${this.toString()}`)
 }
 
}

    


var linkedList = new linkedList()
linkedList.append('João')
linkedList.append('Jose')
linkedList.append('Maria')
linkedList.print()