/** chunk id: 282203, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => a
});
var r = l(627968);
let a = e => {
    let {
        skuIds: t = [],
        skuBlock: l,
        componentMap: a
    } = e, d = a[l];
    return null == d ? null : t.map((e, t) => (0, r.jsx)(d, {
        skuId: e
    }, `${e}-${t}`))
}