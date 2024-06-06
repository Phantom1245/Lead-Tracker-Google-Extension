const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
let leads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
let delEl = document.getElementById("del-el");

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderLeads();
}

saveEl.addEventListener("click", function () {
  leads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(leads));
  renderLeads();
});

function renderLeads() {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `
      <li>
      <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
      </li>
      `;
  }
  ulEl.innerHTML = list;
}

delEl.addEventListener("click", function () {
  localStorage.clear();
  leads = [];
  renderLeads();
});
