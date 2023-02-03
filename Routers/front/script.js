const usersBlock = document.querySelector(".usersBlock")
const carsBlock = document.querySelector(".carsBlock")
const createUser = document.querySelector("#createUserBtn")
const createCar = document.querySelector("#createCarBtn")

BASE_URL = "http://localhost:8080";

const loadData = async () => {
    usersBlock.innerHTML = "";
    carsBlock.innerHTML = "";
    document.querySelector("#new_user").value = "";
    document.querySelector("#new_car").value = "";
    const responseUser = await fetch(BASE_URL + "/users");
    const dataUser = await responseUser.json();
  
    for (const user of dataUser) {
      usersBlock.innerHTML += `
      <p>${user.name}
          <button onclick="deleteUser(${user.id})">Delete</button>
      </p>
      `;
    }
    const responseCar = await fetch(BASE_URL + "/cars");
    const dataCar = await responseCar.json();
  
    for (const cars of dataCar) {
      carsBlock.innerHTML += `<p>${cars.model}<button onclick="deleteCar(${cars.id})">Delete</button></p>`;
    }
  };

  loadData()

  createUser.addEventListener("click", () => {
    const newUserName = document.querySelector("#new_user").value;
    let payload = {
      name: newUserName,
    };
  
    fetch(BASE_URL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then(() => alert("User added!"))
      .then(() => {
        loadData();
      })
      .catch(() => alert("User create error"));
  });
  
  createCar.addEventListener("click", () => {
    const newCarName = document.querySelector("#new_car").value;
    let payload = {
      model: newCarName,
    };
  
    fetch(BASE_URL + "/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then(() => alert("Car added!"))
      .then(() => {
        loadData();
      })
      .catch(() => alert("Car create error"));
  });

  const deleteUser = (id) => {
    fetch(BASE_URL + "/users/" + id, { method: "Delete" })
      .then(() => alert("User deleted!"))
      .then(() => {
        loadData();
      })
      .catch(() => alert("User delete error"));
  };
  
  const deleteCar = (id) => {
    fetch(BASE_URL + "/cars/" + id, { method: "delete" })
      .then(() => alert("car deleted!"))
      .then(() => {
        loadData();
      })
      .catch(() => alert("car delete error"));
  };