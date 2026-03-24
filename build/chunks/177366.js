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
    f = r(159439),
    h = r(57020),
    x = r(652215);
let v = "#itemSkuId=",
    g = RegExp(`^${v}(\\d+)$`),
    _ = [x.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, i.zy)();
        n.useEffect(() => {
            if (null != e && _.includes(t.pathname)) return () => {
                window.location.hash.startsWith(v) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    j = () => {
        let e = (0, f.U)(),
            t = n.useRef(null),
            r = (0, i.zy)(),
            a = r.pathname === x.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: v
            } = (0, c.Ay)(a),
            _ = (0, m.A)();
        n.useEffect(() => {
            let e = g.exec(r.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [_, r.hash]);
        let A = (0, s.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (e) return;
            let r = null;
            if (null != A ? r = A : null != t.current && (r = t.current), null != r) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: r,
                            analyticsSource: n,
                            tab: i
                        } = e, s = o.A.getProduct(t), a = o.A.getCategoryForProduct(t);
                        if (null != s && null != a) {
                            let e = s,
                                l = (0, h.A)({
                                    product: s
                                }),
                                c = document.getElementById(`shop-item-${e.skuId}`);
                            if (c !== document.activeElement && c?.focus(), null != s.variantGroupStoreListingId) {
                                let r = o.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                                if (null != r) {
                                    e = r;
                                    let n = r.variants?.findIndex(e => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(r, n)
                                }
                            }(0, p.t)({
                                product: e,
                                category: a,
                                analyticsSource: n,
                                analyticsLocations: r,
                                tab: i,
                                shouldCheckoutWithOrbs: l
                            })
                        }
                    })({
                        productSkuId: r,
                        analyticsLocations: v,
                        analyticsSource: a,
                        tab: _
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [v, a, e, A, _])
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