/** chunk id: 878112 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(627968),
    r = a(64700),
    i = a(575593),
    s = a(990078),
    l = a(397927),
    o = a(688810),
    c = a(44120),
    d = a(954571),
    u = a(440938),
    m = a(238184),
    p = a(766172),
    _ = a(758836),
    h = a(652215),
    x = a(788868),
    f = a(985018);
let g = e => {
    let {
        product: t,
        primary: a,
        selectedVariantIndex: g,
        returnRef: v,
        onSuccess: A,
        tooltipDelay: C,
        fullWidth: I = !1,
        giftRecipient: j,
        giftingOrigin: T = x.vQ.SHOP_PAGE,
        onTrackClick: b
    } = e, {
        analyticsLocations: N
    } = (0, o.Ay)(), R = r.useRef(null), k = (0, u.uM)(), E = (0, m.A)(), y = e => {
        e.stopPropagation(), d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: k?.sessionId,
            sku_id: t.skuId,
            page_section: k?.pageSection,
            page_category: k?.pageCategory,
            tile_type: i.R[t.type],
            tile_position: String(k?.tilePosition),
            cta_name: "gift button",
            page_type: E ?? "home"
        }), b?.(_.sH.SEND_AS_GIFT), (0, c.A)({
            skuId: (0, p.Y)({
                product: t,
                selectedVariantIndex: g
            }),
            isGift: !0,
            giftRecipient: j,
            giftingOrigin: T,
            analyticsLocations: N,
            returnRef: v,
            onClose: null != A ? e => {
                e && A()
            } : void 0
        })
    };
    return I ? (0, n.jsx)(l.Button, {
        variant: a ? "primary" : "secondary",
        icon: l.okO,
        onClick: y,
        text: f.intl.string(f.t.gmnzqM),
        fullWidth: !0
    }) : (0, n.jsx)(s.m, {
        text: f.intl.string(f.t["JCFN/y"]),
        delay: C,
        children: (0, n.jsx)(l.K0, {
            "aria-label": f.intl.string(f.t["JCFN/y"]),
            buttonRef: R,
            variant: a ? "primary" : "secondary",
            icon: l.okO,
            size: "md",
            onClick: y
        })
    })
}