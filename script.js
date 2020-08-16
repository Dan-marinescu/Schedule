
const generateSchedaule = () => {
    const m = []
    const wrapper = document.getElementById('overall')
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 7; j++) {
            const div = document.createElement('div');
            div.innerHTML = "Yeah"
            wrapper.appendChild(div)
            m.push(div)
        }
        const time = document.createElement('div')
        time.innerHTML = 'morning'
        wrapper.appendChild(time)
    }
    return m
}





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


function clickAccept(className) {
    console.log(className)
    var x = document.querySelectorAll(`.${className} .btnAccept`);
    console.log(x);
    // document.getElementsByClassName(className)[0].style.background = 'red';
    document.querySelectorAll(`.${className}`)[0].style.background = 'red';
    document.querySelectorAll(`.${className} .btnAccept`)[0].style.display = "none";
    document.querySelectorAll(`.${className} .btnRemove`)[0].style.display = "block";
}

function clickRemove(className) {
    console.log(className)
    // document.getElementsByClassName(className)[0].style.background = 'green';
    document.querySelectorAll(`.${className} `)[0].style.background = '#09ff00';

    document.querySelectorAll(`.${className} .btnRemove`)[0].style.display = "none";
    document.querySelectorAll(`.${className} .btnAccept`)[0].style.display = "block";

}