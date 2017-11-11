import { Injectable } from '@angular/core';
import { FlickrService } from './flickr.service';

@Injectable()
export class PhotoService {

  constructor(private flickr: FlickrService) {}

  // TODO
  // Figure out to transform response
  searchByTag(params: { tags: string }) {
    return this.flickr.searchPhotos({
      ...params,
      extras: 'url_q,date_upload,date_taken,owner_name',
      per_page: 1,
    });
  }

  getPhotosForTag(params: { tag: string, per_page: 18, page }) {
    return this.flickr.searchPhotos({
      tags: params.tag,
      per_page: params.per_page,
      page: params.page,
      extras: 'url_q,date_upload,date_taken,owner_name',
    });
  }
}
