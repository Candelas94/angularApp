import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';

  constructor(
    private router: Router,    
    ) {}

  goToMain():void
  {
    console.log('MAIN')
    this.router.navigate(['/']);

  }
}
