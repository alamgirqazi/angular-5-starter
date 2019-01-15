import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { TodosComponent } from './todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: []
  }
];

export const TodosModuleRoutes: ModuleWithProviders = RouterModule.forChild(
  routes
);
