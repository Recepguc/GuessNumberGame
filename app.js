let number= Math.floor(Math.random()*100+1)
console.log(number);
let button= document.getElementById("button")
let input=document.getElementById("input")
let span=document.getElementById("span")
let head=document.getElementById("header")
let img1=document.getElementById("img1")
let img2=document.getElementById("img2")
let img3=document.getElementById("img3")
let reset=document.getElementById("reset")
let head2=document.getElementById("header2")
let head3=document.getElementById("header3")
let attemp=document.getElementById("attemp")

let list=[1,number,100]

sayı =  Number(span.innerText)

button.addEventListener("click" , () => {
    sayı -=1

    span.innerHTML = sayı
    if(input.value==number){
        head.style.display="none"
        head2.style.display="inline-block"
        img1.style.display="none"
        img3.style.display="inline-block"
        attemp.style.display="none"
        head.style.display="none"
        input.style.display="none"

    }
    else if(sayı==0){
        head.style.display="none"
        head3.style.display="inline-block"
        img1.style.display="none"
        img2.style.display="inline-block"
        attemp.style.display="none"
        head.style.display="none"
        input.style.display="none"

    }


    else{ 
        list.push(+input.value)
        list.sort((a,b)=>a-b)
        let sıra=list.lastIndexOf(number)
        console.log(sıra);
        head.innerHTML=` Guess The Number (${list[(sıra-1)]}-${list[(sıra+1)]})`
        console.log(typeof (sıra));
        console.log(list[(sıra-1)]);
        

    }

        
    
    // else if(input.value>number){
    //     alert( `sory try again from 1 to ${input.value}`)
    // }
    // else if(input.value<number){
    //     alert( `sory try again from  ${input.value} to `)
    // }
})
reset.addEventListener("click",()=>{
    window.location.reload(false)
})
