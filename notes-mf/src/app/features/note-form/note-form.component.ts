import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  template: ``,
})
export class NoteForm {
  title = '';
  content = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  save() {
    this.http
      .post('http://localhost:4000/notes', {
        title: this.title,
        content: this.content,
      })
      .subscribe(() => this.router.navigate(['/notes']));
  }
}
