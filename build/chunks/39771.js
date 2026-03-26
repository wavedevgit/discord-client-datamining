/** chunk id: 39771 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => g
});
var r = n(627968);
n(64700);
var a = n(284009),
    s = n.n(a),
    i = n(397927),
    l = n(800342),
    o = n(73825),
    c = n(851907),
    u = n(160946),
    d = n(589078),
    f = n(869146),
    m = n(143582),
    h = n(490744),
    p = n(67480),
    v = n(342098),
    _ = n(216678),
    y = n(652215);
async function g(e) {
    var t, n, a, g, x;
    let C, w, {
            applicationId: j,
            skuId: N,
            initialPlanId: A,
            analyticsLocations: P,
            analyticsLocationObject: R
        } = e,
        S = p.A.get(N);
    if (null == S) {
        let e = (await (0, l.JI)(j)).find(e => e.sku.id === N);
        s()(null != e, "Could not find store listing for sku"), e.sku.type === y.Puh.SUBSCRIPTION_GROUP && await (0, m.vz)(j, e.id)
    }
    S = S ?? p.A.get(N), s()(null != S && S.applicationId === j, "SKU must belong to application"), S.type !== y.Puh.SUBSCRIPTION || (0, u.B)([S.id]) || await (0, o.ur)(S.id);
    let b = null == (w = null != (C = (0, c.LU)({
        applicationId: j
    })) ? f.A.getWindow(C) : void 0) || w.closed ? i.SYi : i.KX8;
    if (S.type !== y.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, _.A)({
            applicationId: j,
            skuId: N,
            analyticsLocationObject: R,
            analyticsLocations: P,
            contextKey: b,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = j, n = N, a = A, g = R, x = P, (0, v.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: a,
        analyticsLocationObject: g,
        analyticsLocations: x,
        renderHeader: (e, t, n) => (0, r.jsx)(h.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}