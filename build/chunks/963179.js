/** chunk id: 963179, original params: t,e,r (module,exports,require) **/
r.r(e), r.d(e, {
    ItemDetailsModal: () => j
}), r(228524), r(733351);
var n = r(627968);
r(64700);
var l = r(423090),
    s = r(311907),
    i = r(397927),
    a = r(67480),
    o = r(328968),
    c = r(371794),
    d = r(998218),
    u = r(56754),
    x = r(550732),
    p = r(376374),
    m = r(86889),
    v = r(652215),
    _ = r(985018);

function j(t) {
    var e, r, j, f;
    let {
        onClose: g,
        transitionState: h,
        skuId: y,
        appId: E,
        onHeaderTitleClick: b
    } = t, A = (0, s.bG)([o.A], () => o.A.getForSKU(y), [y]), I = (0, s.bG)([a.A], () => a.A.get(y), [y]), O = (0, u.L)(y);
    if (null == I) return null;
    let S = null != (e = I.name) ? e : "",
        T = null != (r = null == A || null == (f = A.description) ? void 0 : f.trim()) ? r : void 0,
        R = (null == A ? void 0 : A.headerBackground) != null && null != (j = d.A.toURLSafe((0, c.YE)(E, A.headerBackground, 256))) ? j : void 0,
        N = I.type === v.Puh.DURABLE && O,
        P = I.type === v.Puh.DURABLE ? N ? _.intl.string(_.t.bm82mm) : _.intl.string(_.t["6gprwf"]) : void 0,
        {
            price: k
        } = I;
    return null == k ? null : (0, n.jsx)(x.C, {
        appId: E,
        skuId: I.id,
        transitionState: h,
        onHeaderTitleClick: null != b ? b : g,
        onClose: g,
        footer: (0, n.jsx)(p.$P, {
            appId: E,
            sku: I
        }),
        children: (0, n.jsx)(m.D, {
            appId: E,
            skuId: I.id,
            title: S,
            description: T,
            imgSrc: R,
            tag: null != P ? (0, n.jsx)(l.v, {
                text: P
            }) : void 0,
            FallbackIcon: i.qyI
        })
    })
}