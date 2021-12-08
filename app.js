function color(){
    this.style.backgroundColor = 'green';
}
function decolor(){
    this.style.backgroundColor = 'black';
}
function clearUpdate(){
    let size = prompt('New Size: ');
    let container = document.querySelector('#container');
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    makeCanvas(container,size);

}
function makeCanvas(container,x){
    for (let i = 0;i < x;i++){
        let row = document.createElement('div');
        row.id = 'row'; 
        row.classList.add('row');
        for (let i = 0;i < x;i++){
            let col = document.createElement('div');
            col.id = 'col';
            col.classList.add('col');
            col.style.borderWidth = '1px';
            col.style.borderColor = 'white';
            col.style.borderStyle = 'solid';
            col.style.margin = '1px';
            // col.style.height = col.style.width = '10px';
            col.addEventListener('mouseenter', color);
            // col.addEventListener('mouseleave', decolor);
            row.appendChild(col);
        } 
        container.appendChild(row);
    }
}

const container = document.querySelector('#container');
makeCanvas(container,16);

const footer = document.querySelector('#button-container');
const button = document.createElement('button');
button.innerText = 'CLEAR';
button.addEventListener('click',clearUpdate);
footer.appendChild(button);