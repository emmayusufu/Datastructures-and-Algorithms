package main

import "fmt"

type Person struct {
	name  string
	age int
	address string
}

func printName(x *Person){
	fmt.Println(x.name)
}

func printFirstSliceItemItem(m []Person){
	fmt.Println(m[0].name)
}

func main (){
	var p  Person = Person{
		name: "John",
		age: 12,
		address: "Seeta",
	}

	var persons []Person = []Person{
		{
			name: "Emmanuel",
			age: 12,
			address: "Mbale",
		},
	}

	printName(&p)

	printName(&persons[0])

	printFirstSliceItemItem(persons)
}