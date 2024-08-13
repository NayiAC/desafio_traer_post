
async function apiRequest() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const listData = document.getElementById("post-data")
  
  try {
    //obtener data 
    const response = await fetch(url);
    const data = await response.json();

    //mostrar data en lista
    data.forEach(element => {
      listData.innerHTML += 
      `
        <li> 
          <strong>${element.title}</strong> 
          ${element.body}
        </li>
      `
    })
    //menasaje de error en consola
  } catch (error) {
    console.error("Ha ocurrido un error 💔:", error);
  }

}

//mostrar data onClick 
function getPosts() {
  apiRequest()
}