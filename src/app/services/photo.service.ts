import { Injectable } from '@angular/core';
import { FlickrService } from './flickr.service';

@Injectable()
export class PhotoService {

  constructor(private flickr: FlickrService) {}

  // TODO
  // Figure out to transform response
  public searchByTag(params: { tags: string }) {
    return this.flickr.searchPhotos({
      ...params,
      extras: 'url_q,date_upload,date_taken',
      per_page: 1,
    });
  }

}
