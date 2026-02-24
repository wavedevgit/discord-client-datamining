/** chunk id: 177366, original params: e,t,n (module,exports,require) **/
n.d(t, {
    XU: () => C,
    Yr: () => A,
    k0: () => N
});
var a = n(64700),
    r = n(873263),
    i = n(311907),
    s = n(775602),
    l = n(793574),
    c = n(688810),
    o = n(590180),
    d = n(870216),
    u = n(298072),
    m = n(238184),
    p = n(572595),
    _ = n(159439),
    h = n(57020),
    x = n(652215);
let g = "#itemSkuId=",
    f = RegExp(`^${g}(\\d+)$`),
    v = [x.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, r.zy)();
        a.useEffect(() => {
            if (null != e && v.includes(t.pathname)) return () => {
                window.location.hash.startsWith(g) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    C = () => {
        let e = (0, _.U)(),
            t = a.useRef(null),
            n = (0, r.zy)(),
            s = n.pathname === x.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: g
            } = (0, c.Ay)(s),
            v = (0, m.A)();
        a.useEffect(() => {
            let e = f.exec(n.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [v, n.hash]);
        let A = (0, i.bG)([d.A], () => d.A.initialProductSkuId);
        a.useEffect(() => {
            if (e) return;
            let n = null;
            if (null != A ? n = A : null != t.current && (n = t.current), null != n) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: n,
                            analyticsSource: a,
                            tab: r
                        } = e, i = o.A.getProduct(t), s = o.A.getCategoryForProduct(t);
                        if (null != i && null != s) {
                            let e = i,
                                l = (0, h.A)({
                                    product: i
                                }),
                                c = document.getElementById(`shop-item-${e.skuId}`);
                            if (c !== document.activeElement && c?.focus(), null != i.variantGroupStoreListingId) {
                                let n = o.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != n) {
                                    e = n;
                                    let a = n.variants?.findIndex(e => e.skuId === t);
                                    null != a && a > -1 && (0, u.n)(n, a)
                                }
                            }(0, p.t)({
                                product: e,
                                category: s,
                                analyticsSource: a,
                                analyticsLocations: n,
                                tab: r,
                                shouldCheckoutWithOrbs: l
                            })
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: g,
                        analyticsSource: s,
                        tab: v
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [g, s, e, A, v])
    },
    N = e => {
        let t = a.useRef({}),
            n = (0, i.bG)([s.A], () => s.A.useReducedMotion),
            r = (0, i.bG)([o.A], () => o.A.isFetchingCategories),
            [l, c] = a.useState(null),
            d = a.useCallback((e, n) => {
                t.current[e] = n
            }, []),
            u = a.useCallback(a => {
                r ? c(a) : setTimeout(() => {
                    let r = t.current[a];
                    null != r && e?.scrollIntoViewNode({
                        node: r,
                        padding: 48,
                        animate: !n,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, n, r, c]);
        return a.useEffect(() => {
            r || null == l || (u(l), c(null))
        }, [r, u, l, c]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }