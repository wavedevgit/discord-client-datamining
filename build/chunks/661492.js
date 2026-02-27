/** chunk id: 661492, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    q: () => i,
    x: () => s
});
var l = a(575593),
    r = a(993408),
    n = a(985018);

function s(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return n.intl.formatToPlainString(n.t["/l2CAE"], {
        itemName: t
    });
    let a = e.collectiblesItem;
    if (null == a) return t;
    switch (a.type) {
        case l.R.AVATAR_DECORATION:
            return n.intl.formatToPlainString(n.t.IQQYef, {
                itemName: t
            });
        case l.R.PROFILE_EFFECT:
            return n.intl.formatToPlainString(n.t["x/MGWy"], {
                itemName: t
            });
        case l.R.NAMEPLATE:
            return n.intl.formatToPlainString(n.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function i(e) {
    return !(0, r.G0)(e) && e.type !== l.R.EXTERNAL_SKU
}