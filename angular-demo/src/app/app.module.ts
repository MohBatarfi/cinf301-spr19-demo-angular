import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {path: 'algorithmSort', component: AlgorithmsComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
