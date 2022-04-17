// console.log(8);
// console.log("Природа");
// console.log("Птичка "+"летит");
// let cats=67;
// console.log(cats);
// let name="Вероника"
// name="Василиса"
// console.log(name);
// let food="Картошка в мундире"
// console.log(name +" любит кушать. Любимое блюдо "+food);
// let animal="Аксолотль"
// console.log(name +" любит животных. Её любимое животное - это "+animal);
// let zagolovok=document.getElementById("zagolovok");
// zagolovok.onclick=function(){
// zagolovok.innerHTML="Вышку унесло смерчем."
// }
// console.log(20);
// console.log("Утюг");
// let chislo=20;
// let iron="Утюг";
// console.log(chislo);
// console.log(iron);
// let h2=document.getElementById("h2");
// h2.onclick=function(){
//     zagolovok.innerHTML="Вышка"
// }
let okButton=document.getElementById("okButton");
let light=document.getElementById("light");
let medium=document.getElementById("medium")
let hard=document.getElementById("hard")
let myInput=document.getElementById("myInput")
let max=10;
let h1=document.getElementById("h1")
let secretNumber=Math.floor(Math.random()*max+1)
if(secretNumber==1){
    h1.innerHTML="Победа"
    okButton.disabled=true
}
// console.log(secretNumber);
let pravila=document.getElementById("p")
let hpTitle=document.getElementById("h2")
let hp=3;
let newButton=document.getElementById("newButton")
myInput.focus()
light.onclick=function(event){
    event.preventDefault();
    console.log(1,10);
    light.style.border="3px solid black"
    medium.style.border="3px solid transparent"
    hard.style.border="3px solid transparent"
    max=10
    event.preventDefault();
    newGame()
}
medium.onclick=function(event){
    event.preventDefault();
    console.log(1,50);
    medium.style.border="3px solid black"
    light.style.border="3px solid transparent"
    hard.style.border="3px solid transparent"
    max=50
    event.preventDefault();
    newGame()
}
hard.onclick=function(event){
    event.preventDefault()
    console.log(1,100);
    hard.style.border="3px solid black"
    medium.style.border="3px solid transparent"
    light.style.border="3px solid transparent"
    max=100
    newGame()
    event.preventDefault();
}
okButton.onclick=function(event){
    // Чтобы не обновлялась страница
    event.preventDefault();
    if(myInput.value!=""){
        if(myInput.value==secretNumber){
            console.log("Победа!");
            h1.innerHTML="Победа"
            // disabled = недоступный. Эта строка блокирует кнопку проверки
            okButton.disabled=true
        }
        else{
            if(myInput.value==555){
                h1.innerHTML="Победа"
                okButton.disabled=true
            }
            else{
                console.log("Нeверно!");
                hp=hp-1;
                hpTitle.innerHTML="Жизни - "+hp
                if(secretNumber>myInput.value){
                    pravila.innerHTML="Моё число больше"
                    
                }
                if(secretNumber<myInput.value){
                    pravila.innerHTML="Моё число меньше"
                }
                if(hp==0){
                    okButton.disabled=true
                    h1.innerHTML="Поражение"
                    okButton.disabled=true
                    p.innerHTML="Моё число было "+secretNumber;
                }
            }
            
        }
    }
    myInput.select()

    // value - значение
    // console.log(myInput.value);
}
newButton.onclick=function(event){
    event.preventDefault();
    newGame()
    karusel()
}

function newGame(){
    // Чтобы не обновлялась страница
    h1.innerHTML="Угадай число"
    hp=3;
    hpTitle.innerHTML="Жизни - 3"
    okButton.disabled=false
    secretNumber=Math.floor(Math.random()*max+1)
    myInput.value=""
    // select - выбирать, чтобы каждый раз не нажимать на инпут

    myInput.select()
    if(max==10){
        pravila.innerHTML="Правила: компьютер загадал число от 1 до 10, попробуй его отгадать."
    }
    if(max==50){
        pravila.innerHTML="Правила: компьютер загадал число от 1 до 50, попробуй его отгадать."
    }
    if(max==100){
        pravila.innerHTML="Правила: компьютер загадал число от 1 до 100, попробуй его отгадать."
    }
    // console.log("Карусель");
    // console.log("Карусель");
    // console.log("Карусель");
}
function karusel(){
    console.log("Карусель");
    console.log("Карусель");
    console.log("Карусель");
}