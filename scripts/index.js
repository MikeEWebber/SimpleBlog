import {blogEntries, getBlogEntryByID} from '../data/blog_data.js';

let dataString = ``;

// loop through all items in the blogEntries array and add to dataString

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
            <p class="detail-element detail-element-hide">${element.detail} </p>

            <div class="btn-right">
                <input type="button" class="read-more-button js-more-button" data-id="${element.id}" value="Read More">
            </div>

            
        </div>
        `
})
// send the dataString to the HTML page. 
document.querySelector('.js-blog-body-container').innerHTML = dataString;

document.querySelectorAll('.js-more-button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.id);
    })
});

let chosenEntry = getBlogEntryByID('1');
console.log(chosenEntry.title);
