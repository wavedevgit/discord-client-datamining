/** Chunk was on web.js **/
/** chunk id: 766172, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => i
});
var r = n(575593);
let i = e => {
    var t, n, i;
    let {
        product: a,
        selectedVariantIndex: o
    } = e;
    return a.type === r.R.VARIANTS_GROUP && null != o && null != (t = null == (i = a.variants) || null == (n = i[o]) ? void 0 : n.skuId) ? t : a.skuId
}