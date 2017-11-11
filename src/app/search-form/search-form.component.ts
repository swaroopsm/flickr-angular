import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent implements OnInit {
  search = {
    tag: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
