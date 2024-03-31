import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISingleFilm } from '../single-film';
import { FilmServiceService } from '../film-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
  <div class="filmDetailsContainer">
    <img src={{iFilm?.poster}} class="poster" />
    <div class="filmInfo">
        <h1 class="filmName">{{iFilm?.name}}</h1>
        <p>Year: {{iFilm?.year}}</p>
        <p class="filmDetails">{{iFilm?.description}}</p>
    </div>
  </div>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
route: ActivatedRoute = inject(ActivatedRoute);
filmService = inject(FilmServiceService);
iFilm: ISingleFilm | undefined;

  constructor()
    {
      const filmId = Number(this.route.snapshot.params["id"]);
      this.filmService.getFilmById(filmId).subscribe(film => {
        this.iFilm = film;
      });
    }
}