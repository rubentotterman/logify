
//Hamburger menu logic
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

document.getElementById("hamburgerButton").addEventListener("click", toggleMenu);

const exit = document.getElementById('exit');
exit.addEventListener('click', toggleMenu);


//Workout chart logic
const ctx = document.getElementById('workoutBarChart').getContext('2d');

const workoutBarChart = new Chart(ctx, {
  type: 'bar', // Specify the chart type
  data: {
    labels: ['Calories Intake', 'Calories Burned', 'Activity Time'], // Labels for the data
    datasets: [
      {
        label: 'Workout Metrics',
        data: [800, 850, 400], // Data values
        backgroundColor: [
          '#23262C', // Yellow for Calories Intake
          '#9E2835', // Red for Calories Burned
          '#000000', // Black for Activity Time
        ],
        borderRadius: 5, // Round edges of bars
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Set to true if you want a legend
        labels: {
          color: 'white', // Legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis label color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Optional: Light gridlines
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis label color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Optional: Light gridlines
        },
      },
    },
  }, 
});

// Example data: Days worked out this year
const workedOutDays = [
    "2024-01-01", "2024-01-03", "2024-01-07", "2024-02-14", "2024-03-21", 
    "2024-04-05", "2024-05-10", "2024-06-12", "2024-07-18", "2024-08-20"
  ]; // Add more dates as needed
  
  // Calculate the total number of days worked out
  const totalWorkoutDays = workedOutDays.length;
  
  // Update the HTML to display the count
  const workoutDaysElement = document.getElementById('workout-days');
  workoutDaysElement.textContent = `${totalWorkoutDays} Days`;
  
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('sleepChart').getContext('2d');
  
    const sleepData = {
      labels: ['Actual', 'Goal'],
      datasets: [{
        label: 'Sleep Time',
        data: [6, 8], // Example data: Actual sleep vs. Goal
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)', // Light blue for actual sleep
          'rgba(255, 206, 86, 0.2)'  // Light orange for goal
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    new Chart(ctx, {
      type: 'bar',
      data: sleepData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Hours'
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend if not needed
          }
        }
      }
    });
  });