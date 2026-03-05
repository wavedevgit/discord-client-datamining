/** chunk id: 661492, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => i,
    x: () => r
});
var a = n(575593),
    l = n(993408),
    s = n(985018);

function r(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return s.intl.formatToPlainString(s.t["/l2CAE"], {
        itemName: t
    });
    let n = e.collectiblesItem;
    if (null == n) return t;
    switch (n.type) {
        case a.R.AVATAR_DECORATION:
            return s.intl.formatToPlainString(s.t.IQQYef, {
                itemName: t
            });
        case a.R.PROFILE_EFFECT:
            return s.intl.formatToPlainString(s.t["x/MGWy"], {
                itemName: t
            });
        case a.R.NAMEPLATE:
            return s.intl.formatToPlainString(s.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function i(e) {
    return !(0, l.G0)(e) && e.type !== a.R.EXTERNAL_SKU
}