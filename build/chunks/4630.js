/** chunk id: 4630 params = (module,exports,require) **/
n.d(e, {
    j: () => S
});
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    l = n(397927),
    s = n(800342),
    o = n(73825),
    c = n(851907),
    _ = n(160946),
    d = n(589078),
    u = n(869146),
    p = n(143582),
    h = n(490744),
    E = n(67480),
    g = n(342098),
    A = n(216678),
    m = n(652215);
async function S(t) {
    var e, n, r, S, f;
    let T, I, {
            applicationId: N,
            skuId: b,
            initialPlanId: C,
            analyticsLocations: P,
            analyticsLocationObject: x
        } = t,
        O = E.A.get(b);
    if (null == O) {
        let t = (await (0, s.JI)(N)).find(t => t.sku.id === b);
        a()(null != t, "Could not find store listing for sku"), t.sku.type === m.Puh.SUBSCRIPTION_GROUP && await (0, p.vz)(N, t.id)
    }
    O = O ?? E.A.get(b), a()(null != O && O.applicationId === N, "SKU must belong to application"), O.type !== m.Puh.SUBSCRIPTION || (0, _.B)([O.id]) || await (0, o.ur)(O.id);
    let R = null == (I = null != (T = (0, c.LU)({
        applicationId: N
    })) ? u.A.getWindow(T) : void 0) || I.closed ? l.SYi : l.KX8;
    if (O.type !== m.Puh.SUBSCRIPTION) return new Promise((t, e) => {
        (0, A.A)({
            applicationId: N,
            skuId: b,
            analyticsLocationObject: x,
            analyticsLocations: P,
            contextKey: R,
            onComplete: e => {
                t(e?.entitlements ?? [])
            },
            onClose: t => {
                t || e()
            },
            checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (e = N, n = b, r = C, S = x, f = P, (0, g.l)({
        applicationId: e,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: S,
        analyticsLocations: f,
        renderHeader: (t, e, n) => (0, i.jsx)(h.fs, {
            step: n,
            onClose: () => e(!1)
        })
    }))
}