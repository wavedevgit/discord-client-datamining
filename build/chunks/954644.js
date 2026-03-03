/** chunk id: 954644, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    n = t(674658),
    i = t(751304),
    a = t(561769);
let d = e => {
    let {
        skuId: l
    } = e, {
        product: t
    } = (0, n.q)(l, !0), d = o.useContext(a.v3);
    if (null == t) return null;
    let {
        flattenProductVariants: c,
        ...s
    } = d;
    return (0, r.jsx)(a.v3.Provider, {
        value: {
            flattenProductVariants: c ?? !0,
            ...s
        },
        children: (0, r.jsx)(i.A, {
            skuId: l
        })
    })
}