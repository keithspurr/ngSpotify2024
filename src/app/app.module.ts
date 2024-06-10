import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {AboutComponent} from './components/about/about.component';
import { Album } from 'Album';
import {AlbumComponent} from './components/album/album.component';
import { AppComponent } from './app.component';
import {ArtistComponent} from './components/artist/artist.component';
import { Auth } from 'Auth';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import {SearchComponent} from './components/search/search.component';
import {routing} from './app.routing';

@NgModule({ declarations: [
        AppComponent,
        SearchComponent,
        NavbarComponent,
        AboutComponent,
        ArtistComponent,
        AlbumComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        routing,
        FormsModule],
        providers: [Auth, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
