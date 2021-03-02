/*

registering components with register() makes them global

registering too many components globally will impact performance
because they are all loaded

an alternative would be registering components in the other components
where we'll be using them (for scoping)

*/
