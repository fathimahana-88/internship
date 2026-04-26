function print(msg) {
    let div = document.getElementById("output");
    let p = document.createElement("p");

    if (Array.isArray(msg)) {
        p.textContent = msg.join(", ");
    } else {
        p.textContent = msg;
    }

    div.appendChild(p);
}

let number = 7;
print("Number: " + number);

if (number % 2 === 0) {
    print("Even");
} else {
    print("Odd");
}

print("Loop from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    print(i);
}

function checkEvenOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}

print("checkEvenOdd(4): " + checkEvenOdd(4));
print("checkEvenOdd(9): " + checkEvenOdd(9));

const check = (n) => n % 2 === 0 ? "Even" : "Odd";
print("check(6): " + check(6));

let items = ["Pen", "Book", "Bag"];

items.push("Pencil");
items.pop();

print("Items: " + items);

let upper = items.map(item => item.toUpperCase());
print("Uppercase: " + upper);

let filtered = items.filter(item => item.startsWith("B"));
print("Filtered (B): " + filtered);

print("Each item:");
items.forEach(item => print(items));

function changeDOM() {

    let title = document.getElementById("title");
    title.textContent = "JS Project";

    title.style.color = "blue";
    title.style.backgroundColor = "lightyellow";

    let newPara = document.createElement("p");
    newPara.textContent = "New paragraph added!";
    document.body.appendChild(newPara);

    setTimeout(() => {
        newPara.remove();
    }, 3000);
}