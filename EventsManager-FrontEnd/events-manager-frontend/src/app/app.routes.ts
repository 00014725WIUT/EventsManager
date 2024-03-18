import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }, 
  {
    path:"home",
    component:HomeComponent
  },
  { 
    path: 'events/:id', 
    component: DetailsComponent
  },
  { 
    path: 'create', 
    component: CreateComponent
  },
  {
    path: 'update-event/:id', 
    component: UpdateComponent
  },
  {
    path: 'delete-event/:id',
    component: DeleteComponent
  }
];
