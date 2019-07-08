import { trigger, transition, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(":enter, :leave", [ animate(1000) ]),
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({transform: 'translateX(-100px)'}),
        animate(100)
    ]),
    transition(':leave', [
        animate(100, style({transform: 'translateX(-100%)'}))
    ])
]);
