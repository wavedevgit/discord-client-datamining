/** chunk id: 4630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => p
});
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    o = n(397927),
    s = n(800342),
    l = n(73825),
    c = n(851907),
    _ = n(160946),
    u = n(589078),
    d = n(869146),
    b = n(143582),
    E = n(490744),
    m = n(67480),
    f = n(342098),
    A = n(216678),
    g = n(652215);
async function p(e) {
    var t, n, r, p, S;
    let h, I, {
            applicationId: T,
            skuId: C,
            initialPlanId: N,
            analyticsLocations: R,
            analyticsLocationObject: O
        } = e,
        G = m.A.get(C);
    if (null == G) {
        let e = (await (0, s.JI)(T)).find(e => e.sku.id === C);
        a()(null != e, "Could not find store listing for sku"), e.sku.type === g.Puh.SUBSCRIPTION_GROUP && await (0, b.vz)(T, e.id)
    }
    G = G ?? m.A.get(C), a()(null != G && G.applicationId === T, "SKU must belong to application"), G.type !== g.Puh.SUBSCRIPTION || (0, _.B)([G.id]) || await (0, l.ur)(G.id);
    let D = null == (I = null != (h = (0, c.LU)({
        applicationId: T
    })) ? d.A.getWindow(h) : void 0) || I.closed ? o.SYi : o.KX8;
    if (G.type !== g.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, A.A)({
            applicationId: T,
            skuId: C,
            analyticsLocationObject: O,
            analyticsLocations: R,
            contextKey: D,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = T, n = C, r = N, p = O, S = R, (0, f.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: p,
        analyticsLocations: S,
        renderHeader: (e, t, n) => (0, i.jsx)(E.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}