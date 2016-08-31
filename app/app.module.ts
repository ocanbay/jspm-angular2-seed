import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MenuComponent }  from './menu/components/menu.component';
import { HomeComponent }  from './home/components/home.component';
import { HeroComponent }  from './hero/components/hero.component';
import { HeroDetailComponent }  from './hero/components/hero-detail.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,
        MenuComponent, HeroComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
