/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    u = n(384904),
    d = n(923408),
    p = n(73825),
    h = n(160946),
    g = n(859241),
    f = n(295405),
    m = n(166403),
    b = n(653183),
    A = n(652215),
    y = n(417711);

function O() {
    l.useEffect(() => {
        c.h.wait(() => {
            u.hP(), u.$o(), (0, d.CD)(), (0, p.zS)(null, null, A.tF5.DISCOVERY), (0, d.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, a.cf)([m.A], () => ({
        hasFetchedSubscriptions: m.A.hasFetchedSubscriptions(),
        premiumSubscription: m.A.getPremiumTypeSubscription()
    })), n = (0, h.Y)(), i = (0, a.bG)([f.A], () => f.A.hasFetchedPaymentSources), O = (0, a.bG)([g.A], () => g.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && i && !O ? (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)("div", {
            className: y.Tp
        }), (0, r.jsx)("div", {
            className: y.Qs,
            children: (0, r.jsx)(b.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, r.jsx)("div", {
        className: s()(y.kL, y.Lq),
        children: (0, r.jsx)(o.y$y, {})
    })
}