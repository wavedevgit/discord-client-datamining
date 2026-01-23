/** Chunk was on 68790 **/
/** chunk id: 441914, original params: e,i,a (module,exports,require) **/
a.d(i, {
    A: () => n
});
var t = a(385987);
let n = {
    date: (0, t.A)({
        formats: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "dd/MM/y"
        },
        defaultWidth: "full"
    }),
    time: (0, t.A)({
        formats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        defaultWidth: "full"
    }),
    dateTime: (0, t.A)({
        formats: {
            full: "{{date}} '\xe0' {{time}}",
            long: "{{date}} '\xe0' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        },
        defaultWidth: "full"
    })
}