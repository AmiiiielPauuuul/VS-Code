
var result = "";

for (var num = 1; num <= 15; num++) {
    if (num%2 == 0) 
        result += num + ' is even';
    else 
        result += num + ' is odd';
        
}

alert(result)