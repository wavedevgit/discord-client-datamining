/** chunk id: 282203 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(627968),
    n = l(64700),
    i = l(841702),
    o = l(672428);
let a = e => {
        let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: a,
            sortPurchased: s = !1,
            showSkeleton: d = !1,
            componentMap: c
        } = e, u = (0, o.D)(t, !0), {
            purchases: h,
            isFetching: m
        } = (0, i.b5)(), p = (0, n.useMemo)(() => s ? [...t].sort((e, t) => (null != h.get(e)) - (null != h.get(t))) : t, [t, s, h]), _ = c[l], T = c.Skeleton;
        return null == _ ? null : (u || s && m) && d ? t.map((e, t) => null != T ? (0, r.jsx)(T, {
            children: (0, r.jsx)(_, {
                ...a,
                skuId: e,
                productId: e
            })
        }, `${e}-${t}`) : null) : p.map((e, t) => (0, r.jsx)(_, {
            ...a,
            skuId: e,
            productId: e
        }, `${e}-${t}`))
    },
    s = e => {
        let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: i = !1,
            eagerLoad: o = !1,
            showSkeleton: s = !1,
            componentMap: d
        } = e;
        if (o || i) return (0, r.jsx)(a, {
            skuIds: t,
            skuBlock: l,
            skuBlockProps: n,
            sortPurchased: i,
            showSkeleton: s,
            componentMap: d
        });
        let c = d[l];
        return null == c ? null : t.map((e, t) => (0, r.jsx)(c, {
            ...n,
            skuId: e,
            productId: e
        }, `${e}-${t}`))
    }