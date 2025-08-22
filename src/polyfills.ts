/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: `zone-flags.ts`), and import it here.
 *
 * The following flags will turn off some error-prone features with zone.js patch
 * in order to improve performance impact
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 * In IE/Edge, add `global` to window, since some modules like `buffer` will check it.
 * (window as any).global = window;
 */
import 'zone.js';  // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
