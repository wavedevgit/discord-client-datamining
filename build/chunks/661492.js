/** chunk id: 661492, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    q: () => s,
    x: () => i
});
var r = l(575593),
    a = l(993408),
    n = l(985018);

function i(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return n.intl.formatToPlainString(n.t["/l2CAE"], {
        itemName: t
    });
    let l = e.collectiblesItem;
    if (null == l) return t;
    switch (l.type) {
        case r.R.AVATAR_DECORATION:
            return n.intl.formatToPlainString(n.t.IQQYef, {
                itemName: t
            });
        case r.R.PROFILE_EFFECT:
            return n.intl.formatToPlainString(n.t["x/MGWy"], {
                itemName: t
            });
        case r.R.NAMEPLATE:
            return n.intl.formatToPlainString(n.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function s(e) {
    return !(0, a.G0)(e) && e.type !== r.R.EXTERNAL_SKU
}