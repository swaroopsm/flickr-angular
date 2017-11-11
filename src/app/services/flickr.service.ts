import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = '5882ef090a3d15709a64a5fca8255ff9';
const API_URL = 'https://api.flickr.com/services/rest/';

@Injectable()
export class FlickrService {
  constructor(private http: HttpClient) {}

  get(method: string, args: Object) {
    const options = {
      api_key: API_KEY,
      nojsoncallback: 1,
      method,
      format: 'json',
      ...args,
    }
    const queryParams = (
      Object.keys(options)
      .map((key) => `${key}=${options[key]}`)
      .join('&')
    );

    return this.http.get(`${API_URL}?${queryParams}`);
  }

  searchPhotos(options: Object) {
    return this.get('flickr.photos.search', {
      ...options,
    })
  }
}
