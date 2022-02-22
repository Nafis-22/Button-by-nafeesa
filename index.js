function increment()
{
    let demo = document.getElementById('demo');
    let count = parseInt(votes.innerHTML); 
    count++; 
    votes.innerHTML = count;   
}

function decrement()
{
    let demo = document.getElementById('demo');
    let count = parseInt(votes.innerHTML); 
    count--; 
    votes.innerHTML = count;   
}