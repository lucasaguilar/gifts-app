import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gift } from 'src/app/models/gift.model';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchWord;
  offset = 0;
  searchForm: FormGroup;
  gifts: Gift[];

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }

  onSearchChange(event) {
    if (this.searchWord.length > 0) {
      //call to service with this word and params
      console.log(this.searchWord);
      this.getListGifts();
    } else {
      // nothing happened
    }
  }

  scrollGiphies(event) {
    this.getListGifts(this.offset, event);
  }

  getListGifts(offset: number = 0, event = null) {
    console.log(event);

    this.apiService
      .getAllGifts(
        environment.urlForGifs,
        environment.apiKeyForgiphy,
        this.offset,
        this.searchWord
      )
      .subscribe((data) => {
        console.log(this.offset);

        if (this.offset !== 0) {
          this.gifts = this.gifts.concat(data.gifts);
          this.offset = this.offset + data.pagination;

          if (event !== null) {
            event.target.complete();
          }
        } else {
          this.gifts = data.gifts;
          this.offset = data.pagination;
        }
      });
  }
}
