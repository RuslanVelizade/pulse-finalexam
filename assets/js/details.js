const id = new URLSearchParams(window.location.search).get("id");
let detailsContainer = document.querySelector(".detailsContainer");

async function getData() {
  let res = await axios(`${BASE_URL}/menus/${id}`);
  console.log(res.data);
  createDetailsCard(res.data);
}
getData();

function createDetailsCard(data) {
  detailsContainer.innerHTML = "";

  detailsContainer.innerHTML = `
        <div class="details-card">
                        <h4>${data.name} </h4>
                        <div>
                            <p>
                            ${data.ingredients}
                                
                            </p>..................
                            <span>$${data.price}.00</span>
                        </div>
                    </div>
        `;
}
