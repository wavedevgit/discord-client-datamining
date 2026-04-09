/** chunk id: 878112 params = (module,exports,require) **/
r.d(t, {
    A: () => C
});
var n = r(627968),
    l = r(64700),
    i = r(575593),
    s = r(990078),
    a = r(397927),
    u = r(688810),
    o = r(44120),
    c = r(954571),
    d = r(440938),
    m = r(238184),
    h = r(766172),
    p = r(758836),
    f = r(652215),
    x = r(788868),
    g = r(985018);
let C = e => {
    let {
        product: t,
        primary: r,
        selectedVariantIndex: C,
        returnRef: v,
        onSuccess: A,
        tooltipDelay: k,
        fullWidth: b = !1,
        giftRecipient: I,
        giftingOrigin: E = x.vQ.SHOP_PAGE,
        onTrackClick: y
    } = e, {
        analyticsLocations: j
    } = (0, u.Ay)(), R = l.useRef(null), _ = (0, d.uM)(), T = (0, m.A)(), L = e => {
        e.stopPropagation(), c.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: _?.sessionId,
            sku_id: t.skuId,
            page_section: _?.pageSection,
            page_category: _?.pageCategory,
            tile_type: i.R[t.type],
            tile_position: String(_?.tilePosition),
            cta_name: "gift button",
            page_type: T ?? "home"
        }), y?.(p.sH.SEND_AS_GIFT), (0, o.A)({
            skuId: (0, h.Y)({
                product: t,
                selectedVariantIndex: C
            }),
            isGift: !0,
            giftRecipient: I,
            giftingOrigin: E,
            analyticsLocations: j,
            returnRef: v,
            onClose: null != A ? e => {
                e && A()
            } : void 0
        })
    };
    return b ? (0, n.jsx)(a.Button, {
        variant: r ? "primary" : "secondary",
        icon: a.okO,
        onClick: L,
        text: g.intl.string(g.t.gmnzqM),
        fullWidth: !0
    }) : (0, n.jsx)(s.m, {
        text: g.intl.string(g.t["JCFN/y"]),
        delay: k,
        children: (0, n.jsx)(a.K0, {
            "aria-label": g.intl.string(g.t["JCFN/y"]),
            buttonRef: R,
            variant: r ? "primary" : "secondary",
            icon: a.okO,
            size: "md",
            onClick: L
        })
    })
}