/** chunk id: 930948, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    n = t(751304),
    a = t(561769),
    i = t(684910);
let d = e => {
    let {
        productId: l
    } = e, {
        product: t
    } = (0, i.A)({
        productId: l,
        includePricing: !0
    }), d = o.useMemo(() => t?.toCollectiblesProduct(), [t]);
    return null == d ? null : (0, r.jsx)(a.v3.Provider, {
        value: {
            productOverride: d
        },
        children: (0, r.jsx)(n.A, {
            skuId: d.skuId
        })
    })
}