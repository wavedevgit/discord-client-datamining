/** chunk id: 39771 params = (module,exports,require) **/
n.d(t, {
    j: () => g
});
var r = n(627968);
n(64700);
var a = n(284009),
    o = n.n(a),
    i = n(397927),
    _ = n(800342),
    l = n(73825),
    d = n(851907),
    s = n(160946),
    c = n(869146),
    u = n(143582),
    f = n(490744),
    p = n(67480),
    m = n(342098),
    b = n(216678),
    h = n(652215);
async function g(e) {
    var t, n, a, g, C;
    let y, x, {
            applicationId: A,
            skuId: v,
            initialPlanId: S,
            analyticsLocations: E,
            analyticsLocationObject: I
        } = e,
        L = p.A.get(v);
    if (null == L) {
        let e = (await (0, _.JI)(A)).find(e => e.sku.id === v);
        o()(null != e, "Could not find store listing for sku"), e.sku.type === h.Puh.SUBSCRIPTION_GROUP && await (0, u.vz)(A, e.id)
    }
    L = L ?? p.A.get(v), o()(null != L && L.applicationId === A, "SKU must belong to application"), L.type !== h.Puh.SUBSCRIPTION || (0, s.B)([L.id]) || await (0, l.ur)(L.id);
    let T = null == (x = null != (y = (0, d.LU)({
        applicationId: A
    })) ? c.A.getWindow(y) : void 0) || x.closed ? i.SYi : i.KX8;
    if (L.type !== h.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, b.A)({
            applicationId: A,
            skuId: v,
            analyticsLocationObject: I,
            analyticsLocations: E,
            contextKey: T,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = A, n = v, a = S, g = I, C = E, (0, m.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: a,
        analyticsLocationObject: g,
        analyticsLocations: C,
        renderHeader: (e, t, n) => (0, r.jsx)(f.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}