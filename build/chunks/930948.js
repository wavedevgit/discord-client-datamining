/** chunk id: 930948 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(627968),
    n = l(64700),
    i = l(751304),
    o = l(561769),
    a = l(684910);
let s = e => {
    let {
        productId: t
    } = e, {
        product: l
    } = (0, a.A)({
        productId: t,
        includePricing: !0
    }), s = n.useMemo(() => l?.toCollectiblesProduct(), [l]);
    return null == s ? null : (0, r.jsx)(o.v3.Provider, {
        value: {
            productOverride: s
        },
        children: (0, r.jsx)(i.A, {
            skuId: s.skuId
        })
    })
}