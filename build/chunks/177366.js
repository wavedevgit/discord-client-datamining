/** chunk id: 177366 params = (module,exports,require) **/
n.d(t, {
    XU: () => C,
    Yr: () => A,
    k0: () => j
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
    h = n(572595),
    p = n(159439),
    x = n(57020),
    f = n(652215);
let _ = "#itemSkuId=",
    v = RegExp(`^${_}(\\d+)$`),
    g = [f.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, a.zy)();
        r.useEffect(() => {
            if (null != e && g.includes(t.pathname)) return () => {
                window.location.hash.startsWith(_) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    C = e => {
        let t = (0, p.U)(),
            n = r.useRef(null),
            s = (0, a.zy)(),
            _ = s.pathname === f.BVt.COLLECTIBLES_SHOP ? l.A.HOME_PAGE_SHOP_TAB : l.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: g
            } = (0, o.Ay)(_),
            A = (0, m.A)();
        r.useEffect(() => {
            let e = v.exec(s.hash);
            null != e ? n.current = e[1] : n.current = null
        }, [A, s.hash]);
        let C = (0, i.bG)([d.A], () => d.A.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != C ? r = C : null != n.current && (r = n.current), null != r) {
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
                            }(0, h.t)({
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
                        analyticsLocations: g,
                        analyticsSource: _,
                        tab: A,
                        sessionId: e
                    })
                }, 250);
                return () => clearTimeout(t)
            }
        }, [g, _, t, C, A, e])
    },
    j = e => {
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