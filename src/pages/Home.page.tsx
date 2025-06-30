import { DataGrid, type GridRowsProp, type GridColDef } from '@mui/x-data-grid';
import getProducts from '../services/products.service';
import { useEffect, useState } from 'react';


export default function HomePage() {

    const [rows, setRows] = useState<GridRowsProp>();

    useEffect(() => {
    setRows(getProducts());
    }, []);
    console.log("🚀 ~ rows:", rows)

    const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'name', headerName: 'Nom', width: 300 },
    { field: 'reference', headerName: 'Référence', width: 300 },
    { field: 'price', headerName: 'Prix', width: 300, valueFormatter: (value) => `${value} €` },
    { field: 'rating', headerName: 'Évaluation', width: 200, valueFormatter: (value) => `${value}/5` },

    ];

  return (
   <>
        <h1>Welcome</h1>
         <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
   </>
  );
}