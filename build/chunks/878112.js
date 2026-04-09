/** chunk id: 878112 params = (module,exports,require) **/
r.d(t, {
    A: () => A
});
var n = r(627968),
    l = r(64700),
    i = r(575593),
    s = r(990078),
    a = r(397927),
    u = r(688810),
    o = r(44120),
    d = r(954571),
    c = r(440938),
    p = r(238184),
    m = r(766172),
    x = r(758836),
    g = r(652215),
    h = r(788868),
    C = r(985018);
let A = e => {
    let {
        product: t,
        primary: r,
        selectedVariantIndex: A,
        returnRef: k,
        onSuccess: I,
        tooltipDelay: v,
        fullWidth: f = !1,
        giftRecipient: _,
        giftingOrigin: y = h.vQ.SHOP_PAGE,
        onTrackClick: j
    } = e, {
        analyticsLocations: E
    } = (0, u.Ay)(), b = l.useRef(null), R = (0, c.uM)(), T = (0, p.A)(), P = e => {
        e.stopPropagation(), d.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: R?.sessionId,
            sku_id: t.skuId,
            page_section: R?.pageSection,
            page_category: R?.pageCategory,
            tile_type: i.R[t.type],
            tile_position: String(R?.tilePosition),
            cta_name: "gift button",
            page_type: T ?? "home"
        }), j?.(x.sH.SEND_AS_GIFT), (0, o.A)({
            skuId: (0, m.Y)({
                product: t,
                selectedVariantIndex: A
            }),
            isGift: !0,
            giftRecipient: _,
            giftingOrigin: y,
            analyticsLocations: E,
            returnRef: k,
            onClose: null != I ? e => {
                e && I()
            } : void 0
        })
    };
    return f ? (0, n.jsx)(a.Button, {
        variant: r ? "primary" : "secondary",
        icon: a.okO,
        onClick: P,
        text: C.intl.string(C.t.gmnzqM),
        fullWidth: !0
    }) : (0, n.jsx)(s.m, {
        text: C.intl.string(C.t["JCFN/y"]),
        delay: v,
        children: (0, n.jsx)(a.K0, {
            "aria-label": C.intl.string(C.t["JCFN/y"]),
            buttonRef: b,
            variant: r ? "primary" : "secondary",
            icon: a.okO,
            size: "md",
            onClick: P
        })
    })
}