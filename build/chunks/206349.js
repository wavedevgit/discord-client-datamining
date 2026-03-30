/** chunk id: 206349 params = (module,exports,require) **/
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
    m = n(73825),
    _ = n(160946),
    g = n(178929),
    A = n(859241),
    x = n(295405),
    h = n(166403),
    p = n(767692),
    T = n(196199),
    f = n(652215),
    S = n(479310);

function E() {
    let e = (0, g.j)("UserSettingsPremiumGuildSubscriptions");
    s.useEffect(() => {
        d.h.wait(() => {
            c.hP(), c.$o(), (0, u.CD)(), (0, m.zS)(null, null, f.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: t,
        premiumSubscription: n
    } = (0, r.cf)([h.A], () => ({
        hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
        premiumSubscription: h.A.getPremiumTypeSubscription()
    })), l = (0, _.Y)(), E = (0, r.bG)([x.A], () => x.A.hasFetchedPaymentSources), b = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts);
    return t && l && E && !b ? (0, i.jsxs)("div", {
        className: S.kL,
        children: [(0, i.jsx)("div", {
            className: S.Tp
        }), (0, i.jsx)("div", {
            className: S.Qs,
            children: e ? (0, i.jsx)(T.A, {
                premiumSubscription: n
            }) : (0, i.jsx)(p.A, {
                premiumSubscription: n
            })
        })]
    }) : (0, i.jsx)("div", {
        className: a()(S.kL, S.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}