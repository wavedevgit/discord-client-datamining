/** chunk id: 86980 params = (module,exports,require) **/
"use strict";
r.d(t, {
    j: () => g
});
var n = r(627968);
r(64700);
var i = r(284009),
    a = r.n(i),
    o = r(397927),
    s = r(800342),
    l = r(73825),
    _ = r(851907),
    c = r(160946),
    d = r(342098),
    u = r(216678),
    f = r(869146),
    p = r(143582),
    h = r(490744),
    m = r(67480),
    C = r(652215);
async function g(e) {
    var t, r, i, g, b;
    let y, A, {
            applicationId: E,
            skuId: S,
            initialPlanId: x,
            analyticsLocations: v,
            analyticsLocationObject: I
        } = e,
        T = m.A.get(S);
    if (null == T) {
        let e = (await (0, s.JI)(E)).find(e => e.sku.id === S);
        a()(null != e, "Could not find store listing for sku"), e.sku.type === C.Puh.SUBSCRIPTION_GROUP && await (0, p.vz)(E, e.id)
    }
    T = T ?? m.A.get(S), a()(null != T && T.applicationId === E, "SKU must belong to application"), T.type !== C.Puh.SUBSCRIPTION || (0, c.B)([T.id]) || await (0, l.ur)(T.id);
    let L = null == (A = null != (y = (0, _.LU)({
        applicationId: E
    })) ? f.A.getWindow(y) : void 0) || A.closed ? o.SYi : o.KX8;
    if (T.type !== C.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, u.A)({
            applicationId: E,
            skuId: S,
            analyticsLocationObject: I,
            analyticsLocations: v,
            contextKey: L,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = E, r = S, i = x, g = I, b = v, (0, d.l)({
        applicationId: t,
        skuId: r,
        initialPlanId: i,
        analyticsLocationObject: g,
        analyticsLocations: b,
        renderHeader: (e, t, r) => (0, n.jsx)(h.fs, {
            step: r,
            onClose: () => t(!1)
        })
    }))
}