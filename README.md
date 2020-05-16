https://db.ygoprodeck.com/api-guide/
<!-- 
Potential Upgrades:
- After the race is selected, if the race is a monster, 'show select a monster card type'
- Add the ability to select a card and display more info
- Possibly add their pagination (&num=30&offset=0)
-Add a clear filter option -->

Fixes:
<!-- - add padding left to modal desktop -->
<!-- - add filter button on modal -->
<!-- - Go to top of the page when next page -->
<!-- - increase paddings on container on mobile -->
<!-- - increase paddings on description on mobile -->
<!-- - style search and pagination -->
<!-- - uneven number of cards -->
<!-- added favicons and stuff -->
- disable body scroll when modal open UNFIXED
- Fix bug when typping gibberish
-move pagination to the cards


Feedback:
-Add a pointer cursor for the buttons
-differientiate between close and filter button in the filter modal. possibly replace the close button with an 'X' on the top right or make the 'filter' button stand out more as the primary action
-possibly add a loading indicator after searching so user knows something is happening and data was submitted
-maybe use outline:focus instead of outline:0 for things such as the search bar for people who are using it without a mouse
-add more logic to pagination buttons, possibly get rid of the button if it is not applicable
-possibly creating a home page and a button to go back to the home page or at least to the first page
-having just the images show and then when clicked have a modal show the image with the information similar to how google image shows just the image until you click on it and a window pops up with more information
    -if we do this then possibly have cards related to it such as other cards in its archetype
-possibly adding animation, desktop and tablet can have animation of a page turning when clicking on pagination. mobile can have the same feature but include a sort of downwards animation, like you're going through a deck of cards
-make filter button inside button say apply instead of filter, can be seen as more logical
-possibly provide brief instructions for the filter
-maybe instead of creating a new fetch call everytime try mapping through the given data 
- move pagination to cards
- possibly change heights because they're going to be missaligned then