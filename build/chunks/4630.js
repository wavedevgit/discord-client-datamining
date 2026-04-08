/** chunk id: 4630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => h
});
var a = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    o = n(397927),
    c = n(800342),
    s = n(73825),
    l = n(851907),
    _ = n(160946),
    u = n(589078),
    d = n(869146),
    m = n(143582),
    b = n(490744),
    p = n(67480),
    E = n(342098),
    g = n(216678),
    A = n(652215);
async function h(e) {
    var t, n, i, h, f;
    let I, S, {
            applicationId: T,
            skuId: C,
            initialPlanId: N,
            analyticsLocations: R,
            analyticsLocationObject: O
        } = e,
        D = p.A.get(C);
    if (null == D) {
        let e = (await (0, c.JI)(T)).find(e => e.sku.id === C);
        r()(null != e, "Could not find store listing for sku"), e.sku.type === A.Puh.SUBSCRIPTION_GROUP && await (0, m.vz)(T, e.id)
    }
    D = D ?? p.A.get(C), r()(null != D && D.applicationId === T, "SKU must belong to application"), D.type !== A.Puh.SUBSCRIPTION || (0, _.B)([D.id]) || await (0, s.ur)(D.id);
    let M = null == (S = null != (I = (0, l.LU)({
        applicationId: T
    })) ? d.A.getWindow(I) : void 0) || S.closed ? o.SYi : o.KX8;
    if (D.type !== A.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, g.A)({
            applicationId: T,
            skuId: C,
            analyticsLocationObject: O,
            analyticsLocations: R,
            contextKey: M,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = T, n = C, i = N, h = O, f = R, (0, E.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: h,
        analyticsLocations: f,
        renderHeader: (e, t, n) => (0, a.jsx)(b.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}