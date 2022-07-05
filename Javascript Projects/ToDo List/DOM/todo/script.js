// 1st we need is input, so usko nikalege and ul tag jisme kaam krna ki list add krni hai
let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

//9th step
function deleteTask(e) {
  // console.log(e); //we have target and current target choose anyone
  e.currentTarget.remove(); // remove method is to remove anyhting
}

// 2nd step -  now we want ki input box me type krege or enter krege to vo ul me add hoje list
// so hame listen krna hoga ki click hua ya nahi

input.addEventListener("keypress", function (e) {
  //   console.log(e);
  if (e.key == "Enter") {
    // 3rd step is task kese nikale vo input box me typed hai, task input variable me typed hai
    // so uski agr value nikale to task aajega

    let task = input.value;
    // console.log(task);

    if (!task) {
      alert("Error - Please Enter your Task to be Added..");
      return; //kuch krna hi nhi vapas hojo
    }

    //4th step -> taki jidr likhre hai uspr click krne ke baad vo empty hoje
    input.value = "";

    //   5th step -> ab ul ke andr list create krna hai ie li taki ul me dal ske.
    let li = document.createElement("li");

    // 6th step -> ab "li" ke andr task add krna hai ie innerText
    li.innerText = task;

    //  7th step -> ab li ko ul ke andr dalna hai. so ul ka li child hai
    // ul.appendChild(li);

    //   8th step -> ab ham chahte hai jo list add hui hai uspr double click kre to delete hoje
    li.addEventListener("dblclick", deleteTask); // make this function 9th step

    // 10 th step -> we want ki list jo add hori hai vo sabse pehle aaye
    ul.insertBefore(li, ul.firstChild); // 1st param is kya add krna hai , 2nd parameter is refernce pass kra hamesha firstChild pass krege
  }
});
