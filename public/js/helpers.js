/**
 * HELPERS
 */

// VALIDATE CPF
function validateCPF(cpf){
    var plus;
    var rest;
    plus = 0;
    if (cpf == "00000000000") return false;
    
    for (i=1; i<=9; i++) plus = plus + parseInt(cpf.substring(i-1, i)) * (11 - i);
    rest = (plus * 10) % 11;
    
    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(cpf.substring(9, 10)) ) return false;
    
    plus = 0;
    for (i = 1; i <= 10; i++) plus = plus + parseInt(cpf.substring(i-1, i)) * (12 - i);
    rest = (plus * 10) % 11;
    
    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}