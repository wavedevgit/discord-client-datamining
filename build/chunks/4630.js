/** chunk id: 4630 params = (module,exports,require) **/
a.d(t, {
    j: () => h
});
var r = a(627968);
a(64700);
var n = a(284009),
    o = a.n(n),
    i = a(397927),
    c = a(800342),
    _ = a(73825),
    d = a(851907),
    s = a(160946),
    l = a(589078),
    u = a(869146),
    m = a(143582),
    p = a(490744),
    f = a(67480),
    b = a(342098),
    g = a(216678),
    C = a(652215);
async function h(e) {
    var t, a, n, h, x;
    let y, v, {
            applicationId: I,
            skuId: A,
            initialPlanId: T,
            analyticsLocations: B,
            analyticsLocationObject: S
        } = e,
        k = f.A.get(A);
    if (null == k) {
        let e = (await (0, c.JI)(I)).find(e => e.sku.id === A);
        o()(null != e, "Could not find store listing for sku"), e.sku.type === C.Puh.SUBSCRIPTION_GROUP && await (0, m.vz)(I, e.id)
    }
    k = k ?? f.A.get(A), o()(null != k && k.applicationId === I, "SKU must belong to application"), k.type !== C.Puh.SUBSCRIPTION || (0, s.B)([k.id]) || await (0, _.ur)(k.id);
    let w = null == (v = null != (y = (0, d.LU)({
        applicationId: I
    })) ? u.A.getWindow(y) : void 0) || v.closed ? i.SYi : i.KX8;
    if (k.type !== C.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, g.A)({
            applicationId: I,
            skuId: A,
            analyticsLocationObject: S,
            analyticsLocations: B,
            contextKey: w,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: l.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = I, a = A, n = T, h = S, x = B, (0, b.l)({
        applicationId: t,
        skuId: a,
        initialPlanId: n,
        analyticsLocationObject: h,
        analyticsLocations: x,
        renderHeader: (e, t, a) => (0, r.jsx)(p.fs, {
            step: a,
            onClose: () => t(!1)
        })
    }))
}