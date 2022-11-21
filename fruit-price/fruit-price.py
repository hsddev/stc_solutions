def fruitPrice(fruit, numberOfItems):
    # write your code here
    total = 0

    if fruit == "Apple":
        total = 15 * numberOfItems
    elif fruit == "Banana":
        total = 20 * numberOfItems
    elif fruit == "Mango":  
        total = 22 * numberOfItems
    elif fruit == "Kiwi":  
        total = 18 * numberOfItems 
    elif fruit == "Strawberry":  
        total = 20 * numberOfItems           
        
    return(total)