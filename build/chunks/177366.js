/** chunk id: 177366 params = (module,exports,require) **/
a.d(t, {
    XU: () => C,
    Yr: () => A,
    k0: () => I
});
var n = a(64700),
    r = a(873263),
    i = a(311907),
    s = a(775602),
    l = a(793574),
    o = a(688810),
    c = a(590180),
    d = a(870216),
    u = a(298072),
    m = a(238184),
    p = a(572595),
    _ = a(159439),
    h = a(57020),
    x = a(652215);
let f = "#itemSkuId=",
    g = RegExp(`^${f}(\\d+)$`),
    v = [x.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, r.zy)();
        n.useEffect(() => {
            if (null != e && v.includes(t.pathname)) return () => {
                window.location.hash.startsWith(f) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    C = e => {
        let t = (0, _.U)(),
            a = n.useRef(null),
            s = (0, r.zy)(),
            f = s.pathname === x.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: v
            } = (0, o.Ay)(f),
            A = (0, m.A)();
        n.useEffect(() => {
            let e = g.exec(s.hash);
            null != e ? a.current = e[1] : a.current = null
        }, [A, s.hash]);
        let C = (0, i.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if (null != C ? n = C : null != a.current && (n = a.current), null != n) {
                let t = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: a,
                            analyticsSource: n,
                            tab: r,
                            sessionId: i
                        } = e, s = c.A.getProduct(t), l = c.A.getCategoryForProduct(t);
                        if (null != s && null != l) {
                            let e = s,
                                o = (0, h.A)({
                                    product: s
                                }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if (d !== document.activeElement && d?.focus(), null != s.variantGroupStoreListingId) {
                                let a = c.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                                if (null != a) {
                                    e = a;
                                    let n = a.variants?.findIndex(e => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(a, n)
                                }
                            }(0, p.t)({
                                product: e,
                                category: l,
                                analyticsSource: n,
                                analyticsLocations: a,
                                tab: r,
                                shouldCheckoutWithOrbs: o,
                                sessionId: i
                            })
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: v,
                        analyticsSource: f,
                        tab: A,
                        sessionId: e
                    })
                }, 250);
                return () => clearTimeout(t)
            }
        }, [v, f, t, C, A, e])
    },
    I = e => {
        let t = n.useRef({}),
            a = (0, i.bG)([s.A], () => s.A.useReducedMotion),
            r = (0, i.bG)([c.A], () => c.A.isFetchingCategories),
            [l, o] = n.useState(null),
            d = n.useCallback((e, a) => {
                t.current[e] = a
            }, []),
            u = n.useCallback(n => {
                r ? o(n) : setTimeout(() => {
                    let r = t.current[n];
                    null != r && e?.scrollIntoViewNode({
                        node: r,
                        padding: 48,
                        animate: !a,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, a, r, o]);
        return n.useEffect(() => {
            r || null == l || (u(l), o(null))
        }, [r, u, l, o]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }