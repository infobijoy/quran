let currentCount = 0;
let maxCount = 7; // Initial max count for the first radio button

function count() {
  if (document.querySelector('input[name="counter"]:checked')) {
    let selectedValue = document.querySelector('input[name="counter"]:checked').value;
    
    if (selectedValue === "0-7") {
      maxCount = 6;
    } else if (selectedValue === "0-33") {
      maxCount = 32;
    } else if (selectedValue === "0-99") {
      maxCount = 98;
    } else if (selectedValue === "0-99-unlimited") {
      maxCount = Infinity;
    }

    currentCount = (currentCount + 1) % (maxCount + 1);
    document.getElementById("count-display").textContent = "Count: " + currentCount;
  } else {
    console.log("Please select a counting range first.");
  }
}