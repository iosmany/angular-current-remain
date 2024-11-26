import { InjectionToken } from '@angular/core';

/*
Tokens are particularly useful for injecting non-class dependencies and for providing
 different implementations of a service or value.
*/

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'LocalStorage',
  {
    providedIn: 'root',
    factory: () => localStorage, // Factory function to return localStorage
  }
);
