import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PhotoService } from './services/photo.service';
import { FlickrService } from './services/flickr.service';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { PhotoTileComponent } from './components/photo-tile/photo-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PhotoTileComponent,
    SearchContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FlickrService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
