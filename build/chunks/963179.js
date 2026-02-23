/** chunk id: 963179, original params: t,e,l (module,exports,require) **/
l.r(e), l.d(e, {
    ItemDetailsModal: () => j
});
var s = l(627968);
l(64700);
var r = l(423090),
    n = l(311907),
    i = l(397927),
    a = l(67480),
    o = l(328968),
    c = l(371794),
    d = l(998218),
    x = l(56754),
    u = l(550732),
    _ = l(376374),
    h = l(86889),
    m = l(652215),
    v = l(985018);

function j(t) {
    let {
        onClose: e,
        transitionState: l,
        skuId: j,
        appId: g,
        onHeaderTitleClick: p
    } = t, A = (0, n.bG)([o.A], () => o.A.getForSKU(j), [j]), T = (0, n.bG)([a.A], () => a.A.get(j), [j]), E = (0, x.L)(j);
    if (null == T) return null;
    let I = T.name ?? "",
        S = A?.description?.trim() ?? void 0,
        R = A?.headerBackground != null ? d.A.toURLSafe((0, c.YE)(g, A.headerBackground, 256)) ?? void 0 : void 0,
        f = T.type === m.Puh.DURABLE && E,
        N = T.type === m.Puh.DURABLE ? f ? v.intl.string(v.t.bm82mm) : v.intl.string(v.t["6gprwf"]) : void 0,
        {
            price: k
        } = T;
    return null == k ? null : (0, s.jsx)(u.C, {
        appId: g,
        skuId: T.id,
        transitionState: l,
        onHeaderTitleClick: p ?? e,
        onClose: e,
        footer: (0, s.jsx)(_.$P, {
            appId: g,
            sku: T
        }),
        children: (0, s.jsx)(h.D, {
            appId: g,
            skuId: T.id,
            title: I,
            description: S,
            imgSrc: R,
            tag: null != N ? (0, s.jsx)(r.v, {
                text: N
            }) : void 0,
            FallbackIcon: i.qyI
        })
    })
}