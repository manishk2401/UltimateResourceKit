
const ctx = document.getElementById('myChart');
const average = document.getElementById('average');
const topchart = document.getElementById('top');
const mechart = document.getElementById('me');

const labels = ["20", "25", "30", "35", "40", "60", "65"];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Employer',
            data: [6, 9, 12, 15, 20, 25, 28],
            backgroundColor: "#0B5ED7",
        },
        {
            label: 'Employee',
            data: [25, 35, 42, 58, 85, 92, 133],
            backgroundColor: "#4885db",
        },
        {
            label: 'Total Interest',
            data: [34, 49, 73, 95, 122, 143, 165],
            backgroundColor: "#7aa0d6",
        },
    ]
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Contribusion Overtime',
                align: 'start'
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
});

const averagedata = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [27, 73],
            backgroundColor: ['Green', '#afddaf'],
        }
    ]
};

new Chart(average, {
    type: 'doughnut',
    data: averagedata,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                position:"bottom",
                text: 'Average'
            },
            tooltip: {
                callbacks: {
                    label: (Item) => (Item.formattedValue) + '%'
                }
            }
        }
    },
});

const topdata = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [91, 9,],
            backgroundColor: ['Green', '#afddaf'],
        }
    ]
};

new Chart(topchart, {
    type: 'doughnut',
    data: topdata,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                position:'bottom',
                text: 'Top'
            },
            tooltip: {
                callbacks: {
                    label: (Item) => (Item.formattedValue) + '%'
                }
            }
        }
    },
});

const medata = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [35,65],
            backgroundColor: ['Green', '#afddaf'],
        }
    ]
};

new Chart(mechart, {
    type: 'doughnut',
    data: medata,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                position:'bottom',
                text: 'Me'
            },
            tooltip: {
                callbacks: {
                    label: (Item) => (Item.formattedValue) + '%'
                }
            }
        }
    },
});

