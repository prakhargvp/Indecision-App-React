/**
 * Function level Scoped : var, let, const
 * Block level Scoped : let, const
 */


/**
 *  Redefine/Redeclare same varaibale is allow in var 
 *  ReAssignment of value is Allowed
 *  Problem: 
 */
 
var nameVar = 'Prakhar';
var nameVar = 'Ankit';
nameVar = 'Rishabh';
console.log(nameVar);

/**
 *  Redfine/Redeclare is not allowed in let
 *  ReAssignment of value is Allowed
 *  Advantage: 
 */

let nameLet = 'Prakhar';
// let nameLet = 'Ankit';	// Get Error: Duplicate declaration "nameVar"
nameLet = 'Rishabh';
console.log(nameLet);

/**
 *  Redefine/Redeclare and Reassign is not allowes in const
 */
 const nameConst = 'Prakhar';
 // const nameConst = 'Ankit'; // Get Error: Duplicate declaration "nameVar"
 // nameConst = 'Rishabh'; // Get Error:  "nameVar" is read-only
 console.log(nameConst);


const fullName = 'Prakhar Agrawal';
let firstName;

if(fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);