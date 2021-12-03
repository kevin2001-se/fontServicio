import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: "page",
    loadChildren: () => import("../app/sistema/sistema.module").then(m=> m.SistemaModule)
  },
  {
    path: "auth",
    loadChildren: () => import("../app/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "**",
    redirectTo: "auth"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
