/** chunk id: 766172 params = (module,exports,require) **/
a.d(n, {
    Y: () => i
});
var t = a(575593);
let i = e => {
    let {
        product: n,
        selectedVariantIndex: a
    } = e;
    return n.type === t.R.VARIANTS_GROUP && null != a ? n.variants?.[a]?.skuId ?? n.skuId : n.skuId
}