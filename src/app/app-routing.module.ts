import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MycartComponent } from './website/pages/mycart/mycart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ExitGuard } from './guards/exit.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'category/:id',
        component: CategoryComponent,
      },
      {
        path: 'my-cart',
        component: MycartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        canDeactivate: [ExitGuard],
        component: RegisterComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: 'cms',
    canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
