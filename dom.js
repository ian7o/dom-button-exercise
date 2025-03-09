let count = 0

document.getElementById("button1").addEventListener("click", function() {
    let li = document.createElement("li")
    li.innerHTML = document.getElementById("value").value;

    let button = document.createElement("button")
    button.classList.add("removeItem")
    button.innerHTML = "click to remove item from list";

    document.getElementById("printHere").appendChild(li);
    document.getElementById("printHere").appendChild(button);


    if(count >=4){
        document.getElementById("button1").style.display="none"
    }

    button.onclick= function() {
        count--
        li.style.display="none";
        button.style.display="none";
        if(count<=4){
            document.getElementById("button1").style.display="inline-block";
        }
    };

    count++
})