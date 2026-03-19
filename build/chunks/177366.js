/** chunk id: 177366 params = (module,exports,require) **/
n.d(t, {
    XU: () => j,
    Yr: () => A,
    k0: () => C
});
var r = n(64700),
    a = n(873263),
    i = n(311907),
    l = n(775602),
    s = n(793574),
    o = n(688810),
    c = n(590180),
    d = n(870216),
    u = n(298072),
    m = n(238184),
    h = n(572595),
    p = n(159439),
    x = n(57020),
    f = n(652215);
let v = "#itemSkuId=",
    _ = RegExp(`^${v}(\\d+)$`),
    g = [f.BVt.COLLECTIBLES_SHOP],
    A = e => {
        let t = (0, a.zy)();
        r.useEffect(() => {
            if (null != e && g.includes(t.pathname)) return () => {
                window.location.hash.startsWith(v) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    j = () => {
        let e = (0, p.U)(),
            t = r.useRef(null),
            n = (0, a.zy)(),
            l = n.pathname === f.BVt.COLLECTIBLES_SHOP ? s.A.HOME_PAGE_SHOP_TAB : s.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: v
            } = (0, o.Ay)(l),
            g = (0, m.A)();
        r.useEffect(() => {
            let e = _.exec(n.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [g, n.hash]);
        let A = (0, i.bG)([d.A], () => d.A.initialProductSkuId);
        r.useEffect(() => {
            if (e) return;
            let n = null;
            if (null != A ? n = A : null != t.current && (n = t.current), null != n) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: n,
                            analyticsSource: r,
                            tab: a
                        } = e, i = c.A.getProduct(t), l = c.A.getCategoryForProduct(t);
                        if (null != i && null != l) {
                            let e = i,
                                s = (0, x.A)({
                                    product: i
                                }),
                                o = document.getElementById(`shop-item-${e.skuId}`);
                            if (o !== document.activeElement && o?.focus(), null != i.variantGroupStoreListingId) {
                                let n = c.A.getProductByStoreListingId(i.variantGroupStoreListingId);
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
                                shouldCheckoutWithOrbs: s
                            })
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: v,
                        analyticsSource: l,
                        tab: g
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [v, l, e, A, g])
    },
    C = e => {
        let t = r.useRef({}),
            n = (0, i.bG)([l.A], () => l.A.useReducedMotion),
            a = (0, i.bG)([c.A], () => c.A.isFetchingCategories),
            [s, o] = r.useState(null),
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
            a || null == s || (u(s), o(null))
        }, [a, u, s, o]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }