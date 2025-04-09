const dateTextElement = document.getElementById('date-text');
const overlayBox = document.getElementById('overlay-box');
const circle = document.querySelector('.circle.meals');
const progressCircle = document.getElementById('progress-circle');
const goalText = document.getElementById('goal-text');
dateTextElement.textContent = getFormattedDate();

const mealGoalData = [
    { name: 'Breakfast', calorie: 200, startAngle: 0, endAngle: 72 }, // Will figure out how to dynamically update angles later
    { name: 'Lunch', calorie: 100, startAngle: 72, endAngle: 108 },
    { name: 'Dinner', calorie: 400, startAngle: 108, endAngle: 252 },
    { name: 'Snack', calorie: 300, startAngle: 252, endAngle: 360 }
];

// Update clock
function getFormattedDate() {
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('en-US', options); // e.g., "April 8"
    return `Today, ${dateStr}`;
}

dateTextElement.textContent = getFormattedDate();

// Calorie circle stuff
const calorieGoal = 1500;

const totalCalories = mealGoalData.reduce((sum, meal) => sum + meal.calorie, 0);

const progressPercentage = (totalCalories / calorieGoal) * 100;
// const remainingCalories = calorieGoal - totalCalories;

goalText.innerHTML = `
    ${totalCalories} /<br>${calorieGoal} cal
`;

function updateProgressCircle() {
    const progressDeg = (progressPercentage * 360) / 100;
    progressCircle.style.background = `conic-gradient(
        #a7a7a7 0deg ${progressDeg}deg, 
        #f6f7ff ${progressDeg}deg 360deg
    )`;
}

updateProgressCircle();

// Show the meal name and calories on hover over the circle
circle.addEventListener('mousemove', (e) => {
    const rect = circle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the angle relative to the top of the circle
    let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

    // Normalize the angle to ensure it's always between 0 and 360 degrees
    if (angle < 0) {
        angle += 360;
    } else if (angle > 360) {
        angle -= 360;
    }

    // Determine the meal based on the angle
    let currentMeal = null;
    mealGoalData.forEach(meal => {
        if (angle >= meal.startAngle && angle < meal.endAngle) {
            currentMeal = meal;
        }
    });

    if (currentMeal) {
        overlayBox.textContent = `${currentMeal.name}: ${currentMeal.calorie} cal`;
        overlayBox.style.display = 'block';
    }
});

// Hide overlay when the mouse leaves the circle
circle.addEventListener('mouseleave', () => {
    overlayBox.style.display = 'none';
});