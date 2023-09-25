var output = document.querySelector("input");

function display(num) {
  output.value += num;
}

function clr() {
  output.value = "";
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch {
    alert("Invalid");
  }
}

function del() {
  output.value = output.value.slice(0, -1);
}
