document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  let counter = 1;

  button.addEventListener("click", function () {
    let square = document.createElement("div");
    square.className = "addDiv";
    container.appendChild(square);
    square.id = counter;
    counter++;
    square.addEventListener("mouseover", showID);
    square.addEventListener("mouseout", hideID);
    square.addEventListener("click", changeColor);
    // square.addEventListener("dblclick", removeSquare);

    square.addEventListener("dblclick", function () {
    if (square.id % 2 === 0) {
      if (square.nextSibling === null) {
        alert("Nothing after square to remove");
      } else {
        container.removeChild(square.nextSibling);
      }
      console.log("even");
    } else {
      if (square.previousSibling === null) {
        alert("Nothing before square to remove");
      } else {
        console.log("odd");
        container.removeChild(square.previousSibling);
      }
    }
  });

  });

  function showID() {
    let div = document.getElementById(this.id);
    console.log(div);
    div.innerText = this.id;
  }

  function hideID() {
    let div = document.getElementById(this.id);
    div.innerText = "";
  }

  let myColors = ["red", "yellow", "pink", "green", "purple"];

  function changeColor() {
    let num = Math.floor(Math.random() * myColors.length);
    let div = document.getElementById(this.id);
    div.style.backgroundColor = myColors[num];
  }

  // square.addEventListener("dblclick", function () {
  //   if (square.id % 2 === 0) {
  //     if (square.nextSibling === null) {
  //       alert("Nothing after square to remove");
  //     } else {
  //       container.removeChild(square.nextSibling);
  //     }
  //     console.log("even");
  //   } else {
  //     if (square.previousSibling === null) {
  //       alert("Nothing before square to remove");
  //     } else {
  //       console.log("odd");
  //       container.removeChild(square.previousSibling);
  //     }
  //   }
  // });
});
