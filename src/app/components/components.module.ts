import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
//import { EventFormComponent } from './event-form/event-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  exports: [HeaderComponent, SearchComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class ComponentsModule {}
