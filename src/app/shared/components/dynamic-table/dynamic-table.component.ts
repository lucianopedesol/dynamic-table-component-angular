import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PhonePipe } from '../../pipes/phone-pipe.pipe';

type TypeProperty = 'number' | 'string' | 'Date' | 'currency' | 'boolean' | 'phone'
export interface HeaderProps {
  headerName: any;
  property: any;
  childProperty?: any;
  type: TypeProperty;
}
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DefaultTableComponent<T extends { name: string }> {

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private phonePipe: PhonePipe,
  ) {

  }
  picked!: T;

  @Input()
  label!: string;
  @Input()
  listHeaderValues: HeaderProps[] = [];
  @Input()
  listDataValues: T[] = [];

  @Input("selectedTemplate")
  selectedTemplateRef!: TemplateRef<any>;

  @ContentChild("optionTemplate", { static: false })
  optionTemplateRef!: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }

  controlValue(value: any, type: TypeProperty) {
    switch (type) {
      case 'string':
        return !value ? '' : value;
      case 'number':
        return value;
      case 'boolean':
        return value ? "Sim" : "Não";
      case 'currency':
        return this.currencyPipe.transform(value, 'BRL');
      case 'phone':
        return this.phonePipe.transform(value);
      case 'Date':
        return this.datePipe.transform(value, 'dd/MM/yyyy')
      default:
        return value;
    }
  }
}
  