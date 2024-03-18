// const urlBase = 'https://api.edamam.com'
// const idApi = 'https://developer.edamam.com/admin/applications/caf7e572'
// const keyApi ='https://developer.edamam.com/admin/applications'

// function fetchDataFromApi() {
//     const select = 'https://api.edamam.com/api/recipes/v2./api/dishType'("select")
//     console.log(select)
//     fetch('https://api.edamam.com/api/recipes/v2.')
// .then(Response => {
//     if(!Response.ok) {
//         throw new Error('Erro ao obter dados da api')
//     }
//     return Response.json()
// })
// then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('Ocorreu um erro: ', error)
// })
// }


fetch('https://api.edamam.com/doc/open-api/recipe-search-v2.json')
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao buscar dados da API:', error);
  });
