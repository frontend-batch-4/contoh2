import Swal from "sweetalert2";

export const show = () => {
  Swal.fire({
    title: "Loading",
    text: "Mohon tunggu sebentar...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const hide = () => {
  Swal.close();
};
