/** Chunk was on web.js **/
/** chunk id: 963179, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    ItemDetailsModal: () => g
}), n(228524), n(733351);
var r = n(627968);
n(64700);
var i = n(423090),
    a = n(311907),
    s = n(397927),
    o = n(67480),
    l = n(328968),
    c = n(371794),
    u = n(998218),
    d = n(56754),
    f = n(550732),
    p = n(376374),
    _ = n(86889),
    h = n(652215),
    m = n(985018);

function g(e) {
    var t, n, g, E;
    let {
        onClose: y,
        transitionState: b,
        skuId: O,
        appId: v,
        onHeaderTitleClick: A
    } = e, I = (0, a.bG)([l.A], () => l.A.getForSKU(O), [O]), S = (0, a.bG)([o.A], () => o.A.get(O), [O]), T = (0, d.L)(O);
    if (null == S) return null;
    let C = null != (t = S.name) ? t : "",
        N = null != (n = null == I || null == (E = I.description) ? void 0 : E.trim()) ? n : void 0,
        w = (null == I ? void 0 : I.headerBackground) != null && null != (g = u.A.toURLSafe((0, c.YE)(v, I.headerBackground, 256))) ? g : void 0,
        R = S.type === h.Puh.DURABLE && T,
        P = S.type === h.Puh.DURABLE ? R ? m.intl.string(m.t.bm82mm) : m.intl.string(m.t["6gprwf"]) : void 0,
        {
            price: D
        } = S;
    return null == D ? null : (0, r.jsx)(f.C, {
        appId: v,
        skuId: S.id,
        transitionState: b,
        onHeaderTitleClick: null != A ? A : y,
        onClose: y,
        footer: (0, r.jsx)(p.$P, {
            appId: v,
            sku: S
        }),
        children: (0, r.jsx)(_.D, {
            appId: v,
            skuId: S.id,
            title: C,
            description: N,
            imgSrc: w,
            tag: null != P ? (0, r.jsx)(i.v, {
                text: P
            }) : void 0,
            FallbackIcon: s.qyI
        })
    })
}