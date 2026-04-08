/** chunk id: 63574 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(627968),
    r = a(158954),
    i = a(298072),
    s = a(623373),
    l = a(561769);
let o = e => {
    let {
        skuId: t,
        overrideVariantIndex: a,
        className: o
    } = e, c = (0, l.Vm)(t), d = (0, i.Q)(c);
    return null != c && (0, s.B1)(c) ? (0, n.jsx)(r.EYj, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: o,
        lineClamp: 1,
        children: c.variants[a ?? d].variantLabel
    }) : null
}