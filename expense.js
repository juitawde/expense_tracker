let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function saveData() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function render() {
    const list = document.getElementById("list");
    const totalDisplay = document.getElementById("total");

    list.innerHTML = "";
    let total = 0;

    expenses.sort((a,b) => new Date(b.date) - new Date(a.date));

    expenses.forEach((exp, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="expense-info">
                <strong>${exp.name}</strong><br>
                <strong>₹${exp.amount}</strong><br> 
                ${exp.category} | ${exp.date}
            </div>
            <button class="delete-btn" onclick="deleteExpense(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
        total += exp.amount;
    });

    totalDisplay.textContent = total.toFixed(2);
}

function addExpense() {
    const name = document.getElementById("name").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!name || isNaN(amount) || !date) {
        alert("Fill all fields");
        return;
    }

    expenses.push({ name, amount, category, date });
    saveData();
    render();

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveData();
    render();
}

function clearAll() {
    if (confirm("Delete all expenses?")) {
        expenses = [];
        saveData();
        render();
    }
}

render();