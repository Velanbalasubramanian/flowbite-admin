import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  imports: [NavbarComponent, SidebarComponent]
})
export class AdminDashboardComponent {

}
