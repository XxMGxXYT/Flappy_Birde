
let sec = document.getElementById("sec")
let bird = document.getElementById("bird")
let test = 0

// Fly function
function fly(){
    // Add click event on the section
    sec.addEventListener("click", () =>{
        // Make the bird fly up with 20%
        bird.style.top = `${test}%`
        // Add 20 to the right position of the bird
        test -= 10
    })
}

// Fall function
function fall(){
    // increase 2 to the right position of the bird
    test += 2
    // If the right position of the bird equal 81
    if(test >= 81){
        // Make the section Unclickable
        sec.style.pointerEvents = "none";
        // Return nothing => function will stop
        return false
    }
    // If the right position of the bird not equal 81
    else{
        // After 50 millseconds, bird will decrease by 2%, and function will work again
        setTimeout(() =>{
            bird.style.top = `${test}%`
            fall()
        }, 50)
    }
}

fly()
setTimeout(() => fall(), 3000)

/*
function section_Func(){
    let bird = document.getElementById("bird")
    let sec = document.getElementById("sec")
    ////////////////////////////////////////////
    sec.addEventListener("click", () => {
        bird.classList.add("clicked")
        bird.style.transform = `translateY(-${counter}%)`
        counter += 20
        setInterval(() => bird.style.transform = `translateY(-${counter -= 20}%)`, 1000)
        if(counter === "0"){
            clearInterval()
        }
    })
}
*/

// bird.addEventListener("click", () => {
//     bird.style.transform = `translateY(-${counter}%)`
//     // bird.classList.add("clicked")
//     // setTimeout(() =>{
//     //     bird.classList.remove("cklicked")
//     // }, 100)
//     counter += 20
//     // setTimeout(() => {
//     //     bird.style.transform = "translateY(0%)"
//     // }, 500)
// })