import { PizzaGuard } from './pizzas.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzaExistGuards } from './pizza-exists.guard';

export const guards: any[] = [PizzaGuard, PizzaExistGuards, ToppingsGuard];

export * from './pizzas.guard';
export * from './toppings.guard';
export * from './pizza-exists.guard';