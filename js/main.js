
document.getElementById("footer").innerHTML = "© " + new Date().getFullYear() + " Angel";

//Create actions and alert message 
const button_alert = document.getElementById("btn-alert");
const text_counter = document.getElementById('txt-counter')
button_alert.onclick = function(){alert('Hello Angel!');}
button_alert.onmouseover = () => {
    button_alert.innerText = 'Try to Click!';
};
button_alert.onmouseleave = () => {
    button_alert.innerText = 'Click Me!';
};

//Create an action, use different colors to mark even and odd
let count = 0;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     text_counter.innerHTML = "Number:" + count.toString();
     if (count % 2 == 0) {
        text_counter.classList.remove('odd');
        text_counter.classList.add('even');
     }else{
        text_counter.classList.remove('even');
        text_counter.classList.add('odd');
     }
}

//Use a loop method to create an ordered sequence and label odd and even numbers
for (let i = 1; i <= 100; i = i + 1) {
    const listItem = document.createElement('li');
    if (i % 2 == 0) {
        listItem.textContent = "even";
    }else{
        listItem.textContent = "odd";
    }
    document.getElementById('numbers').append(listItem);
}

