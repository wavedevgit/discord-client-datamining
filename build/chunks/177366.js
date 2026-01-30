/** chunk id: 177366, original params: e,t,n (module,exports,require) **/
n.d(t, {
    XU: () => A,
    Yr: () => j,
    k0: () => _
}), n(591487), n(727858), n(747238), n(812715), n(896048);
var r = n(64700),
    l = n(960488),
    i = n(311907),
    a = n(775602),
    s = n(793574),
    o = n(688810),
    c = n(590180),
    u = n(870216),
    d = n(298072),
    m = n(238184),
    p = n(572595),
    f = n(159439),
    x = n(57020),
    h = n(652215);
let v = "".concat("#").concat("itemSkuId", "="),
    g = new RegExp("^".concat(v, "(\\d+)$")),
    b = [h.BVt.COLLECTIBLES_SHOP],
    j = e => {
        let t = (0, l.zy)();
        r.useEffect(() => {
            if (null != e && b.includes(t.pathname)) return () => {
                window.location.hash.startsWith(v) && window.location.replace("#")
            }
        }, [e, t.pathname])
    },
    A = () => {
        let e = (0, f.U)(),
            t = r.useRef(null),
            n = (0, l.zy)(),
            a = n.pathname === h.BVt.COLLECTIBLES_SHOP ? s.A.HOME_PAGE_SHOP_TAB : s.A.COLLECTIBLES_SHOP,
            {
                analyticsLocations: v
            } = (0, o.Ay)(a),
            b = (0, m.A)();
        r.useEffect(() => {
            let e = g.exec(n.hash);
            null != e ? t.current = e[1] : t.current = null
        }, [b, n.hash]);
        let j = (0, i.bG)([u.A], () => u.A.initialProductSkuId);
        r.useEffect(() => {
            if (e) return;
            let n = null;
            if (null != j ? n = j : null != t.current && (n = t.current), null != n) {
                let e = setTimeout(() => {
                    (e => {
                        let {
                            productSkuId: t,
                            analyticsLocations: n,
                            analyticsSource: r,
                            tab: l
                        } = e, i = c.A.getProduct(t), a = c.A.getCategoryForProduct(t);
                        if (null != i && null != a) {
                            let e = i,
                                o = (0, x.Ak)({
                                    product: i
                                }),
                                u = document.getElementById("shop-item-".concat(e.skuId));
                            if (u !== document.activeElement && (null == u || u.focus()), null != i.variantGroupStoreListingId) {
                                let n = c.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != n) {
                                    var s;
                                    e = n;
                                    let r = null == (s = n.variants) ? void 0 : s.findIndex(e => e.skuId === t);
                                    null != r && r > -1 && (0, d.n)(n, r)
                                }
                            }(0, p.t)({
                                product: e,
                                category: a,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o
                            })
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: v,
                        analyticsSource: a,
                        tab: b
                    })
                }, 250);
                return () => clearTimeout(e)
            }
        }, [v, a, e, j, b])
    },
    _ = e => {
        let t = r.useRef({}),
            n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, i.bG)([c.A], () => c.A.isFetchingCategories),
            [s, o] = r.useState(null),
            u = r.useCallback((e, n) => {
                t.current[e] = n
            }, []),
            d = r.useCallback(r => {
                l ? o(r) : setTimeout(() => {
                    let l = t.current[r];
                    null != l && (null == e || e.scrollIntoViewNode({
                        node: l,
                        padding: 48,
                        animate: !n,
                        shouldScrollToStart: !0
                    }))
                }, 100)
            }, [e, n, l, o]);
        return r.useEffect(() => {
            l || null == s || (d(s), o(null))
        }, [l, d, s, o]), {
            setCategoryRef: u,
            handleScrollToCategory: d
        }
    }