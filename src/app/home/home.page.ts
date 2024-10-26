import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from '../service/peliculas-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items:any=[];

  constructor(private peliculasapiService : PeliculasApiService) {}

  ngOnInit(): void {
     this.peliculasapiService.obtenerPeliculas().subscribe((PeliculasApiService))=>{
     console.log("se traen las peliculas");
}

    
    
  }

}
