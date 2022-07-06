//started
const ctx = document.getElementById('chartOne').getContext('2d');
const chartOne = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Java', 'C', 'Python', 'C++', 'C#'],
        datasets: [{
            label: 'TIOBE', 
            data: [16.89, 15.77, 9.7, 5.5, 5.3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
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

const ctx02 = document.getElementById('chartTwo').getContext('2d');
const chartTwo = new Chart(ctx02, {
    type: 'polarArea',
    data: {
        labels: ['Python', 'Java', 'Javascript', 'C#', 'PHP'],
        datasets: [{
            label: 'PYPL', 
            data: [29.72, 19.03, 8.2, 7.28, 6.09],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 1)',
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