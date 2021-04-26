# Part 1a:
1. 20
2. 20
3. 20
4. Nothing is printed, you get an error. Because when using 'let,' the 'result' variable can only be accessed within the block that is defined in.
5. Nothing is printed, you get an error because we a variable is declared with 'const' it cannot be changed/reassigned.  
6. Nothing is printed, you get an error because we a variable is declared with 'const' it cannot be changed/reassigned.  

# Part 1b:
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
    A.  alert(student.name);
    B.  alert(student['Grad Year']);
    C.  