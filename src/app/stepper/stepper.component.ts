import { Component, Input } from '@angular/core';
import { StaepperItem } from './stepperModels';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  @Input() currentStepp = 2;
  @Input() currentSubStep = 1;
  stepperItems: StaepperItem[] = [
    {
      icon: 'calendar',
      title: 'تقویم',
    },
    {
      icon: 'details',
      title: 'جزئیات',
    },
    {
      icon: 'payment',
      title: 'پرداخت',
      subStep: [
        { title: 'پرداخت هزینه درخواست' },
        { title: 'پرداخت هزینه درخواست' },
        { title: 'پرداخت هزینه درخواست' },
      ],
    },
    {
      icon: 'payment',
      title: 'پرداخت',
      subStep: [
        { title: 'پرداخت هزینه درخواست' },
        { title: 'پرداخت هزینه درخواست' },
        { title: 'پرداخت هزینه درخواست' },
      ],
    },
    {
      icon: 'payment',
      title: 'پرداخت',
    },
  ];
}
