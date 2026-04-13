/** chunk id: 878112 params = (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(627968),
    l = r(64700),
    i = r(575593),
    s = r(990078),
    a = r(397927),
    o = r(688810),
    u = r(44120),
    c = r(954571),
    d = r(440938),
    p = r(238184),
    C = r(766172),
    k = r(758836),
    m = r(652215),
    x = r(788868),
    g = r(985018);
let h = e => {
    let {
        product: t,
        primary: r,
        selectedVariantIndex: h,
        returnRef: I,
        onSuccess: A,
        tooltipDelay: v,
        fullWidth: f = !1,
        giftRecipient: _,
        giftingOrigin: T = x.vQ.SHOP_PAGE,
        onTrackClick: E
    } = e, {
        analyticsLocations: y
    } = (0, o.Ay)(), j = l.useRef(null), b = (0, d.uM)(), R = (0, p.A)(), P = e => {
        e.stopPropagation(), c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: b?.sessionId,
            sku_id: t.skuId,
            page_section: b?.pageSection,
            page_category: b?.pageCategory,
            tile_type: i.R[t.type],
            tile_position: String(b?.tilePosition),
            cta_name: "gift button",
            page_type: R ?? "home"
        }), E?.(k.sH.SEND_AS_GIFT), (0, u.A)({
            skuId: (0, C.Y)({
                product: t,
                selectedVariantIndex: h
            }),
            isGift: !0,
            giftRecipient: _,
            giftingOrigin: T,
            analyticsLocations: y,
            returnRef: I,
            onClose: null != A ? e => {
                e && A()
            } : void 0
        })
    };
    return f ? (0, n.jsx)(a.Button, {
        variant: r ? "primary" : "secondary",
        icon: a.okO,
        onClick: P,
        text: g.intl.string(g.t.gmnzqM),
        fullWidth: !0
    }) : (0, n.jsx)(s.m, {
        text: g.intl.string(g.t["JCFN/y"]),
        delay: v,
        children: (0, n.jsx)(a.K0, {
            "aria-label": g.intl.string(g.t["JCFN/y"]),
            buttonRef: j,
            variant: r ? "primary" : "secondary",
            icon: a.okO,
            size: "md",
            onClick: P
        })
    })
}