import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import utc from "dayjs/plugin/utc";
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(isSameOrAfter);
dayjs.extend(utc);
dayjs.extend(timezone);
export class DateFunctions {
  /**
   * Gets Date from string
   * @param dateString
   * @returns the Date
   */
  public static parseDate(dateString: string): Date | null {
    let f: Date;
    if (dateString) {
      f = new Date(dateString);

      return f;
    } else {
      return null;
    }
  }

  /**
   * Convert current local date to ISO
   * @returns '2019-01-25T02:00:00.000Z'
   */
  public static getTime_Iso(): string {
    const d = dayjs().toISOString();

    return d;
  }

  /**
   * Retrive current date time  in spesific format
   * @returns DD/MM/YYYY h:mm A
   */
  public static getTime() {
    const d = dayjs().format("DD/MM/YYYY h:mm A");
    return d;
  }



  /**
   * Return prefix based on current date
   * @returns  yyyymmdd_ prefix
   */
  public static getFileNamePrefix(): string {
    const d = dayjs().format("YYYYMMDD_");
    return d;
  }

  /**
   * Get current date formatted to '01MMyyyy' pattern.
   * Generally used when we put prefixed in monthly files
   * @returns   e.g.  '2023/06/10' --> 010610
   */
  public static getPeriodo_01MMyyyy(): string {
    const dt = dayjs().format("01MMyyyy");

    return dt;
  }
  /* Retorna 2021_04 */

  /**
   * Get the formatted date according to the 'YYYY_MM' pattern.
   * @returns e.g.  '2023/06/10' --> 06
   */
  public static getPeriodo_YYYY_MM(): string {
    const dt = dayjs().format("YYYY_MM");
    return dt;
  }

  /**
   *  Get the formatted date according to the 'MM' pattern.
   * @returns e.g.  '2023/06/10' --> 06
   */
  public static getMonth_MM(): string {
    const dt = dayjs().format("MM");
    return dt;
  }

  /**
   * Get the formatted date according to the 'dd' pattern.
   * @returns e.g.  '2023/06/10' --> 10
   */
  public static getDay_dd(): string {
    const dt = dayjs().format("DD");
    return dt;
  }

  /**
   * 
   * @param date 
   * @returns 
   */
  public static getDate_To_UTC(date: Date): Date {
    const d = new Date(date.toUTCString());
    return d;
  }



  // /**
  //  * Get ISO 8601 string fromm  date pased as string
  //  */
  // public static get_Format_to(date: string): string {
  //   const convertida = dayjs(date).toISOString();
  //   return convertida;
  // }

  /**
   * Get string from formated 
   * @param format  "yyyy-MM-dd" or "yyyy/MM/dd" or any other format
   * @param date  
   * @returns 
   */
  public static get_Format(format: string, date?: Date): string {
    if (!date)
      return '';
    const convertida = dayjs(date).format(format);
    return convertida;
  }

  /**
   * La función isAfter se utiliza, por ejemplo para verificar si FechaVto es posterior a FechaEmision.
   * 
   * @param date1 
   * @param date2 
   * @returns return true if date1 > date2
   */
  public static isAfter(date1: Date | string, date2: Date | string) {
    const fecha1 = dayjs(date1);
    const fecha2 = dayjs(date2);

    return fecha1.isAfter(fecha2);
  }
  public static isSameOrAfter(date1: Date | string, date2: Date | string) {
    const fecha1 = dayjs(date1);
    const fecha2 = dayjs(date2);

    return fecha1.isSameOrAfter(fecha2);
  }

  /**
   * 
   * @param date1 
   * @param date2 
   * @returns 
   */
  public static isBefore(date1: Date | string, date2: Date | string) {
    const fecha1 = dayjs(date1);
    const fecha2 = dayjs(date2);

    return fecha1.isBefore(fecha2);
  }

  /**
   * Principio de los tiempos, su uso es poco común ya que se refiere a un año hace más de mil años en el calendario gregoriano.
   * @returns 
   */
  public static getNullDate(): Date {
    const nullDate: Date = dayjs("1017-01-01T00:00:00").toDate();
    return nullDate;
  };
  /**
 * Función que toma una fecha y la establece a la hora de inicio del día (00:00:00)
 * @param date - Fecha en formato `Dayjs` o `string`
 * @returns Fecha con la hora establecida al inicio del día
 */
  public static setToStartOfDay(date: Dayjs | string): Dayjs {
    return dayjs(date).startOf('day');
  };


  public static convertToUTC(date: Date): Date {
    if (!date)
      return date;
    //return dayjs(date).tz(SERVICE_TIMEZONE).utc().toDate();
    return dayjs.utc(date).toDate();
  };
}
