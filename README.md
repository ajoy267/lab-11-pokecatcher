# PokeCatcher App Day 1

## Home Page

### HTML
* 3 Radio Buttons - class = "pokemon-options"
    * id - pokemon-select
    * pokemonCard 
        * id - number
        * pokemon - name of pokemon
        * image - url_image
        * type - type of pokemon
* Submit Button
    * Let numGuess = 10, subtract 1 each time pressed
        * numGuess--;
    * call caughtPokemon
    * if numGuess = 0, go to results page
    * passes encounter
        * ID encounter ++ into local storage
        * ID picked ++ passes into local storage

### App.js
* make generatePokemon function
    * generate 3 random Pokemon
    * while loop for repeated numbers
    * call encounterPokemon 3x
    * render pokemon on page

### Local Storage
* array of {
    id: ?,
    encountered: ?,
    caught: ?
} {
    id: ?,
    encountered: ?,
    caught: ?
} {
    id: ?,
    encountered: ?,
    caught: ?
}

### storage-utils.js (local storage functions) (similar to ecommerce page)
* findByID
* getResults (getProducts)
* showPokemon(id) - encounter
    * increment shown
* caughtPokemon(id) - caught
    * increment picked
* getPokemon (getCart)
* add button (pick pokemon, submit button)

### pokemon.js
* array of pokemon

## Results Page

### HTML
* reset button
    * set numGuess back to 10
    * call generatePokemon




































# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass