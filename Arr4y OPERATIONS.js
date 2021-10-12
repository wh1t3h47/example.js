/**
 * @filedescription This file contains javascript examples for begginers,
 * it is intended to be more of a lesson at this point in time.
 */

// Map clones the array and returns a new array
// Array map example
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = a.map(item => item * 2);
console.log(b);

// forEach only iterates (cicles) the array, but does not return anything
// Array forEach example
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
c.forEach(item => console.log(item));

// filter returns an array with the items that match the condition
// Array filter example
const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const e = d.filter(item => item % 2 === 0);
console.log(e);

// reduce returns a single value, the result of the operation
// array reduce example
const f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const g = f.reduce((acc, item) => acc + item, 0);
console.log(g);

// find returns the first item that matches the condition
// array find example
const h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const i = h.find(item => item % 2 === 0);
console.log(i);

// some returns true if at least one item matches the condition
// array some example
const j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = j.some(item => item % 2 === 0);
console.log(k);

// every returns true if all items match the condition
// array every example
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const m = l.every(item => item % 2 === 0);
console.log(m);

// reduceRight returns a single value, the result of the operation
// array reduceRight example
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const o = n.reduceRight((acc, item) => acc + item, 0);
console.log(o);

// findIndex returns the index of the first item that matches the condition
// array findIndex example
const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const q = p.findIndex(item => item % 2 === 0);
console.log(q);

// includes returns true if the array contains the item
// array includes example
const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const s = r.includes(5);
console.log(s);

// indexOf returns the index of the item in the array
// array indexOf example
const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const u = t.indexOf(5);
console.log(u);

// lastIndexOf returns the index of the last item in the array
// array lastIndexOf example
const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const w = v.lastIndexOf(5);
console.log(w);

// slice returns a new array with the items from the original array
// array slice example
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y = x.slice(3, 6);
console.log(y);

// splice returns a new array with the items removed from the original array
// array splice example
const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const aa = z.splice(3, 6);
console.log(aa);

// concat returns a new array with the items from the original array
// array concat example
const ab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ac = ab.concat([11, 12, 13, 14, 15]);
console.log(ac);

// join returns a string with the items from the original array
// array join example
const ad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ae = ad.join('-');
console.log(ae);

// reverse returns a new array with the items from the original array
// array reverse example
const af = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ag = af.reverse();
console.log(ag);

// sort returns a new array with the items from the original array
// array sort example
const ah = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ai = ah.sort((a, b) => a - b);
console.log(ai);
