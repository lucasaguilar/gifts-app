import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
//import { EventFormComponent } from './event-form/event-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, ModalComponent],
  exports: [HeaderComponent, SearchComponent, ModalComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule ],
})
export class ComponentsModule {}
