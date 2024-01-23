let tBody = document.querySelector("tbody");

async function getData() {
  let res = await axios(`${BASE_URL}/menus`);
  console.log(res.data);
  createTable(res.data);
}
getData();

function createTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
        <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.ingredients}</td>
                <td>${element.price}</td>
                <td>
                <button onclick=deleteMenu("${element.id}",this)>Delete</button>
                </td>
            </tr>
        `;
  });
}

async 
