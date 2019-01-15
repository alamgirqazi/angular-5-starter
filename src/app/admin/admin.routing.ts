import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
      {
        path: 'todos',
        loadChildren: 'app/admin/todosmodule/todos.module#TodosmoduleModule'
      },

      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: '/admin/todos' }
    ]
  }
];

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild(routes);
