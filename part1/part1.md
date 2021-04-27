## Part 1a:
1. 20
2. 20
3. 20
4. Nothing is printed, you get an error. Because when using 'let,' the 'result' variable can only be accessed within the block that is defined in.
5. Nothing is printed, you get an error because we a variable is declared with 'const' it cannot be changed/reassigned.  
6. Nothing is printed, you get an error because we a variable is declared with 'const' it cannot be changed/reassigned.  

## Part 1b:
1. The number 3 would be printed in the terminal because the for loop would run up to three times because the length of the array 'prices' is of length three. 
2. The loop iterates a total of *3* times, therefore, the variable *discountedPrice* is reassigned for the third time as 150. (Utilizing the 300 in the array for the calculations).
3. The loop iterates a total of *3* times, therefore, the variable *finalPrice* is reassigned for the third time as 150. (Utilizing the 300 in the array for the calculations even after rounding).
4. It should return an array with the discounted prices. The array returned would look like so: [50, 100, 150]. However, since there is no 'console.log(discounted)' it would not be outputted in the terminal. 
5. You would get an error because the variable *i* is initialized in the 'for loop' it is only available within such loop. Therefore, the compiler would complained because you have not defined the variable *i*. 
6. You would get an error because the variable *discountedPrice* is initialized within the 'for loop' and it is only available within such loop. Therefore, the compiler will complain because you have not defined the variable *discountedPrice*. 
7. Since the variable *finalPrice* is pushed into the discounted array, it makes such variable available and not restricted to the for loop, therefore the program should print 150 as it did in question #3. 
8. It should have the same behavior as question #4, because the *finalPrice* is pushed into the empty array *discounted*. The array returned would look like so: [50, 100, 150]. However, since there is no 'console.log(discounted)' it would not be outputted in the terminal.
9. The code is going to cause an error, because 'i' does not exist beyond the 'for loop' because it is declared using 'let.'
10. The variable 'length' is set as a constant variable, and is set to the length of the 'prices' array, therefore it should print a 3 in the output. 
11. It's going to return the discounted prices stored in the *discounted* array. However, it would not be displayed in the terminal since no 'console.log(discounted)' was utilized. 
12. 
    A.  console.log(student.name);
    B.  console.log(student['Grad Year']);
    C.  student.greeting();
    D.  console.log(student['Favorite Teacher'].name);
    E.  console.log(student.courseLoad[0]);
13. 
    A. 32 - Because integers map to their exact string representation.
    B. 1 - Here it is not appending to the string, rather identifies the first as an integer and performs the subtraction. 
    C. 3 - 3 + 0 ; For all maths and other comparisons *null* becomes 0. 
    D. 3null - Maps null as a string representation. 
    E. 4 - The boolean value of *true* is considered here and therefore can be replaced by a 1. 
    F. 0 - The boolean value of *false* is considered in mathematical expressions and *null* also is considered as 0. 
    G. 3undefined - Maps undefined as a string representation and appends it to the string '3'.
    H. NaN - The value undefined should not be utilized in mathematical or comparison expressions because it gets turned into NaN.
14. 
    A. true - string '2' becomes a number 2
    B. false - When comparing two strings Javascript utilizes *unicode* since the character '2' has a higher index than '12' it should be greater than the character '12'.
    C. true - Utilizing '==' (regular equality check) **cannot** differentiate from different types.
    D. false - Utilizing '===' (strict equality check) **can** differentiate from different types. 
    E. false - Although the regular equality check cannot differentiate between different types, *true* would be considered in this situation as *1*.
    F. true - The function is a boolean, same type as *true*, and since *Boolean(2)* returns *true*, then the output is **true**. 
15. The difference between the '==' and the '===' operators is that in the case of '==' it is what is known as a *regular equality check* which means that it cannot differentiate between types. (E.g. It cannot differentiate 0 from false). On the other hand, '===' check the equality without type conversion. Meaning that if variable a & b, are different types it **will** return **false** automatically without an attempt to convert them. 
16. Look on: part1/part1b-question16.js
17. When the function is called with the parameters *modifyArray([1,2,3]. doSomething)*, the result will be the inputted array times 2. Thus, the program would output *[2,4,6]*. The way I got to this answer is by looking at the function, what it does, and then focusing on the inputs given to each parameter. For instance, the input of the variable *array* is given as *[1.2.3]*, and the variable *callback* calls the function *doSomething* which basically returns the multiplication of an number 'times' 2. Thus, we see that the for loop will loop a total of three times given the length of the array. Furthermore, each value of the array will be pushed into a *newArr* which will store the original array after passing through the *doSomething* function (After being multiplied by 2). Finally the *newArr* is returned. 
18. Look on part1/part1b-question18.js
19. The output of the code above would be:
    1
    4
    3
    2
    This is because 1,4 do not have a *setTimeout* attached to them, then *3* jas a timer of '0' but still has a delay, and lastly, *2* has a delay to appear in 3 seconds.
    