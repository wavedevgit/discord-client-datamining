/** Chunk was on web.js **/
/** chunk id: 816694, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => h.u,
    Meridiem: () => g.FF,
    ParsingComponents: () => m.BP,
    ParsingResult: () => m.s4,
    ReferenceWithTimezone: () => m.b5,
    Weekday: () => g.Bw,
    casual: () => b,
    createCasualConfiguration: () => I,
    createConfiguration: () => S,
    parse: () => v,
    parseDate: () => A,
    strict: () => O
});
var r = n(854724),
    i = n(584823),
    a = n(179860),
    o = n(225960),
    s = n(972826),
    l = n(381620),
    c = n(762094),
    u = n(125659),
    d = n(280598),
    f = n(504927),
    p = n(749867),
    _ = n(368072),
    h = n(880683),
    m = n(374372),
    g = n(322811),
    E = n(774188),
    y = n(373122);
let b = new h.u(I()),
    O = new h.u(S(!0));

function v(e, t, n) {
    return b.parse(e, t, n)
}

function A(e, t, n) {
    return b.parseDate(e, t, n)
}

function I() {
    let e = S(!1);
    return e.parsers.unshift(new d.A), e.parsers.unshift(new f.A), e.parsers.unshift(new a.A), e.parsers.unshift(new _.A), e.parsers.unshift(new y.A), e
}

function S(e = !0) {
    return (0, u.i)({
        parsers: [new E.A(!0), new r.A, new i.A, new p.A, new o.A(e), new s.A],
        refiners: [new c.A, new l.A]
    }, e)
}