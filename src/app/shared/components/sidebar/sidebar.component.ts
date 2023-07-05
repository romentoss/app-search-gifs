import { Component, SimpleChanges } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService:GifsService){
  }
  get tags():string[]{
    return this.gifsService.tagsHistory;
  }
  searchTag(tag:string){
    this.gifsService.searchTag(tag);
  }
  clearTag(tag:string, e:any){
    e.stopPropagation();
    console.log(this.gifsService.tagsHistory);
    console.log(tag);
    // this.gifsService.tagsHistory = this.gifsService.tagsHistory.filter(tag => tag === tag)
  }
}
