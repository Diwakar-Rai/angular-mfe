import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="padding: 20px;">
      <h2>Service Unavailable</h2>
      <p>This feature is currently unavailable.</p>
    </div>
  `,
})
export class FallbackComponent {}
