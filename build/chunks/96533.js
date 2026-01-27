/** Chunk was on 20941 **/
/** chunk id: 96533, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048);
var r = n(64700),
    l = n(745669),
    a = n(846857),
    i = n(183766),
    s = n(801148),
    o = n(772350),
    c = n(992234),
    u = n(75230),
    d = n(13181),
    m = n(103989),
    f = n(744877),
    p = n(13093),
    h = n(562465),
    b = n(719718),
    g = n(849504),
    x = n(934658),
    y = n(447515),
    v = n(844636),
    j = n(485508),
    C = n(656122),
    _ = n(416397),
    A = n(582165),
    O = n(65e4);
let E = [u.A, d.A, f.A, p.A, m.A, x.A, y.A, v.A, j.A, C.A, _.A, A.A, O.A, a.A, c.A, o.A, l.A, i.A, s.A];

function S() {
    let e = r.useRef(0),
        t = r.useRef(!0),
        n = (0, g.I)(),
        l = n === b.$.SUCCESS || n === b.$.ERROR,
        [a, i] = r.useState(!1);
    return (0, r.useEffect)(() => {
        E.forEach(n => h.Bo.get({
            url: n,
            rejectWithError: !0
        }).then(() => {
            t.current && (e.current += 1, e.current === E.length && i(!0))
        }))
    }, []), (0, r.useEffect)(() => () => {
        t.current = !1
    }, []), a && l
}