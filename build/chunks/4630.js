/** chunk id: 4630 params = (module,exports,require) **/
n.d(t, {
    j: () => x
});
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(397927),
    r = n(800342),
    o = n(73825),
    c = n(851907),
    d = n(160946),
    u = n(589078),
    h = n(869146),
    A = n(143582),
    _ = n(490744),
    m = n(67480),
    g = n(342098),
    p = n(216678),
    f = n(652215);
async function x(e) {
    var t, n, l, x, E;
    let I, C, {
            applicationId: N,
            skuId: T,
            initialPlanId: S,
            analyticsLocations: b,
            analyticsLocationObject: y
        } = e,
        v = m.A.get(T);
    if (null == v) {
        let e = (await (0, r.JI)(N)).find(e => e.sku.id === T);
        s()(null != e, "Could not find store listing for sku"), e.sku.type === f.Puh.SUBSCRIPTION_GROUP && await (0, A.vz)(N, e.id)
    }
    v = v ?? m.A.get(T), s()(null != v && v.applicationId === N, "SKU must belong to application"), v.type !== f.Puh.SUBSCRIPTION || (0, d.B)([v.id]) || await (0, o.ur)(v.id);
    let j = null == (C = null != (I = (0, c.LU)({
        applicationId: N
    })) ? h.A.getWindow(I) : void 0) || C.closed ? a.SYi : a.KX8;
    if (v.type !== f.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, p.A)({
            applicationId: N,
            skuId: T,
            analyticsLocationObject: y,
            analyticsLocations: b,
            contextKey: j,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = N, n = T, l = S, x = y, E = b, (0, g.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: x,
        analyticsLocations: E,
        renderHeader: (e, t, n) => (0, i.jsx)(_.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}