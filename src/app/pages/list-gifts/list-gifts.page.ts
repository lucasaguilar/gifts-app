import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from 'src/app/models/gift.model';
import { ApiService } from 'src/app/services/api.service';
import { environment } from './../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-list-gifts',
  templateUrl: './list-gifts.page.html',
  styleUrls: ['./list-gifts.page.scss'],
})
export class ListGiftsPage implements OnInit {
  gifts: Observable<any>;
  giftsObject: Gift[];
  customClass = 'customClass';

  constructor(
    private apiService: ApiService,
    public domSanitizer: DomSanitizer,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.apiService.getAllGifts(
      environment.urlForGifs,
      environment.apiKeyForgiphy
    ).subscribe(data => {
      console.log(data);
      this.giftsObject = data.gifts;
    });
  }

  async click(giphy: Gift) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        title: giphy.title,
        image: giphy.images['480w_still'].url,
        gifUrl: giphy.embed_url,
      },
    });
    return await modal.present();
  }

  sanitizeURL(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
