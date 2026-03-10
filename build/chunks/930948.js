/** chunk id: 930948 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(627968),
    n = t(64700),
    o = t(751304),
    i = t(561769),
    a = t(684910);
let s = e => {
    let {
        productId: l
    } = e, {
        product: t
    } = (0, a.A)({
        productId: l,
        includePricing: !0
    }), s = n.useMemo(() => t?.toCollectiblesProduct(), [t]);
    return null == s ? null : (0, r.jsx)(i.v3.Provider, {
        value: {
            productOverride: s
        },
        children: (0, r.jsx)(o.A, {
            skuId: s.skuId
        })
    })
}