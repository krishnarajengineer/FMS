document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const upcomingClasses = [
        { name: 'Yoga', time: '10:00 AM' },
        { name: 'Spin Class', time: '11:00 AM' },
        { name: 'Pilates', time: '12:00 PM' }
    ];

    const recentSignUps = [
        'John Doe - Membership Type A',
        'Jane Smith - Membership Type B'
    ];

    const recentPayments = [
        'Payment from John Doe - $100',
        'Payment from Jane Smith - $150'
    ];

    // Populate charts with Chart.js (replace with your data)
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [4000, 4500, 5000, 5500, 6000, 6500],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(ctxAttendance, {
        type: 'bar',
        data: {
            labels: ['Yoga', 'Spin Class', 'Pilates'],
            datasets: [{
                label: 'Attendance',
                data: [30, 25, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Populate upcoming classes
    const classList = document.getElementById('classList');
    upcomingClasses.forEach(cls => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cls.name} at ${cls.time}`;
        classList.appendChild(listItem);
    });

    // Populate recent activities
    const signUpsList = document.getElementById('signUpsList');
    recentSignUps.forEach(signUp => {
        const listItem = document.createElement('li');
        listItem.textContent = signUp;
        signUpsList.appendChild(listItem);
    });

    const paymentsList = document.getElementById('paymentsList');
    recentPayments.forEach(payment => {
        const listItem = document.createElement('li');
        listItem.textContent = payment;
        paymentsList.appendChild(listItem);
    });
});
