/** chunk id: 39771 params = (module,exports,require) **/
n.d(t, {
    j: () => h
});
var i = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    c = n(851907),
    u = n(160946),
    d = n(589078),
    _ = n(869146),
    E = n(143582),
    A = n(490744),
    T = n(67480),
    I = n(342098),
    N = n(216678),
    p = n(652215);
async function h(e) {
    var t, n, l, h, m;
    let S, C, {
            applicationId: R,
            skuId: g,
            initialPlanId: O,
            analyticsLocations: y,
            analyticsLocationObject: P
        } = e,
        x = T.A.get(g);
    if (null == x) {
        let e = (await (0, a.JI)(R)).find(e => e.sku.id === g);
        r()(null != e, "Could not find store listing for sku"), e.sku.type === p.Puh.SUBSCRIPTION_GROUP && await (0, E.vz)(R, e.id)
    }
    x = x ?? T.A.get(g), r()(null != x && x.applicationId === R, "SKU must belong to application"), x.type !== p.Puh.SUBSCRIPTION || (0, u.B)([x.id]) || await (0, o.ur)(x.id);
    let f = null == (C = null != (S = (0, c.LU)({
        applicationId: R
    })) ? _.A.getWindow(S) : void 0) || C.closed ? s.SYi : s.KX8;
    if (x.type !== p.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, N.A)({
            applicationId: R,
            skuId: g,
            analyticsLocationObject: P,
            analyticsLocations: y,
            contextKey: f,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            },
            checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT
        })
    });
    await (t = R, n = g, l = O, h = P, m = y, (0, I.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: h,
        analyticsLocations: m,
        renderHeader: (e, t, n) => (0, i.jsx)(A.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}