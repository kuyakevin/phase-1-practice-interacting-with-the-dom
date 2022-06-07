document.addEventListener('DOMContentLoaded', () => { //event listener that waits for the code to run until after the page loads
    //declared scoped variables to make things easier 
    let counter = document.getElementById("counter"); 
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let pause = document.getElementById("pause");
    let like = document.getElementById("heart");
    const likes = document.querySelector('.likes');
    let submit = document.getElementById("submit")

    let numberLikes = 0;
    let interval = setInterval(increment, 1000);
    let i = -1;
    function increment() {
        i++
        document.querySelector('h1#counter').textContent = i;
        numberLikes = 0;
    }
    increment();

    //buttons that subtract/add/pause/like
    minus.addEventListener('click', () => {
        i--;
        document.querySelector('h1#counter').textContent = i;
    })
    plus.addEventListener('click', () => {
        i++;
        document.querySelector('h1#counter').textContent = i;
    })
    pause.addEventListener('click', () => {
        if(document.querySelector("#pause").innerText == "pause") {
            clearInterval(interval);
            document.querySelector('#pause').innerText = "resume"
            document.getElementById("minus").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
        }else{
            interval = setInterval( increment, 1000);
            document.querySelector('#pause').innerText = "pause"
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;
        }
    })

    //pressing the heart button will append a list to the comments section with the number of likes a number has
    like.addEventListener('click', () => {
        let currentNumber = counter.textContent 
        let lastLike = likes.lastChild
        let node = document.createTextNode(currentNumber + " has been liked " + numberLikes + " time(s).");
        numberLikes++
        let li = document.createElement('li')
        li.appendChild(node);
        if(numberLikes>1){
            lastLike.replaceWith(li)
        }else{
            likes.appendChild(li);
        }
    })

    //event listener to submit comments 
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let comment = document.querySelector(`input#comment-input`).value;
        let commentList = document.querySelector(".comments");
        let p = document.createElement("p");
        let node = document.createTextNode(comment);
        p.appendChild(node);
        commentList.appendChild(p);
        document.querySelector('input#comment-input').value = '';
    })   
})  