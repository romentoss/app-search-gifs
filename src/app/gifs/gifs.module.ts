import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    CardListComponent,
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HomePageComponent]
})
export class GifsModule { }
