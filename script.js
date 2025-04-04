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
