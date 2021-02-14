//Proxies and handlers JS

//vanilla JS

let message = "Hello";

let newMessage = message + " world";

message = "TEST";

// console.log(newMessage);//line 7 does not change this (vanilla JS is NOT reactive)


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


*/

