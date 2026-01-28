/** Chunk was on 60449 **/
/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
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
    A = n(295405),
    p = n(166403),
    m = n(653183),
    j = n(652215),
    O = n(417711);

function E() {
    s.useEffect(() => {
        c.h.wait(() => {
            d.hP(), d.$o(), (0, u.CD)(), (0, g.zS)(null, null, j.tF5.DISCOVERY), (0, u.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, a.cf)([p.A], () => ({
        hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
        premiumSubscription: p.A.getPremiumTypeSubscription()
    })), n = (0, h.Y)(), l = (0, a.bG)([A.A], () => A.A.hasFetchedPaymentSources), E = (0, a.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && l && !E ? (0, i.jsxs)("div", {
        className: O.kL,
        children: [(0, i.jsx)("div", {
            className: O.Tp
        }), (0, i.jsx)("div", {
            className: O.Qs,
            children: (0, i.jsx)(m.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, i.jsx)("div", {
        className: r()(O.kL, O.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}