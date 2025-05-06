const bar = document.querySelector('#fa-solid')
const ulItem = document.querySelector("#menu-s")

function clickBar(){
    if(ulItem.style.left==='0px'){
        ulItem.style.left = '-1026px';

    }else{
        ulItem.style.left = '0px';
    }
}

bar.addEventListener('click', clickBar);



