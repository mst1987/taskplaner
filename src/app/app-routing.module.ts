import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./taskplaner/taskplaner.module').then(
                m => m.TaskplanerModule
            )
    },
    {
        path: 'taskplaner',
        loadChildren: () =>
            import('./taskplaner/taskplaner.module').then(
                m => m.TaskplanerModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), StoreModule.forRoot([])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
