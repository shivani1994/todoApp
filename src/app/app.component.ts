import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'todoApp';
    constructor(private loadingBar: SlimLoadingBarService, private router: Router, private authService: AuthenticationService) {
        this.router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
        });
    }

    private navigationInterceptor(event: Event): void {
        if (event instanceof NavigationStart) {
        this.loadingBar.start();
        }
        if (event instanceof NavigationEnd) {
        this.loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
        this.loadingBar.stop();
        }
        if (event instanceof NavigationError) {
        this.loadingBar.stop();
        }
    }

    logOut() {
        console.log("gihkk");
    this.authService.logOut();
    console.log(this.authService.userData);
    }

    ngOnInit() {
        console.log(this.authService.userData);
    }
}
