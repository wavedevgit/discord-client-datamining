/** chunk id: 63574 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => o
});
var n = r(627968),
    i = r(158954),
    s = r(298072),
    a = r(623373),
    l = r(561769);
let o = e => {
    let {
        skuId: t,
        overrideVariantIndex: r,
        className: o
    } = e, c = (0, l.Vm)(t), d = (0, s.Q)(c);
    return null != c && (0, a.B1)(c) ? (0, n.jsx)(i.EYj, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: o,
        lineClamp: 1,
        children: c.variants[r ?? d].variantLabel
    }) : null
}