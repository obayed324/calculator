let calculator = document.getElementById("calculator");

// center on screen
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

// style calculator
calculator.style.border = "2px solid blue";
calculator.style.borderRadius = "10px";
calculator.style.width = "400px";
calculator.style.height = "500px";


//display
let dis = document.getElementById("display");

let txtArea = document.createElement("textarea");
txtArea.readOnly = true;
txtArea.cols = 30;
txtArea.rows = 3;
txtArea.id = "display";
txtArea.style.width = "377px";
txtArea.style.height = "50px";
txtArea.style.fontSize = "20px";
txtArea.style.marginBottom = "10px";
txtArea.style.padding = "10px";
txtArea.style.borderRadius = "8px";
txtArea.style.border = "2px solid blue";
txtArea.style.textAlign = "right";

dis.appendChild(txtArea);

//button
let keyContainer = document.getElementById("key");

let buttons = [

    "7", "8", "9", "/",
    "4", "5", "6", "X",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "AC"
]

buttons.forEach((value) => {
    let btn = document.createElement("button");
    btn.innerText = value;

    //base color
    btn.style.width = "70px";
    btn.style.height = "70px";
    btn.style.margin = "5px";
    btn.style.fontSize = "18px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";

    // 🎨 dynamic color logic
    if (!isNaN(value)) {
        // numbers
        btn.style.backgroundColor = "#e0e0e0";
    }
    else if (value === "AC") {
        // clear button
        btn.style.backgroundColor = "#f44336";
        btn.style.color = "white";
        btn.style.gridColumn = "span 3";
        btn.style.width = "100%";
        btn.style.marginLeft = "100px"
        btn.style.marginTop = "15px"


    }
    else if (value === "=") {
        // equal
        btn.style.backgroundColor = "#4CAF50";
        btn.style.color = "white";
    }
    else {
        // operators (+ - X /)
        btn.style.backgroundColor = "#ff9800";
        btn.style.color = "white";
    }

    btn.addEventListener("click", () => {
        if (value === "AC") {
            txtArea.value = "";
        } 
        else if (value === "=") {
            try {
                let expression = txtArea.value.replace('X', "*");
                txtArea.value = eval(expression);
            } catch {
                txtArea.value = "Error";
            }
        } 
        else {
            txtArea.value += value;
        }
    });

    keyContainer.appendChild(btn);


})
keyContainer.style.display = "grid";
keyContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
keyContainer.style.justifyItems = "center";


