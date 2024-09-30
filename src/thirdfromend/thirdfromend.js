const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {

    if(!list)
        return null;

    if(list && (list.length === 0 || list.length < 3))
        return null;

    if(list.length === 3)
        return list.head;

    // let slowPointer = list.head;
    // let fastPointer = list.head;

    // // Move fast Pointer by 3 times, while slowPointer does not move
    // for(let i=0;i<3;i++) {
    //     fastPointer = fastPointer.next;
    // }
    // // move fast pointer and slowPointer by 1 node till fastPointer reaches end of list
    // while(fastPointer) {
    //     slowPointer = slowPointer.next;
    //     fastPointer = fastPointer.next;
    // }
    let slowPointer = getThirdFromList(list);
    return slowPointer;
}

function getThirdFromList(list) {
    let slowPointer = list.head;
    let fastPointer = list.head;

    while(fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
}


module.exports = thirdFromEnd;
