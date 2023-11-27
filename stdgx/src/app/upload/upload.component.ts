import { Component } from '@angular/core';
import { AlertsService } from 'src/services/alerts.service';
import { StorageService } from 'src/services/storage.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  file!: File;

  constructor(private user: UserService, private storage: StorageService, private alert: AlertsService) { }

  uploadFile(event: any) {
    this.file = event.target.files[0]
    if (this.file) {
      this.user.uploadXlsx(this.file, this.storage.getLocalStorage()?.login as string).subscribe(() => {
        this.alert.swalAlert('success', 'Upload realizado com sucesso!', false, 5000);
      })
    } else {
      this.alert.swalAlert('error', 'Upload falhou... tente novamente.', false, 5000);
    }
  }
}
