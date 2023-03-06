const productList = document.getElementById("product-list")

window.addEventListener("DOMContentLoaded", function () {
    //   let table = document.createElement("table");
      fetch("https://destination-app.onrender.com/api/products")
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach(item => {     
         let li = document.createElement("li");
  
          li.innerText = `${item.name}
          ${item.price}
          ${item.description}

          `
          productList.appendChild(li)
        });
        console.log(responseJson);
      })
      .catch((err) => console.log(err));
    });