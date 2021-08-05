let employeesPromise = fetch("http://localhost:3000/employees");

employeesPromise.then((response) => {
    response.json().then((employees) => {
        console.log(employees);
        document.getElementById("app").innerHTML = renderTable(employees);
    })
})


function renderTable(employee){
    let rows = employee.map((employee) => {
        return `<tr><td>${employee.id}</td> <td>${employee.name}</td></tr>`
    });
    return `<table>${rows.join("")}</table>`;
}