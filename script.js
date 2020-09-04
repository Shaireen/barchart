let array = [];
let i = 0;
createFortyBars();

function getQueueSize() {
  return Math.floor(Math.random() * 32);
}

function createFortyBars() {
  for (i = 0; i < 40; i++) {
    array.push(getQueueSize());
    let newBar = document.createElement("div");
    const parentContainer = document.querySelector("#bars");
    newBar.classList.add("bar");
    newBar.style.height = array[i] * 2 + "px";
    if (array[i] < 30 && array[i] > 20) {
      newBar.style.backgroundColor = "lightpink";
    } else if (array[i] <= 20 && array[i] > 10) {
      newBar.style.backgroundColor = "lightblue";
    } else if (array[i] <= 10) {
      newBar.style.backgroundColor = "#9195ff";
    }
    parentContainer.appendChild(newBar);
  }
  createNewBar();
  function createNewBar() {
    if (i > 39) {
      array.push(getQueueSize());
      let newBar = document.createElement("div");
      const parentContainer = document.querySelector("#bars");
      newBar.classList.add("bar");
      newBar.style.height = array[40] * 2 + "px";
      if (array[40] < 30 && array[40] > 20) {
        newBar.style.backgroundColor = "lightpink";
      } else if (array[40] <= 20 && array[40] > 10) {
        newBar.style.backgroundColor = "lightblue";
      } else if (array[40] <= 10) {
        newBar.style.backgroundColor = "#9195ff";
      }
      parentContainer.appendChild(newBar);
      if (array.length > 40) {
        array.shift();
        parentContainer.firstChild.remove();
      }
      i++;
      setTimeout(createNewBar, 1000);
    }
  }
}
