/** chunk id: 282203, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var l = r(627968);
let d = e => {
    let {
        skuIds: t = [],
        skuBlock: r,
        componentMap: d
    } = e, c = d[r];
    return null == c ? null : t.map((e, t) => (0, l.jsx)(c, {
        skuId: e
    }, `${e}-${t}`))
}