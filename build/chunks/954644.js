/** chunk id: 954644 params = (module,exports,require) **/
r.d(t, {
    A: () => i
});
var l = r(627968),
    n = r(64700),
    a = r(674658),
    s = r(751304),
    c = r(561769);
let i = e => {
    let {
        skuId: t,
        aspectRatio: r
    } = e, {
        product: i
    } = (0, a.q)(t, !0), d = n.useContext(c.v3);
    if (null == i) return null;
    let {
        flattenProductVariants: o,
        ...u
    } = d;
    return (0, l.jsx)(c.v3.Provider, {
        value: {
            flattenProductVariants: o ?? !0,
            ...u
        },
        children: (0, l.jsx)(s.A, {
            skuId: t,
            aspectRatio: r
        })
    })
}