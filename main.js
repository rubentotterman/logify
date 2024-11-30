const ctx = document.getElementById('workoutBarChart').getContext('2d');

const workoutBarChart = new Chart(ctx, {
  type: 'bar', // Specify the chart type
  data: {
    labels: ['Calories Intake', 'Calories Burned', 'Activity Time'], // Labels for the data
    datasets: [
      {
        label: 'Workout Metrics',
        data: [1875, 850, 2.3], // Data values
        backgroundColor: [
          '#FBBF24', // Yellow for Calories Intake
          '#EF4444', // Red for Calories Burned
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

