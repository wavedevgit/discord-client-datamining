/** chunk id: 661492, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    q: () => i,
    x: () => l
});
var n = r(575593),
    a = r(993408),
    s = r(985018);

function l(e) {
    let t = e.skuName;
    if (null != e.bundleItems && e.bundleItems.length > 0) return s.intl.formatToPlainString(s.t["/l2CAE"], {
        itemName: t
    });
    let r = e.collectiblesItem;
    if (null == r) return t;
    switch (r.type) {
        case n.R.AVATAR_DECORATION:
            return s.intl.formatToPlainString(s.t.IQQYef, {
                itemName: t
            });
        case n.R.PROFILE_EFFECT:
            return s.intl.formatToPlainString(s.t["x/MGWy"], {
                itemName: t
            });
        case n.R.NAMEPLATE:
            return s.intl.formatToPlainString(s.t.eVNt6E, {
                itemName: t
            });
        default:
            return t
    }
}

function i(e) {
    return !(0, a.G0)(e) && e.type !== n.R.EXTERNAL_SKU
}