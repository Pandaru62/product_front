import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as Yup from 'yup';
import getProducts, { addProduct, editProduct } from "../../services/products.service";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import type ProductInterface from "../../interfaces/products.interface";
import referenceAlreadyExists from "../../utils/checkReference";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

interface ProductsFormProps {
    handleClose: () => void;
    isEditMode?: boolean;
    editedProduct?: ProductInterface;
    onSave: (products: ProductInterface[]) => void;}

export default function ProductsForm(props : ProductsFormProps) {

    const {handleClose, editedProduct, isEditMode = false, onSave} = props
    const [errorMessage, setErrorMessage] = useState<string>('');
    console.log("🚀 ~ ProductsForm ~ isEditMode:", isEditMode)

    const ProductSchema = Yup.object().shape({
        name: Yup.string().required('Requis'),
        reference: Yup.string().required('Requis'),
        price: Yup.number().positive('Le prix doit être positif !').required('Requis'),
        rating: Yup.number().min(0, 'La note doit être entre 0 et 5').max(5, 'La note doit être entre 0 et 5').required('Requis'),
    });

    const formik = useFormik({
        validationSchema: ProductSchema,
        initialValues: {
            name :  editedProduct?.name ?? "",
            reference : editedProduct?.reference ?? "",
            price : editedProduct?.price ?? 1,
            rating: editedProduct?.rating ?? 0,
        },
        onSubmit: (product) => {
            if(referenceAlreadyExists(product.reference, getProducts())) {
                setErrorMessage('La référence existe déjà');
                return 
            }
            if(isEditMode && editedProduct) {
                const updatedList = editProduct(editedProduct.id, product)
                if (updatedList) {
                    onSave(updatedList)
                    handleClose()
                }
            } else {
                const updatedList = addProduct(product)
                if (updatedList) {
                    onSave(updatedList)
                    handleClose()
                }
            }
        }
    });

    return (
        <>
            <DialogTitle>{isEditMode ? "Modifier un produit" : "Ajouter un produit"}</DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>
            <DialogContentText>
                Veuillez entrer les informations du {isEditMode ? "" : "nouveau"} produit.
                {errorMessage !== '' && (
                    <Alert severity="error">{errorMessage}</Alert>
                )}
            </DialogContentText>
                <form onSubmit={formik.handleSubmit} >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FloatingLabelInput
                            name="name"
                            label="Nom du produit"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <FloatingLabelInput
                            name="reference"
                            label="Référence du produit"
                            value={formik.values.reference}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.reference && Boolean(formik.errors.reference)}
                            helperText={formik.touched.reference && formik.errors.reference}
                        />

                        <FloatingLabelInput
                            name="price"
                            label="Prix du produit"
                            type="number"
                            min={0}
                            step={0.01}
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />

                        <FloatingLabelInput
                            name="rating"
                            label="Note du produit"
                            type="number"
                            min={0}
                            max={5}
                            step={0.5}
                            value={formik.values.rating}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.rating && Boolean(formik.errors.rating)}
                            helperText={formik.touched.rating && formik.errors.rating}
                        />
                    </Box>
                    
                    <DialogActions>
                        <Button onClick={handleClose}>Annuler</Button>
                        <Button type="submit">Valider</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </>
    )
}