import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from 'src/app/models/gift.model';
import { ApiService } from 'src/app/services/api.service';
import { environment } from './../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-gifts',
  templateUrl: './list-gifts.page.html',
  styleUrls: ['./list-gifts.page.scss'],
})
export class ListGiftsPage implements OnInit {
  gifts: Observable<Gift[]>;

  constructor(
    private apiService: ApiService,
    public domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.gifts = this.apiService.getAllGifts(
      environment.urlForGifs,
      environment.apiKeyForgiphy
    );

    console.log(this.gifts);
  }

  click(gift) {
    console.log(gift);
  }
}
