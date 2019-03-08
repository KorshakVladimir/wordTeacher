import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WordService } from '../word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  addWordForm = new FormGroup({
    word_name: new FormControl(''),
    translation: new FormControl(''),
  });

  constructor(private service: WordService) { }

  ngOnInit() {
    this.addWordForm.controls.word_name.valueChanges.subscribe(res => {
      this.service.getTranslation(res)
        .subscribe(transRes => this.addWordForm.patchValue({'translation': transRes}));
    });
  }

  onSubmit() {
    this.service.addWord(this.addWordForm.value).subscribe();
    this.addWordForm.reset();
  }
}
