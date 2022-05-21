import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation  = trigger('fadeInAnimation', [
  transition("* => *", [
    style({ opacity: 0 }),
    // animate(400, style({ opacity: 1 }))
    animate(400)
  ])
]);
