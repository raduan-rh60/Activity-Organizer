import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideNotificationComponent } from "../side-notification/side-notification.component";

@Component({
  selector: 'app-show-all-categroies',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SideNotificationComponent],
  templateUrl: './show-all-categroies.component.html',
  styleUrl: './show-all-categroies.component.css'
})
export class ShowAllCategroiesComponent {

}
