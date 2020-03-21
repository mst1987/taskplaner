import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaskplanerEffects } from './taskplaner.effects';

describe('TaskplanerEffects', () => {
  let actions$: Observable<any>;
  let effects: TaskplanerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskplanerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TaskplanerEffects>(TaskplanerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
