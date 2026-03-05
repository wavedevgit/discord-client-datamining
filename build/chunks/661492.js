/** chunk id: 661492, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    q: () => i,
    x: () => a
});
var n = r(575593),
    s = r(993408),
    l = r(985018);

function a(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return l.intl.formatToPlainString(l.t["/l2CAE"], {
        itemName: t
    });
    let r = e.collectiblesItem;
    if (null == r) return t;
    switch (r.type) {
        case n.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.IQQYef, {
                itemName: t
            });
        case n.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t["x/MGWy"], {
                itemName: t
            });
        case n.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function i(e) {
    return !(0, s.G0)(e) && e.type !== n.R.EXTERNAL_SKU
}