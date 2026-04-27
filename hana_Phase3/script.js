function print(msg) {
    let p = document.createElement("p");
    p.textContent = Array.isArray(msg) ? msg.join(", ") : msg;
    document.getElementById("output").appendChild(p);
}

let number = 7;
print("Number: " + number);
print(number % 2 === 0 ? "Even" : "Odd");
print("Loop from 1 to 5:");

for (let i = 1; i <= 5; i++) print(i);

function checkEvenOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}
const check = n => n % 2 === 0 ? "Even" : "Odd";

print("checkEvenOdd(4): " + checkEvenOdd(4));
print("checkEvenOdd(9): " + checkEvenOdd(9));
print("check(6): " + check(6));

let items = ["Pen", "Book", "Bag"];
items.push("Pencil");
items.pop();

print("Items: " + items);
print("Uppercase: " + items.map(i => i.toUpperCase()));
print("Filtered (B): " + items.filter(i => i.startsWith("B")));

print("Each item:");
items.forEach(print);

function changeDOM() {
    let title = document.getElementById("title");
    title.textContent = "JS Project";
    title.style.color = "blue";
    title.style.backgroundColor = "lightyellow";

    let p = document.createElement("p");
    p.textContent = "New paragraph added!";
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 3000);
}

let $ = id => document.getElementById(id);

$("inputBox").addEventListener("input", e => {
    $("preview").textContent = e.target.value;
});

$("form").addEventListener("submit", e => {
    e.preventDefault();
    let name = $("name").value;
    alert(name === "" ? "Name required" : "Submitted: " + name);
});
    
$("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    let u = $("username").value;
    let p = $("password").value;

    $("error").textContent =
        u === "" || p === "" ? "All fields required" :
        p.length < 6 ? "Password must be at least 6 characters" :
        "Login successful";
});

function addItem() {
    let li = document.createElement("li");
    li.textContent = $("itemInput").value;
    $("list").appendChild(li);
}

function addTodo() {
    let li = document.createElement("li");
    li.textContent = $("todoInput").value;
    li.onclick = () => li.remove();
    $("todoList").appendChild(li);
}
  
function toggle() {
    let box = $("box");
    box.style.display = box.style.display === "none" ? "block" : "none";
}