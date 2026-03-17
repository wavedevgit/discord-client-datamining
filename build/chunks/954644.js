/** chunk id: 954644 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(627968),
    n = l(64700),
    i = l(674658),
    o = l(751304),
    a = l(561769);
let s = e => {
    let {
        skuId: t,
        aspectRatio: l
    } = e, {
        product: s
    } = (0, i.q)(t, !0), d = n.useContext(a.v3);
    if (null == s) return null;
    let {
        flattenProductVariants: c,
        ...u
    } = d;
    return (0, r.jsx)(a.v3.Provider, {
        value: {
            flattenProductVariants: c ?? !0,
            ...u
        },
        children: (0, r.jsx)(o.A, {
            skuId: t,
            aspectRatio: l
        })
    })
}