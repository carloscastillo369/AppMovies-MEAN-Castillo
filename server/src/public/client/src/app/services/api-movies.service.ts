import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieModel } from 'src/app/core/models/movie.model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private URL_BASE: string = !environment.production? 'http://localhost:8080' : '';

  private urlAPI = this.URL_BASE + '/api/products/';

  constructor(private http: HttpClient) { }

  getMovie(id?: string|undefined): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.urlAPI + (id||''));
  }

  saveMovie(movie: MovieModel){
    return this.http.post<MovieModel>(this.urlAPI, movie);
  }

  updateMovie(movie: any, id: string){
    return this.http.put<any>(this.urlAPI + id, movie);
  }

  deleteMovie(id: string){
    return this.http.delete<MovieModel>(this.urlAPI + id);
  }

}
