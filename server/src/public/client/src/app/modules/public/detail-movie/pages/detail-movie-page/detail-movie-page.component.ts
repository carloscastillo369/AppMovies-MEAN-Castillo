import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieModel } from 'src/app/core/models/movie.model';

import { ApiMoviesService } from 'src/app/services/api-movies.service';


@Component({
  selector: 'app-detail-movie-page',
  templateUrl: './detail-movie-page.component.html',
  styleUrls: ['./detail-movie-page.component.css']
})
export class DetailMoviePageComponent implements OnInit {

  public movie!: MovieModel;
  public hours: number = 0;
  public mins: number = 0;

  constructor(
    private _apiMoviesService: ApiMoviesService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getDetailMovie(params.id);
    })
  }

  getDetailMovie(id: string){
    this._apiMoviesService.getMovie(id).subscribe(res => {
      this.movie = res[0];     
      this.MinToHour(this.movie.runtime);
    });
  }

  MinToHour(number: number){
    this.hours = Math.floor(number/60);
    this.mins = number % 60;
  }

}
