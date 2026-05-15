console.log("Promise Assignment Started");
const output = document.getElementById("output");
const division = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject("Error: Division by zero is not allowed.");
            } else {
                resolve(a / b);
            }
        }, 2000);
    });
};
const testCases = [
    [10, 2],
    [20, 4],
    [15, 3],
    [100, 5],
    [10, 0]
];
document.getElementById("run").addEventListener("click", () => {
    output.innerHTML = "";
    testCases.map(([a, b]) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>Dividing ${a} by ${b}...</h3>
        `;
        output.append(card);
        division(a, b)
        .then((result) => {
            const ans = document.createElement("p");
            ans.className = "success";
            ans.textContent = `Result: ${result}`;
            card.append(ans);
            console.log(`Result of ${a}/${b} = ${result}`);
        })
        .catch((error) => {
            const err = document.createElement("p");
            err.className = "error";
            err.textContent = error;
            card.append(err);
            console.log(error);
        });
    });
});