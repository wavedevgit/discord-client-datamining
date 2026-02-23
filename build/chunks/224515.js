/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    _ = n(73825),
    m = n(160946),
    A = n(859241),
    g = n(295405),
    h = n(166403),
    x = n(653183),
    p = n(652215),
    E = n(417711);

function C() {
    s.useEffect(() => {
        c.h.wait(() => {
            d.hP(), d.$o(), (0, u.CD)(), (0, _.zS)(null, null, p.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, r.cf)([h.A], () => ({
        hasFetchedSubscriptions: h.A.hasFetchedSubscriptions(),
        premiumSubscription: h.A.getPremiumTypeSubscription()
    })), n = (0, m.Y)(), a = (0, r.bG)([g.A], () => g.A.hasFetchedPaymentSources), C = (0, r.bG)([A.A], () => A.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && a && !C ? (0, i.jsxs)("div", {
        className: E.kL,
        children: [(0, i.jsx)("div", {
            className: E.Tp
        }), (0, i.jsx)("div", {
            className: E.Qs,
            children: (0, i.jsx)(x.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: l()(E.kL, E.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}