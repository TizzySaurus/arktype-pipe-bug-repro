import { type } from "arktype";

export const trimAndParseToInt = type("string.trim").pipe((s) =>
    Number.parseInt(s === "" ? "0" : s)
);

const foo: number | type.errors = trimAndParseToInt("  123  ");
