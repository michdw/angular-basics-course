import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  success: boolean = true;

  toggleSuccess(): void {
    this.success = (this.success == true) ? false : true;
  }

  ngOnInit(): void {

  }

}
