/** chunk id: 766172 params = (module,exports,require) **/
a.d(t, {
    Y: () => l
});
var n = a(575593);
let l = e => {
    let {
        product: t,
        selectedVariantIndex: a
    } = e;
    return t.type === n.R.VARIANTS_GROUP && null != a ? t.variants?.[a]?.skuId ?? t.skuId : t.skuId
}