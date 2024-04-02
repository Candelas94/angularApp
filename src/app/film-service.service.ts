import { Injectable } from '@angular/core';
import { ISingleFilm } from './single-film';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private http: HttpClient) { }

  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU4MTE5MDVhZjYyM2QyZDZlMjViZjEyOTY4OGVlZiIsInN1YiI6IjY1ZWY1ZjE0ZDQwZDRjMDE2MmVhNWNmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i3dDhn3I-dsWouwkIoF0rBQFhpnnSKPDulESNOhvS2Q'; // Aquí debes poner tu clave de API
  protected filmList: ISingleFilm[] = [];

  getAllFilms(): Observable<ISingleFilm[]> {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      })
    };
    return this.http.get<any>(apiUrl, options).pipe(
      map(response => {
        this.filmList = this.mapResponseToFilms(response);
        console.log('response', response);
        return this.filmList;
      })
    );
  }

  private mapResponseToFilms(response: any): ISingleFilm[] {
    return response.results.map((result: any) => ({
      id: result.id,
      name: result.original_title,
      year: (new Date(result.release_date)).getFullYear(),
      description: result.overview,
      poster: "https://image.tmdb.org/t/p/original" + result.poster_path,
    }));
  }

  getFilmById(id: number): Observable<ISingleFilm> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      })
    };

    return this.http.get<any>(apiUrl, options).pipe(
      map(response => this.mapResponseToFilm(response))
    );
  }

  private mapResponseToFilm(response: any): ISingleFilm {
    return {
      id: response.id,
      name: response.original_title,
      year: (new Date(response.release_date)).getFullYear(),
      description: response.overview,
      poster: `https://image.tmdb.org/t/p/w500/${response.poster_path}`
    };
  }

  filterByName(name: string): Observable<ISingleFilm[]> {

    const apiUrl = 'https://api.themoviedb.org/3/search/movie';
    const params = {
      query: name,
      include_adult: 'false',
      language: 'en-US',
      page: '1'
    };

    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }),
      params: params
    };

    return this.http.get<any>(apiUrl, options).pipe(
      map(response => this.mapResponseToFilms(response))
    );
  }

}
