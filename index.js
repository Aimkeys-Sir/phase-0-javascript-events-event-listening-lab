function addingEventListener()
{
    const input=document.getElementById("input")
    function clickedAlert(){
        alert("I was clicked")
    }
    input.addEventListener("click",clickedAlert)
}

