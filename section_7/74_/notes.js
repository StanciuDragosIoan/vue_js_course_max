/*

vue CLI

why we need a dev server?

we need a proper web server

-currently we trigger the app by
opening the html file (so we use the file protocol
instead of the https one)

*some features won't work via the file protocol
+ you can't serve it over the web

a local web server runs locally and it serves the app
via the http protocol onto our local machine



Why we want a better development experience?

-we might want a better dev experience

CURRENT_STATE

-
*we always need to reload the page when we make any change
to our code;

IDE auto-completion is highly limited

we work with just one file or we need to handle
multiple files with multiple script imports

DESIRED_STATE

-saved changes should be auto-detected and page should
refresh by itself (hot-reloading)

-IDE should offer better auto-completion

-we should b able to split code into multiple files 
and export/import via ES module
*/
