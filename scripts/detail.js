import {queryParam} from '../utils/query-params.js';

// get the URL of current page and get the query parameter.
let pageID = queryParam(window.location.href, 'id');
console.log("Param is: " + pageID); 







document.querySelector('.js-return-button').addEventListener('click', () => {
  window.location.replace('../index.html')
  //location.href = '../index.html';
})
