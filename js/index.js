let arrButtons = [];
let buttons = document.getElementsByTagName('button');
let clickButtons = [];
let clickButton;
let click;
let actualValue =document.getElementById ('display');

//создаем массив из имен кнопок
for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].id) arrButtons.push(buttons[i].id);
};
//навешиваем каждой кнопке слушателя
for (var i = 0; i < arrButtons.length; i++) {
     clickButton = document.getElementById(arrButtons[i]);
    clickButton.addEventListener('click', ButtonClick);    
};

function ButtonClick(eventObjekt) {
   
     click = eventObjekt.currentTarget.innerHTML;
    Consolidate (click);
    if (click=="RES") {
        clickButtons=[];
        actualValue.value=clickButtons.join ('')}
       //makeOperation(operation);
    
};

 function Consolidate (x) {
    clickButtons.push(x);
    actualValue.value=clickButtons.join ('');
    if (clickButtons.includes("=")) 
    {var clickBut;
     clickButtons.pop();
     clickBut=clickButtons.join ('')
     actualValue.value=eval(clickBut);
    }
 }
