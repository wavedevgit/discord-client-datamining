/** Chunk was on 5606 **/
/** chunk id: 95859, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(158954),
    a = n(998304),
    o = n(764231),
    c = n(112848),
    d = n(149757),
    u = n(985018),
    p = n(706627);
let _ = () => {
    var e;
    let t = (0, c.$F)(),
        n = null != (e = (0, c.Xb)()) ? e : new Date,
        i = (0, d.N)(null == t ? void 0 : t.id);
    if (null == t || null == i) return null;
    let {
        id: _,
        nameUnformatted: m,
        tenureReqNumMonths: g,
        hasWideArt: f
    } = t, b = u.intl.string(m), h = (0, o.T)(_, g), A = {
        "--custom-badge-glow-color": (0, a.KU)(t.glowColor, .5)
    };
    return (0, r.jsxs)("div", {
        className: p.kL,
        style: A,
        children: [(0, r.jsx)("div", {}), " ", (0, r.jsx)("img", {
            src: i,
            alt: b,
            className: l()(p.pq, {
                [p.kQ]: t.status === c.Wo.UPCOMING,
                [p.U]: f
            })
        }), (0, r.jsxs)("div", {
            className: p._u,
            children: [(0, r.jsx)(s.EYj, {
                variant: "text-lg/semibold",
                className: p.Vv,
                children: b
            }), (0, r.jsx)(s.EYj, {
                variant: "text-md/normal",
                className: p.Vv,
                children: h
            }), (0, r.jsx)(s.EYj, {
                variant: "text-xs/normal",
                children: (null == t ? void 0 : t.status) === c.Wo.EARNED ? u.intl.format(u.t.Hu4jfi, {
                    date: null != n ? n : new Date
                }) : (null == t ? void 0 : t.status) === c.Wo.UPCOMING ? u.intl.format(u.t.E85fll, {
                    date: null != n ? n : new Date,
                    days: t.daysLeft
                }) : null
            })]
        })]
    })
}