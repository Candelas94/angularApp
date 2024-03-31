import { Component, Input , inject} from '@angular/core';
import { ISingleFilm } from '../single-film';
import { RouterModule } from '@angular/router';
import { FilmServiceService } from '../film-service.service';

@Component({
  selector: 'app-single-film',
  standalone: true,
  imports: [RouterModule],
  template: `
  <!-- <ul>
    @for(film of filmsList; track film.id)
    {
        <a [routerLink]="['/details', film.id]"><li id="{{film.id}}" class="selectFilm">{{film.name}}, ({{film.year}})</li></a>
    }
  </ul> -->
  `,
  styleUrl: './single-film.component.css'
})
export class SingleFilmComponent {
//   constructor() {
//     this.filmsList = this.filmService.getAllFilms();
// }
// filmService: FilmServiceService = inject(FilmServiceService);
// filmsList: ISingleFilm[] = []
// @Input() singleFilm!: ISingleFilm;
}
