func isPowerOf2(number1 int, number2 int, number3 int)[]bool{
    array:= []int{number1,number2,number3}
    /* write your code here */
	var result [] bool

	for _,v :=range array {
		if(numIsPowerOfTwo(v)){
			result = append(result, true)
		}else {
			result = append(result, false)
		}
	}

	return result

}

func numIsPowerOfTwo(num int) bool{
	return n !=0 && ((n & (n-1)) == 0)
}