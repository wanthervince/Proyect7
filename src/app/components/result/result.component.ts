import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  imc: number;
  result: string;
  text: string;
  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.text = '';
    this.imc = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }
  getResult() {
    if (this.imc >= 25) {
      this.result = 'SOBREPESO';
      this.text =
        'le recomendamos realizar ejercicio continuo y una dieta balanceada';
    } else if (this.imc >= 18.5) {
      this.result = 'EXELENTE';
      this.text = 'Felicidades tus resultados son favorables';
    } else {
      this.result = 'INFRAPESO';
      this.text =
        'Cuidado su peso esta por debajo de lo normal le recomendamos revisar su horarios de comida ';
    }
  }
}
