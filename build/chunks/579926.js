/** chunk id: 579926, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
});
var r = n(792976),
    i = n(341251),
    a = n(322010),
    o = n(210296),
    s = n(8222),
    l = n(199577),
    c = n(942548),
    u = n(29782),
    d = n(189165),
    f = n(761328),
    p = n(545570),
    _ = n(125659),
    h = n(916018),
    m = n(905323),
    g = n(31111),
    E = n(2268),
    y = n(774188),
    b = n(183806),
    O = n(507833),
    v = n(107125),
    A = n(83707),
    I = n(730846),
    S = n(161666);
class T {
    createCasualConfiguration(e = !1) {
        let t = this.createConfiguration(!1, e);
        return t.parsers.push(new h.A), t.parsers.push(new m.A), t.parsers.push(new o.A), t.parsers.push(new E.A), t.parsers.push(new b.A), t.refiners.push(new S.A), t
    }
    createConfiguration(e = !0, t = !1) {
        let n = (0, _.i)({
            parsers: [new y.A(t), new r.A(e), new i.A, new a.A(t), new g.A, new l.A, new c.A(e), new u.A(e), new d.A(e)],
            refiners: [new p.A]
        }, e);
        return n.parsers.unshift(new s.A(e)), n.refiners.unshift(new v.A), n.refiners.unshift(new O.A), n.refiners.unshift(new A.A), n.refiners.push(new p.A), n.refiners.push(new I.A), n.refiners.push(new f.A), n
    }
}