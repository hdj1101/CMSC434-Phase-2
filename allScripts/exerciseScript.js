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


// Handle adding exercise to regimen
const addButtons = document.querySelectorAll('.add-exercise-btn');
addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const exerciseItem = e.target.closest('.exercise-item');
        const name = exerciseItem.querySelector('h3').textContent;
        const description = exerciseItem.querySelector('p').textContent;

        document.getElementById('exercise-name').value = name;
        document.getElementById('exercise-description').value = description;
    });
});

// Handle saving exercise to regimen
document.getElementById('save-exercise-btn').addEventListener('click', () => {
    const name = document.getElementById('exercise-name').value;
    const description = document.getElementById('exercise-description').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;

    if (name && description && sets && reps) {
        alert(`Exercise Saved: ${name}`);
    } else {
        alert('Please fill in all fields');
    }
});

// Handle saving progress
document.getElementById('save-progress-btn').addEventListener('click', () => {
    const progress = document.getElementById('progress-notes').value;
    if (progress) {
        alert('Progress Saved');
    } else {
        alert('Please add progress notes');
    }
});




function searchExercises() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('exerciseTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}


let currentWeekStart = new Date(2025, 3, 23);  // Starting from April 23, 2025 (year, month (0-based), day)
const weekLabel = document.getElementById('weekLabel');
const days = document.querySelectorAll('.day');
const prevButton = document.getElementById('prevWeek');
const nextButton = document.getElementById('nextWeek');

function updateCalendar() {
    const weekStartDate = currentWeekStart;
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekStartDate.getDate() + 6); // Get the end date of the week

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = weekStartDate;

    // Update the week label
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    weekLabel.textContent = `Week of ${day.toLocaleDateString('en-US', options)}`;

    // Update days of the week
    days.forEach((dayElement, index) => {
        dayElement.textContent = day.getDate();
        dayElement.classList.remove('selected');  // Remove selected class from all days

        if (day.getDate() === currentWeekStart.getDate()) {
            dayElement.classList.add('selected'); // Highlight the current day
        }
        day.setDate(day.getDate() + 1); // Move to the next day
    });
}

prevButton.addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7); // Go to the previous week
    updateCalendar();
});

nextButton.addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7); // Go to the next week
    updateCalendar();
});

// Initial call to populate the calendar
updateCalendar();


// Calendar exercise page 

// Function to redirect to exercise page with the selected date
function goToExercisePage(page) {
    // Assuming you have an exercise page that takes a query parameter for the date
    window.location.href = `${page}.html`;
}
// Function to open the goal form modal
function openGoalForm() {
    document.getElementById("goalModal").style.display = "flex";
}

// Function to close the goal form modal
function closeGoalForm() {
    document.getElementById("goalModal").style.display = "none";
}

// Function to show the next page in the form
function nextPage(pageNumber) {
    const currentPage = document.querySelector(".goal-page:not([style*='display: none'])");
    const nextPage = document.getElementById(`page-${pageNumber}`);
    
    currentPage.style.display = "none";  // Hide current page
    nextPage.style.display = "block";    // Show next page
}

// Function to go back to the previous page
function prevPage(pageNumber) {
    const currentPage = document.querySelector(".goal-page:not([style*='display: none'])");
    const prevPage = document.getElementById(`page-${pageNumber}`);
    
    currentPage.style.display = "none";  // Hide current page
    prevPage.style.display = "block";    // Show previous page
}

// Function to handle the form submission
function submitGoalForm(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get form values
    const mainGoal = document.getElementById('main-goal').value;
    const focusAreas = Array.from(document.querySelectorAll('input[name="focus"]:checked')).map(checkbox => checkbox.value);
    const timeline = document.getElementById('timeline').value;
    const motivation = document.getElementById('motivation').value;

    // Example: You could log the data to the console or store it as needed
    console.log('Main Goal:', mainGoal);
    console.log('Focus Areas:', focusAreas);
    console.log('Timeline:', timeline);
    console.log('Motivation:', motivation);

    // Close the form after submission
    closeGoalForm();
}


