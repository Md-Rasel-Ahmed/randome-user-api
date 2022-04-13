let user = document.getElementById("user");
let adress = document.getElementById("adress");
let adressDetails = document.getElementById("adress-detail");
let i = document.querySelectorAll("i");

function loadData() {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => {
      load(data);
    });
}
loadData();
function load(data) {
  //   console.log(data.results);
  data.results.forEach((data) => {
    user.src = data.picture.large;
    adress.textContent = `${data.name.title},  ${data.name.first}  ${data.name.last}`;
    // icon hover
    i.forEach((i) => {
      i.addEventListener("mouseover", (e) => {
        let className = e.target.classList[1];
        if (className === "fa-user") {
          adressDetails.textContent = "HI,My name is";
          adress.textContent = `${data.name.title},  ${data.name.first}  ${data.name.last}`;
        } else if (className == "fa-envelope") {
          adressDetails.textContent = "My email is";
          adress.textContent = `${data.email}`;
        } else if (className == "fa-calendar-days") {
          adressDetails.textContent = "My birthday is";
          adress.textContent = `${data.dob.date
            .slice(0, 10)
            .replace(/-/gi, "/")}`;
        } else if (className == "fa-location-dot") {
          adressDetails.textContent = "My location is";
          adress.textContent = `${data.location.street.number} ${data.location.country}`;
        } else if (className == "fa-phone") {
          adressDetails.textContent = "My phone is";
          adress.textContent = `${data.cell}`;
        } else if (className == "fa-lock") {
          adressDetails.textContent = "My password is";
          adress.textContent = `${data.login.password}`;
        }
      });
    });
  });
}
