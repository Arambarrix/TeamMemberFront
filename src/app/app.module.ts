import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UsersListComponent } from './components/user-components/users-list/users-list.component';
import { UserProfileComponent } from './components/user-components/user-profile/user-profile.component';
import { UserAddComponent } from './components/user-components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-components/user-update/user-update.component';
import { TeamProfileComponent } from './components/team-components/team-profile/team-profile.component';
import { TeamAddComponent } from './components/team-components/team-add/team-add.component';
import { TeamUpdateComponent } from './components/team-components/team-update/team-update.component';
import { TeamsListComponent } from './components/team-components/teams-list/teams-list.component';
import { ProjectsListComponent } from './components/project-components/projects-list/projects-list.component';
import { ProjectAddComponent } from './components/project-components/project-add/project-add.component';
import { ProjectUpdateComponent } from './components/project-components/project-update/project-update.component';
import { ProjectProfileComponent } from './components/project-components/project-profile/project-profile.component';
import { ActionAndRoleComponent } from './components/parametre-components/action-and-role/action-and-role.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    CommonTableComponent,
    DashboardComponent,
    UsersListComponent,
    UserProfileComponent,
    UserAddComponent,
    UserUpdateComponent,
    TeamProfileComponent,
    TeamAddComponent,
    TeamUpdateComponent,
    TeamsListComponent,
    ProjectsListComponent,
    ProjectAddComponent,
    ProjectUpdateComponent,
    ProjectProfileComponent,
    ActionAndRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
