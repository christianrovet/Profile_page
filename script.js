var newName = document.getElementById("proName");
document.querySelector('#edit-btn').addEventListener('click', function(event) {
    event.preventDefault();
});


function changeName() {
    if (newName.innerHTML === "Christian Rovet") {
        newName.innerHTML = "Bob the Builder!";
    } else {
        newName.innerHTML = "Christian Rovet";
    }
}