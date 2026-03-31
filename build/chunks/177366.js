/** chunk id: 177366 params = (module,exports,require) **/
n.d(t, {
    XU: () => j,
    Yr: () => A,
    k0: () => C
});
var r = n(64700),
    a = n(873263),
    i = n(311907),
    s = n(775602),
    l = n(793574),
    o = n(688810),
    c = n(590180),
    d = n(870216),
    u = n(298072),
    m = n(238184),
    p = n(572595),
    h = n(159439),
    x = n(57020),
    f = n(652215);
let v = "#itemSkuId=",
    g = RegExp(`^${v}(\\d+)$`),
    _ = [f.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, a.zy)();
        r.useEffect(() => {
            if (null != e && _.includes(t.pathname)) return () => {
                window.location.hash.startsWith(v) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    j = e => {
        let t = (0, h.U)(),
            n = r.useRef(null),
            s = (0, a.zy)(),
            v = s.pathname === f.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: _
            } = (0, o.Ay)(v),
            A = (0, m.A)();
        r.useEffect(() => {
            let e = g.exec(s.hash);
            null != e ? n.current = e[1] : n.current = null
        }, [A, s.hash]);
        let j = (0, i.bG)([d.A], () => d.A.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != j ? r = j : null != n.current && (r = n.current), null != r) {
                let t = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: n,
                            analyticsSource: r,
                            tab: a,
                            sessionId: i
                        } = e, s = c.A.getProduct(t), l = c.A.getCategoryForProduct(t);
                        if (null != s && null != l) {
                            let e = s,
                                o = (0, x.A)({
                                    product: s
                                }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if (d !== document.activeElement && d?.focus(), null != s.variantGroupStoreListingId) {
                                let n = c.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                                if (null != n) {
                                    e = n;
                                    let r = n.variants?.findIndex(e => e.skuId === t);
                                    null != r && r > -1 && (0, u.n)(n, r)
                                }
                            }(0, p.t)({
                                product: e,
                                category: l,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: a,
                                shouldCheckoutWithOrbs: o,
                                sessionId: i
                            })
                        }
                    })({
                        productSkuId: r,
                        analyticsLocations: _,
                        analyticsSource: v,
                        tab: A,
                        sessionId: e
                    })
                }, 250);
                return () => clearTimeout(t)
            }
        }, [_, v, t, j, A, e])
    },
    C = e => {
        let t = r.useRef({}),
            n = (0, i.bG)([s.A], () => s.A.useReducedMotion),
            a = (0, i.bG)([c.A], () => c.A.isFetchingCategories),
            [l, o] = r.useState(null),
            d = r.useCallback((e, n) => {
                t.current[e] = n
            }, []),
            u = r.useCallback(r => {
                a ? o(r) : setTimeout(() => {
                    let a = t.current[r];
                    null != a && e?.scrollIntoViewNode({
                        node: a,
                        padding: 48,
                        animate: !n,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, n, a, o]);
        return r.useEffect(() => {
            a || null == l || (u(l), o(null))
        }, [a, u, l, o]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }