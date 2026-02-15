import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgParticlesModule} from "ng-particles";
import { HomeComponent } from './home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AppsComponent } from './home/sections/apps/apps.component';
import {MatRippleModule} from "@angular/material/core";
import { OfficalWebsiteComponent } from './home/sections/offical-website/offical-website.component';
import { CardFooterComponent } from './home/sections/card-footer/card-footer.component';
import {NgsRevealModule} from "ngx-scrollreveal";
import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './widgets/toolbar/toolbar.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
// @ts-ignore
import {NgxCoreModule} from "ngx-core";
import { CoreAppsComponent } from './home/sections/core-apps/core-apps.component';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppsComponent,
    OfficalWebsiteComponent,
    CardFooterComponent,
    ProfileComponent,
    ToolbarComponent,
    CoreAppsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    NgsRevealModule,
    MatSnackBarModule,
    NgxCoreModule,
    CdkDropList,
    CdkDrag
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
