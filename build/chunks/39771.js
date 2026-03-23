/** chunk id: 39771 params = (module,exports,require) **/
n.d(t, {
    j: () => x
});
var r = n(627968);
n(64700);
var a = n(284009),
    o = n.n(a),
    i = n(397927),
    _ = n(800342),
    d = n(73825),
    c = n(851907),
    s = n(160946),
    l = n(589078),
    u = n(869146),
    f = n(143582),
    m = n(490744),
    p = n(67480),
    b = n(342098),
    h = n(216678),
    g = n(652215);
async function x(e) {
    var t, n, a, x, C;
    let v, y, {
            applicationId: j,
            skuId: w,
            initialPlanId: I,
            analyticsLocations: k,
            analyticsLocationObject: A
        } = e,
        P = p.A.get(w);
    if (null == P) {
        let e = (await (0, _.JI)(j)).find(e => e.sku.id === w);
        o()(null != e, "Could not find store listing for sku"), e.sku.type === g.Puh.SUBSCRIPTION_GROUP && await (0, f.vz)(j, e.id)
    }
    P = P ?? p.A.get(w), o()(null != P && P.applicationId === j, "SKU must belong to application"), P.type !== g.Puh.SUBSCRIPTION || (0, s.B)([P.id]) || await (0, d.ur)(P.id);
    let N = null == (y = null != (v = (0, c.LU)({
        applicationId: j
    })) ? u.A.getWindow(v) : void 0) || y.closed ? i.SYi : i.KX8;
    if (P.type !== g.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, h.A)({
            applicationId: j,
            skuId: w,
            analyticsLocationObject: A,
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
    await (t = j, n = w, a = I, x = A, C = k, (0, b.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: a,
        analyticsLocationObject: x,
        analyticsLocations: C,
        renderHeader: (e, t, n) => (0, r.jsx)(m.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}