/** chunk id: 282203 params = (module,exports,require) **/
r.d(t, {
    A: () => i
});
var l = r(627968),
    n = r(64700),
    a = r(841702),
    s = r(672428);
let c = e => {
        let {
            skuIds: t = [],
            skuBlock: r = "ShopProductCard",
            skuBlockProps: c,
            sortPurchased: i = !1,
            showSkeleton: d = !1,
            componentMap: o
        } = e, u = (0, s.D)(t, !0), {
            purchases: m,
            isFetching: h
        } = (0, a.b5)(), p = (0, n.useMemo)(() => i ? [...t].sort((e, t) => (null != m.get(e)) - (null != m.get(t))) : t, [t, i, m]), A = o[r], v = o.Skeleton;
        return null == A ? null : (u || i && h) && d ? t.map((e, t) => null != v ? (0, l.jsx)(v, {
            children: (0, l.jsx)(A, {
                ...c,
                skuId: e,
                productId: e
            })
        }, `${e}-${t}`) : null) : p.map((e, t) => (0, l.jsx)(A, {
            ...c,
            skuId: e,
            productId: e
        }, `${e}-${t}`))
    },
    i = e => {
        let {
            skuIds: t = [],
            skuBlock: r = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: a = !1,
            eagerLoad: s = !1,
            showSkeleton: i = !1,
            componentMap: d
        } = e;
        if (s || a) return (0, l.jsx)(c, {
            skuIds: t,
            skuBlock: r,
            skuBlockProps: n,
            sortPurchased: a,
            showSkeleton: i,
            componentMap: d
        });
        let o = d[r];
        return null == o ? null : t.map((e, t) => (0, l.jsx)(o, {
            ...n,
            skuId: e,
            productId: e
        }, `${e}-${t}`))
    }