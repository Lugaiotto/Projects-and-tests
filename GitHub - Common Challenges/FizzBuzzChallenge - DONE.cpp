#include <stdio.h>


 using namespace std;

/*
   Code writted entirelly by @Lugaitto
   
   So here's the challenge: 
   
  The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming
  job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

    "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the 
	multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."
	
*/

main (void){


//Start//
    
    
    // Variable  //
	

   
    
  
    // Counter of 1 to 100//
    
      
    for (int num = 1; num<=100; num++ ) 
	{
        //If number is divisible by 3 and 5 condition//
    	if((num % 3 == 0) && (num % 5 == 0)) {
    		printf("\n Number = FizzBuzz ");
	   }
	   //If number is divisible  5 condition//
		else if(num % 5 == 0){ 
	 		printf("\n Number = Buzz "); 
		}
		//If number is divisible by 3  condition//
    	else if (num % 3 == 0){
			printf("\n Number = Fizz ");
		}
		//If number is none of conditions above//
		else{ 
			printf("\n Number = %d",num,"\n"); 
		}      
	 }
}
