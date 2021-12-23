import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {
  // gifs: Observable<any[]>;

  constructor(private router :Router) {}

  ngOnInit() {
   /*  this.apiService.getAllGifts(
      environment.urlForGifs,
      environment.apiKeyForgiphy
    ); */
  }

  getGifts() {
    this.router.navigate(['list-gifts']);
  }
}
