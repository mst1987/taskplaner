import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { AppErrorHandler } from './core/error/app-error-handler';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [
        StoreModule.forRoot(appReducer),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        })
    ],
    providers: [
        AuthService,
        UserService,
        MatSnackBar,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
