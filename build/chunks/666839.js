/** chunk id: 666839 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var n = r(627968);
r(64700);
var l = r(298072),
    i = r(561769),
    a = r(139146),
    s = r(319545);
let u = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l
        } = e;
        return (0, n.jsx)(a.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l,
            className: s.i
        })
    },
    o = e => {
        let {
            skuId: t,
            isCardHovered: r
        } = e, a = (0, i.Vm)(t), s = (0, l.Q)(a);
        return null == a ? null : (0, n.jsx)(u, {
            product: a,
            selectedVariantIndex: s,
            isCardHovered: r
        })
    }