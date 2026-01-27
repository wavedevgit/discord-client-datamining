/** Chunk was on 7803 **/
/** chunk id: 210742, original params: t,e,s (module,exports,require) **/
s.d(e, {
    A: () => p
});
var i = s(627968),
    n = s(64700),
    a = s(731738),
    l = s(397927),
    r = s(964486),
    c = s(831062),
    o = s(954571),
    d = s(308645),
    u = s(335891),
    m = s(929770),
    x = s(259960),
    h = s(257110),
    g = s(366141),
    j = s(224010),
    v = s(652215),
    N = s(985018),
    f = s(589896);

function p() {
    let t = (0, h.A)(),
        e = (0, x.v)(),
        s = (0, u.K)(),
        p = (0, m.b)();
    (0, r.Ay)(() => {
        d.Yn()
    });
    let E = n.useRef(s);
    return (n.useEffect(() => {
        E.current = s
    }), n.useEffect(() => {
        e && (o.default.track(v.HAw.SAFETY_HUB_VIEWED, {
            account_standing: E.current.state
        }), c.A.increment({
            name: a.K.SAFETY_HUB_VIEW
        }))
    }, [e]), t) ? (0, i.jsx)(l.y$y, {}) : null != p ? (0, i.jsxs)(l.$Td, {
        color: l.Hv$.DANGER,
        className: f.aL,
        children: [N.intl.string(N.t.TDRvqs), (0, i.jsx)(l.zr9, {
            onClick: () => d.Yn(),
            children: N.intl.string(N.t.R1AN4F)
        })]
    }) : (0, i.jsxs)("div", {
        className: f.kL,
        children: [(0, i.jsx)(g.A, {}), (0, i.jsx)(j.q, {})]
    })
}