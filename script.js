const Loading = document.querySelector("#div-loading-card");
const btnRandom = document.querySelector("#btn-random");
const _name = document.querySelector("#p-name");
const email = document.querySelector("#p-email");
const location = document.querySelector("#p-address");
const imgProfile = document.querySelector("#img-profile");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const result = resp.data.results[0];
  document.querySelector("#img#img-profile").src = result.picture.large;
  _name.innerText = `${result.name.first} ${result.name.last}`;
  location.innerText = `${result.location.city} ${result.location.state} ${result.location.country} ${result.location.postcode}`;
  email.innerText = `${result.email}`;
  document.querySelector("#span-gender-icon").innerHTML = "male" ? "👨" : "👩";

  document.querySelector("#div-user-card").style.display = "none";
  Loading.style.display = "";
  document.querySelector("#span-gender-icon").style.display = "none";
  // console.log(resp);
  return;
}

async function reload() {
  document.querySelector("#div-loading-card").style.display = "";
  document.querySelector("#div-user-card").style.display = "none";
  document.querySelector("#span-gender-icon").style.display = "none";
  await callApi();
}

reload();
