import { DateFunctions } from './dateFunctions';
import { FileFunctions } from './fileFunctions';

import colors from 'colors';
/** */
export class LogFunctions {
  public static Log(message: string): void {
    try {
      const logFileName = DateFunctions.getFileNamePrefix() + 'logs.txt';
      let log = DateFunctions.getTime() + ' INFO ';
      log = log.concat(message, '\n');
      FileFunctions.AppendFile(logFileName, log);
      // tslint:disable-next-line: no-console
      console.log(colors.yellow(log));
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  public static LogError(message: string): void {
    const logFileName = DateFunctions.getFileNamePrefix() + 'logs.txt';
    let log = DateFunctions.getTime_Iso() + ' ERROR ';
    log = log.concat(message, '\n');
    // tslint:disable-next-line: no-console
    console.log(colors.red(log));
    FileFunctions.AppendFile(logFileName, log);
  }

  /** */
  public static LogErrorFull(message: string, error: any): void {
    this.LogError(this.GetError(error));

    // tslint:disable-next-line: no-console
    console.log(colors.red(DateFunctions.getTime_Iso() + ' ' + message + '  ' + this.GetError(error)));
  }

  /** */
  public static LogConsole(message: string): void {
    // tslint:disable-next-line: no-console
    console.log(colors.blue(DateFunctions.getTime_Iso() + ' ' + message));
  }

  public static GetError(error): string {
    let message = error.message;
    if (error.response) message = message.concat(error.response.data.Message, '\n');
    return message;
  }
}
