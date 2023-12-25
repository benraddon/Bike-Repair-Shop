let count = 0;

document.getElementById("decButton").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetButton").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("incButton").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
