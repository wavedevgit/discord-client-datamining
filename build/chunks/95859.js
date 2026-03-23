/** chunk id: 95859 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(158954),
    r = n(998304),
    o = n(764231),
    d = n(112848),
    c = n(627380),
    u = n(149757),
    m = n(985018),
    _ = n(706627);
let g = () => {
    let e = (0, d.$F)(),
        t = (0, d.Xb)() ?? new Date,
        n = (0, u.N)(e?.id);
    if (null == e || null == n) return null;
    let {
        id: s,
        nameUnformatted: g,
        tenureReqNumMonths: A,
        hasWideArt: x
    } = e, p = m.intl.string(g), h = (0, o.T)(s, A), f = {
        "--custom-badge-glow-color": (0, r.KU)(e.glowColor, .5)
    };
    return (0, i.jsxs)("div", {
        className: _.kL,
        style: f,
        children: [(0, i.jsx)("div", {}), " ", (0, i.jsx)("img", {
            src: n.standard,
            alt: p,
            className: l()(_.pq, {
                [_.kQ]: e.status === d.Wo.UPCOMING,
                [_.U]: x
            })
        }), (0, i.jsxs)("div", {
            className: _._u,
            children: [(0, i.jsx)(a.EYj, {
                variant: "text-lg/semibold",
                className: _.Vv,
                children: p
            }), (0, i.jsx)(a.EYj, {
                variant: "text-md/normal",
                className: _.Vv,
                children: h
            }), (0, i.jsx)(a.EYj, {
                variant: "text-xs/normal",
                children: e?.status === d.Wo.EARNED ? m.intl.format(m.t.Hu4jfi, {
                    date: t
                }) : e?.status === d.Wo.UPCOMING ? m.intl.format(m.t.E85fll, {
                    date: t,
                    days: (0, c.x)(t, e.tenureReqNumMonths)
                }) : null
            })]
        })]
    })
}