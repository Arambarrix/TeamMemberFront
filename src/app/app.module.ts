import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { CollaborateursComponent } from './pages/collaborateurs/collaborateurs.component';
import { EquipesComponent } from './pages/equipes/equipes.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { DetailProjetComponent } from './pages/detail-projet/detail-projet.component';
import { DetailEquipeComponent } from './pages/detail-equipe/detail-equipe.component';
import { ConversationsComponent } from './pages/conversations/conversations.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    CollaborateursComponent,
    EquipesComponent,
    ProjetsComponent,
    DetailProjetComponent,
    DetailEquipeComponent,
    ConversationsComponent,
    ParametresComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
