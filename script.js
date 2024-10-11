
function expIncome()
{
     let valDes = document.getElementById("txtIncDes").value.trim();
     let valData= parseFloat(document.getElementById("txtIncData").value);
     
     if (isNaN(valData)) {
        alert("Please enter a valid income amount.");
        return; // Stop execution if the amount is not valid
    }

      //TransHistory(valDes,valData);
      totInExp(valData);
      createInput(valDes,valData)
    // Clear input fields
     document.getElementById("txtIncDes").value = "";
     document.getElementById("txtIncData").value = "";
     
     let curbal = parseFloat(document.getElementById("balTotal").value || 0);;
    
      if (isNaN(curbal)) {
        curbal = 0;
    }
     
    let total = curbal + valData;
    document.getElementById("balTotal").value = total;
    document.getElementById("balTotal").style.fontWeight = "bold";
    if(Math.sign(total)===1)
    {
      document.getElementById("balTotal").style.color = "green";
    }
    else {
      document.getElementById("balTotal").style.color = "red";
     
}
}

//Function for Total Income / Expense

function totInExp(valData)
{
  if(Math.sign(valData)===1)
  {
    let curIncome = parseFloat(document.getElementById("txtIncom").value || 0);
    let newIncome = curIncome + valData
    document.getElementById("txtIncom").value = newIncome;
    
    
  }
  else{
    let curExp = parseFloat(document.getElementById("txtExp").value || 0);
    let newExp = curExp + valData;
    document.getElementById("txtExp").value = newExp;
  }
  document.getElementById("txtIncom").style.fontWeight = "bold";
  document.getElementById("txtExp").style.fontWeight = "bold";
}

// function to create new texboxes
function createInput(valDes,valData)
{
let x = document.createElement("Input");
let y = document.createElement("Input");
x.readOnly = true;
y.readOnly = true;

  x.setAttribute("type", "text");
  x.setAttribute("value",valDes);
  y.setAttribute("type","text");
  y.setAttribute("value",valData)
  let parDiv = document.querySelector(".DynInp");

  // if (parDiv) { // Ensure the div exists
  //   while (parDiv.children.length > 8) {
  //     parDiv.removeChild(parDiv.children[0]); // Remove from second child onward
     
  //   }
  //   } 
      parDiv.appendChild(x);
      parDiv.appendChild(y);
  
  if(Math.sign(valData)===1)
    {
     y.style.color = "Green";
    }
    else{
     y.style.color = "red";
    }
    x.style.marginLeft = "70px";
    x.style.fontWeight = "bold";
    
    y.style.marginLeft = "-15px";
    y.style.fontWeight = "bold";
    
    let chilen = parDiv.childElementCount;
    
   }

   //Event listner to Enter value in Text Boxes on Submit button click
document.getElementById("subBtn").addEventListener("click", expIncome)

//Event Listner to clear all TextBoxes on clear Button Click
document.getElementById("clrBtn").addEventListener("click",clrAll)

//Function to clear all TextBoxes
function clrAll()
{
  document.getElementById("txtIncDes").value = "";
  document.getElementById("txtIncData").value = "";
  document.getElementById("txtIncom").value = "";
  document.getElementById("txtExp").value = "";
  document.getElementById("balTotal").value = "";
  let parDiv = document.querySelector(".DynInp");
  parDiv.innerHTML="";
  
}