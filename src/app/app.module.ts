import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { PhotoService } from './services/photo.service';
import { FlickrService } from './services/flickr.service';
import { AlertService } from './services/alert.service';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { PhotoTileComponent } from './components/photo-tile/photo-tile.component';
import { PhotoTagDetailContainerComponent } from './components/photo-tag-detail-container/photo-tag-detail-container.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PhotoTileComponent,
    SearchContainerComponent,
    PhotoTagDetailContainerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [FlickrService, PhotoService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
