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
    s = n(869146),
    u = n(143582),
    f = n(490744),
    b = n(67480),
    p = n(342098),
    m = n(216678),
    C = n(652215);
async function g(e) {
    var t, n, a, g, h;
    let x, y, {
            applicationId: v,
            skuId: I,
            initialPlanId: w,
            analyticsLocations: k,
            analyticsLocationObject: A
        } = e,
        j = b.A.get(I);
    if (null == j) {
        let e = (await (0, i.JI)(v)).find(e => e.sku.id === I);
        o()(null != e, "Could not find store listing for sku"), e.sku.type === C.Puh.SUBSCRIPTION_GROUP && await (0, u.vz)(v, e.id)
    }
    j = j ?? b.A.get(I), o()(null != j && j.applicationId === v, "SKU must belong to application"), j.type !== C.Puh.SUBSCRIPTION || (0, c.B)([j.id]) || await (0, d.ur)(j.id);
    let L = null == (y = null != (x = (0, l.LU)({
        applicationId: v
    })) ? s.A.getWindow(x) : void 0) || y.closed ? _.SYi : _.KX8;
    if (j.type !== C.Puh.SUBSCRIPTION) return new Promise((e, t) => {
        (0, m.A)({
            applicationId: v,
            skuId: I,
            analyticsLocationObject: A,
            analyticsLocations: k,
            contextKey: L,
            onComplete: t => {
                e(t?.entitlements ?? [])
            },
            onClose: e => {
                e || t()
            }
        })
    });
    await (t = v, n = I, a = w, g = A, h = k, (0, p.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: a,
        analyticsLocationObject: g,
        analyticsLocations: h,
        renderHeader: (e, t, n) => (0, r.jsx)(f.fs, {
            step: n,
            onClose: () => t(!1)
        })
    }))
}