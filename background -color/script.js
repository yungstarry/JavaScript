// let boddy = document.getElementsByTagName('body')
let index = 0;

function changeColors(){
    let colors = [
        'red','blue','orange','yellow','green','purple' ,'black'
    ]
    document.getElementsByTagName('body')[0].style.background = colors[index++];
    if(index > colors.length -1){
    index =0;}

};

