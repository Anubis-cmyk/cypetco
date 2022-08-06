/**
 * validate name 
 * only letters a-z & A-Z
 * not containing other symbols and numbers
 */
export const ValidateName = new RegExp(
    '^[a-z A-Z]*?[a-z A-Z]*$'
);

/**
 * validate email address
 * check @ sign
 * check email validity
 */
export const validEmail = new RegExp(
   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

/**
 * validate contact number
 * 10 digits
 * numeric values only
 * first digit must not be 0
 */
export const ValidContactNumber = new RegExp(
    '[1-9]{1}[0-9]{9}'
);
