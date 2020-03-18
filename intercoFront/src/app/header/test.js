


function maxProduct(numbers, size){
    var product=1;

    for ( var i = 0 ; i < size ; i++) {

      max1 = Math.max(...numbers);
      product *= product * max1;
      numbers.splice(numbers.indexOf(max));

    }
   
    return product;
  }

  function maxGap (numbers) {
    num = numbers;
    num.sort();
    return num[length -1] - num[0];
    }
    maxGap([1,2,5,3,8]);



    