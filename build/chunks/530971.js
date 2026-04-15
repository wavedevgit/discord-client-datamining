/** chunk id: 530971 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => A
});
var n = s(627968),
    l = s(64700),
    r = s(572944),
    a = s(311907),
    i = s(775602),
    o = s(287344),
    c = s(287809),
    d = s(728458),
    u = s(590180),
    _ = s(4227),
    g = s(856686),
    m = s(429876),
    h = s(599062),
    p = s(998694),
    f = s(231209),
    x = s(850735),
    E = s(781724),
    b = s(758836);
let C = [b.G2.HOME, b.G2.ORBS];

function A(e) {
    let {
        tab: t,
        categories: s,
        transitionToTab: c,
        transitionState: d,
        updateAnalyticsState: u,
        refreshCategories: _
    } = e, p = S();
    v(p);
    let A = (0, a.bG)([i.A], () => i.A.useReducedMotion),
        [I, L] = l.useState(void 0),
        [j, O] = l.useState(!0),
        k = l.useMemo(() => s.filter(e => !b.MS.some(t => {
            let {
                categorySkuId: s
            } = t;
            return s === e.skuId
        })), [s]),
        T = (0, o.f)("CollectiblesContent"),
        y = l.useCallback(e => {
            let {
                sourceButton: t,
                categorySkuId: s,
                shouldAnimate: n,
                isInternalShopDeeplink: l,
                isOrbsExclusive: r
            } = e;
            u(t, s);
            let a = n && !A,
                i = r ? b.G2.ORBS : b.G2.CATALOG;
            L(s), O(!l), c(i, a)
        }, [A, c, u]),
        {
            searchError: N
        } = (0, g.S)();
    return null != N ? (0, n.jsx)(E.A, {}) : null != p ? (0, n.jsx)(h.h, {
        onRetry: _,
        errorMessage: p,
        errorOrigin: h.A.SHOP_PAGE
    }) : t === b.G2.HOME && T ? (0, n.jsx)(x.A, {
        tab: r.g.HOME,
        transitionState: d,
        handleTransition: y
    }) : t === b.G2.ORBS && T ? (0, n.jsx)(x.A, {
        tab: r.g.ORBS,
        transitionState: d,
        handleTransition: y
    }) : C.includes(t) ? (0, n.jsx)(f.A, {
        handleTransition: y,
        tab: t,
        transitionState: d
    }) : (0, n.jsx)(m.A, {
        tab: t,
        categories: k,
        initialCategoryId: I,
        showFilterInitially: j,
        onUnmount: () => {
            L(void 0), O(!0)
        }
    })
}
let S = () => (0, a.bG)([u.A, _.A], () => null != u.A.error ? `shop load fetch categories error: ${u.A.error.message}` : null != _.A.claimError ? `shop load claim error: ${_.A.claimError.message}` : null != _.A.fetchError ? `shop load fetch purchase error: ${_.A.fetchError.message}` : void 0),
    v = e => {
        let t = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
            {
                noCache: s,
                includeUnpublished: n
            } = (0, p.A)();
        l.useEffect(() => {
            null != e && d.A.captureMessage(e, {
                tags: {
                    isStaff: t?.isStaff()?.toString() ?? "unknown",
                    disableCache: s.toString(),
                    includeUnpublished: n.toString()
                }
            })
        }, [e, t, s, n])
    }