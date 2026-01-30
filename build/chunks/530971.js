/** Chunk was on 59275 **/
/** chunk id: 530971, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(775602),
    i = n(287809),
    o = n(728458),
    c = n(590180),
    u = n(4227),
    d = n(856686),
    g = n(429876),
    f = n(599062),
    m = n(998694),
    p = n(231209),
    _ = n(781724),
    b = n(758836);
let h = [b.G2.HOME, b.G2.ORBS];

function E(e) {
    let {
        tab: t,
        sortedCategories: n,
        transitionToTab: i,
        transitionState: o,
        updateAnalyticsState: c,
        refreshCategories: u
    } = e, m = v();
    C(m);
    let E = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        [A, S] = l.useState(void 0),
        [x, O] = l.useState(!0),
        y = l.useMemo(() => n.filter(e => !b.MS.some(t => {
            let {
                categorySkuId: n
            } = t;
            return n === e.skuId
        })), [n]),
        j = l.useCallback(e => {
            let {
                sourceButton: t,
                categorySkuId: n,
                shouldAnimate: r,
                isInternalShopDeeplink: l,
                isOrbsExclusive: s
            } = e;
            c(t, n);
            let a = r && !E,
                o = s ? b.G2.ORBS : b.G2.CATALOG;
            S(n), O(!l), i(o, a)
        }, [E, i, c]),
        {
            searchError: T
        } = (0, d.S)();
    return null != T ? (0, r.jsx)(_.A, {}) : null != m ? (0, r.jsx)(f.h, {
        onRetry: u,
        errorMessage: m,
        errorOrigin: f.A.SHOP_PAGE
    }) : h.includes(t) ? (0, r.jsx)(p.A, {
        handleTransition: j,
        tab: t,
        transitionState: o
    }) : (0, r.jsx)(g.A, {
        tab: t,
        sortedCategories: y,
        initialCategoryId: A,
        showFilterInitially: x,
        onUnmount: () => {
            S(void 0), O(!0)
        }
    })
}
let v = () => (0, s.bG)([c.A, u.A], () => null != c.A.error ? "shop load fetch categories error: ".concat(c.A.error.message) : null != u.A.claimError ? "shop load claim error: ".concat(u.A.claimError.message) : null != u.A.fetchError ? "shop load fetch purchase error: ".concat(u.A.fetchError.message) : void 0),
    C = e => {
        let t = (0, s.bG)([i.default], () => i.default.getCurrentUser()),
            {
                noCache: n,
                includeUnpublished: r
            } = (0, m.A)();
        l.useEffect(() => {
            var l, s;
            null != e && o.A.captureMessage(e, {
                tags: {
                    isStaff: null != (l = null == t || null == (s = t.isStaff()) ? void 0 : s.toString()) ? l : "unknown",
                    disableCache: n.toString(),
                    includeUnpublished: r.toString()
                }
            })
        }, [e, t, n, r])
    }