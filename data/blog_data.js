

// Array of Java Script objects 
export const blogEntries = [{
  id: "1",
  category: "Development",
  title: "Creation of blog",
  date: "23-04-2026",
  summary: 'Creation of a HTML, CSS and JavaScript blogging site with links to other static or JavaScript powered pages. The idea is that I can use it as a training execise and I can use it to show Evie how to style a website. She could even use it as the basis for her graphic design website.',
  link: "https://github.com/MikeEWebber/SimpleBlog",
  photos: "images/Blog001_1.jpg",
  detail: 'The data is initially stored in a separate Javascript file as an array of JavaScript objects so that no changes are needed to the webpages when a new blog entry is added. <p class="lead"> The landing page ... '
}, {
  id: "2",
  category: "Walks",
  title: "Walk - Fairy steps",
  date: "23-04-2026",
  summary: "Summary of walk",
  link: "",
  photos: "images/FairySteps001_1.jpg",
  detail: "Details for the walk."
}, {
  id: "3",
  category: "Development",
  title: "AI's impact on Sofware Development",
  date: "06-10-2026",
  summary: "Just because humanity can do something doesn't mean we should",
  link: "",
  photos: "images/AIRobot001_1.jpg",
  detail: "Will we look back on the advent of AI in 10 or 15 years and think it was the best thing that happened to humanity or the worst?"
}, {
  id: "4",
  category: "General",
  title: "Are modern sports cars too fast?",
  date: "06-10-2026",
  summary: "I would suggest that the idea of a sports car is that it is fun to drive in a sporty manner but modern cars are now so fast and powerful that they can not be driven in a sporty manner without significantly breaking the law. ",
  link: "",
  photos: "images/SportsCars001_1.jpg",
  detail: "Details ........"
},{
  id: "5",
  category: "Development",
  title: "Addition of new category - Media",
  date: "06-10-2026",
  summary: "I might want to add a few articles about books, films and CD's so I will add a new media category to group them all together. ",
  link: "",
  photos: "images/Media001_1.jpg",
  detail: "Details ........"
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


