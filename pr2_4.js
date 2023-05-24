a = prompt("Введите число 1");
b = prompt("Введите число 2");
c = prompt("Введите число 3");
if ( a > b && a > c ){
    alert(a);

} else if ( b > a && b > c){
    alert(b);
}else if( c > a && c > b){
    alert(c);

} else if( a == b && b == c){
    
    alert("числа ривни");
}