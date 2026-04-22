/** chunk id: 666839 params = (module,exports,require) **/
r.d(e, {
    A: () => o
});
var n = r(627968);
r(64700);
var i = r(298072),
    l = r(561769),
    s = r(139146),
    a = r(420960);
let u = t => {
        let {
            product: e,
            selectedVariantIndex: r,
            isCardHovered: i,
            onTrackClick: l
        } = t;
        return (0, n.jsx)(s.R, {
            product: e,
            selectedVariantIndex: r,
            isCardHovered: i,
            className: a.i,
            onTrackClick: l
        })
    },
    o = t => {
        let {
            skuId: e,
            isCardHovered: r,
            onTrackClick: s
        } = t, a = (0, l.Vm)(e), o = (0, i.Q)(a);
        return null == a ? null : (0, n.jsx)(u, {
            product: a,
            selectedVariantIndex: o,
            isCardHovered: r,
            onTrackClick: s
        })
    }