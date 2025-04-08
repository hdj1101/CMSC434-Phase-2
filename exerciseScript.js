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
