function adult(age){
    if (age >= 18) {
        return true    
    }
    else if (age < 18) {
            return false   
    }
}
document.write( adult(18)+" volljährig"+"<br>");
document.write( adult(16)+" minderjährig"+"<br>");