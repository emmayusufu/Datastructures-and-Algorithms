package main

import "fmt"

// Define a node in a linked list
type Node struct {
	value int
	next *Node
}

// Then define the linked list
type LinkedList struct {
	head *Node
}

// Define a method to add the 
func (ll *LinkedList) InsertAtEnd (value int) {
	newNode := &Node{
		value: value,
	}

	if ll.head == nil {
		ll.head = newNode
		return;
	}

	current := ll.head

	for current.next !=nil {
		current = current.next
	}

	current.next = newNode
}

// Method to print the whole list
func (ll *LinkedList) PrintList() {
	current := ll.head
	for current != nil {
		fmt.Println(current.value, "->")
		current = current.next
	}
	fmt.Println("nil")	
}

// Method to delete the first occurene
func (ll *LinkedList) DeleteValue(value int) {

	if ll.head == nil {
		return
	}

	if ll.head.value == value {
		ll.head = ll.head.next
		return
	}

	current := ll.head
	for current.next != nil && current.next.value != value {
		current = current.next
	}

	if current.next != nil {
		current.next = current.next.next
	}

}

func main()  {

	ll := &LinkedList{}

	// Insert some elements
    ll.InsertAtEnd(10)
    ll.InsertAtEnd(20)
    ll.InsertAtEnd(30)

    fmt.Println("Linked List after insertion:")
    ll.PrintList()

    // Delete an element
    ll.DeleteValue(20)
    fmt.Println("Linked List after deletion:")
    ll.PrintList()

	fmt.Println()
	
}