
class Node:
    value = None
    next = None
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    head: Node | None = None

    def insert_at_end(self, value):
        newNode = Node(value)
        if self.head is None:
            self.head = newNode
            return
        
        current = self.head
        while current.next:
            current = current.next

        current.next = newNode

    def delete_value(self, value):
        if self.head.value == value:
            self.head = self.head.next

        current = self.head

        while current.next and current.next.value != value:
            current = current.next

        if current.next:
            current.next = current.next.next
            print(f'Deleted value: {value}')

        else:
            print(f'Value: {value} was found in the list')
        

    def print_list(self):
        current = self.head

        while current:
            print(f"{current.value}->")
            current = current.next

ll = LinkedList()

ll.insert_at_end(10)
ll.insert_at_end(20)
ll.insert_at_end(30)
ll.insert_at_end(40)

ll.print_list()
ll.delete_value(20)
ll.delete_value(20)
ll.print_list()