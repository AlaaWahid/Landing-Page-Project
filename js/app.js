// Build the Nav

// Define Global Variables

 // query all sections and stores in variable
let mySections = document.querySelectorAll('section'),
    myUL = document.getElementById('navbar__list'),
       // Creates a new document fragment
    fragment = document.createDocumentFragment();
 // loop for all sections
mySections.forEach(section => 
{
     //set data-nav value to variable
    let text = section.getAttribute('data-nav'),
         // create TextNode
        myText = document.createTextNode(text),
         // create list 
        myList = document.createElement('li'),
         // create  link
        myLink = document.createElement('a');
        
     // add event that when we click for link , it will scroll to section
    myLink.addEventListener('click', () =>
    {
        // Scroll smoothly to the selected section.
       section.scrollIntoView({behavior:'smooth'});
    });   
     // add text to link
    myLink.appendChild(myText);
     // add link to list
    myList.appendChild(myLink);
     // add list to fragment
    fragment.appendChild(myList);   
});
 //add fragment to UL
myUL.appendChild(fragment);



// Get the active section

 // add event that when we scroll for section , it will refer to his link
window.addEventListener('scroll', () =>
{
 // query all section and store in variable
let activeSec = document.querySelectorAll('section');
 //loop for all sections
activeSec.forEach(section =>
     {
         // define section location ( top, bottom)
        let rect = section.getBoundingClientRect();
         // condition if section in the window
        if(rect.top >= 0 && rect.top < 200)
          {
             //loop for all sections
            activeSec.forEach(section =>
            {
             // remove active class from class list
            section.classList.remove('your-active-class');
            });
           // adding active class to the window
        section.classList.add('your-active-class');
         // query function to refer active section to active link
        activeLink(section);
         }
     }); 
});


 // add active link to active section
function activeLink(actSection)
{
     // query all links and store in variable 
    let links = document.querySelectorAll('a'),
         // extract data-nav value and store in variable
        Nav_value = actSection.getAttribute('data-nav');
     // loop for all links
    links.forEach(link =>
    {
         // condition if data nav value == content of text 
        if(link.textContent == Nav_value)
         {
         //loop for all links
        links.forEach(link =>
            {
                 // remove active link
                link.classList.remove('your-active-link');
            });
             // Add active link
            link.classList.add('your-active-link');
          }
     });
}



