const monthName = document.getElementById("monthName");
const calendar = document.getElementById("calendar");

let currentDate = new Date();

function loadCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthName.innerText = date.toLocaleString("default", { month: "long" }) + " " + year;

    let table = `
        <tr>
            <th>Sun</th><th>Mon</th><th>Tue</th>
            <th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
        </tr>
    `;

    let row = "<tr>";
    for (let i = 0; i < firstDay; i++) row += "<td></td>";

    for (let day = 1; day <= lastDate; day++) {
        row += `<td>${day}</td>`;
        if ((day + firstDay) % 7 === 0) {
            table += row + "</tr>";
            row = "<tr>";
        }
    }

    table += row + "</tr>";

    calendar.innerHTML = table;
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    loadCalendar(currentDate);
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    loadCalendar(currentDate);
}

loadCalendar(currentDate);
