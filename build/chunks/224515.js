/** Chunk was on 82575 **/
/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    g = n(73825),
    h = n(160946),
    x = n(859241),
    p = n(295405),
    A = n(166403),
    m = n(653183),
    j = n(652215),
    b = n(417711);

function O() {
    s.useEffect(() => {
        c.h.wait(() => {
            d.hP(), d.$o(), (0, u.CD)(), (0, g.zS)(null, null, j.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, a.cf)([A.A], () => ({
        hasFetchedSubscriptions: A.A.hasFetchedSubscriptions(),
        premiumSubscription: A.A.getPremiumTypeSubscription()
    })), n = (0, h.Y)(), l = (0, a.bG)([p.A], () => p.A.hasFetchedPaymentSources), O = (0, a.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && l && !O ? (0, i.jsxs)("div", {
        className: b.kL,
        children: [(0, i.jsx)("div", {
            className: b.Tp
        }), (0, i.jsx)("div", {
            className: b.Qs,
            children: (0, i.jsx)(m.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: r()(b.kL, b.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}