import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';



@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory:string[] = [];
  private apiKey:string = 'vuQd8haSfC8Y2vrtMVGWFSXJk88BMU8z';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor( private http:HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this.tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')){
      return;
    }
    this._tagsHistory =JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0){
      return;
    }
    this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag:string):void{
      if(tag.length === 0) return;
      this.organizeHistory(tag);

      const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit','10')
      .set('q',tag)



      this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp => {
        this.gifList = resp.data;
      })
    }
  // Otra forma mas usando JS
  // async searchTag(tag:string):Promise<void>{
  //   if(tag.length === 0) return;
  //   this.organizeHistory(tag);

  //   await fetch('https://api.giphy.com/v1/gifs/search?api_key=vuQd8haSfC8Y2vrtMVGWFSXJk88BMU8z&q=valorant&limit=10')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data));
  //   console.log(this.tagsHistory);

  // }

}
