import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  
  message: string = '';
  messageType: string = '';

  constructor() { }

  showSuccess(message) {
    this.message = message;
    this.messageType = 'success';
  }

  showError(message) {
    this.message = message;
    this.messageType = 'error';
  }
}
