# spaced repetition of the react

Various exercises and topics that need to be regularly recalled.
Sorting is carried out by branches

## 011 - filter
- with components w/o styles
- filter (sort by title/body, search by title)

### Hooks
    
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
- .sort() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)