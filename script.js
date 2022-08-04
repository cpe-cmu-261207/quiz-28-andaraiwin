const btnRandom = document.querySelector("#btn-random");

async function callApi() {
  const Loading = document.querySelector("#div-loading-card");
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

  // console.log(resp);
  return;
}

btnRandom.onclick = async () => {
  await callApi();
};

reload();
