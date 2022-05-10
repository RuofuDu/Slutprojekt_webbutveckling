const date = new Date(); //funktion som alltid uppdatera tiden 
console.log(date);
const renderCalendar = () => {
  date.setDate(1);// sätta datum från 1

  const monthDays = document.querySelector(".days");//The querySelector() method returns the first element that matches a CSS selector.

  const lastDay = new Date(
    date.getFullYear(),// funktion som kan visa år enligt "date" som du angav
    date.getMonth() + 1, //funktion som få nuvarande månad, januari=0, febrari=1... därför måste + 1
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


// media query

// använda CSS background-image för backgrundsbild i sidan 2--

//css ta bort oanvändbar kode, förstå koden, spes js code, kommentera gärna!

//在日历上本月今天之前的日期都自动更新成暗色，并且无法点选连接到bookning.html

//再bookning.html的表格里随着时间的更新表格可预订场地的时间块也要更新，如现在是16点，
//那么该日8到16点的场地就显示已无法预定, 每小时更新一次，过去的那一个小时可以显示如该时间已无法预定等
//之后的其他日子则所有时间都可以预定

