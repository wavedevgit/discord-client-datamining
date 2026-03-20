/** chunk id: 766172 params = (module,exports,require) **/
n.d(t, {
    Y: () => i
});
var a = n(575593);
let i = e => {
    let {
        product: t,
        selectedVariantIndex: n
    } = e;
    return t.type === a.R.VARIANTS_GROUP && null != n ? t.variants?.[n]?.skuId ?? t.skuId : t.skuId
}