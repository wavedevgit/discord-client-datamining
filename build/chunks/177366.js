/** chunk id: 177366 params = (module,exports,require) **/
"use strict";
s.d(t, {
    XU: () => b,
    Yr: () => E,
    k0: () => A
});
var n = s(64700),
    r = s(873263),
    l = s(311907),
    i = s(775602),
    a = s(793574),
    o = s(688810),
    c = s(590180),
    d = s(870216),
    u = s(298072),
    _ = s(238184),
    g = s(572595),
    m = s(159439),
    h = s(57020),
    p = s(652215);
let f = "#itemSkuId=",
    x = RegExp(`^${f}(\\d+)$`),
    C = [p.BVt.COLLECTIBLES_SHOP],
    E = e => {
        let t = (0, r.zy)();
        n.useEffect(() => {
            if (null != e && C.includes(t.pathname)) return () => {
                window.location.hash.startsWith(f) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    b = () => {
        let e = (0, m.U)(),
            t = n.useRef(null),
            s = (0, r.zy)(),
            i = s.pathname === p.BVt.COLLECTIBLES_SHOP ? a.A.HOME_PAGE_SHOP_TAB : a.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: f
            } = (0, o.Ay)(i),
            C = (0, _.A)();
        n.useEffect(() => {
            let e = x.exec(s.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [C, s.hash]);
        let E = (0, l.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (e) return;
            let s = null;
            if (null != E ? s = E : null != t.current && (s = t.current), null != s) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: s,
                            analyticsSource: n,
                            tab: r
                        } = e, l = c.A.getProduct(t), i = c.A.getCategoryForProduct(t);
                        if (null != l && null != i) {
                            let e = l,
                                a = (0, h.A)({
                                    product: l
                                }),
                                o = document.getElementById(`shop-item-${e.skuId}`);
                            if (o !== document.activeElement && o?.focus(), null != l.variantGroupStoreListingId) {
                                let s = c.A.getProductByStoreListingId(l.variantGroupStoreListingId);
                                if (null != s) {
                                    e = s;
                                    let n = s.variants?.findIndex(e => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(s, n)
                                }
                            }(0, g.t)({
                                product: e,
                                category: i,
                                analyticsSource: n,
                                analyticsLocations: s,
                                tab: r,
                                shouldCheckoutWithOrbs: a
                            })
                        }
                    })({
                        productSkuId: s,
                        analyticsLocations: f,
                        analyticsSource: i,
                        tab: C
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [f, i, e, E, C])
    },
    A = e => {
        let t = n.useRef({}),
            s = (0, l.bG)([i.A], () => i.A.useReducedMotion),
            r = (0, l.bG)([c.A], () => c.A.isFetchingCategories),
            [a, o] = n.useState(null),
            d = n.useCallback((e, s) => {
                t.current[e] = s
            }, []),
            u = n.useCallback(n => {
                r ? o(n) : setTimeout(() => {
                    let r = t.current[n];
                    null != r && e?.scrollIntoViewNode({
                        node: r,
                        padding: 48,
                        animate: !s,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, s, r, o]);
        return n.useEffect(() => {
            r || null == a || (u(a), o(null))
        }, [r, u, a, o]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }