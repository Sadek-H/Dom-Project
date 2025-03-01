

document.getElementById("currentDate").innerHTML = new Date().toDateString();

document.getElementById("complete-btn").addEventListener("click", function(event){
        event.preventDefault();
        alert("Board updated Successfully")
        let NumMinus = document.getElementById("number-decrease").innerHTML ;
        convertNumMinus = parseInt(NumMinus);
      Minus = convertNumMinus - 1 ;
      document.getElementById("number-decrease").innerHTML = Minus;
      document.getElementById("complete-btn").disabled = true;
      document.getElementById("complete-btn").style.color = "white";

    let NumAdd =  document.getElementById("number-increase").innerHTML;
     convertNumAdd = parseInt(NumAdd);
     Sum = convertNumAdd + 1 ;
     document.getElementById("number-increase").innerHTML = Sum ;

     document.getElementById("cmnt1").innerHTML= `You have completed the task ${document.getElementById("para1").innerHTML} at ${new Date().toLocaleTimeString()}`
    
    document.getElementById("cmnt1").style.backgroundColor = "#F4F7FF"
    })


//2nd
    document.getElementById("complete-btn2").addEventListener("click", function(event){
      event.preventDefault();
      alert("Board updated Successfully")
      let NumMinus = document.getElementById("number-decrease").innerHTML ;
      convertNumMinus = parseInt(NumMinus);
    Minus = convertNumMinus - 1 ;
    document.getElementById("number-decrease").innerHTML = Minus;
    document.getElementById("complete-btn2").disabled = true;
    document.getElementById("complete-btn2").style.color = "white";

  let NumAdd =  document.getElementById("number-increase").innerHTML;
   convertNumAdd = parseInt(NumAdd);
   Sum = convertNumAdd + 1 ;
   document.getElementById("number-increase").innerHTML = Sum ;

   document.getElementById("cmnt2").innerHTML= `You have completed the task ${document.getElementById("para2").innerHTML} at ${new Date().toLocaleTimeString()}`
  
   document.getElementById("cmnt2").style.backgroundColor = "#F4F7FF"
  })


//3rd

document.getElementById("complete-btn3").addEventListener("click", function(event){
  event.preventDefault();
  alert("Board updated Successfully")
  let NumMinus = document.getElementById("number-decrease").innerHTML ;
  convertNumMinus = parseInt(NumMinus);
Minus = convertNumMinus - 1 ;
document.getElementById("number-decrease").innerHTML = Minus;
document.getElementById("complete-btn3").disabled = true;
document.getElementById("complete-btn3").style.color = "white";

let NumAdd =  document.getElementById("number-increase").innerHTML;
convertNumAdd = parseInt(NumAdd);
Sum = convertNumAdd + 1 ;
document.getElementById("number-increase").innerHTML = Sum ;

document.getElementById("cmnt3").innerHTML= `You have completed the task ${document.getElementById("para3").innerHTML} at ${new Date().toLocaleTimeString()}`

document.getElementById("cmnt3").style.backgroundColor = "#F4F7FF"
})


//4th

document.getElementById("complete-btn4").addEventListener("click", function(event){
  event.preventDefault();
  alert("Board updated Successfully")
  let NumMinus = document.getElementById("number-decrease").innerHTML ;
  convertNumMinus = parseInt(NumMinus);
Minus = convertNumMinus - 1 ;
document.getElementById("number-decrease").innerHTML = Minus;
document.getElementById("complete-btn4").disabled = true;
document.getElementById("complete-btn4").style.color = "white";

let NumAdd =  document.getElementById("number-increase").innerHTML;
convertNumAdd = parseInt(NumAdd);
Sum = convertNumAdd + 1 ;
document.getElementById("number-increase").innerHTML = Sum ;

document.getElementById("cmnt4").innerHTML= `You have completed the task ${document.getElementById("para4").innerHTML} at ${new Date().toLocaleTimeString()}`

document.getElementById("cmnt4").style.backgroundColor = "#F4F7FF"
})

//5th

document.getElementById("complete-btn5").addEventListener("click", function(event){
  event.preventDefault();
  alert("Board updated Successfully")
  let NumMinus = document.getElementById("number-decrease").innerHTML ;
  convertNumMinus = parseInt(NumMinus);
Minus = convertNumMinus - 1 ;
document.getElementById("number-decrease").innerHTML = Minus;
document.getElementById("complete-btn5").disabled = true;
document.getElementById("complete-btn5").style.color = "white";

let NumAdd =  document.getElementById("number-increase").innerHTML;
convertNumAdd = parseInt(NumAdd);
Sum = convertNumAdd + 1 ;
document.getElementById("number-increase").innerHTML = Sum ;

document.getElementById("cmnt5").innerHTML= `You have completed the task ${document.getElementById("para5").innerHTML} at ${new Date().toLocaleTimeString()}`

document.getElementById("cmnt5").style.backgroundColor = "#F4F7FF"
})

//6th

document.getElementById("complete-btn6").addEventListener("click", function(event){
  event.preventDefault();
  alert("Board updated Successfully")
  let NumMinus = document.getElementById("number-decrease").innerHTML ;
  convertNumMinus = parseInt(NumMinus);
Minus = convertNumMinus - 1 ;
document.getElementById("number-decrease").innerHTML = Minus;
document.getElementById("complete-btn6").disabled = true;
document.getElementById("complete-btn6").style.color = "white";

let NumAdd =  document.getElementById("number-increase").innerHTML;
convertNumAdd = parseInt(NumAdd);
Sum = convertNumAdd + 1 ;
document.getElementById("number-increase").innerHTML = Sum ;

document.getElementById("cmnt6").innerHTML= `You have completed the task ${document.getElementById("para6").innerHTML} at ${new Date().toLocaleTimeString()}`

document.getElementById("cmnt6").style.backgroundColor = "#F4F7FF"
})










     document.getElementById("clear").addEventListener("click", function(){
        document.getElementById("cmnt1").remove();
        document.getElementById("cmnt2").remove();
        document.getElementById("cmnt3").remove();
        document.getElementById("cmnt4").remove();
        document.getElementById("cmnt5").remove();
        document.getElementById("cmnt6").remove();
    })



    // discover new page
    document.getElementById("new-one").addEventListener("click",function(event){
      event.preventDefault();
      window.location.href = "QNA.html"; 
  
  })


  //color change
  document.getElementById("color-btn").addEventListener("click",function(){
    document.body.style.backgroundColor = genrandomColor();
  })
