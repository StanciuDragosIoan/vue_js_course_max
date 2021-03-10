/*


# SECTION_2_NOTES


# computed properties
    
    they work just like regular properties but Vue keeps track of 
    all their dependencies and re-executes them (computed properties are
    methods and they get re-executed only if 1 of the dependencies changes) 
    -> e.g. a method would get
    re-executed all the time so for outputting dynamic data, computed properties
    are the better sollution from a performance standpoint

# watchers

  they are properties defined as methods (just like computed props) and vue re-executes
  them only if their value changes. You can connect a watcher to a data prop by declaring
  it with the same name;

  e.g

  data {
      test: 'test123',
      test2: '',
  },

  watch: {
      test() {
          this.test2 = this.test + '123test';
      }
  }

  //watcher gets last value of watched property as default argument
  //the 2nd default argument of the watcher is the old value of the
  //watched property
  watch: {
      test(value, oldValue) {
          this.test2 = value + '123test';
      }
  }




# computed properties are good for when we have more dependencies (e.g. keep track of 2 
    data props)

# watchers are good for checking when wanting to 'watch' if a specific data prop has
a certain value

# watchers are also good for when we want to send an HTTP request when certain data
changes, or timers we want to set when certain data changes




### METHODS VS COMPUTED PROPERTIES VS WATCHERS

methods: used with event binding or data binding
        *if we display data with them, the method is re-executed for every re-render
        of the component

        *methods should be used with event binding (for data binding, only use them
        when we want the method to be re-executed on every re-render)

compute properties: used with data binding
         *computed properties are only re-evaluated if one of their dependencies
         changed 
         *used for data that depends on other data

watchers: not used in template
         *they are used to watch properties or computed properties
         *used to react to data changes (send http request when user logs in)
         *used for non-data update (behind the scenes action)










SECTION_3 NOTES

module will cover:

rendering conditional content

rendering dynamic lists of data

+ look behind the scenes


v-if

v-else-if

v-else

*these 3 need to be used on siblings (elements that come 1 after the other)


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
          @click.stop="removeGoal(index)"
        >
         <p>{{goal}}</p> 
         <input type="text" @click>
        </li>



lists and keys

by de fault vue reuses elements and moves them around for performance

this means that it can 'by default' keep track only of dynamic data

coming from the app (not from user input for instance)

so sometimes the vue engine is confused

if we add a key, it can keep track of them better




SECTION_5_NOTES

//Proxies and handlers JS

//vanilla JS

let message = "Hello";

let newMessage = message + " world";

message = "TEST";

// console.log(newMessage);// still 'Hello world' line 168 does not change this 
                           //(vanilla JS is NOT reactive)


//vue use of Proxy (proxy is a JS construct)

const data = {
    message: 'Hello',
    longMessage: 'Hello! World!'
}


//handler methods are called 'traps' because they intercept or 
//trap calls onto the target object
const handler = {
    set(target, key, value) {
        console.log(target);
        console.log(key);
        console.log(value);

        if(key === "message") {
            target.longMessage = value + ' World!'
        }
        target.message = value;
    }
}

const proxy = new Proxy(data, handler);
console.log(proxy.longMessage);
proxy.message = "Helloooo!!!!"

console.log(proxy.longMessage);


//templates

/*

apps use html to manipulate it and display content,

that html is the template of the app (the div onto which we mount the app)

we can also declare a template in the app config object (near methods, 
computed, data, etc..)



//App lifecycle


createApp({...})

1st lifecycle hook = beforeCreate()

2nd created()

//nothing on screen yet  

//now the template is compiled

3rd beforeMount(); //before displaying stuff on screen

4th mounted(); //now we see stuff on the screen

now we have the Mounted app

5th beforeUpdate();

6th updated();//now the updated data is visible on screen

//instance can be unmounted

7th beforeUnmount();

8th unmounted(); //app stopped


 
# SECTION_6_NOTES


Components are good when HTML sections repeat themselves and should have
individual functionality inside of them


# SECTION_7_NOTES

vue CLI

why we need a dev server?

we need a proper web server

-currently we trigger the app by
opening the html file (so we use the file protocol
instead of the http one)

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

-we should be able to split code into multiple files 
and export/import via ES module



# SECTION_8_NOTES

provide/inject can be used to replace props + custom events communication

props and custom events are the default

use provide/inject when faced with a context in which you have a 
'pass through' component that only forwards the event call

Props (Parent => Child communication)

props should not be mutated 

data should flow unidirectionally (from parent to child)

we cannot modify the data in child


we can modify this by declaring a child component prop inside data() {} 
and mutating that based on the initial input of the external prop



## Communication from child to parent

-we do this emmiting and event in the child component, to which the parent 
listens to



# SECTION_9_NOTES


registering components with register() makes them global

registering too many components globally will impact performance
because they are all loaded all the time

an alternative would be registering components in the other components
where we'll be using them (for scoping)


slots

scoped slots (receive props and have access to data from the parent component,
data which otherwise is unavailable)

slots can be used to add a placeholder for dynamic HTML

multiple named slots are possible, default fallbacks are possible

scoped slots allow advanced use-cases


<keep-alive></keep-alive> component caches the nested component

3 awesome vue features:

the <component></component> (used for dynamic components to replace repeated
    v-if calls, it uses based on a prop called 'is'-tells component which component should 
    be shown)

the <keep-alive></keep-alive> (keeps internal component state such as forms
    during re-render)


the <teleport></teleport> (teleports in the DOM based on the 'to' prop which takes in a
css selector)



style guide for vue names/folder structure

https://vuejs.org/v2/style-guide/


# SECTION_10_NOTES

fallthrough events/props

-if we use events or props on a custom component, that we defined,
they fall through to the root element of the component

-e.g. if we have a customBtn component, which has a default HTML button in it
the click events we set on customBtn fall through to the button element inside
of it, same for props   

*/
