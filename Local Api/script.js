fetch("json-files/informations.json")
.then(response => response.json())
.then(data => console.log(data))