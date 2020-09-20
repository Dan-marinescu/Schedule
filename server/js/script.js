const days = ['Saturday','Friday','Thursday','Wednesday','Tuesday','Monday','Sunday',''];
const shift = ['Morning','Afternoon','Night'];

const generateOverallSchedaule = () => {
    const m = [];
    const wrapper = document.getElementById('overall');
    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.innerHTML = days[i];
        wrapper.appendChild(div);
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = document.createElement('div');
            div.innerHTML = '';
            div.id = "usernames";
            // div.classList.add('test');
            wrapper.appendChild(div);
            m.push(div);
        }
        const time = document.createElement('div');
        time.innerHTML = shift[i];
        wrapper.appendChild(time);
    }
    return m;
}

const generatePersonalSchedaule = () => {
    const m = [];
    const wrapper = document.getElementById('personal');
    var counter = 0;
    for(let i = 0 ; i<8 ; i++){
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(180,180,180)'
        div.innerHTML = days[i];
        wrapper.appendChild(div);
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            const div = createDiv(counter);
            wrapper.appendChild(div);
            m.push(div);
            counter++;
        }
        const time = document.createElement('div');
        time.style.backgroundColor = 'rgb(180,180,180)';
        time.innerHTML = shift[i];
        wrapper.appendChild(time);
    }
    return m;
}

function createDiv(val){
    const div = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add("btnAccept");
    div.className = 'accept';

    btn.value = val;
    btn.addEventListener("click",function (){
        if(div.className =='accept'){
            this.classList.remove("btnAccept","accept");
            this.classList.add("btnRemove","remove");
            div.className = 'remove';
            addToArray(val);
            addOrRemoveOverall(val);

        }else{
            this.classList.remove("btnRemove","remove");
            this.classList.add("btnAccept","accept");
            div.className = 'accept';
            removeFromArray(val);
            addOrRemoveOverall(val);
        }
    });
    div.appendChild(btn);
    return div;
}



const generateAdminSchedaule = () => {
    const m = [];
    const wrapper = document.getElementById('admin');
    var counter = 0;
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
            div.innerHTML = '<span> <div id="'+counter+'">0</div> </span>' ;
            div.appendChild(btnup);
            div.appendChild(btndown);
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
                        arr[this.value] = [];
                        addOrRemoveOverall(this.value);
                    }
                }
                document.getElementById(this.value).innerHTML = x;
            });
            wrapper.appendChild(div);
            m.push(div);
            counter++;
        }
        const time = document.createElement('div');
        time.style.backgroundColor = 'rgb(180,180,180)';

        time.innerHTML = shift[i];
        wrapper.appendChild(time);
    }
    return m;
}

var username = document.getElementById("username").innerHTML;
var arr = new Array(21);
for(var i = 0 ;i<arr.length;i++){
    arr[i] = new Array();
}

const personalArray = generatePersonalSchedaule();
const overallArray = generateOverallSchedaule();
const adminArray = generateAdminSchedaule();


function addOrRemoveOverall(val){
    overallArray[val].innerHTML = '';
    for(var i = 0 ; i < arr[val].length;i++)
        overallArray[val].innerHTML += arr[val][i];
        
}



function addToArray(val){
    if(arr[val].indexOf(username) === -1)
        arr[val].push(username);
}

function removeFromArray(val){
    if(arr[val].indexOf(username) !== -1)
        arr[val] = arr[val].filter(item => item !== username);    
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

    personalArray[num].classList.add('accept');
    if(typeof personalArray[num].getElementsByClassName('btnAccept')[0]==="undefined")
         personalArray[num].getElementsByClassName('btnRemove')[0].style.display ='block'; 
    else{
        personalArray[num].getElementsByClassName('btnAccept')[0].style.display ='block'; 
    }
}

const modes = ['personal', "overall", "admin"]

function modeType(type) {
    document.getElementById(type).style.display = "grid";
    modes.filter(m => m !== type).forEach(m => {
        document.getElementById(m).style.display = "none";
    })
}


