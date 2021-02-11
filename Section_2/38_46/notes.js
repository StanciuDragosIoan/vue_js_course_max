/*
module will cover:

rendering conditional content

rendering dynamic lists of data

+ look behind the scenes


v-if

v-else-if

v-else


these 3 can be replaced with v-show (for simple stuff)

!remember v-show hides/shows stuff with CSS (does not remove from the DOM)

v-if 




v-for:

loops through stuff and outputs

we can access the item and the index:

it can also loop through objects (case in which we can access item, 
key and index)

it can also loop through numbers 

v-for="num in 10" will output numbers from 0 to 10



.stop modifier on events (note how the stop modifier stops
    the click event propagation so item is not deleted)

 <li v-for="(goal, index) in goals"
          @click="removeGoal(index)"
        >
         <p>{{goal}}</p> 
         <input type="text" @click.stop>
        </li>



lists and keys

by de fault vue reuses elements and moves them around for performance

this means that it can 'by default' keep track only of dynamic data

coming from the app (not from user input for instance)

so sometimes the vue engine is confused

if we add a key, it can keep track of them better



*/