let tBody = document.querySelector("tbody");
let editById = null;
let menuData = [];
async function getData() {
  let res = await axios(`${BASE_URL}/menus`);
  //   console.log(res.data);
  menuData = res.data;
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
                <td>${element.price}.00</td>
                <td>
                <button onclick=deleteMenu("${element.id}",this)>Delete</button>
                <button onclick=editMenu("${element.id}")>Edit</button>
                </td>
            </tr>
        `;
  });
}

async function deleteMenu(id, delBtn) {
  if (confirm("Are you sure?")) {
    delBtn.closest("tr").remove();
    axios.delete(`${BASE_URL}/menus/${id}`);
  }
}

let form = document.querySelector("form");
let formInputs = document.querySelectorAll("input");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  try {
    if (
      formInputs[0].value.trim() &&
      formInputs[1].value.trim() &&
      formInputs[2].value.trim()
    ) {
      let menu = {
        name: formInputs[0].value,
        ingredients: formInputs[1].value,
        price: formInputs[2].value,
      };
      if (editById) {
        const res = await axios.patch(`${BASE_URL}/menus/${editById}`, menu);
      } else {
        const res = await axios.post(`${BASE_URL}/menus`, menu);
      }
    } else {
      alert("Please fill in all blank fields.");
    }
  } catch (error) {
    console.log(error);
  }
});

async function editMenu(id) {
  let res = await axios(`${BASE_URL}/menus/${id}`);
  console.log(id);
  console.log(res.data);
  formInputs[0].value = res.data.name;
  formInputs[1].value = res.data.ingredients;
  formInputs[2].value = res.data.price;
}

let search = document.querySelector("#search");

search.addEventListener("input", async function (event) {
  let res = await axios(`${BASE_URL}/menus`);

  let filtered = res.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  if (event.target.value === "") {
    createTable(res.data);
  } else {
    createTable(filtered);
  }
});

document
  .getElementById("sortBtnAZ")
  .addEventListener("click",  function (e) {
    e.preventDefault()
    menuData.sort((a, b) => a.name.localeCompare(b.name));
    createTable(menuData)
  });
document
  .getElementById("sortBtnZA")
  .addEventListener("click",  function (e) {
     e.preventDefault();
    menuData.sort((a, b) => b.name.localeCompare(a.name));
    createTable(menuData)
  });
