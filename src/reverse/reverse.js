const LinkedList = require("../lib/linkedList");
const Node = require("../lib/node");


/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {

    let head = list.head;
    let currentNode = list.head;
    let reversedList = new LinkedList();

    // Return the original list if it's empty or has only one node
    if (!head || list.length <= 1) {
        return list;
    }


    while(currentNode) {
        //Node existingListNode = currentNode;
        reversedList.insertAtHead(currentNode.value);
        currentNode = currentNode.next;
    }

    return reversedList;


   

    // Iterate through the original list
    while (currentNode) {
        // Insert the current node's value at the head of the reversed list
        reversedList.insertAtHead(currentNode.value);
        currentNode = currentNode.next; // Move to the next node
    }

    return reversedList; // Return the new reversed list
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    let reversedList = new LinkedList();

    if (!list.head || list.length <= 1) {
        return list;
    }

   
    recursiveListReversal(list.head, reversedList);
    return reversedList;
}

function recursiveListReversal(currentNode, reversedList) {

    if(!currentNode)
        return;

    reversedList.insertAtHead(currentNode.value);
    
    recursiveListReversal(currentNode.next, reversedList);

}

module.exports = { reverseIterative, reverseRecursive };
