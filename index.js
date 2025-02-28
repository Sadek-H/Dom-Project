

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



    document.getElementById("clear").addEventListener("click", function(){
        document.getElementById("cmnt1").remove();
    })

