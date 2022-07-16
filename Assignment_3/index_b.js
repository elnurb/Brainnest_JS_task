var z = parseInt(prompt("enter a"));

if(z==0){
    document.write(z," zero");
    console.log(z,"zero");
}else if(z%2==0){
    document.write(z," even number");
    console.log(z, "even number");
}else{
    document.write(z," odd number");
    console.log(z, "odd number");
}