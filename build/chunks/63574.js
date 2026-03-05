/** chunk id: 63574 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var n = a(627968),
    r = a(158954),
    i = a(298072),
    s = a(623373),
    l = a(561769);
let c = e => {
    let {
        skuId: t,
        overrideVariantIndex: a,
        className: c
    } = e, o = (0, l.Vm)(t), d = (0, i.Q)(o);
    return null != o && (0, s.B1)(o) ? (0, n.jsx)(r.EYj, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: c,
        lineClamp: 1,
        children: o.variants[a ?? d].variantLabel
    }) : null
}