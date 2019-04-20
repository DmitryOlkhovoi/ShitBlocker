/**
 * Finds shit
 * Deals with shit
 */

import _ from 'underscore';
import { from } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';
import preDefinedShit from './preDefinedShit';

/**
 * Finds elements on a page
 * @param selector CSS selector
 */
function findElements(selector: any): NodeListOf<Element> {
    return _.isFunction(selector) ?
        selector() : document.querySelectorAll(selector)
}

/**
 * Removes elements from a page
 * @param element element to remove
 */
function removeElement(element: Element) {
    element.remove();
}

/**
 * Current host
 */
const currentHost = new URL(window.location.href).host;

/**
 * Does dirty work
 */
from(preDefinedShit)
    .pipe(filter(({host}) => host === currentHost))
    .pipe(map((shit) => shit.remove))
    .pipe(mergeAll())
    .pipe(map(findElements))
    .pipe(mergeAll())
    .subscribe(removeElement);