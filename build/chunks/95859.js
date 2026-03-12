/** chunk id: 95859 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    _ = n(985018),
    g = n(444941);
let A = () => {
    let e = (0, d.$F)(),
        t = (0, d.Xb)() ?? new Date,
        n = (0, u.N)(e?.id);
    if (null == e || null == n) return null;
    let {
        id: s,
        nameUnformatted: A,
        tenureReqNumMonths: m,
        hasWideArt: h
    } = e, p = _.intl.string(A), x = (0, o.T)(s, m), E = {
        "--custom-badge-glow-color": (0, r.KU)(e.glowColor, .5)
    };
    return (0, i.jsxs)("div", {
        className: g.kL,
        style: E,
        children: [(0, i.jsx)("div", {}), " ", (0, i.jsx)("img", {
            src: n.standard,
            alt: p,
            className: l()(g.pq, {
                [g.kQ]: e.status === d.Wo.UPCOMING,
                [g.U]: h
            })
        }), (0, i.jsxs)("div", {
            className: g._u,
            children: [(0, i.jsx)(a.EYj, {
                variant: "text-lg/semibold",
                className: g.Vv,
                children: p
            }), (0, i.jsx)(a.EYj, {
                variant: "text-md/normal",
                className: g.Vv,
                children: x
            }), (0, i.jsx)(a.EYj, {
                variant: "text-xs/normal",
                children: e?.status === d.Wo.EARNED ? _.intl.format(_.t.Hu4jfi, {
                    date: t
                }) : e?.status === d.Wo.UPCOMING ? _.intl.format(_.t.E85fll, {
                    date: t,
                    days: (0, c.x)(t, e.tenureReqNumMonths)
                }) : null
            })]
        })]
    })
}