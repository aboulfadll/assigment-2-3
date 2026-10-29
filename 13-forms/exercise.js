
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing the old cards.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  list.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceElement = document.createElement("p");
    priceElement.classList.add("price");
    priceElement.textContent = `${item.price} EGP`;

    card.append(heading, priceElement);
    list.append(card);
  });
}

/**
 * Handles form submission and keeps the product data in an array.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");
  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      document.querySelector("#price").value.trim() === "" ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}

