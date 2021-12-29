import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() gifUrl: string;

  constructor(private modalCtrl: ModalController, private domSanitizer: DomSanitizer) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  sanitizeURL(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
