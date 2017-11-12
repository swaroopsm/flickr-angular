import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchFormComponent implements OnInit {
  @Input() search;
  @Output() searchPhotoByTag = new EventEmitter<Object>();

  constructor(private alert: AlertService) { }

  ngOnInit() {}

  onSubmit() {
    if (typeof this.search.tag === 'string' && this.search.tag.trim() === '') {
      return this.alert.showError('Search tag cannot be empty');
    }

    this.searchPhotoByTag.emit(this.search);
  }

}
