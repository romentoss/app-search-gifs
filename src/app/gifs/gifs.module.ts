import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    CardListComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomePageComponent]
})
export class GifsModule { }
