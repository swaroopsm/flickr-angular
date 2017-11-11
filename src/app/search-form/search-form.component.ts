import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchFormComponent implements OnInit {
@Input() search;
@Output() searchPhotoByTag = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    this.searchPhotoByTag.emit(this.search);
  }

}
