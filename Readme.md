npm install flowbite

Require Flowbite as a plugin inside the tailwind.config.js file:
module.exports = {
    plugins: [
        require('flowbite/plugin')
    ]
}

Additionally to your own content data you should add flowbite to apply the classes from the interactive elements in the tailwind.config.js file:
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js"
    ]
}