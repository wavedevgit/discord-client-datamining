/** chunk id: 39771 params = (module,exports,require) **/
"use strict";
r.d(t, {
    j: () => x
});
var n = r(627968);
r(64700);
var a = r(284009),
    i = r.n(a),
    o = r(397927),
    s = r(800342),
    c = r(73825),
    d = r(851907),
    _ = r(160946),
    l = r(589078),
    u = r(869146),
    f = r(143582),
    m = r(490744),
    p = r(67480),
    b = r(342098),
    g = r(216678),
    h = r(652215);
async function x(e) {
    var t, r, a, x, C;
    let v, y, {
            applicationId: j,
            skuId: w,
            initialPlanId: I,
            analyticsLocations: k,
            analyticsLocationObject: P
        } = e,
        A = p.A.get(w);
    if (null == A) {
        let e = (await (0, s.JI)(j)).find(e => e.sku.id === w);
        i()(null != e, "Could not find store listing for sku"), e.sku.type === h.Puh.SUBSCRIPTION_GROUP && await (0, f.vz)(j, e.id)
    }
    A = A ?? p.A.get(w), i()(null != A && A.applicationId === j, "SKU must belong to application"), A.type !== h.Puh.SUBSCRIPTION || (0, _.B)([A.id]) || await (0, c.ur)(A.id);
    let N = null == (y = null != (v = (0, d.LU)({
        applicationId: j
    })) ? u.A.getWindow(v) : void 0) || y.closed ? o.SYi : o.KX8;
    if (A.type !== h.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, g.A)({
            applicationId: j,
            skuId: w,
            analyticsLocationObject: P,
            analyticsLocations: k,
            contextKey: N,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: l.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = j, r = w, a = I, x = P, C = k, (0, b.l)({
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