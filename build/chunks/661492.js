/** chunk id: 661492, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => l,
    x: () => s
});
var a = n(575593),
    r = n(993408),
    i = n(985018);

function s(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return i.intl.formatToPlainString(i.t["/l2CAE"], {
        itemName: t
    });
    let n = e.collectiblesItem;
    if (null == n) return t;
    switch (n.type) {
        case a.R.AVATAR_DECORATION:
            return i.intl.formatToPlainString(i.t.IQQYef, {
                itemName: t
            });
        case a.R.PROFILE_EFFECT:
            return i.intl.formatToPlainString(i.t["x/MGWy"], {
                itemName: t
            });
        case a.R.NAMEPLATE:
            return i.intl.formatToPlainString(i.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function l(e) {
    return !(0, r.G0)(e) && e.type !== a.R.EXTERNAL_SKU
}