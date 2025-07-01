import { useFormik } from "formik";
import * as Yup from 'yup';
import type ProductInterface from "../interfaces/products.interface";
import referenceAlreadyExists from "../utils/checkReference";
import getProducts, { addProduct, editProduct } from "../services/products.service";
import { showSuccessAlert } from "../components/alerts/showSuccess";
import { useState } from "react";

export interface ProductsFormProps {
    handleClose: () => void;
    isEditMode?: boolean;
    editedProduct?: ProductInterface;
    onSave: (products: ProductInterface[]) => void;}

export const useProductForm = (props : ProductsFormProps) => {

    const {handleClose, editedProduct, isEditMode = false, onSave} = props
    const [errorMessage, setErrorMessage] = useState<string>('');

    const priceRegex = /^\d{1,6}(\.\d{1,2})?$/;

    const ProductSchema = Yup.object().shape({
        name: Yup.string().required('Requis'),
        reference: Yup.string().required('Requis'),
        price: Yup.string()
            .matches(priceRegex, 'Format de prix invalide')
            .required('Requis'),
        rating: Yup.number().min(0, 'La note doit être entre 0 et 5').max(5, 'La note doit être entre 0 et 5').required('Requis'),
    });

    // initiates values in the form
    const formik = useFormik({
        validationSchema: ProductSchema,
        initialValues: {
            name :  editedProduct?.name ?? "",
            reference : editedProduct?.reference ?? "",
            price : editedProduct?.price ?? 1,
            rating: editedProduct?.rating ?? 0,
        },
        onSubmit: (product) => {
            // checks if the reference is not already used
            if(referenceAlreadyExists(product.reference, getProducts(), editedProduct?.id)) {
                setErrorMessage('La référence existe déjà');
                return 
            }

            // convert rating to number type
            const formatedProduct = {...product, rating: Number(product.rating)}
            if(isEditMode && editedProduct) {
                const updatedList = editProduct(editedProduct.id, formatedProduct)
                if (updatedList) {
                    onSave(updatedList)
                    showSuccessAlert("Produit édité avec succès !")
                    handleClose()
                }
            } else {
                const updatedList = addProduct(formatedProduct)
                if (updatedList) {
                    onSave(updatedList)
                    showSuccessAlert("Produit ajouté avec succès !")
                    handleClose()
                }
            }
        }
    });

    return {
        formik,
        errorMessage
    }


}


