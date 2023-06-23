# My Book List
> Vanilla Javascript
- CRUD
- Local Storage
- Class
> Style
- Fontawsome
- Bootswatch 


## Need to know more
> previousElementSibling
- https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
- Read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list.
`Store.removeBook(e.target.parentElement.previousElementSibling.textContent);`


### insertBefore(newNode, referenceNode)
- https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
- Method of the Node interface inserts a node before a reference node as a child of a specified parent node.
`container.insertBefore(div, form);`


### DOMContentLoaded
- https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
- The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (`<script defer src="…"> and <script type="module">`) have downloaded and executed. 
- It doesn't wait for other things like images, subframes, and async scripts to finish loading.

`addEventListener("DOMContentLoaded", (event) => {});`
`onDOMContentLoaded = (event) => {};`

`document.addEventListener('DOMContentLoaded', UI.displayBooks);`


### Splice in forEach()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). 

```JavaScript
books.forEach((book, index) => {
    if(book.isbn === isbn) books.splice(index, 1);
});
```

### setTimeout
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
- The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
``` JavaScript
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
```
`setTimeout(() => document.querySelector('.alert').remove(), 3000);`


### createTextNode()
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
- This method can be used to escape HTML characters.
`div.appendChild(document.createTextNode(msg));`