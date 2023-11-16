import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable()
export class AlertsService {

  swalAlert(icon: SweetAlertIcon, msg: string, button: boolean, timer: number) {
    const alert = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: button,
      timer: timer,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    alert.fire({ icon: icon, title: msg });
  }

  swalQuestion(title: string, text: string, icon: SweetAlertIcon, confirmButtonText: string, cancelButtonText: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "var(--green2)",
      cancelButtonColor: "var(--red2)",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    })
  }
}