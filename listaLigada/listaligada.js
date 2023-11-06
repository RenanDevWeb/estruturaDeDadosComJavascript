function likedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }
    var length = 0 
    var head = null

    this.append  = function(element){ 
          // adiciona um elemento ao final da lista
         
          var node = new Node(element),current
          if(head === null){
            head = node
          }else{
            current = head
         while (current.next ) {
             current = current.next
         }

         current.next = node 
        }
        length++

     }
      
        this.insert = function(position, element){
            // adiciona o elemento em uma posicão especifica na fila 
        }



        this.removeAt = function(position){
            // remove um elemento em uma posicão especifica 

        }
        this.remove = function(element){
            // remove o elemento element ou seja o elemento sendo passado como paramentro da função 
        }

        this.indexOF = function(element){
            // retorna a posição do elemento 
        }


        this.isEmpty = function(){
            // retorna se a instancia esta vazia
        }

        this.size = function(){
            // retorna o tamanho da instancia 
        }
        this.toString =  function(){
            // imprime a lista 

            var current = head , string = ''

            while (current) {
                string += current.element + ' '
                current = current.next 
            }
            return string 

        }

        this.print = function(){
            console.log(this.toString())
        }

    }


    var lista = new likedList()
    lista.append("joao ")
    lista.append("maria ")
    lista.append("carlos ")
    lista.append("junior ")
    lista.print()