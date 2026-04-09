/** chunk id: 766172 params = (module,exports,require) **/
r.d(t, {
    Y: () => l
});
var n = r(575593);
let l = e => {
    let {
        product: t,
        selectedVariantIndex: r
    } = e;
    return t.type === n.R.VARIANTS_GROUP && null != r ? t.variants?.[r]?.skuId ?? t.skuId : t.skuId
}