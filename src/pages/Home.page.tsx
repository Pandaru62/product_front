import { DataGrid, type GridRowsProp, type GridColDef } from '@mui/x-data-grid';
import getProducts from '../services/products.service';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import ProductsForm from '../components/forms/products.form';
import Rating from '@mui/material/Rating';
import type ProductInterface from '../interfaces/products.interface';
import IconButton from '@mui/material/IconButton';


export default function HomePage() {

    const [products, setProducts] = useState<GridRowsProp>();
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductInterface>();

    
    useEffect(() => {
        setProducts(getProducts());
    }, []);
    console.log("🚀 ~ rows:", products)
    
    const handleEdit = (product: ProductInterface) => {
        setSelectedProduct(product)
        setOpenEditModal(true)
    }


    const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'name', headerName: 'Nom', width: 300 },
    { field: 'reference', headerName: 'Référence', width: 150 },
    { field: 'price', headerName: 'Prix', width: 150, valueFormatter: (value) => `${value} €` },
    { field: 'rating', headerName: 'Évaluation', width: 200, renderCell: (value) => (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Rating
            name="text-feedback"
            value={Number(value.value)}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            readOnly
            precision={0.5}
            emptyIcon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"></path></svg>}
        />
    </Box>

    ) },
    { field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => (
        <IconButton
        color="primary"
        onClick={() => handleEdit(params.row)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"></path><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"></path></svg>
        </IconButton>
    )}

    ];

    const handleAddClose = () => {
        setOpenAddModal(false);
  };

  return (
   <>
        <h1>Tous les produits</h1>
         <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={products} columns={columns} initialState={{pagination: {paginationModel: {pageSize: 10, page: 0}}}} />
        </div>
        <Button
            startDecorator={<svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"></path><path fill="currentColor" d="M16 24h18v2H16z"></path><path fill="currentColor" d="M24 16h2v18h-2z"></path></svg>}
            sx={{ display: { xs: 'none', md: 'inline-flex', marginTop: '10px' } }}
            color="success"
            onClick={() => setOpenAddModal(true)}
        >
            Nouveau produit
        </Button>
        <Dialog open={openAddModal} onClose={handleAddClose}>
            <ProductsForm handleClose={handleAddClose} onSave={(newOrUpdatedProductList) => setProducts(newOrUpdatedProductList)}/>
        </Dialog>
        <Dialog open={openEditModal} onClose={handleEdit}>
            <ProductsForm handleClose={() => setOpenEditModal(false)} isEditMode={true} editedProduct={selectedProduct} onSave={(newOrUpdatedProductList) => setProducts(newOrUpdatedProductList)}/>
        </Dialog>
        
   </>
  );
}