
export interface iSelected  {
    [x: string]: any;
    first: string;
    second: string;
}
export interface iCount {
    [x: string]: any;
    first: number;
    second: number
}

export interface iConfigRates {
    [x: string]: any;
    base: string,
    rates: any
}
export interface iLabelRates {
    name: string
}
export interface iSwap{
    [x: string]: any;
    swap: void
}
export interface iRequestRate{
    [x: string]: any;
    USD: void,
    EUR: void
}

export interface iRequestPush{
    rates: object
}