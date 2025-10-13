
// fetch('https://jsonplaceholder.typicode.com/posts/1').then( response  => {
//     return response.json()
// }).then( data => {
//     document.getElementById('title').innerHTML = data.title
//     document.getElementById('body').innerHTML = data.body
// })


fetch('https://jsonplaceholder.typicode.com/posts').then( response => {
    return response.json()
}).then( data => {
    
    let div = document.getElementById('posts')

    data.forEach(element => {
        div.innerHTML += `
            <div class='post'>
                <h1>${element.title}</h1>
                <p>${element.body}</p>
            </div>
        `
    });

    
})