

// Array of Java Script objects 
export const blogEntries = [{
  id: "1",
  category: "Development",
  title: "Creation of blog",
  date: "23-04-2026",
  summary: 'Creation of a HTML, CSS and JavaScript blogging site with links to other static or JavaScript powered pages. The idea is that I can use it as a training execise and I can use it to show Evie how to style a website. She could even use it as the basis for her graphic design website.',
  link: "https://github.com/MikeEWebber/SimpleBlog",
  photos: "../images/Blog001_1.jpg",
  detail: 'The data is initially stored in a separate Javascript file as an array of JavaScript objects so that no changes are needed to the webpages when a new blog entry is added. The landing page \\n The '
}, {
  id: "2",
  category: "Walks",
  title: "Walk - Fairy steps",
  date: "23-04-2026",
  summary: "Summary of walk",
  link: "",
  photos: "../images/FairySteps001_1.jpg",
  detail: "Details for the walk."
}];



export function getBlogEntryByID(id){

  let selectedEntry;

  blogEntries.forEach(entry => {
    if (id === entry.id){
      selectedEntry = entry;
    }
  });
  return selectedEntry;

}

// Need get items by Category
export function blogEntriesByCategory(category){

  let blogList = [];

  blogEntries.forEach(entry => {
    if (category === entry.category){
      blogList.push(entry);
    }
  });

  return blogList;

}


