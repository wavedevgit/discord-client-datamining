/** Chunk was on web.js **/
/** chunk id: 274361, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => i.u,
    Meridiem: () => s.FF,
    ParsingComponents: () => a.BP,
    ParsingResult: () => a.s4,
    ReferenceWithTimezone: () => a.b5,
    Weekday: () => s.Bw,
    casual: () => I,
    createCasualConfiguration: () => N,
    createConfiguration: () => w,
    parse: () => T,
    parseDate: () => C,
    strict: () => S
});
var r = n(125659),
    i = n(880683),
    a = n(374372),
    s = n(322811),
    o = n(714196),
    l = n(973902),
    c = n(248188),
    u = n(471589),
    d = n(774188),
    f = n(924482),
    p = n(359269),
    _ = n(921932),
    h = n(273050),
    m = n(843959),
    g = n(389378),
    E = n(703333),
    y = n(196417),
    b = n(101272),
    O = n(970418),
    v = n(57724),
    A = n(241087);
let I = new i.u(N()),
    S = new i.u(w(!0));

function T(e, t, n) {
    return I.parse(e, t, n)
}

function C(e, t, n) {
    return I.parseDate(e, t, n)
}

function N(e = !0) {
    let t = w(!1, e);
    return t.parsers.unshift(new c.A), t.parsers.unshift(new u.A), t.parsers.unshift(new y.A), t.parsers.unshift(new h.A), t.parsers.unshift(new O.A), t.parsers.unshift(new b.A), t
}

function w(e = !0, t = !0) {
    return (0, r.i)({
        parsers: [new d.A(t), new f.A, new _.A, new h.A, new p.A, new E.A, new m.A, new g.A(e), new v.A(e), new A.A(e)],
        refiners: [new l.A, new o.A]
    }, e)
}