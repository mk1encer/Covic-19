d3.csv("forchart.csv", function (data) {
  const date = data.map(function (d) {
    return d.date;
  });
  const total = data.map(function (d) {
    return +d.total;
  });
  const domestic = data.map(function (d) {
    return +d.domestic;
  });
  const abroad = data.map(function (d) {
    return +d.abroad;
  });
  const dead = data.map(function (d) {
    return +d.dead;
  });

  const chart = new Chart(document.querySelector(".chart"), {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          label: "총 확진자 수",
          borderColor: "gray",
          data: total,
          fill: false,
        },
        {
          label: "국내 확진자 수",
          borderColor: "lightblue",
          data: domestic,
          fill: false,
        },
        {
          label: "해외 확진자 수",
          borderColor: "lavender",
          data: abroad,
          fill: false,
        },
        {
          label: "사망자 수",
          borderColor: "tomato",
          data: dead,
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "최근 일주일간 확진자 통계(종류별)",
      },
    },
  });
});
