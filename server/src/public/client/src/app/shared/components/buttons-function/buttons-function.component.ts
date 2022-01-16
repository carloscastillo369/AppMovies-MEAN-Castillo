import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MovieModel } from 'src/app/core/models/movie.model';

import { CartService } from 'src/app/services/cart.service';
import { ApiMoviesService } from 'src/app/services/api-movies.service';

import { ModalTrailerComponent } from '../modal-trailer/modal-trailer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit {

  @Input() movie!:any;

  public modal:string = "modal";

  constructor(
    private _cartService: CartService,
    private _apiMoviesService: ApiMoviesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  buyMovie(id: string){
    this._apiMoviesService.getMovie(id).subscribe(res => {
        this._cartService.addMovieToCart(res[0], res[0].purchaseprice, res[0].purchasestock, 'compra');
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Película agregada como Compra!',
      showConfirmButton: false,
      timer: 2500
    })
  }

  rentMovie(id: string){
    this._apiMoviesService.getMovie(id).subscribe(res => {
        this._cartService.addMovieToCart(res[0], res[0].rentalprice, res[0].rentalstock, 'renta');
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Película agregada como Renta!',
      showConfirmButton: false,
      timer: 2500
    })
  }

  openDialog(movie: MovieModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.data = movie;
    
    this.dialog.open(ModalTrailerComponent, dialogConfig);
  }

}
