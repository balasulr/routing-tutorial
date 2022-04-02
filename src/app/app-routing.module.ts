import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { RevisionComponent } from './revision/revision.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"}, // Impt line with 3 keys | redirectTo is one that says where want to start up on & is the first route
  { path: "home", component: HomeComponent}, // object with {}s what comes after localhost:4200/ & put HomeComponent which is home after the /
  { path: "about", component: AboutComponent}, // As soon as add AboutComponent, the import statement is added
  { path: "help/:ec", component: HelpComponent},
  { path: "revision", component: RevisionComponent},
  { path: "admin/login", component: AdminLoginComponent},
  { path: "admin", component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
