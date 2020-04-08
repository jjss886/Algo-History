/*

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

*/

var flatten = function (head, rec = false) {
  if (!head) return head;

  let cur = head,
    next = null,
    prev = null;

  while (cur) {
    next = cur.next;

    if (cur.child) {
      const child = flatten(cur.child, true); // OUTPUTS TAIL OF CHILD LIST

      cur.next = cur.child; // PARENT NEXT TO OG CHILD REF
      cur.next.prev = cur; // LINK CHILD PREV BACK TO PARENT CUR

      if (next) {
        child.next = next; // LINK CHILD TAIL TO PARENT NEXT
        child.next.prev = child; // LINK PARENT NEXT PREV TO CHILD TAIL
      }

      cur.child = null; // REMOVE CHILD REF
    }

    prev = cur;
    cur = next;
  }

  if (rec) return prev; // RETURN TAIL WHEN CHILD LIST
  return head;
};
