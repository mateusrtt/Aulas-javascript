//fetch('https://pokeapi.co/api/v2/pokemon/1')
//.then(response => response.json())
//.then(pokemon => {
 // console.log(pokemon);
//});

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'HEAD',
}

fetch(url, options)
.then(response => {
    console.log(response.headers.get('Content-type'));
})
