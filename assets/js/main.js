const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

let menuContainer = document.querySelector(".menu-bottom");

async function getData() {
    let res = await axios(`${BASE_URL}/menus`)
    console.log(res.data);
    createMenuCard(res.data)
}
getData()

function createMenuCard(data) {
    menuContainer.innerHTML = ""

    data.forEach(element => {
        menuContainer.innerHTML += `
        <div class="menu-card">
                        <h4>${element.name} <a href="details.html?id=${element.id}">View</a></h4>
                        <div>
                            <p>
                            ${element.ingredients}
                                
                            </p>..................
                            <span>$${element.price}.00</span>
                        </div>
                    </div>
        `;
    });
}