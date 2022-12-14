import { IPage } from './../../interface/IPage';
import { IGetMangas } from './../../interface/IGetMangas';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IManga } from '../../interface/IManga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly API = environment.API_PATH;

  constructor(private httpClient: HttpClient) { }

  findAllMangas(): Observable<IPage<IGetMangas[]>> {
    return this.httpClient.get<IPage<IGetMangas[]>>(`${this.API}/mangas`);
  }

  releaseWeek(): Observable<IPage<IGetMangas[]>> {
    return this.httpClient.get<IPage<IGetMangas[]>>(`${this.API}/mangas/week`);
  }

  newManga(manga: IManga): Observable<IManga> {
    return this.httpClient.post<IManga>(`${this.API}/mangas`, manga);
  }
}