/** chunk id: 39771 params = (module,exports,require) **/
"use strict";
r.d(t, {
    j: () => x
});
var n = r(627968);
r(64700);
var a = r(284009),
    s = r.n(a),
    i = r(397927),
    l = r(800342),
    o = r(73825),
    c = r(851907),
    u = r(160946),
    d = r(589078),
    f = r(869146),
    h = r(143582),
    m = r(490744),
    p = r(67480),
    v = r(342098),
    _ = r(216678),
    y = r(652215);
async function x(e) {
    var t, r, a, x, C;
    let g, w, {
            applicationId: j,
            skuId: N,
            initialPlanId: A,
            analyticsLocations: P,
            analyticsLocationObject: R
        } = e,
        S = p.A.get(N);
    if (null == S) {
        let e = (await (0, l.JI)(j)).find(e => e.sku.id === N);
        s()(null != e, "Could not find store listing for sku"), e.sku.type === y.Puh.SUBSCRIPTION_GROUP && await (0, h.vz)(j, e.id)
    }
    S = S ?? p.A.get(N), s()(null != S && S.applicationId === j, "SKU must belong to application"), S.type !== y.Puh.SUBSCRIPTION || (0, u.B)([S.id]) || await (0, o.ur)(S.id);
    let I = null == (w = null != (g = (0, c.LU)({
        applicationId: j
    })) ? f.A.getWindow(g) : void 0) || w.closed ? i.SYi : i.KX8;
    if (S.type !== y.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, _.A)({
            applicationId: j,
            skuId: N,
            analyticsLocationObject: R,
            analyticsLocations: P,
            contextKey: I,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = j, r = N, a = A, x = R, C = P, (0, v.l)({
        applicationId: t,
        skuId: r,
        initialPlanId: a,
        analyticsLocationObject: x,
        analyticsLocations: C,
        renderHeader: (e, t, r) => (0, n.jsx)(m.fs, {
            step: r,
            onClose: () => t(!1)
        })
    }))
}