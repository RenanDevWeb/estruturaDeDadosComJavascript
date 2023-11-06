
function priorityQueue(){
    let items = []

    function QueueElement(element, priority){
         this.element =  element
         this.priority = priority

    }

    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority)


        let added = false

        for(let index = 0 ; index < items.length; index++ ){
            if(queueElement.priority <  items[index].priority){
             items.splice(index,0,queueElement)
                added = true
                break;
             }
        }

      if(!added){
        items.push(queueElement)
      }
    }


    this.dequeue = function() {
        return items.shift()
    }

   this.print = function(){
    // for (let i = 0; i < items.length; i++) {
    //      console.log(items[i].element + " - " + items[i].priority  )
         
    // }
    items.forEach((element, indice) => {
      console.log(element.element , element.priority)
    })

   }

}

let pqueue = new priorityQueue()
pqueue.enqueue("carlos magno",8)
pqueue.enqueue("tereza augusta",1)
pqueue.enqueue("lucas",1)
pqueue.enqueue("alan",5)
pqueue.enqueue("alan",2)
pqueue.print()




