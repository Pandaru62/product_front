import Swal from 'sweetalert2';


export const showSuccessAlert = (title: string, redirectCallback?: () => void) => {
  return Swal.fire({
    title,
    icon: "success",
    draggable: true,
    confirmButtonText: "Continuer",
  }).then(() => {
    if (redirectCallback) redirectCallback();
  });
};