import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input({ required: true }) personName: string = '';
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) isFirst: boolean = false;
  @Input({ required: true }) isLast: boolean = false;
  @Input({ required: true }) isOdd: boolean = false;
  @Input({ required: true }) isSelected: boolean = false;
  
  @Output('personSelected') onPersonSelectEmmit = new EventEmitter<number>();

  selectPerson() {
    this.onPersonSelectEmmit.emit(this.personIndex);
  }

}
