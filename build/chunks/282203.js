/** chunk id: 282203, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    n = t(841702),
    i = t(672428);
let a = e => {
        let {
            skuIds: l = [],
            skuBlock: t = "ShopProductCard",
            sortPurchased: a = !1,
            showSkeleton: d = !1,
            componentMap: c
        } = e, s = (0, i.D)(l, !0), {
            purchases: u,
            isFetching: h
        } = (0, n.b5)(), p = (0, o.useMemo)(() => a ? [...l].sort((e, l) => (null != u.get(e)) - (null != u.get(l))) : l, [l, a, u]), m = c[t], _ = c.Skeleton;
        return null == m ? null : (s || a && h) && d ? l.map((e, l) => null != _ ? (0, r.jsx)(_, {
            children: (0, r.jsx)(m, {
                skuId: e,
                productId: e
            })
        }, `${e}-${l}`) : null) : p.map((e, l) => (0, r.jsx)(m, {
            skuId: e,
            productId: e
        }, `${e}-${l}`))
    },
    d = e => {
        let {
            skuIds: l = [],
            skuBlock: t = "ShopProductCard",
            sortPurchased: o = !1,
            eagerLoad: n = !1,
            showSkeleton: i = !1,
            componentMap: d
        } = e;
        if (n || o) return (0, r.jsx)(a, {
            skuIds: l,
            skuBlock: t,
            sortPurchased: o,
            showSkeleton: i,
            componentMap: d
        });
        let c = d[t];
        return null == c ? null : l.map((e, l) => (0, r.jsx)(c, {
            skuId: e,
            productId: e
        }, `${e}-${l}`))
    }