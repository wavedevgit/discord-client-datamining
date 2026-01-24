/** Chunk was on web.js **/
/** chunk id: 96533, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048);
var r = n(64700),
    i = n(745669),
    a = n(846857),
    s = n(183766),
    o = n(801148),
    l = n(772350),
    c = n(992234),
    u = n(75230),
    d = n(13181),
    f = n(103989),
    p = n(744877),
    _ = n(13093),
    h = n(562465),
    m = n(719718),
    g = n(849504),
    E = n(934658),
    y = n(447515),
    b = n(844636),
    O = n(485508),
    v = n(656122),
    A = n(416397),
    I = n(582165),
    S = n(65e4);
let T = [u.A, d.A, p.A, _.A, f.A, E.A, y.A, b.A, O.A, v.A, A.A, I.A, S.A, a.A, c.A, l.A, i.A, s.A, o.A];

function C() {
    let e = r.useRef(0),
        t = r.useRef(!0),
        n = (0, g.I)(),
        i = n === m.$.SUCCESS || n === m.$.ERROR,
        [a, s] = r.useState(!1);
    return (0, r.useEffect)(() => {
        T.forEach(n => h.Bo.get({
            url: n,
            rejectWithError: !0
        }).then(() => {
            t.current && (e.current += 1, e.current === T.length && s(!0))
        }))
    }, []), (0, r.useEffect)(() => () => {
        t.current = !1
    }, []), a && i
}