import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  size: number = 150;
  weigth: number = 60;
  age: number = 18;
  gen!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  value(event: any) {
    this.size = parseInt(event.target.value);
  }
  activeGen(gen: Number) {
    if (gen === 1) {
      this.gen = 1;
    }
    if (gen === 0) {
      this.gen = 0;
    }
  }
  sendData() {
    const imc = this.weigth / Math.pow(this.size / 100, 2);
    this.router.navigate(['/result', imc.toFixed(1)]);
  }
}
