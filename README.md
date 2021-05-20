install mongodb driver:  
`npm i --save-dev @types/mongodb  `  

Defaults:  
```
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=todo
```
  
https://raw.githubusercontent.com/vercel/next.js/canary/examples/with-mongodb/util/mongodb.js   


https://github.com/tailwindlabs/tailwindcss-forms  
```
require('@tailwindcss/forms')({
			strategy: 'class',
		}),
```
hide the focus-border on tailwindcss-forms:  
`focus:ring-0`

add custom state checking to tailwind.config.js:
```
extend: {
		  backgroundColor: ['checked'],
		  borderColor: ['checked'],
		  outline: ['checked'],
		  textColor: ['checked']
		}```