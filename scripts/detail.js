import {queryParam} from '../utils/query-params.js';
import {getBlogEntryByID} from '../data/blog_data.js';

// get the URL of current page and get the query parameter.
let pageID = queryParam(window.location.href, 'id');
console.log("Param is: " + pageID); 

let blogEntry = getBlogEntryByID(pageID);

let dataString =  `
                  
                    <div class="header-container">
                      <p class="display-6 text-end"> ${blogEntry.date}</p>
                      <p class="display-4"> ${blogEntry.title} </p>
                    </div>
                  <br>


                  <p class="lead"> ${blogEntry.summary} </p>
                  <p class="lead"> ${blogEntry.detail} </p>
                  <br>

                  `;

document.querySelector('.js-blog-body-container').innerHTML = dataString;

document.querySelector('.js-return-button').addEventListener('click', () => {
  window.location.replace(`SimpleBlog/../index.html`);
  //location.href = '../index.html';
})
