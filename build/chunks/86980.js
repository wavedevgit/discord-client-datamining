/** chunk id: 86980 params = (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => R
});
var i = n(627968);
n(64700);
var r = n(284009),
    l = n.n(r),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    E = n(851907),
    c = n(160946),
    _ = n(342098),
    d = n(216678),
    A = n(869146),
    u = n(143582),
    T = n(490744),
    I = n(67480),
    N = n(652215);
async function R(e) {
    var t, n, r, R, S;
    let O, p, {
            applicationId: C,
            skuId: P,
            initialPlanId: D,
            analyticsLocations: M,
            analyticsLocationObject: U
        } = e,
        g = I.A.get(P);
    if (null == g) {
        let e = (await (0, a.JI)(C)).find(e => e.sku.id === P);
        l()(null != e, "Could not find store listing for sku"), e.sku.type === N.Puh.SUBSCRIPTION_GROUP && await (0, u.vz)(C, e.id)
    }
    g = g ?? I.A.get(P), l()(null != g && g.applicationId === C, "SKU must belong to application"), g.type !== N.Puh.SUBSCRIPTION || (0, c.B)([g.id]) || await (0, o.ur)(g.id);
    let m = null == (p = null != (O = (0, E.LU)({
        applicationId: C
    })) ? A.A.getWindow(O) : void 0) || p.closed ? s.SYi : s.KX8;
    if (g.type !== N.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, d.A)({
            applicationId: C,
            skuId: P,
            analyticsLocationObject: U,
            analyticsLocations: M,
            contextKey: m,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = C, n = P, r = D, R = U, S = M, (0, _.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: R,
        analyticsLocations: S,
        renderHeader: (e, t, n) => (0, i.jsx)(T.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}