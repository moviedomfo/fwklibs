

export class MathFunctions {


  /**
   * Redondea un número al decimal más cercano según la cantidad de decimales especificada.
   * 
   * @param value - El número que se quiere redondear.
   * @param decimals - La cantidad de decimales a la que se quiere redondear.
   *                   Por ejemplo, 2 redondeará al segundo decimal más cercano.
   * @returns El número redondeado.
   * 
   * @example
   * roundDecimal(12.3456, 2); // 12.35
   * roundDecimal(7.894, 1);   // 7.9
   */
  public static roundDecimal(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }


  /**
 * Redondea un número hacia abajo a la cantidad de decimales especificada.
 * 
 * @param value - El número que se quiere redondear.
 * @param decimals - La cantidad de decimales a la que se quiere redondear.
 *                   Por ejemplo, 2 redondeará hacia abajo al segundo decimal.
 * @returns El número redondeado hacia abajo.
 * 
 * @example
 * floorDecimal(12.3456, 2); // 12.34
 * floorDecimal(7.891, 1);   // 7.8
 */
  public static floorDecimal(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.floor(value * factor) / factor;
  }


  
  /**
 * Redondea un número a la potencia de 10 más cercana especificada.
 * 
 * @param value - El número que se quiere redondear.
 * @param exp - El exponente de 10 al que se quiere redondear. 
 *              Por ejemplo, -2 redondeará a la centena más cercana.
 * @returns El número redondeado según la potencia de 10 especificada.
 * 
 * @example
 * round10(1234.567, -2); // 1200
 * round10(1275, -2);     // 1300
 */
  public static round10(value: number, exp: number): number {
    const factor = Math.pow(10, exp);
    return Math.round(value * factor) / factor;
  }

  /**
   * Redondea un número hacia abajo al múltiplo de 10 más cercano según el exponente.
   * 
   * @param value - El número que se quiere redondear.
   * @param exp - El exponente de 10 al que se quiere redondear.
   *              Por ejemplo, -2 redondeará hacia abajo a la centena más cercana.
   * @returns El número redondeado hacia abajo según la potencia de 10 especificada.
   * 
   * @example
   * floor10(1234.567, -2); // 1200
   * floor10(1299, -2);     // 1200
   */
  public static floor10(value: number, exp: number): number {
    const factor = Math.pow(10, exp);
    return Math.floor(value * factor) / factor;
  }

  /**
   * Redondea un número hacia arriba al múltiplo de 10 más cercano según el exponente.
   * 
   * @param value - El número que se quiere redondear.
   * @param exp - El exponente de 10 al que se quiere redondear.
   *              Por ejemplo, -2 redondeará hacia arriba a la centena más cercana.
   * @returns El número redondeado hacia arriba según la potencia de 10 especificada.
   * 
   * @example
   * ceil10(1234.567, -2); // 1300
   * ceil10(1210, -2);     // 1300
   */
  public static ceil10(value: number, exp: number): number {
    const factor = Math.pow(10, exp);
    return Math.ceil(value * factor) / factor;
  }
}
