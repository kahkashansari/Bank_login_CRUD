import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FatcaComponent } from './fatca/fatca.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'',component:FatcaComponent},
  {path:'show',component:ShowComponent},
  {path:'del/:id',component:DeleteComponent},
  {path:'edit/:id',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
