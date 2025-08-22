import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UsuarioModule} from './usuario/usuario.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({ declarations: [
        AppComponent,
        MenuComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, FormsModule,
        MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule,
        UsuarioModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
