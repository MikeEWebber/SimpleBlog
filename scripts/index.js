import {blogEntries, getBlogEntryByID, blogEntriesByCategory} from '../data/blog_data.js';

let dataString = ``;
displayBlogEntries(blogEntries);
buttonEvents();
makeTabActive("All");


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

            <div class="body-container">
                <p class="summary-element">${element.summary} </p>
                <img class="index-image" src=${element.photos} alt="image">

            </div>


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

function makeTabActive(item){
    // revove all active tabs
    document.querySelectorAll('.js-tab-links').forEach((button) =>{
        button.classList.remove("tab-button-made-active");
    });
    // add the correct active one
    let myButton = document.getElementById(item);
    myButton.classList.add("tab-button-made-active");
}

document.querySelectorAll('.js-tab-links').forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.dataset.id === "Development"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("Development"));
            buttonEvents();
            makeTabActive("Development");
        } else if (button.dataset.id=== "Walks"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("Walks"));
            buttonEvents();
            makeTabActive("Walks");
        } else if (button.dataset.id === "General"){
            dataString = '';
            displayBlogEntries(blogEntriesByCategory("General"));
            buttonEvents();
            makeTabActive("General");
        } else {
            dataString = '';
            displayBlogEntries(blogEntries);
            buttonEvents();
            makeTabActive("All");
        }
    });
})

let chosenEntry = getBlogEntryByID('1');
console.log(chosenEntry.title);

console.log(blogEntriesByCategory("Walking"));
