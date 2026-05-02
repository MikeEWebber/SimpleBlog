import {queryParam} from '../utils/query-params.js';
import {getBlogEntryByID} from '../data/blog_data.js';

// get the URL of current page and get the query parameter.
let pageID = queryParam(window.location.href, 'id');
console.log("Param is: " + pageID); 

let blogEntry = getBlogEntryByID(pageID);

let dataString =  `
                  
                    <div class="header-container">
                      <p class="title-element"> ${blogEntry.title} </p>
                      <p class="spacer-element"></p>
                      <p class="date-element"> ${blogEntry.date}</p>  
                    </div>



                  <p class=""> ${blogEntry.summary} </p>
                  <p class=""> ${blogEntry.detail} </p>

                  `;

document.querySelector('.js-blog-body-container').innerHTML = dataString;

document.querySelector('.js-return-button').addEventListener('click', () => {
  window.location.replace(`SimpleBlog/../index.html`);
  //location.href = '../index.html';
})
