import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = ' angular-eslint';

  ngOnInit(): void {

    // Test bilgisi.
    if (true === true) {
      console.log("hehe");
    }
    
  }

}
