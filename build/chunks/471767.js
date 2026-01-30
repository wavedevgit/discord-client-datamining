/** chunk id: 471767, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => i.u,
    Meridiem: () => o.FF,
    ParsingComponents: () => a.BP,
    ParsingResult: () => a.s4,
    ReferenceWithTimezone: () => a.b5,
    Weekday: () => o.Bw,
    casual: () => m,
    createCasualConfiguration: () => b,
    createConfiguration: () => O,
    parse: () => E,
    parseDate: () => y,
    strict: () => g
});
var r = n(125659),
    i = n(880683),
    a = n(374372),
    o = n(322811),
    s = n(774188),
    l = n(772177),
    c = n(522926),
    u = n(10818),
    d = n(851472),
    f = n(477017),
    p = n(132200),
    _ = n(390593),
    h = n(76334);
let m = new i.u(b()),
    g = new i.u(O(!0));

function E(e, t, n) {
    return m.parse(e, t, n)
}

function y(e, t, n) {
    return m.parseDate(e, t, n)
}

function b(e = !0) {
    let t = O(!1, e);
    return t.parsers.push(new p.A), t.parsers.push(new _.A), t
}

function O(e = !0, t = !0) {
    return (0, r.i)({
        parsers: [new s.A(t), new l.A, new c.A, new f.A, new h.A],
        refiners: [new u.A, new d.A]
    }, e)
}