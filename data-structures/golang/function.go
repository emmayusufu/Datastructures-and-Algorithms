package main

import (
	"errors"
	"fmt"
)

func main()  {

	// sum := add(3, 5)
	// fmt.Println((sum))

	// fmt.Println(factorial(10))

	fmt.Println(divide(4,6))
	result, error := divide(5,0)
	fmt.Println(result, error)

	
}
// basic declaration
func add(a int, b int) int  {
	return a + b
}

// recursion
func factorial(n int) int {
	if n == 0 {
		return 1
	}

	return n * factorial(n - 1)
}

// multiple return values and errors
func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("can not divide by zero")
	}
	return a/b, nil
}

// function values (functions are 1st class citizens)