const exercises = [
    { name: "Cycling", ageGroup: "adult", experience: "intermediate" },
    { name: "Yoga", ageGroup: "young", experience: "beginner" },
    { name: "Strength Training", ageGroup: "middle-age", experience: "advanced" },
    { name: "Running", ageGroup: "adult", experience: "beginner" },
    { name: "Hiking", ageGroup: "middle-age", experience: "intermediate" },
    { name: "Pilates", ageGroup: "senior", experience: "beginner" },
    { name: "Rock Climbing", ageGroup: "adult", experience: "advanced" },
    { name: "Swimming", ageGroup: "young", experience: "intermediate" }
];

function searchExercises() {
    const age = document.getElementById("age").value;
    const experience = document.getElementById("experience").value;
    const filteredExercises = exercises.filter(exercise => {
        return exercise.ageGroup === age && exercise.experience === experience;
    });

    const exerciseList = document.getElementById("exerciseResults");
    exerciseList.innerHTML = ''; // Clear previous results

    if (filteredExercises.length > 0) {
        filteredExercises.forEach(exercise => {
            const li = document.createElement('li');
            li.textContent = exercise.name;
            exerciseList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No exercises found for this combination.";
        exerciseList.appendChild(li);
    }
}

function saveWorkout() {
    // const workoutName = document.getElementById('workout-name').value;
    // const workoutType = document.getElementById('workout-type').value;
    // const workoutDuration = document.getElementById('workout-duration').value;
    // const workoutDescription = document.getElementById('workout-description').value;

    // // Example: Saving the workout to local storage (for simplicity)
    // const workout = {
    //     name: workoutName,
    //     type: workoutType,
    //     duration: workoutDuration,
    //     description: workoutDescription
    // };

    // // Save the workout to localStorage (or you could save it to a database or backend)
    // localStorage.setItem('savedWorkout', JSON.stringify(workout));

    // // Alert or provide feedback
    // alert('Workout saved successfully! Redirecting to Exercise page...');

    // Redirect to the exercise page
    window.location.href = 'exercise.html';
}




// Function to open the popup window
function openPopup(workoutType) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");
    const muscles = document.getElementById("popup-muscles");
    const results = document.getElementById("popup-results");

    // Workout data for each type
    const workoutInfo = {
        pilates: {
            title: "Pilates",
            description: "Pilates is a low-impact workout focused on strengthening muscles while improving postural alignment and flexibility.",
            muscles: ["Core", "Arms", "Legs", "Glutes"],
            results: "Great for flexibility, core strength, and posture improvement."
        },
        hiit: {
            title: "HIIT Training",
            description: "HIIT (High-Intensity Interval Training) involves short bursts of intense exercise followed by short rest periods. It's great for burning fat.",
            muscles: ["Full Body", "Core", "Legs", "Arms"],
            results: "Effective for burning fat, improving cardiovascular health, and building endurance."
        },
        swimming: {
            title: "Swimming",
            description: "Swimming is a full-body workout that improves cardiovascular health, strengthens muscles, and enhances flexibility.",
            muscles: ["Full Body", "Arms", "Legs", "Core"],
            results: "Great for endurance, toning muscles, and improving cardiovascular health."
        }
    };

    // Populate the popup with the selected workout's information
    title.textContent = workoutInfo[workoutType].title;
    description.textContent = workoutInfo[workoutType].description;

    muscles.innerHTML = "";
    workoutInfo[workoutType].muscles.forEach(muscle => {
        const li = document.createElement("li");
        li.textContent = muscle;
        muscles.appendChild(li);
    });

    results.textContent = workoutInfo[workoutType].results;

    // Show the popup
    popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}


// Open Finished Details Modal
function showFinishedDetails() {
    document.getElementById('finishedModal').style.display = 'flex';
}

// Open In Progress Details Modal
function showInProgressDetails() {
    document.getElementById('inProgressModal').style.display = 'flex';
}

// Open Timed Details Modal
function showTimedDetails() {
    document.getElementById('timedModal').style.display = 'flex';
}

// Open Modal when card is clicked
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Dummy functions for button actions (you can replace these with real functions)
function repeatWorkout() {
    alert("Repeating the workout...");
}

function saveAsFavorite() {
    alert("Saving as favorite...");
}

function resumeWorkout() {
    alert("Resuming the workout...");
}

function abandonWorkout() {
    alert("Abandoning the workout...");
}

function startNewTimer() {
    alert("Starting a new timer...");
}
