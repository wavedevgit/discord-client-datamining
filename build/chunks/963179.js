/** chunk id: 963179 params = (module,exports,require) **/
l.r(e), l.d(e, {
    ItemDetailsModal: () => v
});
var n = l(627968);
l(64700);
var s = l(423090),
    r = l(311907),
    a = l(397927),
    i = l(67480),
    o = l(328968),
    c = l(371794),
    d = l(998218),
    u = l(56754),
    x = l(550732),
    _ = l(376374),
    h = l(86889),
    m = l(652215),
    j = l(985018);

function v(t) {
    let {
        onClose: e,
        transitionState: l,
        skuId: v,
        appId: A,
        onHeaderTitleClick: g
    } = t, p = (0, r.bG)([o.A], () => o.A.getForSKU(v), [v]), E = (0, r.bG)([i.A], () => i.A.get(v), [v]), S = (0, u.L)(v);
    if (null == E) return null;
    let T = E.name ?? "",
        f = p?.description?.trim() ?? void 0,
        I = p?.headerBackground != null ? d.A.toURLSafe((0, c.YE)(A, p.headerBackground, 256)) ?? void 0 : void 0,
        R = E.type === m.Puh.DURABLE && S,
        C = E.type === m.Puh.DURABLE ? R ? j.intl.string(j.t.bm82mm) : j.intl.string(j.t["6gprwf"]) : void 0,
        {
            price: k
        } = E;
    return null == k ? null : (0, n.jsx)(x.C, {
        appId: A,
        skuId: E.id,
        transitionState: l,
        onHeaderTitleClick: g ?? e,
        onClose: e,
        footer: (0, n.jsx)(_.$P, {
            appId: A,
            sku: E
        }),
        children: (0, n.jsx)(h.D, {
            appId: A,
            skuId: E.id,
            title: T,
            description: f,
            imgSrc: I,
            tag: null != C ? (0, n.jsx)(s.v, {
                text: C
            }) : void 0,
            FallbackIcon: a.qyI
        })
    })
}