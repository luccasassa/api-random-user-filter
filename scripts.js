const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

const getData = async () => {
  const res = await fetch("https://randomuser.me/api?results=100");
  const { results } = await res.json();
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p class="user-location">${user.location.city}, ${user.location.country}</p>
                <p class="user-email">${user.email}</p>
                <p classs="user-phone">${user.phone}</p>
            </div>
        `;

    result.appendChild(li);
  });
};

getData();

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

filter.addEventListener("input", (e) => filterData(e.target.value));
