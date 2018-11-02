import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { LogoutComponent } from './logout/logout.component';
import { UniversalGuard } from './universal.guard';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'login/:msg', component:LoginComponent},
  {path: 'products', component: ContentComponent},
  {path: 'history', component: DetailsComponent, 
  canActivate: [UniversalGuard], 
  children: [{path: 'health', component: ShowHealthPolicyComponent, outlet: 'health'},
  {path: 'life', component: ShowPolicyDetailsComponent, outlet: 'life'}]},
  {path: 'advisors', component: ShowAdvisorsComponent},
  {path: 'quote', component: ShowQuoteComponent},
  {path: 'branches', component: SearchBranchComponent},
  {path: 'logout', component: LogoutComponent, canDeactivate: [UniversalGuard]},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
