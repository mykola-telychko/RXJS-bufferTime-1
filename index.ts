// RxJS v6+
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

// Example 1: Buffer for 2 seconds
// https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertime

//Create an observable that emits a value every 500ms
const srcInterval$ = interval(500);
//After 2 seconds have passed, emit buffered values as an array
const example = srcInterval$.pipe(bufferTime(2000));
//Print values to console
//ex. output [0,1,2]...[3,4,5,6]
const subscribe = example.subscribe((val) =>
  console.log('Buffered with Time:', val)
);
