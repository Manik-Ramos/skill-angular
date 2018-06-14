import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TileComponent } from './tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LandingPageComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
