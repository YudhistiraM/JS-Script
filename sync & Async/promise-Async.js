fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(function(response){
    return response.json();
  })
  .then(function(user){
    console.log(user);
  })


//fetch is API for request ajax
