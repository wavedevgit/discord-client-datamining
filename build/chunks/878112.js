/** chunk id: 878112 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968),
    a = n(64700),
    i = n(575593),
    l = n(990078),
    s = n(397927),
    o = n(688810),
    c = n(44120),
    d = n(954571),
    u = n(440938),
    m = n(238184),
    h = n(766172),
    p = n(652215),
    x = n(788868),
    f = n(985018);
let v = e => {
    let {
        product: t,
        primary: n,
        selectedVariantIndex: v,
        returnRef: _,
        onSuccess: g,
        tooltipDelay: A,
        fullWidth: j = !1
    } = e, {
        analyticsLocations: C
    } = (0, o.Ay)(), N = a.useRef(null), b = (0, u.uM)(), R = (0, m.A)(), I = e => {
        e.stopPropagation(), d.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: b?.sessionId,
            sku_id: t.skuId,
            page_section: b?.pageSection,
            page_category: b?.pageCategory,
            tile_type: i.R[t.type],
            tile_position: String(b?.tilePosition),
            cta_name: "gift button",
            page_type: R || "home"
        }), (0, c.A)({
            skuId: (0, h.Y)({
                product: t,
                selectedVariantIndex: v
            }),
            isGift: !0,
            giftingOrigin: x.vQ.SHOP_PAGE,
            analyticsLocations: C,
            returnRef: _,
            onClose: null != g ? e => {
                e && g()
            } : void 0
        })
    };
    return j ? (0, r.jsx)(s.Button, {
        variant: n ? "primary" : "secondary",
        icon: s.okO,
        onClick: I,
        text: f.intl.string(f.t.gmnzqM),
        fullWidth: !0
    }) : (0, r.jsx)(l.m, {
        text: f.intl.string(f.t["JCFN/y"]),
        delay: A,
        children: (0, r.jsx)(s.K0, {
            "aria-label": f.intl.string(f.t["JCFN/y"]),
            buttonRef: N,
            variant: n ? "primary" : "secondary",
            icon: s.okO,
            size: "md",
            onClick: I
        })
    })
}