/** chunk id: 4630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => S
});
var a = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    o = n(397927),
    l = n(800342),
    c = n(73825),
    s = n(851907),
    _ = n(160946),
    u = n(589078),
    d = n(869146),
    m = n(143582),
    b = n(490744),
    g = n(67480),
    p = n(342098),
    E = n(216678),
    A = n(652215);
async function S(e) {
    var t, n, i, S, f;
    let I, h, {
            applicationId: C,
            skuId: T,
            initialPlanId: N,
            analyticsLocations: O,
            analyticsLocationObject: R
        } = e,
        D = g.A.get(T);
    if (null == D) {
        let e = (await (0, l.JI)(C)).find(e => e.sku.id === T);
        r()(null != e, "Could not find store listing for sku"), e.sku.type === A.Puh.SUBSCRIPTION_GROUP && await (0, m.vz)(C, e.id)
    }
    D = D ?? g.A.get(T), r()(null != D && D.applicationId === C, "SKU must belong to application"), D.type !== A.Puh.SUBSCRIPTION || (0, _.B)([D.id]) || await (0, c.ur)(D.id);
    let M = null == (h = null != (I = (0, s.LU)({
        applicationId: C
    })) ? d.A.getWindow(I) : void 0) || h.closed ? o.SYi : o.KX8;
    if (D.type !== A.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, E.A)({
            applicationId: C,
            skuId: T,
            analyticsLocationObject: R,
            analyticsLocations: O,
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
    await (t = C, n = T, i = N, S = R, f = O, (0, p.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: f,
        renderHeader: (e, t, n) => (0, a.jsx)(b.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}