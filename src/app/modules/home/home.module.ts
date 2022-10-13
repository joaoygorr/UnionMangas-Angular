import { LoginComponent } from './../../core/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { NavMenuComponent } from 'src/app/core/components/navbar/nav-menu/nav-menu.component';
import { MangaComponent } from 'src/app/core/mangas/manga/manga.component';
import { ListMangaComponent } from './../../core/mangas/list-manga/list-manga.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavMenuComponent,
    ListMangaComponent,
    MangaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
