function selectDay(button) {
    // Reset all buttons
    const buttons = document.querySelectorAll('.day-circle');
    buttons.forEach(btn => btn.style.backgroundColor = '#f0f0f0');

    // Set the selected button to red
    button.style.backgroundColor = '#F48668';

    // ✅ Get the calendar day number from the button (e.g. 23, 24...)
    const day = parseInt(button.textContent, 10);

    // ✅ Update the stats for that day
    updateStatsForDay(day);
}

// ✅ Fitness data keyed by real date numbers (23–29)
const dayData = {
    23: { steps: 3200, calories: 130, streak: 0 },
    24: { steps: 11000, calories: 440, streak: 1 },
    25: { steps: 10342, calories: 400, streak: 2 },
    26: { steps: 4250, calories: 160, streak: 2 }, // Default selection
    27: { steps: 0, calories: 0, streak: 2 },
    28: { steps: 0, calories: 0, streak: 2 },
    29: { steps: 0, calories: 0,  streak: 2 },
};

function updateStatsForDay(day) {
    const data = dayData[day] || { steps: 0, calories: 0, streak: 0 };
    updateProgressCircle(data.steps);
    document.getElementById('calories-count').textContent = data.calories;
    document.getElementById('streak-count').textContent = data.streak;
}

function updateProgressCircle(steps) {
    const circle = document.querySelector('.progress-ring__circle');
    const stepCount = document.getElementById('step-count');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const percent = Math.min(steps / 10000, 1);
    const offset = circumference - percent * circumference;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;
    stepCount.textContent = steps.toLocaleString();
}

// ✅ Select the default day (26) on page load
window.onload = function () {
    const defaultButton = document.getElementById('default-selected');
    if (defaultButton) {
        selectDay(defaultButton);
    }
};