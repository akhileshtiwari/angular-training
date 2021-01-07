import { Injectable } from "@angular/core";

export abstract class LoggerService {
    abstract log(arg): void;
}

@Injectable({
    providedIn:"root"
})
export class MyLoggerService extends LoggerService {
    log(arg) {
        console.log(arg);
    }
}

@Injectable({
    providedIn:"root"
})

export class BetterLoggerService extends LoggerService {
    log(arg: any): void {
        console.log("====================");
        console.log(arg);
        console.log("====================");
    }

}