function createTd(value, row) {
  var td = document.createElement('td');
  td.appendChild(document.createTextNode(value));
  row.append(td);
}

function addStatsToTable(model, tbody) {
  var newRow = document.createElement('tr');
  createTd(model["name"], newRow);
  for (const [name, value] of Object.entries(model["stats"])){
    createTd(value, newRow);
  }
  tbody.append(newRow);
}
function addDescriptionToTable(unit, tbody) {
  var newRow = document.createElement('tr');
  var td = document.createElement('td');

  td.appendChild(document.createTextNode(unit["description"]));
  td.setAttribute('colspan', 10);

  newRow.append(td);
  tbody.append(newRow);
}



function fillTable(unit) {
  var table = document.getElementById("table");
  var tbody = table.tBodies[0];

  for (const model of unit ["models"]){
    addStatsToTable(model, tbody);
  }

  //addStatsToTable(Intercessor, tbody);
  //addStatsToTable(IntercessorSergeant, tbody);
  addDescriptionToTable(unit, tbody);
}

fillTable(Scouts);
