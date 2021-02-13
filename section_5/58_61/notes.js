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

