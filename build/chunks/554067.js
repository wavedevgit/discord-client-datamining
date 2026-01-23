/** Chunk was on web.js **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => i.u,
    Meridiem: () => s.FF,
    ParsingComponents: () => a.BP,
    ParsingResult: () => a.s4,
    ReferenceWithTimezone: () => a.b5,
    Weekday: () => s.Bw,
    casual: () => h,
    createCasualConfiguration: () => y,
    createConfiguration: () => b,
    parse: () => g,
    parseDate: () => E,
    strict: () => m
});
var r = n(125659),
    i = n(880683),
    a = n(374372),
    s = n(322811),
    o = n(774188),
    l = n(492381),
    c = n(563690),
    u = n(345346),
    d = n(432208),
    f = n(837493),
    p = n(149684),
    _ = n(215325);
let h = new i.u(y()),
    m = new i.u(b(!0));

function g(e, t, n) {
    return h.parse(e, t, n)
}

function E(e, t, n) {
    return h.parseDate(e, t, n)
}

function y(e = !0) {
    let t = b(!1, e);
    return t.parsers.push(new p.A), t.parsers.push(new _.A), t
}

function b(e = !0, t = !0) {
    return (0, r.i)({
        parsers: [new o.A(t), new l.A, new c.A, new f.A],
        refiners: [new u.A, new d.A]
    }, e)
}