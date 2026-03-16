/** chunk id: 224515 params = (module,exports,require) **/
n.d(t, {
    A: () => E
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
    m = n(160946),
    g = n(859241),
    A = n(295405),
    h = n(166403),
    x = n(653183),
    p = n(652215),
    T = n(417711);

function E() {
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, _.zS)(null, null, p.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, r.cf)([h.A], () => ({
        hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
        premiumSubscription: h.A.getPremiumTypeSubscription()
    })), n = (0, m.Y)(), l = (0, r.bG)([A.A], () => A.A.hasFetchedPaymentSources), E = (0, r.bG)([g.A], () => g.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && l && !E ? (0, i.jsxs)("div", {
        className: T.kL,
        children: [(0, i.jsx)("div", {
            className: T.Tp
        }), (0, i.jsx)("div", {
            className: T.Qs,
            children: (0, i.jsx)(x.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: a()(T.kL, T.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}