import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }

}
