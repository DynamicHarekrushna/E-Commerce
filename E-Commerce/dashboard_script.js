document.addEventListener("DOMContentLoaded", () => {
  // Bar Chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Promotions",
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: "#4CAF50",
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Line Chart
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Engagement",
          data: [15, 30, 25, 40, 35, 50, 45],
          borderColor: "#FF5733",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Pie Chart
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["Direct", "Referral", "Organic", "Social"],
      datasets: [
        {
          data: [45, 25, 20, 10],
          backgroundColor: ["#3498db", "#9b59b6", "#e74c3c", "#2ecc71"],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
