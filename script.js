//target an element button
const buttonelement =document.querySelector(".button");
buttonelement.addEventListener("click", () => {
    //take the input from the user
    const textelement = document.getElementsByClassName("text")[0].value;
    // console.log(textelement )

    //create a new element
    const li = document.createElement("li")
    // console.log(li)
    li.innerText=textelement;
    
    document.querySelector(".list").appendChild(li)
    document.getElementsByClassName('text')[0].value='';
})