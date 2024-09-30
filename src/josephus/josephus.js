function josephus(list, m) {

    if(!list || list.length === 0) {
        return list;
    }

    if(list.length === 1) {
        return list.head.value;
    }

    let node = list.head;
    let tail = null;

    while(node) {
        tail = node;
        node = node.next;
    }

    tail.next = list.head;
    node = list.head;
    // Now we have a circular linked list
    while(node.next != node) {

        for(let i=0;i<m-1;i++) {
            node = node.next;
        }
  
        node.next = node.next.next;
       // node = node.next;
        console.log("Node.value "+node.value);
    }
  return node.value;

  






// // Loop until only one node remains
// while (currentNode.next !== currentNode) {
//     // Move (m-1) steps to find the node to be removed
//     for (let i = 0; i < m - 1; i++) {
//         currentNode = currentNode.next;
//     }

//     // Remove the node
//     currentNode.next = currentNode.next.next; // Skip the node to be removed
// }

// // Return the value of the last remaining node
// return currentNode.value;
}


module.exports = josephus;
