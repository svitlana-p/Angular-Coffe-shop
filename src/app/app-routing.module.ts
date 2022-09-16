import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'our-coffe', component: SecondPageComponent },
  { path: 'your-pleasure', component: ThirdPageComponent },
  { path: 'about-page', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
