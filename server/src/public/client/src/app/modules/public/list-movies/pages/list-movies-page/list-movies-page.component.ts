import { Component, OnInit } from '@angular/core';

import { MovieModel } from 'src/app/core/models/movie.model';

import { ApiMoviesService } from 'src/app/services/api-movies.service';


@Component({
  selector: 'app-list-movies-page',
  templateUrl: './list-movies-page.component.html',
  styleUrls: ['./list-movies-page.component.css']
})
export class ListMoviesPageComponent implements OnInit {

  public movies: MovieModel[] = [];

  constructor(private _apiMoviesService: ApiMoviesService) { }

  ngOnInit(): void {
    this.getMoviesAvailable();
  }

  getMoviesAvailable(){
    this._apiMoviesService.getMovie().subscribe(res => {
      let availableMovies: MovieModel[] = [];
      res.forEach(elem => {
        if(elem.purchasestock != 0 || elem.rentalstock != 0){
          availableMovies.push(elem);
        }
      })

      this.movies = availableMovies;
      
    });
  }

}
