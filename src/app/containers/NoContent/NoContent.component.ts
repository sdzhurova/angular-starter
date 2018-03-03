import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Base } from '../Base';

@Component({
  selector: 'NoContent',
  styleUrls: ['./NoContent.style.scss'],
  template: `
    <h1>No Content</h1>
  `
})

export class NoContent {
  ngOnInit() {
  }
}
