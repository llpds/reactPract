# spaced repetition of the react

Various exercises and topics that need to be regularly recalled.
Sorting is carried out by branches

## 000 - base
- w/o components w/o styles
- CRUD (create: blog form, read: list, update: likes, delete: delete)

An input form element whose value is controlled by React in this way is called a “controlled component”.

### Hooks

Hooks are used ONLY at the top level of nesting (they do not work in loops and conditions)
    
useState(https://react.dev/reference/react/useState)

    import { useState } from 'react'

    function App() {
        const [name, setName] = useState('')

        setName('Couper') 

        return(
            <>
                {name}
            </>
        )    
    }

### Higher-Order Functions
- .map() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- .filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)