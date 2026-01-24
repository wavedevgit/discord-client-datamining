export enum IntlStringsTypes {
    literal,
    argument,
    number,
    date,
    time,
    select,
    plural,
    pound,
    tag,
}

export type IntlStringPrimitive = string | number;

export interface IntlStringArray extends Array<IntlStringValue> {}
export interface IntlStringObject extends Record<string, IntlStringValue> {}

export type IntlStringValue =
    | IntlStringPrimitive
    | IntlStringArray
    | IntlStringObject
    | IntlStringValue[];

export type Chunk = Record<string, IntlStringValue>;

export default class IntlStrings {
    chunks: Chunk[];

    constructor(chunks: Chunk[]) {
        this.chunks = chunks;
    }

    private parseTagAsMarkdown(
        tagChildren: IntlStringValue[],
        tagValue: string,
    ): string {
        switch (tagValue) {
            case '$b':
                return `**${this.parseString(tagChildren)}**`;
            case '$i':
                return `*${this.parseString(tagChildren)}*`;
            case '$p':
                return `${this.parseString(tagChildren)}\n\n`;
            case '$code':
                return `\`\`${this.parseString(tagChildren)}\`\``;
            case '$link': {
                const linkName = this.parseString([
                    tagChildren[tagChildren.length - 1],
                ]);
                const linkURL = this.parseString([tagChildren[0]]);
                return `[${linkName}](${linkURL})`;
            }
            default:
                return `$[${this.parseString(tagChildren)}]({{${tagValue}}})`;
        }
    }

    private parsePluralString(string: Record<string, IntlStringValue>): string {
        return Object.entries(string)
            .map(([key, value]) => `${key} {${this.parseString(value)}}`)
            .join(' ');
    }

    public parseString(string: IntlStringValue): string {
        if (typeof string === 'string') return string;
        if (typeof string === 'number') return string.toString();
        if (!Array.isArray(string) && typeof string !== 'object') return '';

        let formattedString = '';
        const type: IntlStringsTypes =
            Array.isArray(string) && typeof string[0] === 'number'
                ? string[0]
                : IntlStringsTypes.literal;

        switch (type) {
            case IntlStringsTypes.literal:
                for (const element of Array.isArray(string) ? string : []) {
                    if (typeof element === 'number') continue;
                    formattedString += this.parseString(element);
                }
                return formattedString;

            case IntlStringsTypes.tag:
                return this.parseTagAsMarkdown(
                    // @ts-expect-error my lazy ass doesnt want to fix this because its old code
                    Array.isArray(string) ? string[2] : [],
                    Array.isArray(string) ? string[1] : '',
                );

            case IntlStringsTypes.number:
                return `{${Array.isArray(string) ? string[1] : ''}}`;

            case IntlStringsTypes.argument:
                return `!!{${Array.isArray(string) ? string[1] : ''}}!!`;

            case IntlStringsTypes.date:
                return `{${Array.isArray(string) ? string[1] : ''}, date, ${Array.isArray(string) ? string[2] : ''}}`;

            case IntlStringsTypes.time:
                return `{${Array.isArray(string) ? string[1] : ''}, time, ${Array.isArray(string) ? string[2] : ''}}`;

            case IntlStringsTypes.select:
                return `{${Array.isArray(string) ? string[1] : ''}, select, ${this.parsePluralString(Array.isArray(string) ? (string[2] as Record<string, IntlStringValue>) : {})}}`;

            case IntlStringsTypes.plural:
                return `{${Array.isArray(string) ? string[1] : ''}, plural, ${this.parsePluralString(Array.isArray(string) ? (string[2] as Record<string, IntlStringValue>) : {})}}`;

            case IntlStringsTypes.pound:
                return '';

            default:
                console.log(string);
                console.log(
                    `types#${IntlStringsTypes[type]}=${type} is not supported.`,
                );
                return '[need to do]';
        }
    }

    private isIntlStringValue(value: unknown): value is IntlStringValue {
        return (
            typeof value === 'number' ||
            typeof value === 'string' ||
            (typeof value === 'object' && value !== null) ||
            (Array.isArray(value) &&
                value.every((el) => this.isIntlStringValue(el)))
        );
    }

    public getStrings(object: Chunk): Record<string, string> {
        const strings: Record<string, string> = {};
        const isIntlObject =
            Object.keys(object).every((key) => key.length === 6) &&
            Object.values(object).every((value) =>
                this.isIntlStringValue(value),
            );

        if (isIntlObject) {
            for (const key in object) {
                strings[key] = this.parseString(object[key]);
            }
        }
        return strings;
    }

    public parseStrings(): Record<string, string> {
        const strings: Record<string, string> = {};
        for (const chunk of this.chunks) {
            const stringsForThisChunk = this.getStrings(chunk);
            Object.assign(strings, stringsForThisChunk);
        }
        return strings;
    }
}
