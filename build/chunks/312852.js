/** chunk id: 312852 params = (module,exports,require) **/
n.d(t, {
    K: () => r
});
var a = n(311907),
    i = n(4227),
    l = n(623373);
let r = e => {
    let t = (0, a.bG)([i.A], () => i.A.purchases);
    return null != e && (0, l.B1)(e) ? Math.max(0, e.variants.findIndex(e => !t.has(e.skuId))) : 0
}