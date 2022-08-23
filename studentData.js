
let rollNo = $('#rollnoText');
let name = $('#nameText');
let marks = $('#marksText');
let orderList = $('#orderList')


var rollNoValue;
var nameValue;
var marksValue; 


function addAskToDom() {
    let li = document.createElement("li");
    li.innerHTML = `   
    <li>Roll no - <span>${rollNoValue}</span> , <span>${nameValue}</span> has scored <span>${marksValue}</span> marks.</li>
     `;
     orderList.append(li);
}


function showNotification(msg) {
   alert(msg)
}

$('#btn').click(function () {
    rollNoValue = rollNo.val();
    nameValue = name.val();
    marksValue = marks.val();


    if (!rollNoValue || !nameValue || !marksValue) {
        showNotification("Please fill all fields")
        return;
    }

    rollNo.val('')
     name.val('');
     marks.val('');

     addAskToDom();
   

})

