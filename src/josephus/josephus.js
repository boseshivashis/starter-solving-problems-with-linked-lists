function josephus(list, m) {

// Convert list to circular list
    // Find tail node by checkif node.next is null
    let tail = getTailNode(list);

    // Set the tail node to the head to make it a circular list
    tail.next = list.head;
    let node = list.head; // starting point of the node

    // Loop till at least 1 element is remaining
    while(node.next != node) {
        //  Move foreard by m - 1 times as mth element is to be removed
        for(let i=0;i<m-1;i++) {
            node = node.next;
        }

        if(node.next === list.head) {
            list.head = list.head.next;
        }

        node.next = node.next.next;
        node = node.next;
    }

    return node.value;  
}

  

function getTailNode(list) {
let tail = null;
let currentNode = list.head;

while(currentNode) {
    tail = currentNode;
    currentNode = currentNode.next;
}

return tail;
}


module.exports = josephus;
