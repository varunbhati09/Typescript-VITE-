import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './DataGridComponent.css';

interface DataGridRowData {
  id: number;
  title: string;
  body: string;
}

interface DataGridComponentProps {
  // Remove the 'data' prop since we will fetch data inside the component
}

const DataGridComponent: React.FC<DataGridComponentProps> = () => {
  const [data, setData] = useState<DataGridRowData[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default DataGridComponent;
