/** chunk id: 210742 params = (module,exports,require) **/
s.d(e, {
    A: () => _
});
var i = s(627968),
    n = s(64700),
    a = s(731738),
    r = s(397927),
    l = s(964486),
    c = s(831062),
    o = s(954571),
    d = s(308645),
    u = s(335891),
    m = s(929770),
    N = s(259960),
    h = s(257110),
    x = s(588522),
    g = s(224010),
    E = s(652215),
    A = s(985018),
    I = s(396855);

function _() {
    let t = (0, h.A)(),
        e = (0, N.v)(),
        s = (0, u.K)(),
        _ = (0, m.b)();
    (0, l.Ay)(() => {
        d.Yn()
    });
    let j = n.useRef(s);
    return (n.useEffect(() => {
        j.current = s
    }), n.useEffect(() => {
        e && (o.default.track(E.HAw.SAFETY_HUB_VIEWED, {
            account_standing: j.current.state
        }), c.A.increment({
            name: a.K.SAFETY_HUB_VIEW
        }))
    }, [e]), t) ? (0, i.jsx)(r.y$y, {}) : null != _ ? (0, i.jsxs)(r.$Td, {
        color: r.Hv$.DANGER,
        className: I.aL,
        children: [A.intl.string(A.t.TDRvqs), (0, i.jsx)(r.zr9, {
            onClick: () => d.Yn(),
            children: A.intl.string(A.t.R1AN4F)
        })]
    }) : (0, i.jsxs)("div", {
        className: I.kL,
        children: [(0, i.jsx)(x.A, {}), (0, i.jsx)(g.q, {})]
    })
}