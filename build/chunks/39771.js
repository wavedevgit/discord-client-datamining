/** chunk id: 39771 params = (module,exports,require) **/
n.d(t, {
    j: () => g
});
var r = n(627968);
n(64700);
var a = n(284009),
    o = n.n(a),
    _ = n(397927),
    i = n(800342),
    d = n(73825),
    l = n(851907),
    c = n(160946),
    s = n(589078),
    u = n(869146),
    f = n(143582),
    b = n(490744),
    p = n(67480),
    m = n(342098),
    C = n(216678),
    h = n(652215);
async function g(e) {
    var t, n, a, g, x;
    let y, v, {
            applicationId: I,
            skuId: w,
            initialPlanId: k,
            analyticsLocations: A,
            analyticsLocationObject: j
        } = e,
        P = p.A.get(w);
    if (null == P) {
        let e = (await (0, i.JI)(I)).find(e => e.sku.id === w);
        o()(null != e, "Could not find store listing for sku"), e.sku.type === h.Puh.SUBSCRIPTION_GROUP && await (0, f.vz)(I, e.id)
    }
    P = P ?? p.A.get(w), o()(null != P && P.applicationId === I, "SKU must belong to application"), P.type !== h.Puh.SUBSCRIPTION || (0, c.B)([P.id]) || await (0, d.ur)(P.id);
    let L = null == (v = null != (y = (0, l.LU)({
        applicationId: I
    })) ? u.A.getWindow(y) : void 0) || v.closed ? _.SYi : _.KX8;
    if (P.type !== h.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, C.A)({
            applicationId: I,
            skuId: w,
            analyticsLocationObject: j,
            analyticsLocations: A,
            contextKey: L,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: s.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = I, n = w, a = k, g = j, x = A, (0, m.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: a,
        analyticsLocationObject: g,
        analyticsLocations: x,
        renderHeader: (e, t, n) => (0, r.jsx)(b.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}