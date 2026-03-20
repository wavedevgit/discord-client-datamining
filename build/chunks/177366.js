/** chunk id: 177366 params = (module,exports,require) **/
n.d(t, {
    XU: () => j,
    Yr: () => A,
    k0: () => N
});
var r = n(64700),
    a = n(873263),
    i = n(311907),
    l = n(775602),
    s = n(793574),
    c = n(688810),
    o = n(590180),
    d = n(870216),
    u = n(298072),
    m = n(238184),
    h = n(572595),
    x = n(159439),
    p = n(57020),
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
        let e = (0, x.U)(),
            t = r.useRef(null),
            n = (0, a.zy)(),
            l = n.pathname === f.BVt.COLLECTIBLES_SHOP ? s.A.HOME_PAGE_SHOP_TAB : s.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: v
            } = (0, c.Ay)(l),
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
                        } = e, i = o.A.getProduct(t), l = o.A.getCategoryForProduct(t);
                        if (null != i && null != l) {
                            let e = i,
                                s = (0, p.A)({
                                    product: i
                                }),
                                c = document.getElementById(`shop-item-${e.skuId}`);
                            if (c !== document.activeElement && c?.focus(), null != i.variantGroupStoreListingId) {
                                let n = o.A.getProductByStoreListingId(i.variantGroupStoreListingId);
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
    N = e => {
        let t = r.useRef({}),
            n = (0, i.bG)([l.A], () => l.A.useReducedMotion),
            a = (0, i.bG)([o.A], () => o.A.isFetchingCategories),
            [s, c] = r.useState(null),
            d = r.useCallback((e, n) => {
                t.current[e] = n
            }, []),
            u = r.useCallback(r => {
                a ? c(r) : setTimeout(() => {
                    let a = t.current[r];
                    null != a && e?.scrollIntoViewNode({
                        node: a,
                        padding: 48,
                        animate: !n,
                        shouldScrollToStart: !0
                    })
                }, 100)
            }, [e, n, a, c]);
        return r.useEffect(() => {
            a || null == s || (u(s), c(null))
        }, [a, u, s, c]), {
            setCategoryRef: d,
            handleScrollToCategory: u
        }
    }