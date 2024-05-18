function display() {
    var outputDiv = document.createElement("div");
    outputDiv.className = "outputbar";
    var inputname = document.getElementById("name").value;
    var inputemail = document.getElementById("email").value;

    if (inputname === "" || inputemail === "") {
        alert("Enter all the values");
        return;
    }
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let userData = JSON.parse(localStorage.getItem(key));

    if (userData.email === inputemail) {
            alert("Email already exists");
            return;
        }
    }

    var userData = {
        name: inputname,
        email: inputemail
    };

    var uniqueId = new Date().getTime();

    localStorage.setItem(uniqueId, JSON.stringify(userData));

    outputDiv.innerHTML = `
        <div class="list-name">
            <span>${inputname}</span>
        </div>
        <div class="list-email">
            <span>${inputemail}</span>
        </div>
        <button class="delButton" onclick="deleteTask(${uniqueId})">Delete</button>
    `;

    outputDiv.id = uniqueId;
    var list = document.getElementById('list');
    list.appendChild(outputDiv);
}

function deleteTask(id) {
    
    localStorage.removeItem(id);

    var elementToDelete = document.getElementById(id);
    if (elementToDelete) {
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
}
