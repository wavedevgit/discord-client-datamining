/** chunk id: 302425, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => l
});
var r = n(254326),
    i = n(919301),
    a = n(672541),
    o = n(285871),
    s = n(652215);
let l = {
    [o.C.ORB_CHECKOUT]: {
        flowType: o.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: s.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: a.G4
    },
    [o.C.COLLECTIBLES_CHECKOUT]: {
        flowType: o.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: s.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r.OU
    },
    [o.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: o.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: s.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: i.WT
    },
    [o.C.PREMIUM_CHECKOUT]: {
        implemented: !1,
        flowType: o.C.PREMIUM_CHECKOUT
    }
}