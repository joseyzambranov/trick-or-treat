const btnTrick = document.querySelector("#trick")
const btntreat = document.querySelector("#treat")
const inputName = document.querySelector("#name")
const inputAge = document.querySelector("#age")
const inputheight = document.querySelector("#height")
const resultDislay = document.querySelector("#result")

let arrayKids = []

btnTrick.addEventListener("click",function(){
    arrayKids.push(inputName.value)
    arrayKids.push(inputAge.value)
    arrayKids.push(inputheight.value)

    resultDislay.innerHTML = arrayKids
})

