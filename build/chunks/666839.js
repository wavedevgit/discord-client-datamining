/** chunk id: 666839 params = (module,exports,require) **/
r.d(e, {
    A: () => o
});
var i = r(627968);
r(64700);
var n = r(298072),
    l = r(561769),
    s = r(139146),
    a = r(319545);
let u = t => {
        let {
            product: e,
            selectedVariantIndex: r,
            isCardHovered: n
        } = t;
        return (0, i.jsx)(s.R, {
            product: e,
            selectedVariantIndex: r,
            isCardHovered: n,
            className: a.i
        })
    },
    o = t => {
        let {
            skuId: e,
            isCardHovered: r
        } = t, s = (0, l.Vm)(e), a = (0, n.Q)(s);
        return null == s ? null : (0, i.jsx)(u, {
            product: s,
            selectedVariantIndex: a,
            isCardHovered: r
        })
    }