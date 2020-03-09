import { response } from "express";
import { version } from "moment";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Charles',
            age: 46
        });
        // reject('Testing rejection');
    }, 3000);    
});

console.log('Begin');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str)=>{
    console.log('Does this run?', str);
}).catch((error)=>{
    console.log('An error occured: ',error);
});

console.log('After');