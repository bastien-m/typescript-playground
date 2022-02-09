export function padLeft(v: string | number, word: string ): string {
    if (typeof v === "string") {
        return v + word // here v is Type<string>
    } else {
        return " ".repeat(v) + word // here v is Type<number>
    }
}
