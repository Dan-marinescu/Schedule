const days = ['Saturday','Friday','Thursday','Wednesday','Tuesday','Monday','Sunday','']
const shift = ['Morning','Afternoon','Night']

const generateOverallSchedaule = () => {
    const m = []
    const wrapper = document.getElementById('overall')
    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.innerHTML = days[i]
        wrapper.appendChild(div)
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = document.createElement('div');
            div.className = 'pers';
            div.innerHTML = ''
            wrapper.appendChild(div)
            m.push(div)
        }
        const time = document.createElement('div')
        time.innerHTML = shift[i]
        wrapper.appendChild(time)
    }
    return m
}

const generatePersonalSchedaule = () => {
    const m = []
    const wrapper = document.getElementById('personal')
    var counter = 0;
    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(180,180,180)'
        div.innerHTML = days[i]
        wrapper.appendChild(div)
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = createDiv(counter);
            wrapper.appendChild(div)
            m.push(div)
            // removeShiftOption(counter);
        }
        const time = document.createElement('div')
        time.style.backgroundColor = 'rgb(180,180,180)'
        time.innerHTML = shift[i]
        wrapper.appendChild(time)
    }
    return m
}

function createDiv(val){
    const div = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add("btnRemove","ite1");
    btn.value = val;
    btn.addEventListener("click",function (){
        if(div.className =='accept'){
            this.classList.remove("btnAccept","accept");
            this.classList.add("btnRemove","remove");
            div.className = 'remove';

        }else{
            this.classList.remove("btnRemove","remove");
            this.classList.add("btnAccept","accept");
            div.className = 'accept';
        }
    });
    div.className = 'remove';
    div.appendChild(btn);
    return div;
}



const generateAdminSchedaule = () => {
    const m = []
    const wrapper = document.getElementById('admin')
    var counter = 0
    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(180,180,180)';
        div.innerHTML = days[i];
        wrapper.appendChild(div);
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = document.createElement('div');
            const btnup = document.createElement('button');
            const btndown = document.createElement('button');
            btndown.classList.add("adminClass");
            btnup.classList.add("adminClass");
            btnup.value = counter;
            btndown.value = counter;
            btndown.style.background ="url(images/down.jpg)"; 
            btnup.style.background ="url(images/up.jpg)"; 
            div.innerHTML = '<span> <div id="'+counter+'">0</div> </span>' 
            div.appendChild(btnup)
            div.appendChild(btndown)
            removeShiftOption(counter);
            btnup.addEventListener("click",function(){
                var x = parseInt(document.getElementById(this.value).innerHTML);
                x += 1;
                document.getElementById(this.value).innerHTML = x;
                overallArray[this.value].style.backgroundColor ="white";
                addShiftOption(this.value);
            });
            btndown.addEventListener("click",function(){
                var x = parseInt(document.getElementById(this.value).innerHTML);
                if (x > 0) {
                    x -= 1;
                    if(x==0){
                        removeShiftOption(this.value);
                        overallArray[this.value].style.backgroundColor ='rgb(180,180,180)';
                    }
                }
                document.getElementById(this.value).innerHTML = x;
            });
            wrapper.appendChild(div)
            m.push(div)
            counter++
        }
        const time = document.createElement('div')
        time.style.backgroundColor = 'rgb(180,180,180)'

        time.innerHTML = shift[i]
        wrapper.appendChild(time)
    }
    return m
}
const personalArray = generatePersonalSchedaule();
const overallArray = generateOverallSchedaule();
const adminArray = generateAdminSchedaule();

showArray(personalArray);
function showArray(x){
    for(var i=0;i<x.length;i++){
        console.log(x[i]);
    }
}



function removeShiftOption(num){
    personalArray[num].className ='';
    if(typeof personalArray[num].getElementsByClassName('btnAccept')[0]==="undefined")
        personalArray[num].getElementsByClassName('btnRemove')[0].style.display ='none'; 
    else{
        personalArray[num].getElementsByClassName('btnAccept')[0].style.display ='none'; 
    }
    personalArray[num].style.backgroundColor ='rgb(180,180,180)';
}
function addShiftOption(num){
    personalArray[num].className ='';
    personalArray[num].style.backgroundColor ='';

    personalArray[num].classList.add('remove');
    if(typeof personalArray[num].getElementsByClassName('btnAccept')[0]==="undefined")
         personalArray[num].getElementsByClassName('btnRemove')[0].style.display ='block'; 
    else{
        personalArray[num].getElementsByClassName('btnAccept')[0].style.display ='block'; 
    }
    // else
    
}



var fName = document.getElementById("fname");
fName.addEventListener("change",function() {
    console.log(this.value);
});

const modes = ['personal', "overall", "admin"]

function modeType(type) {
    document.getElementById(type).style.display = "grid";
    modes.filter(m => m !== type).forEach(m => {
        document.getElementById(m).style.display = "none";
    })
}

// function clickAccept(btnObj) {
//     console.log(btnObj.className)
//     console.log(btnObj.value)
//     console.log(btnObj.parentElement)
//     btnObj.style.display = "none";
//     btnObj.parentElement.querySelectorAll('.btnRemove')[0].style.display = "block";
//     btnObj.parentElement.className = 'ite2';

// }

// function clickRemove(btnObj) {
//     console.log(btnObj.value)
//     console.log(btnObj.className)
//     btnObj.style.display = "none";
//     btnObj.parentElement.querySelectorAll('.btnAccept')[0].style.display = "block";
//     btnObj.parentElement.className = 'ite1';

//     // document.getElementsByClassName(className)[0].style.background = 'green';
//     // btnObj.style.background = '#09ff00';
//     // btnObj.style.display = "block";
// }

// function clickAccept(className) {
//     console.log(className)
//     var x = document.querySelectorAll(`.${className} .btnAccept`);
//     console.log(x);
//     // document.getElementsByClassName(className)[0].style.background = 'red';
//     document.querySelectorAll(`.${className}`)[0].style.background = 'red';

//     document.querySelectorAll(`.${className} .btnAccept`)[0].style.display = "none";
//     document.querySelectorAll(`.${className} .btnRemove`)[0].style.display = "block";
// }

// function clickRemove(className) {
//     console.log(className)
//     // document.getElementsByClassName(className)[0].style.background = 'green';
//     document.querySelectorAll(`.${className} `)[0].style.background = '#09ff00';

//     document.querySelectorAll(`.${className} .btnRemove`)[0].style.display = "none";
//     document.querySelectorAll(`.${className} .btnAccept`)[0].style.display = "block";

// }


