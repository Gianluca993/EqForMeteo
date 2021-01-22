import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AutocompleteService } from '../autocomplete.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AutocompleteService]
})
export class FormComponent implements OnInit{
  
  @Input()
  filteredOptions !: Observable<string[]>;
  autoService !: AutocompleteService;
  formControl !: FormControl;

  constructor(autoService : AutocompleteService) {
    this.autoService = autoService;
  }

  ngOnInit(): void {
    this.filteredOptions = this.autoService.filteredOptions;
    this.formControl = this.autoService.formControl;
  }

  
}
