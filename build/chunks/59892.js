/** Chunk was on web.js **/
/** chunk id: 59892, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => r.u,
    GB: () => c,
    Meridiem: () => a.FF,
    ParsingComponents: () => i.BP,
    ParsingResult: () => i.s4,
    ReferenceWithTimezone: () => i.b5,
    Weekday: () => a.Bw,
    casual: () => s,
    configuration: () => o,
    parse: () => u,
    parseDate: () => d,
    strict: () => l
});
var r = n(880683),
    i = n(374372),
    a = n(322811);
let o = new(n(579926)).A,
    s = new r.u(o.createCasualConfiguration(!1)),
    l = new r.u(o.createConfiguration(!0, !1)),
    c = new r.u(o.createCasualConfiguration(!0));

function u(e, t, n) {
    return s.parse(e, t, n)
}

function d(e, t, n) {
    return s.parseDate(e, t, n)
}