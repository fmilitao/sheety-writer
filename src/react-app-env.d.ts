/// <reference types="react-scripts" />

declare const gapi: any;

interface SheetHeader {
  title: string;
  values?: string[];
}

interface Sheet {
  title: string;
  headers: SheetHeader[];
}

interface GApiData {
  apiKey: string;
  clientId: string;
  spreadsheetId: string;
  sheetData: Sheet[];
}

interface Logger {
  log: (message: string) => void;
}

type Valid<T> = { valid: false; errors?: any } | { valid: true; value: T };
