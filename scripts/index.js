import {blogEntries, getBlogEntryByID, blogEntriesByCategory} from '../data/blog_data.js';

let dataString = ``;
displayBlogEntries(blogEntries);
buttonEvents();
makeTabActive("All");


export function displayBlogEntries(selectedBlogEntries){
    selectedBlogEntries.forEach(element => {
        
        dataString = dataString + 
        `
        <div class="col-12 col-md-6 col-xl-4">
            <div >
                <div class="card border-primary">
                    <div class="card-header">
                        ${element.date}
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">${element.title}</h4>
                      <p class="card-text">${element.summary}</p>
                    </div>
                    <img class="index-image float-right" src=${element.photos} alt="Card image cap">

                    
                    <br>
                    <div class="container h-100">
                        <div class="d-flex h-100"> 
                            <div class="align-self-end ml-auto">    
                                <input type="button" class="btn btn-primary float-right js-more-button" data-id="${element.id}" value="Read More">
                            </div>
                        </div>
                    </div>
                    
                    
                    <br>
                </div>
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
