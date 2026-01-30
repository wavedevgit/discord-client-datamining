/** chunk id: 666839, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(298072),
    a = n(561769),
    o = n(139146),
    s = n(407723);
let l = e => {
        let {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: i
        } = e;
        return (0, r.jsx)(o.R, {
            product: t,
            selectedVariantIndex: n,
            isCardHovered: i,
            className: s.i
        })
    },
    c = e => {
        let {
            skuId: t,
            isCardHovered: n
        } = e, o = (0, a.Vm)(t), s = (0, i.Q)(o);
        return null == o ? null : (0, r.jsx)(l, {
            product: o,
            selectedVariantIndex: s,
            isCardHovered: n
        })
    }