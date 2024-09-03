const profilePhoto = document.getElementById("profilePhoto");
const nameOutput = document.getElementById("name");
const email = document.getElementById("email");
const location = document.getElementById("location");
const getRandomUser = document.getElementById("getRandomUser")

async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const randomUser = await response.json();
  profilePhoto.src = randomUser.results[0].picture.large;
  nameOutput.innerHTML = `<h1>${randomUser.results[0].name.first} ${randomUser.results[0].name.last}</h1>`;
  email.innerHTML = `<p>${randomUser.results[0].email}`;
  location.innerHTML = `<p>${randomUser.results[0].location.state}, ${randomUser.results[0].location.country}`;
}

getRandomUser.addEventListener('click', fetchRandomUser);  


