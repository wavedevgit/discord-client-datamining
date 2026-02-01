/** chunk id: 105220, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(397927),
    o = n(143991),
    c = n(942857),
    u = n(915967),
    d = n(775121),
    p = n(775602),
    h = n(926441),
    g = n(327866),
    m = n(959278),
    f = n(575486),
    A = n(531685),
    _ = n(203982),
    b = n(249477),
    E = n(507060),
    O = n(652215),
    y = n(92854);
let I = i.memo(function() {
    let e = (0, c.A)(),
        t = i.useRef(null),
        n = i.useCallback(e => {
            let {
                duration: n,
                intensity: r
            } = e;
            if (p.A.useReducedMotion || !A.A.isFocused()) return;
            let {
                current: i
            } = t;
            a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r)
        }, []);
    return i.useEffect(() => (d.A.setLayout(u.Ay), d.A.enable(), () => d.A.disable()), []), i.useEffect(() => (_._.subscribe(O.jej.SHAKE_APP, n), () => {
        _._.unsubscribe(O.jej.SHAKE_APP, n)
    }), [n]), (0, h.A)(), (0, r.jsxs)(s.x0k, {
        ref: t,
        className: y.y,
        children: [(0, r.jsx)(E.A, {
            className: y.Z,
            children: (0, r.jsx)(m.A, {})
        }), (0, r.jsx)(g.A, {}), (0, r.jsx)(o.A, {}), (0, r.jsx)(b.A, {}), (0, r.jsx)(f.A, {}), !e && (0, r.jsx)(s.Smm, {})]
    })
})