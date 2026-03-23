/** chunk id: 224515 params = (module,exports,require) **/
n.d(t, {
    A: () => S
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
    m = n(73825),
    _ = n(160946),
    g = n(178929),
    A = n(859241),
    x = n(295405),
    p = n(166403),
    h = n(653183),
    T = n(843838),
    E = n(652215),
    f = n(417711);

function S() {
    let e = (0, g.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, m.zS)(null, null, E.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: t,
        premiumSubscription: n
    } = (0, r.cf)([p.A], () => ({
        hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
        premiumSubscription: p.A.getPremiumTypeSubscription()
    })), l = (0, _.Y)(), S = (0, r.bG)([x.A], () => x.A.hasFetchedPaymentSources), C = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts);
    return t && l && S && !C ? (0, i.jsxs)("div", {
        className: f.kL,
        children: [(0, i.jsx)("div", {
            className: f.Tp
        }), (0, i.jsx)("div", {
            className: f.Qs,
            children: e ? (0, i.jsx)(T.A, {
                premiumSubscription: n
            }) : (0, i.jsx)(h.A, {
                premiumSubscription: n
            })
        })]
    }) : (0, i.jsx)("div", {
        className: a()(f.kL, f.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}