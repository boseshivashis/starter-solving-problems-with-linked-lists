const linkedList = require("../lib/linkedList");
const node = require("../lib/node");
/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {

    if (!list || !x || !y || x === y) {
        return list; // No need to swap if the list is empty or nodes are the same
    }

    let prevNodeX = null;
    let prevNodeY = null;
    let currentNode = list.head;

    // Find previous nodes for x and y
    while (currentNode) {
        if (currentNode.next === x) {
            prevNodeX = currentNode;
        }
        if (currentNode.next === y) {
            prevNodeY = currentNode;
        }
        currentNode = currentNode.next;
    }

    // If x is the head node
    if (x === list.head) {
        list.head = y; // Update head to y
    } else if (y === list.head) { // If y is the head node
        list.head = x; // Update head to x
    }

    // Swap previous pointers
    if (prevNodeX) {
        prevNodeX.next = y; // Link prev of x to y
    }
    if (prevNodeY) {
        prevNodeY.next = x; // Link prev of y to x
    }

    // Swap the next pointers
    let temp = x.next; // Store next of x
    x.next = y.next;   // x now points to next of y
    y.next = temp;     // y now points to next of x

    return list;
}

module.exports = swap;
