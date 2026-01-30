/** chunk id: 150239, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    Chrono: () => h.u,
    Meridiem: () => g.FF,
    ParsingComponents: () => m.BP,
    ParsingResult: () => m.s4,
    ReferenceWithTimezone: () => m.b5,
    Weekday: () => g.Bw,
    casual: () => O,
    createCasualConfiguration: () => A,
    createConfiguration: () => I,
    parse: () => S,
    parseDate: () => T,
    strict: () => v
});
var r = n(38078),
    i = n(265865),
    a = n(917726),
    o = n(628574),
    s = n(52456),
    l = n(270816),
    c = n(374962),
    u = n(125659),
    d = n(470008),
    f = n(776593),
    p = n(490977),
    _ = n(906038),
    h = n(880683),
    m = n(374372),
    g = n(322811),
    E = n(774188),
    y = n(454020),
    b = n(368324);
let O = new h.u(A()),
    v = new h.u(I(!0));

function A() {
    let e = I(!1);
    return e.parsers.unshift(new d.A), e.parsers.unshift(new f.A), e.parsers.unshift(new a.A), e.parsers.unshift(new _.A), e.parsers.unshift(new y.A), e
}

function I(e) {
    return (0, u.i)({
        parsers: [new b.A, new E.A(!0), new r.A, new i.A, new p.A, new o.A(e), new s.A],
        refiners: [new c.A, new l.A]
    }, e)
}

function S(e, t, n) {
    return O.parse(e, t, n)
}

function T(e, t, n) {
    return O.parseDate(e, t, n)
}