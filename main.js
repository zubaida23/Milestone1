"use strict";
const toggleButton = document.getElementById('togglebutton');
const skillsDiv = document.getElementById('skills');
if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', () => {
        if (skillsDiv.style.display === 'none') {
            skillsDiv.style.display = 'block';
            toggleButton.value = "Hide Skills";
        }
        else {
            skillsDiv.style.display = 'none';
            toggleButton.value = "Show Skills";
        }
    });
}
else {
    console.log("Required element not found in the DOM");
}
