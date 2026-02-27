/** chunk id: 282203, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    n = t(841702),
    a = t(672428);
let i = e => {
        let {
            skuIds: l = [],
            skuBlock: t = "ShopProductCard",
            sortPurchased: i = !1,
            showSkeleton: d = !1,
            componentMap: s
        } = e, c = (0, a.D)(l, !0), {
            purchases: u,
            isFetching: h
        } = (0, n.b5)(), p = (0, o.useMemo)(() => i ? [...l].sort((e, l) => (null != u.get(e)) - (null != u.get(l))) : l, [l, i, u]), m = s[t], b = s.Skeleton;
        return null == m ? null : (c || i && h) && d ? l.map((e, l) => null != b ? (0, r.jsx)(b, {
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
            showSkeleton: a = !1,
            componentMap: d
        } = e;
        if (n || o) return (0, r.jsx)(i, {
            skuIds: l,
            skuBlock: t,
            sortPurchased: o,
            showSkeleton: a,
            componentMap: d
        });
        let s = d[t];
        return null == s ? null : l.map((e, l) => (0, r.jsx)(s, {
            skuId: e,
            productId: e
        }, `${e}-${l}`))
    }