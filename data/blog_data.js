

// Array of Java Script objects 
export const blogEntries = [{
  id: "1",
  category: "Development",
  title: "Creation of blog",
  date: "23-04-2026",
  summary: "Creation of a HTML, CSS and JavaScript blogging site with links to other static or JavaScript powered pages",
  link: "",
  photos: "",
  detail: "The data is stored in a separate Javascript file as an array of JavaScript objects."
}, {
  id: "2",
  category: "Walks",
  title: "Walk - Fairy steps",
  date: "23-04-2026",
  summary: "Summary of walk",
  link: "",
  photos: "",
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


