import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoadVideoComponent } from './components/load-video/load-video.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { IsLoggedGuard } from './guards/islogged';
import { IsntLoggedGuard } from './guards/isntlogged';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'users-list', component: UsersListComponent ,canActivate:[IsLoggedGuard]},
  { path: 'login', component: LoginComponent,canActivate:[IsntLoggedGuard]},
  { path: 'register', component: RegisterComponent,canActivate:[IsntLoggedGuard]},
  { path: 'video/:id', component: VideoPageComponent},
  { path: 'profile-edit', component: ProfileEditComponent ,canActivate:[IsLoggedGuard]},
  { path: 'load-video', component: LoadVideoComponent},
  { path: 'search/:search', component: SearchResultComponent},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
