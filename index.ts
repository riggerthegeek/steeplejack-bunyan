/**
 * Steeplejack DB
 *
 * Database plugin for a Steeplejack project
 */

"use strict";


/* Node modules */


/* Third-party modules */
import {createLogger as bunyan, LoggerOptions} from "bunyan";
import {ILoggerStrategy} from "steeplejack/interfaces/loggerStrategy";


/* Files */


export class Bunyan implements ILoggerStrategy {


    private _logger: any;


    public constructor (options: LoggerOptions) {

        this._logger = bunyan(options);

    }


    public debug (...args: any[]) {
        return this._logger.debug(...args);
    }


    public error (...args: any[]) {
        return this._logger.error(...args);
    }


    public fatal (...args: any[]) {
        return this._logger.fatal(...args);
    }


    public info (...args: any[]) {
        return this._logger.info(...args);
    }


    public level (...args: any[]) {
        return this._logger.level(...args);
    }


    public trace (...args: any[]) {
        return this._logger.trace(...args);
    }


    public warn (...args: any[]) {
        return this._logger.warn(...args);
    }


}
