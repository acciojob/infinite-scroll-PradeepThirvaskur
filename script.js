const infiList = document.getElementById("infi-list");

// Function to add new list items
function addListItems(numItems = 2) {
  const currentCount = infiList.children.length;
  for (let i = 1; i <= numItems; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentCount + i}`;
    infiList.appendChild(li);
  }
}

// Initial load of list items
addListItems(10);

// Event listener for infinite scrolling
infiList.addEventListener("scroll", () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    // User reached the end of the list, add more items
    addListItems(2);
  }
});
