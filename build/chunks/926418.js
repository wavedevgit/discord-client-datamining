/** Chunk was on 8894 **/
/** chunk id: 926418, original params: e,a,t (module,exports,require) **/
t.d(a, {
    A: () => o
});
var n = t(385987);
let o = {
    date: (0, n.A)({
        formats: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: "d MMM y",
            short: "dd/MM/y"
        },
        defaultWidth: "full"
    }),
    time: (0, n.A)({
        formats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        defaultWidth: "full"
    }),
    dateTime: (0, n.A)({
        formats: {
            full: "{{date}} 'a las' {{time}}",
            long: "{{date}} 'a las' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        },
        defaultWidth: "full"
    })
}