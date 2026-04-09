/** chunk id: 530971 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => A
});
var n = s(627968),
    r = s(64700),
    l = s(572944),
    i = s(311907),
    a = s(775602),
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
    let A = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        [I, L] = r.useState(void 0),
        [j, O] = r.useState(!0),
        T = r.useMemo(() => s.filter(e => !b.MS.some(t => {
            let {
                categorySkuId: s
            } = t;
            return s === e.skuId
        })), [s]),
        k = (0, o.f)("CollectiblesContent"),
        y = r.useCallback(e => {
            let {
                sourceButton: t,
                categorySkuId: s,
                shouldAnimate: n,
                isInternalShopDeeplink: r,
                isOrbsExclusive: l
            } = e;
            u(t, s);
            let i = n && !A,
                a = l ? b.G2.ORBS : b.G2.CATALOG;
            L(s), O(!r), c(a, i)
        }, [A, c, u]),
        {
            searchError: N
        } = (0, g.S)();
    return null != N ? (0, n.jsx)(E.A, {}) : null != p ? (0, n.jsx)(h.h, {
        onRetry: _,
        errorMessage: p,
        errorOrigin: h.A.SHOP_PAGE
    }) : t === b.G2.HOME && k ? (0, n.jsx)(x.A, {
        tab: l.g.HOME,
        transitionState: d,
        handleTransition: y
    }) : t === b.G2.ORBS && k ? (0, n.jsx)(x.A, {
        tab: l.g.ORBS,
        transitionState: d,
        handleTransition: y
    }) : C.includes(t) ? (0, n.jsx)(f.A, {
        handleTransition: y,
        tab: t,
        transitionState: d
    }) : (0, n.jsx)(m.A, {
        tab: t,
        categories: T,
        initialCategoryId: I,
        showFilterInitially: j,
        onUnmount: () => {
            L(void 0), O(!0)
        }
    })
}
let S = () => (0, i.bG)([u.A, _.A], () => null != u.A.error ? `shop load fetch categories error: ${u.A.error.message}` : null != _.A.claimError ? `shop load claim error: ${_.A.claimError.message}` : null != _.A.fetchError ? `shop load fetch purchase error: ${_.A.fetchError.message}` : void 0),
    v = e => {
        let t = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
            {
                noCache: s,
                includeUnpublished: n
            } = (0, p.A)();
        r.useEffect(() => {
            null != e && d.A.captureMessage(e, {
                tags: {
                    isStaff: t?.isStaff()?.toString() ?? "unknown",
                    disableCache: s.toString(),
                    includeUnpublished: n.toString()
                }
            })
        }, [e, t, s, n])
    }