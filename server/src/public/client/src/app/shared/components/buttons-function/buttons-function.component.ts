import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MovieModel } from 'src/app/core/models/movie.model';

import { CartService } from 'src/app/modules/public/cart/services/cart.service';
import { ApiMoviesService } from 'src/app/services/api-movies.service';

import { ModalTrailerComponent } from '../modal-trailer/modal-trailer.component';


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
        this._cartService.addMovieToCart(res[0], res[0].purchaseprice, 'compra');
    });   
  }

  rentMovie(id: string){
    this._apiMoviesService.getMovie(id).subscribe(res => {
        this._cartService.addMovieToCart(res[0], res[0].rentalprice, 'renta');
    });   
  }

  openDialog(movie: MovieModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.data = movie;
    
    this.dialog.open(ModalTrailerComponent, dialogConfig);
  }

}
