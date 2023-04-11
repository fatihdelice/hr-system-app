import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() data: any;
  @Output() isOpenChange = new EventEmitter<boolean>();

  closeModal() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
