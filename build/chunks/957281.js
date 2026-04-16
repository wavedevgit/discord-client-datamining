/** chunk id: 957281 params = (module,exports,require) **/
n.d(t, {
    c: () => x
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(15285),
    o = n(227309),
    d = n(475380),
    c = n(610215),
    u = n(985018),
    m = n(402627),
    g = n(653307);

function _() {
    return (0, i.jsx)("div", {
        className: l()(g.tR, m.eS, m.Rw),
        children: (0, i.jsxs)("div", {
            className: l()(m.$K, g.Vd),
            children: [(0, i.jsx)("div", {
                className: m.mO,
                children: u.intl.string(u.t.H68X9x)
            }), (0, i.jsx)("div", {
                className: m.GN,
                children: u.intl.string(u.t.T5Ilmw)
            })]
        })
    })
}
let x = () => {
    let {
        robloxSubgameHistory: e,
        overrideExePaths: t
    } = (0, c.a)(), n = (0, r.bG)([a.Ay], () => a.Ay.getVisibleGame());
    return null != n ? (0, i.jsx)(d.A, {
        rawGame: n,
        isOverride: t.has(n.exePath),
        nowPlaying: !0,
        subgames: n.id === o.a7 ? e : void 0
    }, (0, a.Es)(n)) : (0, i.jsx)(_, {})
}