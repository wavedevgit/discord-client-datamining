/** chunk id: 954644 params = (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    n = t(674658),
    a = t(751304),
    i = t(561769);
let d = e => {
    let {
        skuId: l
    } = e, {
        product: t
    } = (0, n.q)(l, !0), d = o.useContext(i.v3);
    if (null == t) return null;
    let {
        flattenProductVariants: s,
        ...c
    } = d;
    return (0, r.jsx)(i.v3.Provider, {
        value: {
            flattenProductVariants: s ?? !0,
            ...c
        },
        children: (0, r.jsx)(a.A, {
            skuId: l
        })
    })
}