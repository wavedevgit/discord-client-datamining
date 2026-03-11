/** chunk id: 224515 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    _ = n(73825),
    g = n(160946),
    A = n(859241),
    m = n(295405),
    h = n(166403),
    p = n(653183),
    x = n(652215),
    E = n(417711);

function T() {
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, _.zS)(null, null, x.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, r.cf)([h.A], () => ({
        hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
        premiumSubscription: h.A.getPremiumTypeSubscription()
    })), n = (0, g.Y)(), l = (0, r.bG)([m.A], () => m.A.hasFetchedPaymentSources), T = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && l && !T ? (0, i.jsxs)("div", {
        className: E.kL,
        children: [(0, i.jsx)("div", {
            className: E.Tp
        }), (0, i.jsx)("div", {
            className: E.Qs,
            children: (0, i.jsx)(p.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: a()(E.kL, E.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}