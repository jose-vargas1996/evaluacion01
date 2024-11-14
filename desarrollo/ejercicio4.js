const maxNumber = (n1,n2,n3) => {
    const arrayNum = [n1,n2,n3];
    const result = Math.max(...arrayNum)
    return result
  }
  
  
  console.log(maxNumber(1,2,3,))
  console.log(maxNumber(3,5,6))
  console.log(maxNumber(10,34,58))