/** chunk id: 4630 params = (module,exports,require) **/
n.d(e, {
    j: () => p
});
var i = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    c = n(851907),
    d = n(160946),
    u = n(589078),
    E = n(869146),
    _ = n(143582),
    T = n(490744),
    A = n(67480),
    I = n(342098),
    N = n(216678),
    R = n(652215);
async function p(t) {
    var e, n, l, p, h;
    let O, m, {
            applicationId: C,
            skuId: g,
            initialPlanId: S,
            analyticsLocations: y,
            analyticsLocationObject: P
        } = t,
        M = A.A.get(g);
    if (null == M) {
        let t = (await (0, a.JI)(C)).find(t => t.sku.id === g);
        r()(null != t, "Could not find store listing for sku"), t.sku.type === R.Puh.SUBSCRIPTION_GROUP && await (0, _.vz)(C, t.id)
    }
    M = M ?? A.A.get(g), r()(null != M && M.applicationId === C, "SKU must belong to application"), M.type !== R.Puh.SUBSCRIPTION || (0, d.B)([M.id]) || await (0, o.ur)(M.id);
    let U = null == (m = null != (O = (0, c.LU)({
        applicationId: C
    })) ? E.A.getWindow(O) : void 0) || m.closed ? s.SYi : s.KX8;
    if (M.type !== R.Puh.SUBSCRIPTION) return new Promise((t, e) => {
        (0, N.A)({
            applicationId: C,
            skuId: g,
            analyticsLocationObject: P,
            analyticsLocations: y,
            contextKey: U,
            onComplete: e => {
                t(e?.entitlements ?? [])
            },
            onClose: t => {
                t || e()
            },
            checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (e = C, n = g, l = S, p = P, h = y, (0, I.l)({
        applicationId: e,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: p,
        analyticsLocations: h,
        renderHeader: (t, e, n) => (0, i.jsx)(T.fs, {
            step: n,
            onClose: () => e(!1)
        })
    }))
}