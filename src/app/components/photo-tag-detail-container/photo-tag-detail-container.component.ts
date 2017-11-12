import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'photo-tag-detail-container',
  templateUrl: './photo-tag-detail-container.component.html',
  styleUrls: ['./photo-tag-detail-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhotoTagDetailContainerComponent implements OnInit {
  photos = [];
  perPage: number = 25;
  totalPages: number;
  currentPage: number = 1;
  disablePrev = true;
  disableNext = true;
  showPaginator = false;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadPage({
      per_page: this.perPage,
      page: this.currentPage,
      tag: this.route.snapshot.paramMap.get('tag'),
    });
  }


  loadPage(options) {
    this.photoService.getPhotosForTag(options)
    .subscribe((data: any) => {
      this.photos = data.photos.photo;
      this.totalPages = data.photos.pages;
      this.currentPage = data.photos.page;

      this.disablePrev = this.currentPage === 1;
      this.disableNext = this.currentPage === this.totalPages || this.totalPages === 1;
      this.showPaginator = this.totalPages > 1;
    });
  }

  onPaginate(page) {
    this.loadPage({
      per_page: this.perPage,
      page,
      tag: this.route.snapshot.paramMap.get('tag'),
    });
  }

}
