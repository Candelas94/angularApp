import { Component, inject } from '@angular/core';
import { SingleFilmComponent } from '../single-film/single-film.component';
import { RouterModule } from '@angular/router';
import { FilmServiceService } from '../film-service.service';
import { ISingleFilm } from '../single-film';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [SingleFilmComponent, RouterModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {

  filmsList: ISingleFilm[] = [];
  constructor(private filmService: FilmServiceService) {}

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe(films => {
      this.filmsList = films;
    });
  }

  filterResult(text:string)
  {
      this.filmService.filterByName(text).subscribe(films => {
        this.filmsList = films;
      });    
  }
}
