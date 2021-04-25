const input = document.querySelector("#tache");
const btn = document.querySelector("button");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
  // Create element
  let li = document.createElement("li");
  let check = document.createElement("input");
  check.classList.add("check");
  check.setAttribute("type", "checkbox");
  let tache = document.createElement("p");
  tache.innerHTML = input.value;
  let btn = document.createElement("button");
  btn.classList.add("delete");
  btn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  li.appendChild(check);
  li.appendChild(tache);
  li.appendChild(btn);
  //logique
  if (input.value === "") {
    input.classList.add("echec");
    setTimeout(() => {
      input.classList.remove("echec");
    }, 2000);
  } else {
    list.append(li);
    input.value = "";
  }
  check.addEventListener("click", function () {
    tacheFaite(tache);
  });
  btn.addEventListener("click", function () {
    delElement(li);
  });
});

// Functions
function tacheFaite(element) {
  element.classList.toggle("txtbarre");
}

function delElement(element) {
  element.remove();
}
