import { Injectable } from '@angular/core';
import { FlickrService } from './flickr.service';

@Injectable()
export class PhotoService {

  constructor(private flickr: FlickrService) {}

  // TODO
  Figure out to transform response
  public searchByTag(params: { tag: string }) {
    return this.flickr.searchPhotos({
      ...params,
      extras: 'url_q',
      per_page: 1,
    }));
  }

}
