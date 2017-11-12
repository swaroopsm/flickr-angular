import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoTile } from '../../models/PhotoTile';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchContainerComponent implements OnInit {
  search = {
    tag: '',
  }
  photoTiles = [];
  
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  searchPhotoByTag(params: { tag: string }) {
    this.photoService.searchByTag({
      tags: params.tag,
    })
    .subscribe((data: any) => {
      const { id, ownername: owner, url_q: image_url, datetaken } = data.photos.photo[0];
      // Reset Search form
      this.search = {
        tag: '',
      };

      // Populate tiles
      this.photoTiles = this.photoTiles.concat(({
        id,
        owner,
        image_url,
        tag: params.tag,
        datetaken,
      }));
    })
  }
}
