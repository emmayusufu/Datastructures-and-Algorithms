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

	result1 := applyOperation(2,4, multiply)

	fmt.Println(result1)

	// anonymous functions
	greet := func (name string)  {
		fmt.Printf("Hello %s\n", name)
	}

	greet("Kimaswa")

	// addition := func (x,y int) int {
	// 	return x + y
	// }(3,6)

	// fmt.Println(total(1,2,3,4,5))

	// deferred()

	// causePanic()

	riskyFunction()
    fmt.Println("After riskyFunction call")

	
}
// basic declaration
func add(a int, b int) int  {
	return a + b
}

func multiply(a int, b int) int  {
	return a * b
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
func applyOperation(a, b int, op func (int, int) int) int {
	return op(a,b)
}


// vardiac functions
func total(nums ...int) int  {
	total := 0

	for _, number := range nums {
		total+=number
	}

	return total
}

// deferred 
func deferred()  {
	defer fmt.Println("This is deferred")

	fmt.Println("This is not deferred")
}

//  panic

func causePanic(){
	fmt.Println("Before panic")
	panic("Something went terribly wrong")
}

// recover

func riskyFunction()  {

	defer func ()  {
		r :=recover();
		if r!=nil {
			 fmt.Println("Recovered from panic:", r)
		}
	}()

	fmt.Println("Before panic")
    panic("Something went wrong!") 

}