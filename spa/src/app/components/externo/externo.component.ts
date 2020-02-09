import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public heroe: any;
  public heroeId: string;

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router
  ) { 
    this.heroeId = "1";
  }

  ngOnInit() {

    this.cargaHeroe();
  }

  cargaHeroe(){
    this._peticionesService.getUser(this.heroeId).subscribe(
      result => {
        console.log(result);
        this.heroe = result;
      },
      error => {
        console.log(<any>error);
        return 0;
      }

    );
  }
}