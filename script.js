var counterElement=document.getElementById('counterText');
var incrementbtn= document.getElementById('increment');
var decrementbtn=document.getElementById('decrement');
var resetbtn=document.getElementById('reset');
var alerttext=document.getElementById('alert');
var counter=counterElement.innerText;

function increment(){
    alerttext.innerHTML=' ';
    resetbtn.style.display="inline";
    counter++;
    console.log(counter);
    counterElement.innerText="Your Current Count is : "+ counter;
    
    if(counter>1){
        incrementbtn.style.display="block";
        
    }
}

function decrement(){
    alerttext.innerHTML=' ';
    resetbtn.style.display="inline";
    if(counter==0){
        alerttext.innerText="Error : Cannot go below 0";
        incrementbtn.style.display="inline";
        resetbtn.style.display="none";
    }
    else{
        if(counter<3){
            incrementbtn.style.display="inline";
        }
    counter--;
    console.log(counter);
    counterElement.innerText="Your Current Count is : "+ counter;
    }

}

function reset(){
    alerttext.innerHTML=' ';
    counter=0;
    
    console.log(counter);
    counterElement.innerText= "Your Current Count is : " + counter;
 
    if(counter==0){
        resetbtn.style.display="none";
    }
    
}


incrementbtn.onclick=increment;
decrementbtn.onclick=decrement;
resetbtn.onclick=reset;