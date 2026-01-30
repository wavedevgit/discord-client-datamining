/** chunk id: 63574, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968),
    l = n(158954),
    i = n(298072),
    a = n(623373),
    s = n(561769);
let o = e => {
    let {
        skuId: t,
        overrideVariantIndex: n
    } = e, o = (0, s.Vm)(t), c = (0, i.Q)(o);
    return null != o && (0, a.B1)(o) ? (0, r.jsx)(l.EYj, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: o.variants[null != n ? n : c].variantLabel
    }) : null
}