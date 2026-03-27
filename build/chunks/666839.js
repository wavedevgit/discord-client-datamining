/** chunk id: 666839 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var n = r(627968);
r(64700);
var l = r(298072),
    i = r(561769),
    s = r(139146),
    a = r(775049);
let u = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l
        } = e;
        return (0, n.jsx)(s.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l,
            className: a.i
        })
    },
    o = e => {
        let {
            skuId: t,
            isCardHovered: r
        } = e, s = (0, i.Vm)(t), a = (0, l.Q)(s);
        return null == s ? null : (0, n.jsx)(u, {
            product: s,
            selectedVariantIndex: a,
            isCardHovered: r
        })
    }