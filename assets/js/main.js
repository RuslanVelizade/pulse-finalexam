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
                        <h4>${element.name}</h4>
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