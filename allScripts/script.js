// Toggle visibility of the option overlay
document.getElementById('plusButton').addEventListener('click', function() {
    const overlayContainer = document.getElementById('overlayContainer');
    overlayContainer.style.display = overlayContainer.style.display === 'flex' ? 'none' : 'flex';
});

// Close the exercise/meal overlay
function closeOverlay() {
    document.getElementById('overlayContainer').style.display = 'none';
}

// Hide option overlay and show exercise form
function displayExerciseForm() {
    document.getElementById('overlayContainer').style.display = 'none';
    document.getElementById('exerciseForm').style.display = 'block';
    document.getElementById('overlayBackground').style.display = 'block';
}

// Hide option overlay and show meal form
function displayMealForm() {
    document.getElementById('overlayContainer').style.display = 'none';
    document.getElementById('mealForm').style.display = 'block';
    document.getElementById('overlayBackground').style.display = 'block';
}

// Hide exercise or meal form
function closeForm() {
    document.getElementById('exerciseForm').style.display = 'none';
    document.getElementById('mealForm').style.display = 'none';
    document.getElementById('overlayBackground').style.display = 'none';
}

// Hide the form after submission
function submitForm(type) {
    if (type === 'exercise') {
        document.getElementById('exerciseForm').style.display = 'none';
    } else if (type === 'meal') {
        document.getElementById('mealForm').style.display = 'none';
    }
    window.location.reload();
}

// // Stuff for nutrition

// // Function to calculate section angles based on values
// function calculateSectionAngles() {
//     const sections = document.querySelectorAll('.section');
//     let total = 0;
//     sections.forEach(section => {
//         total += parseInt(section.getAttribute('data-value'));
//     });
    
//     let startAngle = 0;
//     sections.forEach(section => {
//         const value = parseInt(section.getAttribute('data-value'));
//         const percentage = value / total;
//         const angle = 360 * percentage;
//         section.style.transform = `rotate(${startAngle}deg)`;
//         section.style.clipPath = `polygon(50% 50%, 100% 0, 100% 100%, 0% 100%, 0% 0)`;
//         section.style.transformOrigin = 'center center';
//         section.style.transition = 'transform 0.3s ease';
//         startAngle += angle;
//     });
// }

// // Show value on hover
// function showValue(event) {
//     const value = event.target.getAttribute('data-value');
//     const sectionValue = document.getElementById('sectionValue');
//     sectionValue.innerText = value;
//     sectionValue.style.display = 'block';
//     sectionValue.style.top = event.clientY + 'px';  // Position overlay above section
//     sectionValue.style.left = event.clientX + 'px';  // Adjust position to the mouse
// }

// // Hide value on mouse out
// function hideValue() {
//     const sectionValue = document.getElementById('sectionValue');
//     sectionValue.style.display = 'none';
// }

// // Call the function to set up angles when the page loads
// window.onload = function() {
//     calculateSectionAngles();
// };
