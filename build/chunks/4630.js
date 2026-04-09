/** chunk id: 4630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => f
});
var a = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    o = n(397927),
    s = n(800342),
    c = n(73825),
    l = n(851907),
    _ = n(160946),
    u = n(589078),
    d = n(869146),
    m = n(143582),
    b = n(490744),
    p = n(67480),
    g = n(342098),
    h = n(216678),
    E = n(652215);
async function f(e) {
    var t, n, r, f, A;
    let C, I, {
            applicationId: T,
            skuId: S,
            initialPlanId: N,
            analyticsLocations: R,
            analyticsLocationObject: O
        } = e,
        M = p.A.get(S);
    if (null == M) {
        let e = (await (0, s.JI)(T)).find(e => e.sku.id === S);
        i()(null != e, "Could not find store listing for sku"), e.sku.type === E.Puh.SUBSCRIPTION_GROUP && await (0, m.vz)(T, e.id)
    }
    M = M ?? p.A.get(S), i()(null != M && M.applicationId === T, "SKU must belong to application"), M.type !== E.Puh.SUBSCRIPTION || (0, _.B)([M.id]) || await (0, c.ur)(M.id);
    let x = null == (I = null != (C = (0, l.LU)({
        applicationId: T
    })) ? d.A.getWindow(C) : void 0) || I.closed ? o.SYi : o.KX8;
    if (M.type !== E.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, h.A)({
            applicationId: T,
            skuId: S,
            analyticsLocationObject: O,
            analyticsLocations: R,
            contextKey: x,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = T, n = S, r = N, f = O, A = R, (0, g.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: f,
        analyticsLocations: A,
        renderHeader: (e, t, n) => (0, a.jsx)(b.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}