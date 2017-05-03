#include <stdio.h>
#include <iostream>
#include <cstdlib>
#include <stdlib.h>

 using namespace std;
// Tic-Tac-Toe Game ( trying to do right this time )
// Developed by a random guy, or : https://github.com/Lugaiotto


char maingame(char side){
	
	
	// Positions 0 to 9 //
	char p[8];
	int option;
	int aux;
	// Just created because memory problems.
	p[8] = '-';
	
	 //Choosing side//
	  
	//If "X"
	if  (side = 'x')
	{
	//Enemy will be O and Player X
	char opp = 'o';	
	char player = 'x';	
	}
	//If "O"
	if (side = 'o')
	{
	// Enemy will be X and Player O	
    char opp2 = 'x';
    char player2 = 'o';     
	}
	
	printf(" __%c__ | __%c__ | __%c__ \n",p[0],p[1],p[2]);
	printf(" __%c__ | __%c__ | __%c__ \n",p[3],p[4],p[5]);
	printf(" __%c__ | __%c__ | __%c__ \n",p[6],p[7],p[8]);
	
	printf("Choose a position typing the number (from 0 to 9) \n");
	scanf("%d",&option);	
	getchar();
	
	
	
	for (aux=0;aux<8;aux++){
		if (option == aux && side == 'o'){
		p[aux] = 'o';
		
		}
	}
	
	printf(" __%c__ | __%c__ | __%c__ \n",p[0],p[1],p[2]);
	printf(" __%c__ | __%c__ | __%c__ \n",p[3],p[4],p[5]);
	printf(" __%c__ | __%c__ | __%c__ \n",p[6],p[7],p[8]);
	
	
}




main (void){
    
    //Start//
    
    
    // Variables  //
	
	char side;


    //Menu//
    printf(" Welcome to Tic Tac Toe game ! \n");
    printf(" Choose a side : X or O (just type in the keyboard) \n");
    scanf("%c",&side);
    getchar();
    
    // Memory clear/ Screen clear
	fflush(stdin);
    system("CLS");
     
    // Call function 
	maingame(side);
  
	
	
	
  
    
    
    
 
 
 
 
	
	
	
	
}
