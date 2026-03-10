/** chunk id: 661492 params = (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => l,
    x: () => s
});
var r = n(575593),
    i = n(993408),
    a = n(985018);

function s(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return a.intl.formatToPlainString(a.t["/l2CAE"], {
        itemName: t
    });
    let n = e.collectiblesItem;
    if (null == n) return t;
    switch (n.type) {
        case r.R.AVATAR_DECORATION:
            return a.intl.formatToPlainString(a.t.IQQYef, {
                itemName: t
            });
        case r.R.PROFILE_EFFECT:
            return a.intl.formatToPlainString(a.t["x/MGWy"], {
                itemName: t
            });
        case r.R.NAMEPLATE:
            return a.intl.formatToPlainString(a.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function l(e) {
    return !(0, i.G0)(e) && e.type !== r.R.EXTERNAL_SKU
}