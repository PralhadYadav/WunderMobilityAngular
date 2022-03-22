import { Component } from '@angular/core';

/**
 * @description - AppComponent is first component get loaded which is defined in Appmodule.ts. It also links router-outlet so routing can be accessible for all other components.
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wunder Mobility';
}
