import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskplanerComponent } from './taskplaner.component';

const routes: Routes = [{ path: '', component: TaskplanerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskplanerRoutingModule { }
