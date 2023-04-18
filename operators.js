/*

1. Aritmetic Operator (+ - * / %  ** ++ --)
2. Assignment operator  (=  += -= *= /=.....)
3. Relational operator (< > <= >=  == !=  === !==)
4. Logical operator (&& || !)
5. Bitwise Operator ( & | ^ ~ << >>)
6. Ternary operator (? :)
7. Type Operator (typeOf , instanceOf)


&&

A   B   A&&B

F   F   F
F   T   F
T   F   F
T   T   T


||

A   B   A||B

F   F   F
F   T   T
T   F   T
T   T   T

!
A   B

F   T
T   F

*/


// a=3
// b=6
// c="5"


// console.log(typeof(a));
// console.log(typeof(c));




// console.log(a>b && b>c); //f && t
// console.log(b>a && c>a);

// console.log(a>b || b>c);
// console.log(!(a<b));

// max= a>b? a:b
// a>b ? console.log("max a"):console.log("max b")
// console.log(max);

// let a = 4
// let b = 6


// console.log(a<b);
// console.log(a==b);
// console.log(b>=a);
// console.log(a!=b);

// c=4.0
// d="4"

// console.log(a==c);
// console.log(a==d);

// console.log(a===c);
// console.log(a===d);

// console.log(a!==c);
// console.log(a!==d);















// a+=3
// a=a+3
// console.log(a);
// b*=2
// console.log(b);







// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(2**3);
// console.log(a++); // 4
// console.log(a); // 5
// console.log(++a); // 6
// console.log(a); // 6



// 5. Bitwise Operator ( & | ^ ~ << >>)

/*

binary: (2) - 0 1
decimal: (10)  0 to 9



            521     256      128    64    32    16       8    4    2    1


0010 1010 ->  32+8+2 = 42
1100 -> 12
11100 -> 28


7 -> 0111
12-> 1100
19 -> 0001 0011
34 -> 0010 0010
_____________________
      0000 0010  (2)
      0011 0011 (51) 
      0011 0001 (49) 

19<<1 : 0010 0110 (38)
19<<2 : 0100 1100 (76)

19>>1: 0000 1001 (9)


^


A   B   A^B

0   0   0
0   1   1
1   0   1
1   1   0

*/

console.log(19&34);
console.log(19|34);
console.log(19^34);
console.log(19<<1);
console.log(19<<2);
console.log(19>>1);









