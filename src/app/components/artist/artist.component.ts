import { Component, OnInit, Directive, Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {SpotifyService} from '../../services/spotify.service';
import { map } from 'rxjs/operators';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.css']

})

export class ArtistComponent implements OnInit {
    id: string;
    artist: Object;
    albums: Object;

    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.pipe(
                map(params => params['id']))
                .subscribe((id) => {
                    this._spotifyService.getArtist(id)
                        .subscribe(artist => {
                            this.artist = artist;
                        });
                    this._spotifyService.getAlbums(id)
                        .subscribe(albums => {
                            this.albums = albums['items'];
                        });
                });
    }
}
