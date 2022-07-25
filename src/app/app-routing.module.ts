import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { TicketListComponent } from './train/ticket-list/ticket-list.component';
import { TrainDetailsComponent } from './train/train-list/train-details/train-details.component';
import { TrainListComponent } from './train/train-list/train-list.component';

const routes: Routes = [
  {path: "trains", component: TrainListComponent},
  {path: "tickets", component: TicketListComponent},
  {path: "about", component: AboutComponent},
  {path: "details/:id", component: TrainDetailsComponent},
  {path: 'buyticket/:id', component: BuyTicketComponent},
  {path: "", redirectTo: "trains", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
