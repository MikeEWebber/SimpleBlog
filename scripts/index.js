import {blogEntries} from '../data/blog_data.js';

let dataString = ``;

// loop through all items in the blogEntries array and display

blogEntries.forEach(element => {
    dataString = dataString + `<p> ${element.title} </p><p>${element.summary} </p>`
})




document.querySelector('.js-blog-body-container').innerHTML = dataString;




let greeting = 'hello';
    
    console.log(blogEntries[0].detail);