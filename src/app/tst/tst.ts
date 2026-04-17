import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-tst',
  imports: [],
  template: `<p>{{ env }}</p>`,
  styleUrl: './tst.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tst {
  env = environment.apiKey
}
