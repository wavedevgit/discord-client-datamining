/** chunk id: 661492, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => c,
    x: () => o
});
var a = n(575593),
    i = n(993408),
    r = n(985018);

function o(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return r.intl.formatToPlainString(r.t["/l2CAE"], {
        itemName: t
    });
    let n = e.collectiblesItem;
    if (null == n) return t;
    switch (n.type) {
        case a.R.AVATAR_DECORATION:
            return r.intl.formatToPlainString(r.t.IQQYef, {
                itemName: t
            });
        case a.R.PROFILE_EFFECT:
            return r.intl.formatToPlainString(r.t["x/MGWy"], {
                itemName: t
            });
        case a.R.NAMEPLATE:
            return r.intl.formatToPlainString(r.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function c(e) {
    return !(0, i.G0)(e) && e.type !== a.R.EXTERNAL_SKU
}