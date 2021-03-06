import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { JamesComponent } from "./components/james/james.component";
import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";

const APP_ROUTES:Routes=[
    {path:'home', component:HomeComponent},
    {path:'james', component:JamesComponent},
    {path:'messi', component:MessiComponent},
    {path:'ronaldo', component:RonaldoComponent},

    {path:'**', redirectTo:'home', pathMatch:'full'}
]
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);