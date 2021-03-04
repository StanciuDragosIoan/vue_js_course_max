/*

registering components with register() makes them global

registering too many components globally will impact performance
because they are all loaded

an alternative would be registering components in the other components
where we'll be using them (for scoping)


slots

scoped slots (receive props and have access to data from the parent component,
data which otherwise is unavailable)


<keep-alive></keep-alive> component caches the nested component

3 awesome vue features:

the <component></component> (used for dynamic components to replace repeated
    v-if calls, it uses based on a prop called 'is'-tells component which component should 
    be shown)

the <keep-alive></keep-alive> (keeps internal component state such as forms
    during re-render)


the <teleport></teleport> (teleports based on the 'to' prop which takes in a
css selector)

*/
