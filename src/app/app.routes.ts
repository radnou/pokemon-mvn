import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'pokemons',component:PokemonListComponent},
    {path:'pokemons/:id',component:PokemonDetailComponent},
    {path:'',component:AppComponent},


];
