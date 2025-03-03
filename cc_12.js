//Task 1
const dashboard = document. getElementById("dashboard");
const dashboardQuery = document.querySelector ("#dashboard");
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenue-card");
dashboard.appendChild(revenueCard)

//Task 2
const metricCards = document.querySelectorAll(".metric-card");
const metricCardArray = Array.from (metricCards);

metricCardArray.forEach(card => {
    card.text += " - Updated";
    card.style.greenbackgroundColor = 'green';
})


