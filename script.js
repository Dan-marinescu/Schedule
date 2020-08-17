
const generateSchedaule = () => {
    const m = []
    const wrapper = document.getElementById('overall')
    const days = ['Saturday','Friday','Thursday','Wednesday','Tuesday','Monday','Sunday','']
    const shift = ['Morning','Afternoon','Night']
    const colors = ['red','green','blue']
    // var css = 'table td:hover{ background-color: #00ff00 }';
    var css = 'div :hover{ background-color: #ff0000; background-color: #09ff00;   }';

    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.innerHTML = days[i]
        wrapper.appendChild(div)
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = document.createElement('div');
            div.className = 'ite2';
            // const btn = document.createElement('button')
            // div.style.backgroundColor =colors[i%3];
            div.innerHTML = '<button class="btnRemove" value ="'+(i*10+j)+'" onclick="clickRemove('+ 'this'+')" >X</button>'
            div.innerHTML += '<button class="btnAccept" value ="'+(i*10+j)+'" onclick="clickAccept('+ 'this'+')" >V</button>'
            // div.appendChild(btn)
            wrapper.appendChild(div)
            m.push(div)
        }
        const time = document.createElement('div')
        time.innerHTML = shift[i]
        wrapper.appendChild(time)
    }
    return m
}
console.log(document.getElementById('admin'))
const typeOfGrids = ['overall','admin','personal']
const b = generateSchedaule(typeOfGrids[0])
for(let i = 0 ; i<b.length;i++){
    console.log(b[i].innerHTML)
}

// console.log(generateSchedaule(typeOfGrids[1]))
// console.log(generateSchedaule(typeOfGrids[2]))


function shiftsChange(action, res) {
    var x = parseInt(document.getElementById(res).innerHTML);
    if (action == "up") {
        x += 1;
    } else {
        if (x > 0) {
            x -= 1;
        }
    }

    document.getElementById(res).innerHTML = x;
}

const modes = ['personal', "overall", "admin"]

function modeType(type) {
    document.getElementById(type).style.display = "grid";

    modes.filter(m => m !== type).forEach(m => {
        document.getElementById(m).style.display = "none";
    })
}

function clickAccept(btnObj) {
    console.log(btnObj.className)
    console.log(btnObj.value)
    console.log(btnObj.parentElement)

    // document.getElementsByClassName(className)[0].style.background = 'red';
    // btnObj.parentElement.style.background = 'red';

    btnObj.style.display = "none";
    // btnObj.style.display = "block";
    // document.querySelectorAll(`.${btnObj} .btnRemove`)[0].style.display = "none";
    // document.querySelectorAll(`.${btnObj} .btnAccept`)[0].style.display = "block";

    btnObj.parentElement.querySelectorAll('.btnRemove')[0].style.display = "block";
    // btnObj.parentElement.style.background = "red";
    btnObj.parentElement.className = 'ite2';

}

function clickRemove(btnObj) {
    console.log(btnObj.value)

    console.log(btnObj.className)
    // document.getElementsByClassName(className)[0].style.background = 'green';
    // btnObj.style.background = '#09ff00';

    btnObj.style.display = "none";
    btnObj.parentElement.querySelectorAll('.btnAccept')[0].style.display = "block";
    btnObj.parentElement.className = 'ite1';


    // btnObj.style.display = "block";

}
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


