//started
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'],
        datasets: [{
            label: 'JUL 2022', 
            data: [28.38, 17.5, 9.29, 7.63, 6.48],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'

            ],
            borderWidth: 3
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

