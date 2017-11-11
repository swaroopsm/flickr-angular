import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PhotoTile } from '../../models/PhotoTile';

@Component({
  selector: 'photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhotoTileComponent implements OnInit {

  @Input() tile: PhotoTile;

  constructor() { }

  ngOnInit() {
  }

}
