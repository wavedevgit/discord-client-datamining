/** chunk id: 86980, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    j: () => g
});
var r = a(627968);
a(64700);
var n = a(284009),
    i = a.n(n),
    o = a(397927),
    s = a(800342),
    l = a(73825),
    c = a(851907),
    _ = a(160946),
    d = a(342098),
    u = a(216678),
    p = a(869146),
    f = a(143582),
    m = a(490744),
    h = a(67480),
    C = a(652215);
async function g(e) {
    var t, a, n, g, b;
    let y, A, {
            applicationId: x,
            skuId: E,
            initialPlanId: S,
            analyticsLocations: I,
            analyticsLocationObject: v
        } = e,
        T = h.A.get(E);
    if (null == T) {
        let e = (await (0, s.JI)(x)).find(e => e.sku.id === E);
        i()(null != e, "Could not find store listing for sku"), e.sku.type === C.Puh.SUBSCRIPTION_GROUP && await (0, f.vz)(x, e.id)
    }
    T = T ?? h.A.get(E), i()(null != T && T.applicationId === x, "SKU must belong to application"), T.type !== C.Puh.SUBSCRIPTION || (0, _.B)([T.id]) || await (0, l.ur)(T.id);
    let N = null == (A = null != (y = (0, c.LU)({
        applicationId: x
    })) ? p.A.getWindow(y) : void 0) || A.closed ? o.SYi : o.KX8;
    if (T.type !== C.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, u.A)({
            applicationId: x,
            skuId: E,
            analyticsLocationObject: v,
            analyticsLocations: I,
            contextKey: N,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = x, a = E, n = S, g = v, b = I, (0, d.l)({
        applicationId: t,
        skuId: a,
        initialPlanId: n,
        analyticsLocationObject: g,
        analyticsLocations: b,
        renderHeader: (e, t, a) => (0, r.jsx)(m.fs, {
            step: a,
            onClose: () => t(!1)
        })
    }))
}