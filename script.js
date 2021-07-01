let i=1;
let ele,cont;
cont = document.getElementById('container');

function makeGrid(size)
{
    
    cont.style.gridTemplateColumns = "repeat("+size+", 1fr)";
    cont.style.gridTemplateRows = "repeat("+size+", 1fr)";
    
    for(i=1;i<=(size*size);i++)
    {
        ele = document.createElement('div');
        ele.id = 'd' + i;
        ele.classList.add('cells');
        cont.appendChild(ele);
    }
    
    let cells = document.querySelectorAll(".cells");
    
    cells.forEach((cell) => {
    
        cell.addEventListener('mouseover', () => {
            
            cell.style.backgroundColor = "blue";
            
        });
        
    })
}
//Initializing the GRID as 16*16
makeGrid(16);


function clearCanvas()
{
    let cells = document.querySelectorAll(".cells");
    cells.forEach((cell) => {
    
         
            cell.style.backgroundColor = "white";
        
    })
    
}














let resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener('click', () => {
    
    clearCanvas();
    let input;
    do
    {
        input = parseInt(prompt("Enter number of squares per side(less than 100) to make the new grid."));
    }while(input > 100)
    
    makeGrid(input);
    
    
    
    
})
