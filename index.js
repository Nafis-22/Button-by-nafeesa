function increment()
{
    let demo = document.getElementById('demo');
    let count = parseInt(demo.innerHTML); 
    count++; 
    demo.innerHTML = count;   
}

function decrement()
{
    let demo = document.getElementById('demo');
    let count = parseInt(demo.innerHTML); 
    count--; 
    demo.innerHTML = count;   
}
