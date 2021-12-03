import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("auth")) {
      this.route.navigate(["auth/login"]);
    }
  }

}
