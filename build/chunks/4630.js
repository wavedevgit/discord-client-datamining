/** chunk id: 4630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => S
});
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    l = n(397927),
    o = n(800342),
    s = n(73825),
    c = n(851907),
    _ = n(160946),
    u = n(589078),
    d = n(869146),
    b = n(143582),
    m = n(490744),
    E = n(67480),
    g = n(342098),
    A = n(216678),
    f = n(652215);
async function S(e) {
    var t, n, r, S, I;
    let p, h, {
            applicationId: T,
            skuId: C,
            initialPlanId: N,
            analyticsLocations: O,
            analyticsLocationObject: R
        } = e,
        D = E.A.get(C);
    if (null == D) {
        let e = (await (0, o.JI)(T)).find(e => e.sku.id === C);
        a()(null != e, "Could not find store listing for sku"), e.sku.type === f.Puh.SUBSCRIPTION_GROUP && await (0, b.vz)(T, e.id)
    }
    D = D ?? E.A.get(C), a()(null != D && D.applicationId === T, "SKU must belong to application"), D.type !== f.Puh.SUBSCRIPTION || (0, _.B)([D.id]) || await (0, s.ur)(D.id);
    let G = null == (h = null != (p = (0, c.LU)({
        applicationId: T
    })) ? d.A.getWindow(p) : void 0) || h.closed ? l.SYi : l.KX8;
    if (D.type !== f.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, A.A)({
            applicationId: T,
            skuId: C,
            analyticsLocationObject: R,
            analyticsLocations: O,
            contextKey: G,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = T, n = C, r = N, S = R, I = O, (0, g.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: S,
        analyticsLocations: I,
        renderHeader: (e, t, n) => (0, i.jsx)(m.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}