const btnRandom = document.querySelector("#btn-random");
const Loading = document.querySelector("#div-loading-card");
const userCard = document.querySelector("#div-user-card");

async function callApi() {
  userCard.style.display = "none";
  Loading.style.display = "";

  const _name = document.querySelector("#p-name");
  const email = document.querySelector("#p-email");
  const location = document.querySelector("#p-address");
  const resp = await axios.get("https://randomuser.me/api/");
  const result = resp.data.results[0];
  document.querySelector("img#img-profile").src = result.picture.large;
  _name.innerText = `${result.name.first} ${result.name.last}`;
  location.innerText = `${result.location.city} ${result.location.state} ${result.location.country} ${result.location.postcode}`;
  email.innerText = `${result.email}`;
  document.querySelector("#span-gender-icon").innerHTML = "male" ? "👨" : "👩";

  userCard.style.display = "";
  Loading.style.display = "none";
  // console.log(resp);
  return;
}

btnRandom.onclick = async () => {
  await callApi();
};

reload();
