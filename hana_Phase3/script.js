alert("JS is working");
function print(msg) {
    console.log(msg);
    let div = document.getElementById("output");
    let p = document.createElement("p");
    p.textContent = msg;
    div.appendChild(p);
}

let number = 7;
if (number % 2 === 0) {
    print("Even");
} else {
    print("Odd");
}

for (let i = 1; i <= 5; i++) {
    print(i);
}

function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

print(checkEvenOdd(4));
print(checkEvenOdd(9));

const check = (n) => {
    return n % 2 === 0 ? "Even" : "Odd";
};
print(check(6));

let items = ["Pen", "Book", "Bag"];
items.push("Pencil");
items.pop();
print(items);

let upper = items.map(item => item.toUpperCase());
print(upper);

let filtered = items.filter(item => item.startsWith("B"));
print(filtered);

items.forEach(item =>
    {
        print(item);
    });