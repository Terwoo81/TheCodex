// Never Gonna Give You Up
// Never Gonna Let You Down

const button = document.getElementById("searchButton");
const box = document.getElementById("searchBox");
const results = document.getElementById("searchResults");



function search() {
  results.innerHTML = '';
  searchText = box.value.toLowerCase();
  for(const unit of units) {
    for (const model of unit["models"]) {
      if ((model["name"]).toLowerCase().includes(searchText)){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(model["name"]));
        results.appendChild(li);
      }
    }
  }
}

button.addEventListener("click", search)
