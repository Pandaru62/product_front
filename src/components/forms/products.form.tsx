import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import FloatingLabelInput from "../ui/FloatingLabelInput";
import Alert from "@mui/material/Alert";
import Rating from "@mui/material/Rating";
import FormLabel from "@mui/material/FormLabel";
import { useProductForm, type ProductsFormProps } from "../../hooks/useProductForm";


export default function ProductsForm(props : ProductsFormProps) {

    const {handleClose, editedProduct, isEditMode = false, onSave} = props

    const {formik, errorMessage} = useProductForm({handleClose, editedProduct, isEditMode, onSave});

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
                            endDecorator="€"
                            min={0}
                            step={0.01}
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />
                        
                        <FormLabel sx={{color: 'black'}}>Note du produit</FormLabel>
                        <Rating 
                            name="rating" 
                            value={formik.values.rating} 
                            precision={0.5}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Box>
                    
                    <DialogActions>
                        <Button onClick={handleClose} color="warning">Annuler</Button>
                        <Button type="submit">Valider</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </>
    )
}