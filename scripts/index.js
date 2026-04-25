import {blogEntries} from '../data/blog_data.js';

let dataString = ``;

// loop through all items in the blogEntries array and display

blogEntries.forEach(element => {
    dataString = dataString + 
        `
        <div class="blog-element">
            <div class="header-container">
                <p class="title-element"> ${element.title} </p>
                <p class="spacer-element"></p>
                <p class="date-element"> ${element.date}</p>
                        
            </div>
                    
            <p class="summary-element">${element.summary} </p>
            <div class="btn-right">
                <input type="button" class="read-more-button" value="Read More">
            </div>

            
        </div>
        `
})




document.querySelector('.js-blog-body-container').innerHTML = dataString;




let greeting = 'hello';
    
    console.log(blogEntries[0].detail);