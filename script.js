//your JS code here. If required.
document.getElementById("removeBtn").onclick = function () {
  let dropdown = document.getElementById("colorSelect");
  dropdown.remove(dropdown.selectedIndex);
};

