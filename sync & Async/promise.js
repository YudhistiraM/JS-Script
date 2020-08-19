const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id) 


getPost() // #1.fetch post
.then(postResponse => postResponse.json()) // #2. get & return post json 
.then(postResponse => getAuthor(postResponse.id) // #3. fetch author
  .then(authorResponse => authorResponse.json()  // #4 get & return author json
    .then(authorResponse => getComment(postResponse.id) // #5 fetch comment
      .then(commentResponse => commentResponse.json()) // #6 get & return comment json
      .then(commentResponse => {  // #7 time to combine all results
          return ({postResponse,authorResponse,commentResponse}) // #8 combine & return all reponses
        })
    )
  )
  
  .then(results => { // #9 read all responses
    console.log(results.postResponse)
    console.log(results.authorResponse)
    console.log(results.commentResponse)

  }) 
)
.catch(error => console.log(error)) //# 10 error handling


//Simple Code for code on before

const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

var a = getPost().then(res => res.json()) //post
var b = a.then(res => getAuthor(res.id)).then(res => res.json()) //author
var c = a.then(res => getComment(res.id).then(res => res.json())) //comment
Promise.all([a,b,c]).then(res => console.log(res))

const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

var a = getPost().then(res => res.json()) //post
var b = a.then(res => getAuthor(res.id)).then(res => res.json()) //author
var c = a.then(res => getComment(res.id).then(res => res.json())) //comment


a.then(postResponse => { //#1 getpost
  b.then(authorResponse => //#2 get author
    c.then(commentResponse => ( //#3 get comment, and combined all results
            {postResponse, authorResponse, commentResponse})
    )
  )
  .then(results => { //#4 show reslut
    console.log(results.postResponse)
    console.log(results.authorResponse)
    console.log(results.commentResponse)
  })
})
.catch(error => console.log(error)) //# 10 error handling
