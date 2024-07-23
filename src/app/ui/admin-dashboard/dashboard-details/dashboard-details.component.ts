import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.css'
})
export class DashboardDetailsComponent {

}
