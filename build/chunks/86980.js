/** chunk id: 86980 params = (module,exports,require) **/
n.d(t, {
    j: () => N
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
    u = n(342098),
    _ = n(216678),
    E = n(869146),
    T = n(143582),
    A = n(490744),
    I = n(67480),
    p = n(652215);
async function N(e) {
    var t, n, l, N, m;
    let h, R, {
            applicationId: S,
            skuId: g,
            initialPlanId: C,
            analyticsLocations: O,
            analyticsLocationObject: y
        } = e,
        x = I.A.get(g);
    if (null == x) {
        let e = (await (0, a.JI)(S)).find(e => e.sku.id === g);
        r()(null != e, "Could not find store listing for sku"), e.sku.type === p.Puh.SUBSCRIPTION_GROUP && await (0, T.vz)(S, e.id)
    }
    x = x ?? I.A.get(g), r()(null != x && x.applicationId === S, "SKU must belong to application"), x.type !== p.Puh.SUBSCRIPTION || (0, d.B)([x.id]) || await (0, o.ur)(x.id);
    let f = null == (R = null != (h = (0, c.LU)({
        applicationId: S
    })) ? E.A.getWindow(h) : void 0) || R.closed ? s.SYi : s.KX8;
    if (x.type !== p.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, _.A)({
            applicationId: S,
            skuId: g,
            analyticsLocationObject: y,
            analyticsLocations: O,
            contextKey: f,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = S, n = g, l = C, N = y, m = O, (0, u.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: N,
        analyticsLocations: m,
        renderHeader: (e, t, n) => (0, i.jsx)(A.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}