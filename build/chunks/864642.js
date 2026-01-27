/** Chunk was on web.js **/
/** chunk id: 864642, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => u.u,
    Meridiem: () => f.FF,
    ParsingComponents: () => d.BP,
    ParsingResult: () => d.s4,
    ReferenceWithTimezone: () => d.b5,
    Weekday: () => f.Bw,
    casual: () => g,
    createCasualConfiguration: () => O,
    createConfiguration: () => v,
    parse: () => y,
    parseDate: () => b,
    strict: () => E
});
var r = n(701153),
    i = n(272081),
    a = n(355497),
    o = n(267118),
    s = n(60538),
    l = n(515875),
    c = n(781309),
    u = n(880683),
    d = n(374372),
    f = n(322811),
    p = n(309229),
    _ = n(851102),
    h = n(125659),
    m = n(483655);
let g = new u.u(O()),
    E = new u.u(v(!0));

function y(e, t, n) {
    return g.parse(e, t, n)
}

function b(e, t, n) {
    return g.parseDate(e, t, n)
}

function O() {
    let e = v(!1);
    return e.parsers.unshift(new a.A), e
}

function v(e = !0) {
    let t = (0, h.i)({
        parsers: [new r.A, new o.A, new _.A, new s.A, new l.A],
        refiners: [new p.A, new c.A, new i.A]
    }, e);
    return t.refiners = t.refiners.filter(e => !(e instanceof m.A)), t
}