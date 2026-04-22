/** chunk id: 878112 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968),
    l = a(64700),
    r = a(575593),
    s = a(990078),
    i = a(397927),
    o = a(688810),
    u = a(44120),
    c = a(954571),
    d = a(440938),
    h = a(238184),
    p = a(766172),
    v = a(758836),
    C = a(652215),
    k = a(788868),
    g = a(985018);
let m = e => {
    let {
        product: t,
        primary: a,
        selectedVariantIndex: m,
        returnRef: A,
        onSuccess: x,
        tooltipDelay: _,
        fullWidth: b = !1,
        giftRecipient: R,
        giftingOrigin: I = k.vQ.SHOP_PAGE,
        onTrackClick: V
    } = e, {
        analyticsLocations: y
    } = (0, o.Ay)(), S = l.useRef(null), T = (0, d.uM)(), E = (0, h.A)(), O = e => {
        e.stopPropagation(), c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: T?.sessionId,
            sku_id: t.skuId,
            page_section: T?.pageSection,
            page_category: T?.pageCategory,
            tile_type: r.R[t.type],
            tile_position: String(T?.tilePosition),
            cta_name: "gift button",
            page_type: E ?? "home"
        }), V?.(v.sH.SEND_AS_GIFT), (0, u.A)({
            skuId: (0, p.Y)({
                product: t,
                selectedVariantIndex: m
            }),
            isGift: !0,
            giftRecipient: R,
            giftingOrigin: I,
            analyticsLocations: y,
            returnRef: A,
            onClose: null != x ? e => {
                e && x()
            } : void 0
        })
    };
    return b ? (0, n.jsx)(i.Button, {
        variant: a ? "primary" : "secondary",
        icon: i.okO,
        onClick: O,
        text: g.intl.string(g.t.gmnzqM),
        fullWidth: !0
    }) : (0, n.jsx)(s.m, {
        text: g.intl.string(g.t["JCFN/y"]),
        delay: _,
        children: (0, n.jsx)(i.K0, {
            "aria-label": g.intl.string(g.t["JCFN/y"]),
            buttonRef: S,
            variant: a ? "primary" : "secondary",
            icon: i.okO,
            size: "md",
            onClick: O
        })
    })
}