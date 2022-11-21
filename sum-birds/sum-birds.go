func sumBirds(number1 int, number2 int, number3 int)int{
    array:= []int{number1,number2,number3}
    /* write your code here */
	sum := 0;

    for _,v := range array {
        sum += v;
    }
    return sum;
}