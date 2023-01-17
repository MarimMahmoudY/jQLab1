window.addEventListener("load",function()
{
  //create
  let addButton=$(this).$("input[value=Add]");
  let listTable=$(this).$("table")[0];
  let inputTextBox=$("input[name=addTitle]");

  //events
  addButton.click=function()
  {  
    //1- created tr
    let trElm=$("<tr></tr>"); //<tr></tr>
    //2- created td 
    let tdElm=$("<td></td>"); //<td></td>
    tdElm.text($(inputTextBox.value));  //<td>......</td>
    //3- td-> tr
    trElm.append(tdElm);

    //________________________________Done_________

    let doneBtn=$("<button></button>");

    doneBtn.innerHTML="Done";
    tdElm=$("<td></td>");
    tdElm.append(doneBtn);
    trElm.append(tdElm);

    doneBtn.click=function()
    {
      $(this).$(parentElement).$(parentElement).css("backgroundColor","gray");
    }
    //________________________________Delete_________
    //-- delete
    let deleteBtn=$("<button></button>");

    deleteBtn.text("Delete");
    tdElm=$("<td></td>");
    tdElm.append(deleteBtn);
    trElm.append(tdElm);


    listTable.append(trElm);
    deleteBtn.click=function()
    {
      $(this).$(parentElement).$(parentElement).remove();
    }
  
  }        

});//end load

