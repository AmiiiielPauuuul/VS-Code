document.write("The sum is: " + addNumbers(6)+"<br>");
document.write("The difference is: " + subNumbers(4,2)+"<br>");
document.write("The product is: " + multiNumbers(2,3)+"<br>");
document.write("The quotient is: " +diviNumbers(9,3)); 
document.write("total: " + addNumbers(11,'2'));

function addNumbers(x,y) {
    var sum = x + y;
    alert(x + "+" + y + "=" + sum);
    return sum;
}

function subNumbers(x,y) {
    var diff = x - y;
    alert(x + "-" + y + "=" + diff)
    return diff;
}

function multiNumbers(x,y) {
    var prod = x * y;
    alert(x + "*" + y + "=" + prod)
    return prod;
}

function diviNumbers(x,y) {
    var quo = x / y;
    alert(x + "/" + y + "=" + quo)
    return quo;
}