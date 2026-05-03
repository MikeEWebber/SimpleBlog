import {blogEntries, getBlogEntryByID, blogEntriesByCategory} from '../data/blog_data.js';

let dataString = ``;
displayBlogEntries(blogEntries);
buttonEvents();

export function displayBlogEntries(selectedBlogEntries){
    selectedBlogEntries.forEach(element => {
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
}

function buttonEvents(){
    document.querySelectorAll('.js-more-button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.id);
        window.location.replace(`./detail.html` + `?id=${button.dataset.id}`);
        //location.href = './detail.html' + `?id=${button.dataset.id}`;
    })
});
}



document.querySelectorAll('.js-tab-links').forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.dataset.id === "Development"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("Development"));
            buttonEvents();
        } else if (button.dataset.id=== "Walks"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("Walks"));
            buttonEvents();
        } else if (button.dataset.id === "General"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("General"));
            buttonEvents();
        } else {
            dataString = '';
            displayBlogEntries(blogEntries);
            buttonEvents();
        }
    });
})

let chosenEntry = getBlogEntryByID('1');
console.log(chosenEntry.title);

console.log(blogEntriesByCategory("Walking"));
