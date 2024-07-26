import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure chart.js is auto-imported for React

const CustomDashboard = () => {
  const [userStats, setUserStats] = useState({ userCount: 0, activeUsers: 0 });
  const [bookingStats, setBookingStats] = useState({ bookingCount: 0, completedBookings: 0 });
  const [revenueStats, setRevenueStats] = useState({ totalRevenue: 0, monthlyRevenue: [] });
  const [feedbackStats, setFeedbackStats] = useState({ averageRating: 0, totalFeedback: 0 });

  useEffect(() => {
    const fetchData = async () => {
      //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NjM2OThkLWFmOTMtNDM4ZC1iN2VmLWE3MzgzZTA0ZWJlYiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxOTY2ODIyMn0.YIY9AJcUFbf0CTnEWweNzRSgpNiPIH1bsW_NqS9WeHU';
      // Fetch user stats
      const token = localStorage.getItem('token1'); // Retrieve the token from local storage
      if (!token) {
        console.error('No token found');
        return;
      }

      const userResponse = await axios.get('/api/users/stats', {
        headers: { token: token },
      });
      setUserStats(userResponse.data);

      // Fetch booking stats
      const bookingResponse = await axios.get('/api/bookings/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookingStats(bookingResponse.data);

      // Fetch revenue stats
      const revenueResponse = await axios.get('/api/revenue/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRevenueStats(revenueResponse.data);

      // Fetch feedback stats
      const feedbackResponse = await axios.get('/api/feedback/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFeedbackStats(feedbackResponse.data);
    };

    fetchData();
  }, []);

  const userChartData = {
    labels: ['Total Users', 'Total Hosts'],
    datasets: [
      {
        label: 'User Statistics',
        data: [userStats.userCount, userStats.activeUsers],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const bookingChartData = {
    labels: ['Total Bookings', 'Completed Bookings'],
    datasets: [
      {
        label: 'Booking Statistics',
        data: [bookingStats.bookingCount, bookingStats.completedBookings],
        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  const userPieData = {
    labels: ['Total Users', 'Total Hosts'],
    datasets: [
      {
        label: 'User Distribution',
        data: [userStats.userCount, userStats.activeUsers],
        backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const bookingLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bookings Over Time',
        data: bookingStats.monthlyBookings,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const revenueLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: revenueStats.monthlyRevenue,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const feedbackDoughnutData = {
    labels: ['Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [
      {
        label: 'Customer Feedback',
        data: [feedbackStats.satisfied, feedbackStats.neutral, feedbackStats.dissatisfied],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Spintrip Admin Dashboard</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>User Overview</h2>
        <div style={styles.chartWrapper}>
          <div style={styles.chartCard}>
            <Bar data={userChartData} options={chartOptions} />
          </div>
          <div style={styles.chartCard}>
            <Pie data={userPieData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Booking Overview</h2>
        <div style={styles.chartWrapper}>
          <div style={styles.chartCard}>
            <Bar data={bookingChartData} options={chartOptions} />
          </div>
          <div style={styles.chartCard}>
            <Line data={bookingLineData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Revenue Overview</h2>
        <div style={styles.chartWrapper}>
          <div style={styles.chartCard}>
            <Line data={revenueLineData} options={chartOptions} />
          </div>
          <div style={styles.summaryCard}>
            <h3>Total Revenue</h3>
            <p>INR {revenueStats.totalRevenue}</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Customer Feedback</h2>
        <div style={styles.chartWrapper}>
          <div style={styles.chartCard}>
            <Doughnut data={feedbackDoughnutData} options={chartOptions} />
          </div>
          <div style={styles.summaryCard}>
            <h3>Average Rating</h3>
            <p>{feedbackStats.averageRating} / 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '2rem',
    fontWeight: '500',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    marginBottom: '20px',
    color: '#555',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  chartWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  chartCard: {
    flex: '1 1 45%',
    maxWidth: '45%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  summaryCard: {
    flex: '1 1 45%',
    maxWidth: '45%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};


export default CustomDashboard;
