/** returns true if is null or empty */
export const isNullOrEmpty = (value: string | number): boolean => {
  const isNull = value === "" || value === undefined || value === null || (typeof value === "number" && isNaN(value));
  return isNull;
};


/**
 * check if is a corret e-mail
 * @param mail
 * @returns
 */
export const validateMail = (mail: string): boolean => {
  /* eslint-disable-next-line */
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regex.test(mail);
  return isValid;
};

/**
 *  Convert strings as  'true', 'TRUE' , 'false', 'yes','0' and so on to boolean
 * @param stringValue
 * @returns
 */
export const parseBoolean = (stringValue: string): boolean => {
  // const bool_value = value.toLowerCase() == 'true' ? true : false;
  // return bool_value;

  switch (stringValue?.toLowerCase()?.trim()) {
    case "true":
    case "yes":
    case "1":
      return true;

    case "false":
    case "no":
    case "0":
    case null:
    case undefined:
      return false;

    default:
      return JSON.parse(stringValue);
  }
};

/**
 * Convert string to int
 * @param string as number
 * @returns number
 */
export const parseToInt = (stringAsNumber: string): number | undefined => {
  if ((stringAsNumber || "").trim()) {
    return parseInt((stringAsNumber || "").trim(), 10);
  }
  return undefined;
};

/**
 * To format strings similar to String.Format in C#matear cadenas de manera similar a String.Format en C#.
 * @param format  "Hello {0}, {1}?"
 * @param args frase1, frase2, ...
 * @returns Formated string
 */
export const formatString = (format: string, ...args: any[]): string => {
  return format.replace(/{(\d+)}/g, (match, index) => {
    const arg = args[index];
    return typeof arg !== "undefined" ? arg : match;
  });
};

/**
 *  Parse string to enum value
 * @param enumType 
 * @param value 
 * @returns 
 */
export const parseEnum = <T>(enumType: T, value: string): T[keyof T] | undefined => {
  const enumKey = Object.keys(enumType).find(key => key.toLowerCase() === value.toLowerCase());
  if (enumKey !== undefined) {
    return enumType[enumKey as keyof T];
  }
  return undefined;
};

/**
 * Parse enum value tu respective text. similar to c# Enum.GetName
 * @param enumType 
 * @param value 
 * @returns 
 */
export const getEnumKeyFromValue = <T>(enumType: T, value: number): string | undefined => {
  const enumKey = Object.keys(enumType).find(key => enumType[key as keyof T] === value);
  return enumKey;
};