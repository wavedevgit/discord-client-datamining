/** chunk id: 623819, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => a.u,
    Meridiem: () => s.FF,
    ParsingComponents: () => o.BP,
    ParsingResult: () => o.s4,
    ReferenceWithTimezone: () => o.b5,
    Weekday: () => s.Bw,
    casual: () => g,
    createCasualConfiguration: () => O,
    createConfiguration: () => v,
    hant: () => m,
    parse: () => y,
    parseDate: () => b,
    strict: () => E
});
var r = n(321287),
    i = n(125659),
    a = n(880683),
    o = n(374372),
    s = n(322811),
    l = n(318340),
    c = n(899562),
    u = n(973617),
    d = n(736360),
    f = n(408669),
    p = n(932640),
    _ = n(590413),
    h = n(824033);
let m = new a.u(O()),
    g = new a.u(O()),
    E = new a.u(v());

function y(e, t, n) {
    return g.parse(e, t, n)
}

function b(e, t, n) {
    return g.parseDate(e, t, n)
}

function O() {
    let e = v();
    return e.parsers.unshift(new l.A), e
}

function v() {
    let e = (0, i.i)({
        parsers: [new c.A, new d.A, new p.A, new f.A, new u.A],
        refiners: [new _.A, new h.A]
    });
    return e.refiners = e.refiners.filter(e => !(e instanceof r.A)), e
}