/** chunk id: 954644, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => n
});
var r = l(627968);
l(64700);
var a = l(674658),
    d = l(751304),
    c = l(561769);
let n = e => {
    let {
        skuId: t
    } = e, {
        product: l
    } = (0, a.q)(t, !0);
    return null == l ? null : (0, r.jsx)(c.v3.Provider, {
        value: {
            flattenProductVariants: !0
        },
        children: (0, r.jsx)(d.A, {
            skuId: t
        })
    })
}