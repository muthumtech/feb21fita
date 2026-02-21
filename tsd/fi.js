// A simple script to add interactivity to your HTML
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    
    // Change text when the heading is clicked
    title.addEventListener('click', () => {
        title.style.color = 'blue';
        title.innerText = 'JS is Working!';
        console.log('The title was clicked!');
    });
});

// A basic function example
function greetUser(name) {
    alert('Welcome to the site, ' + name + '!');
}
