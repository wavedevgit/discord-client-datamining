/** Chunk was on web.js **/
/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(384904),
    d = n(923408),
    f = n(73825),
    p = n(160946),
    _ = n(859241),
    h = n(295405),
    m = n(166403),
    g = n(653183),
    E = n(652215),
    y = n(417711);

function b() {
    i.useEffect(() => {
        c.h.wait(() => {
            u.hP(), u.$o(), (0, d.CD)(), (0, f.zS)(null, null, E.tF5.DISCOVERY), (0, d.tO)(!0)
        })
    }, []);
    let {
        hasFetchedSubscriptions: e,
        premiumSubscription: t
    } = (0, o.cf)([m.A], () => ({
        hasFetchedSubscriptions: m.A.hasFetchedSubscriptions(),
        premiumSubscription: m.A.getPremiumTypeSubscription()
    })), n = (0, p.Y)(), a = (0, o.bG)([h.A], () => h.A.hasFetchedPaymentSources), b = (0, o.bG)([_.A], () => _.A.isFetchingCurrentUserAppliedBoosts);
    return e && n && a && !b ? (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)("div", {
            className: y.Tp
        }), (0, r.jsx)("div", {
            className: y.Qs,
            children: (0, r.jsx)(g.A, {
                premiumSubscription: t
            })
        })]
    }) : (0, r.jsx)("div", {
        className: s()(y.kL, y.Lq),
        children: (0, r.jsx)(l.y$y, {})
    })
}