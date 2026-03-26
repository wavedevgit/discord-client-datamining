/** chunk id: 177366 params = (module,exports,require) **/
"use strict";
r.d(t, {
    XU: () => j,
    Yr: () => A,
    k0: () => N
});
var n = r(64700),
    i = r(873263),
    s = r(311907),
    a = r(775602),
    l = r(793574),
    c = r(688810),
    o = r(590180),
    d = r(870216),
    u = r(298072),
    m = r(238184),
    p = r(572595),
    h = r(159439),
    f = r(57020),
    x = r(652215);
let v = "#itemSkuId=",
    _ = RegExp(`^${v}(\\d+)$`),
    g = [x.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, i.zy)();
        n.useEffect(() => {
            if (null != e && g.includes(t.pathname)) return () => {
                window.location.hash.startsWith(v) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    j = e => {
        let t = (0, h.U)(),
            r = n.useRef(null),
            a = (0, i.zy)(),
            v = a.pathname === x.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: g
            } = (0, c.Ay)(v),
            A = (0, m.A)();
        n.useEffect(() => {
            let e = _.exec(a.hash);
            null != e ? r.current = e[1] : r.current = null
        }, [A, a.hash]);
        let j = (0, s.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if (null != j ? n = j : null != r.current && (n = r.current), null != n) {
                let t = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: r,
                            analyticsSource: n,
                            tab: i,
                            sessionId: s
                        } = e, a = o.A.getProduct(t), l = o.A.getCategoryForProduct(t);
                        if (null != a && null != l) {
                            let e = a,
                                c = (0, f.A)({
                                    product: a
                                }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if (d !== document.activeElement && d?.focus(), null != a.variantGroupStoreListingId) {
                                let r = o.A.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != r) {
                                    e = r;
                                    let n = r.variants?.findIndex(e => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(r, n)
                                }
                            }(0, p.t)({
                                product: e,
                                category: l,
                                analyticsSource: n,
                                analyticsLocations: r,
                                tab: i,
                                shouldCheckoutWithOrbs: c,
                                sessionId: s
                            })
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: g,
                        analyticsSource: v,
                        tab: A,
                        sessionId: e
                    })
                }, 250);
                return () => clearTimeout(t)
            }
        }, [g, v, t, j, A, e])
    },
    N = e => {
        let t = n.useRef({}),
            r = (0, s.bG)([a.A], () => a.A.useReducedMotion),
            i = (0, s.bG)([o.A], () => o.A.isFetchingCategories),
            [l, c] = n.useState(null),
            d = n.useCallback((e, r) => {
                t.current[e] = r
            }, []),
            u = n.useCallback(n => {
                i ? c(n) : setTimeout(() => {
                    let i = t.current[n];
                    null != i && e?.scrollIntoViewNode({
                        node: i,
                        padding: 48,
                        animate: !r,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, r, i, c]);
        return n.useEffect(() => {
            i || null == l || (u(l), c(null))
        }, [i, u, l, c]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }