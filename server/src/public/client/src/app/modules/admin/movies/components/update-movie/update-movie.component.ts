import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/core/models/movie.model';
import { ApiMoviesService } from 'src/app/services/api-movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie!: MovieModel;
  formUpdateMovie!: FormGroup;

  constructor(
    private _apiMoviesService: ApiMoviesService, 
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    this.activatedRoute.params.subscribe((params) => {
      this._apiMoviesService.getMovie(params.id).subscribe(res => {
        this.movie = res[0];

        this.formUpdateMovie = this.fb.group({
          _id: [this.movie._id],
          title: [this.movie.title],
          purchasestock: [this.movie.purchasestock],
          rentalstock: [this.movie.rentalstock],
          purchaseprice: [this.movie.purchaseprice],
          rentalprice: [this.movie.rentalprice],
          year: [this.movie.year],
          runtime: [this.movie.runtime],
          plot: [this.movie.plot],
          rated: [this.movie.rated],
          released: [this.movie.released],
          genre: [this.movie.genre],
          director: [this.movie.director],
          writer: [this.movie.writer],
          actors: [this.movie.actors],
          language: [this.movie.language],
          country: [this.movie.country],
          awards: [this.movie.awards],
          cardimg: [this.movie.cardimg],
          posterimg: [this.movie.posterimg],
          bannerimg: [this.movie.bannerimg],
          urltrailer: [this.movie.urltrailer]
        })
      })
    })
  }

  updateMovie(id:string){
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiMoviesService.updateMovie(this.formUpdateMovie.value, id)
        .subscribe((res)=>{
          Swal.fire('Guardado!', '', 'success')
        })
        this.router.navigate(['/admin/list']);
      } else if (result.isDenied) {
        this.formUpdateMovie = this.fb.group({
          _id: [this.movie._id],
          title: [this.movie.title],
          purchasestock: [this.movie.purchasestock],
          rentalstock: [this.movie.rentalstock],
          purchaseprice: [this.movie.purchaseprice],
          rentalprice: [this.movie.rentalprice],
          year: [this.movie.year],
          runtime: [this.movie.runtime],
          plot: [this.movie.plot],
          rated: [this.movie.rated],
          released: [this.movie.released],
          genre: [this.movie.genre],
          director: [this.movie.director],
          writer: [this.movie.writer],
          actors: [this.movie.actors],
          language: [this.movie.language],
          country: [this.movie.country],
          awards: [this.movie.awards],
          cardimg: [this.movie.cardimg],
          posterimg: [this.movie.posterimg],
          bannerimg: [this.movie.bannerimg],
          urltrailer: [this.movie.urltrailer]
        })
        Swal.fire('Los cambios no fueron guardados', '', 'info')
      }
    })
  }
}
