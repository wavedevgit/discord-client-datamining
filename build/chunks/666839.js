/** chunk id: 666839 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968);
r(64700);
var l = r(298072),
    i = r(561769),
    s = r(139146),
    a = r(420960);
let o = e => {
        let {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l,
            onTrackClick: i
        } = e;
        return (0, n.jsx)(s.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: l,
            className: a.i,
            onTrackClick: i
        })
    },
    u = e => {
        let {
            skuId: t,
            isCardHovered: r,
            onTrackClick: s
        } = e, a = (0, i.Vm)(t), u = (0, l.Q)(a);
        return null == a ? null : (0, n.jsx)(o, {
            product: a,
            selectedVariantIndex: u,
            isCardHovered: r,
            onTrackClick: s
        })
    }