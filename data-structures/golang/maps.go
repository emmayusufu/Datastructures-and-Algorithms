package main

import "fmt"



func main (){

	grades := map[string]int{
		"Emmanuel" : 100,
	}

	grades["Alice"] = 90

	// fmt.Println(grades)

	grade, exists := grades["Alice"]

	if exists {
		fmt.Printf("%s scored %d\n", "Alice", grade)
	} else {
		fmt.Println("Grade does not exist")
	}

	delete(grades, "Alice")

	fmt.Println(grades)
}