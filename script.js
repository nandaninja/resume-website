// Get references to the elements
const showMoreBtn = document.getElementById("show-more");
const projectList = document.getElementById("project-list");

// Initially show only the first 6 projects
let visibleRows = 2; // 2 rows initially visible, each containing 3 projects
let allProjects = projectList.getElementsByClassName("project");
let totalProjects = allProjects.length;

// Initially hide projects after the first 6
for (let i = 6; i < totalProjects; i++) {
  allProjects[i].style.display = "none";
}

// Function to toggle visibility of additional projects
showMoreBtn.addEventListener("click", function() {
  const projectsToShow = visibleRows * 3; // 3 projects per row

  if (visibleRows * 3 < totalProjects) {
    // Show the next row of projects
    for (let i = 0; i < 4; i++) { // Show the next 4 projects
      if (projectsToShow + i < totalProjects) {
        allProjects[projectsToShow + i].style.display = "block";
      }
    }
    visibleRows++;
  }

  // If all projects are shown, hide them and show only the first 6 again
  if (visibleRows * 3 >= totalProjects) {
    // Hide all projects except for the first 6
    for (let i = 6; i < totalProjects; i++) {
      allProjects[i].style.display = "none";
    }
    visibleRows = 2; // Reset to showing the first 6
    showMoreBtn.textContent = "Show More"; // Reset button text
  } else {
    showMoreBtn.textContent = "Show Less"; // Change the button to show "Show Less"
  }
});
