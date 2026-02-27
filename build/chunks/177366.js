/** chunk id: 177366, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    XU: () => A,
    Yr: () => C,
    k0: () => b
});
var n = s(64700),
    l = s(873263),
    r = s(311907),
    a = s(775602),
    i = s(793574),
    o = s(688810),
    c = s(590180),
    d = s(870216),
    u = s(298072),
    g = s(238184),
    _ = s(572595),
    m = s(159439),
    h = s(57020),
    p = s(652215);
let f = "#itemSkuId=",
    x = RegExp(`^${f}(\\d+)$`),
    E = [p.BVt.COLLECTIBLES_SHOP],
    C = e => {
        let t = (0, l.zy)();
        n.useEffect(() => {
            if (null != e && E.includes(t.pathname)) return () => {
                window.location.hash.startsWith(f) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    A = () => {
        let e = (0, m.U)(),
            t = n.useRef(null),
            s = (0, l.zy)(),
            a = s.pathname === p.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: f
            } = (0, o.Ay)(a),
            E = (0, g.A)();
        n.useEffect(() => {
            let e = x.exec(s.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [E, s.hash]);
        let C = (0, r.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (e) return;
            let s = null;
            if (null != C ? s = C : null != t.current && (s = t.current), null != s) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: s,
                            analyticsSource: n,
                            tab: l
                        } = e, r = c.A.getProduct(t), a = c.A.getCategoryForProduct(t);
                        if (null != r && null != a) {
                            let e = r,
                                i = (0, h.A)({
                                    product: r
                                }),
                                o = document.getElementById(`shop-item-${e.skuId}`);
                            if (o !== document.activeElement && o?.focus(), null != r.variantGroupStoreListingId) {
                                let s = c.A.getProductByStoreListingId(r.variantGroupStoreListingId);
                                if (null != s) {
                                    e = s;
                                    let n = s.variants?.findIndex(e => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(s, n)
                                }
                            }(0, _.t)({
                                product: e,
                                category: a,
                                analyticsSource: n,
                                analyticsLocations: s,
                                tab: l,
                                shouldCheckoutWithOrbs: i
                            })
                        }
                    })({
                        productSkuId: s,
                        analyticsLocations: f,
                        analyticsSource: a,
                        tab: E
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [f, a, e, C, E])
    },
    b = e => {
        let t = n.useRef({}),
            s = (0, r.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, r.bG)([c.A], () => c.A.isFetchingCategories),
            [i, o] = n.useState(null),
            d = n.useCallback((e, s) => {
                t.current[e] = s
            }, []),
            u = n.useCallback(n => {
                l ? o(n) : setTimeout(() => {
                    let l = t.current[n];
                    null != l && e?.scrollIntoViewNode({
                        node: l,
                        padding: 48,
                        animate: !s,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, s, l, o]);
        return n.useEffect(() => {
            l || null == i || (u(i), o(null))
        }, [l, u, i, o]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }