package main

import "fmt"

type Circle struct {
	radius float64
}

type Rectangle struct {
	width, height float64
}

func (c Circle) Area() float64 {
	return 3.14 * float64(c.radius) * float64(c.radius)
}

func (r *Rectangle) SetWidth(width float64) {
	r.width = width
}

// composing types by struct embedding
type Point struct {
	x, y int
}

type ColoredPoint struct{
	Point
	color string
}

func main()  {
	
	c := Circle{
		radius: 13,
	}

	fmt.Println(c.Area())

	rec := Rectangle{
		width: 10,
		height: 4,
	}

	fmt.Println(rec)

	rec.SetWidth(11)

	fmt.Println(rec)

	p := ColoredPoint{
		Point: Point{2,3},
		color: "Red",
	}

	fmt.Println(p)

}

type Speaker interface {
    Speak() string
}

func introduce(s Speaker) {
    fmt.Println(s.Speak())
}