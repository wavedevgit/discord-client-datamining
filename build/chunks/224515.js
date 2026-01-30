/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    h = n(73825),
    g = n(160946),
    x = n(859241),
    p = n(295405),
    m = n(166403),
    A = n(653183),
    b = n(652215),
    j = n(417711);

function O() {
    l.useEffect(() => {
        c.h.wait(() => {
            d.hP(), d.$o(), (0, u.CD)(), (0, h.zS)(null, null, b.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, a.cf)([m.A], () => ({
        hasFetchedSubscriptions: m.A.hasFetchedSubscriptions(),
        premiumSubscription: m.A.getPremiumTypeSubscription()
    })), n = (0, g.Y)(), s = (0, a.bG)([p.A], () => p.A.hasFetchedPaymentSources), O = (0, a.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && s && !O ? (0, i.jsxs)("div", {
        className: j.kL,
        children: [(0, i.jsx)("div", {
            className: j.Tp
        }), (0, i.jsx)("div", {
            className: j.Qs,
            children: (0, i.jsx)(A.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: r()(j.kL, j.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}