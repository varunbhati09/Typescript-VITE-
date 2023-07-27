
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material';
import UserForm from './components/UserForm';
import DataGridComponent from './components/DataGridComponent';
import DepartmentList from './components/DepartmentList';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/second-page" element={<DataGridPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

const DataGridPage: React.FC = () => {
  const departmentData = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
   
  ];

  const pageStyles = {
    padding: '16px',
  };

  return (
    <div style={pageStyles}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              Data Grid Component
            </Typography>
            <DataGridComponent />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              Department List Component
            </Typography>
            <DepartmentList data={departmentData} />
          </Paper>
        </Grid>
        <Grid item xs={12} align="center">
          <Link to="/">Back to User Form</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
