import * as fs from "fs";
import {readFileSync} from "fs";
import * as path from "path";
/**
 *
 */
export class FileFunctions {
  /** */
  public static WriteFile(fileName, data): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  /** */
  public static AppendFile(fileName, data): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.appendFile(fileName, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  /** */
  public static OpenFile(fileName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const json = fs.readFileSync(fileName, "utf8");
      // tslint:disable-next-line: no-console
      console.log(json);
      resolve(json);
    });
  }
  public static async Move(source: string, dest: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        fs.rename(source, dest, (err) => {
          if (err) {
            FileFunctions.MoveLinux(source, dest);
          }

          resolve("Moved");
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  public static async MoveLinux(source: string, dest: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        fs.copyFile(source, dest, (err) => {
          if (!err) resolve("");
          else reject(err);
        });
        // Remove the old file
        fs.unlink(source, (err) => {
          if (!err) resolve("");
          else reject(err);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  /** */
  // public static saveFile = (fileName: string, content: string) => ({

  //   throw new Error("not Implemented")

  // });

  public static GetError(error: any): string {
    let message = error.message;
    if (error.response) message = message.concat(error.response.data.Message, "\n");
    return message;
  }
}
