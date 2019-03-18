DOM:

cross platform and language independent model for
representing and interactng with elements in Html documents.

dom is neither part of html nor part of javascript.


var el = document.querySelector("#search-note)

el --> will be whole form object


el = document.querySelector('ul li')

--------> selects all the first li inside ul

to select 2nd li element we can use as below:

el = document.querySelector('ul li:nth-child(2)')