/** chunk id: 878112 params = (module,exports,require) **/
a.d(n, {
    A: () => y
});
var t = a(627968),
    i = a(64700),
    l = a(575593),
    r = a(635358),
    s = a(990078),
    o = a(397927),
    d = a(688810),
    u = a(44120),
    c = a(954571),
    p = a(440938),
    g = a(238184),
    v = a(766172),
    h = a(652215),
    m = a(788868),
    A = a(985018);
let y = e => {
    let {
        product: n,
        primary: a,
        selectedVariantIndex: y,
        returnRef: k,
        onSuccess: C,
        tooltipDelay: f,
        fullWidth: b = !1
    } = e, {
        analyticsLocations: _
    } = (0, d.Ay)(), S = i.useRef(null), N = (0, p.uM)(), E = (0, g.A)(), I = e => {
        e.stopPropagation(), c.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: N?.sessionId,
            sku_id: n.skuId,
            page_section: N?.pageSection,
            page_category: N?.pageCategory,
            tile_type: l.R[n.type],
            tile_position: String(N?.tilePosition),
            cta_name: "gift button",
            page_type: E || "home"
        }), (0, u.A)({
            skuId: (0, v.Y)({
                product: n,
                selectedVariantIndex: y
            }),
            isGift: !0,
            giftingOrigin: m.vQ.SHOP_PAGE,
            analyticsLocations: _,
            returnRef: k,
            variantsReturnStyle: r.g.VARIANTS_GROUP,
            onClose: null != C ? e => {
                e && C()
            } : void 0
        })
    };
    return b ? (0, t.jsx)(o.Button, {
        variant: a ? "primary" : "secondary",
        icon: o.okO,
        onClick: I,
        text: A.intl.string(A.t.gmnzqM),
        fullWidth: !0
    }) : (0, t.jsx)(s.m, {
        text: A.intl.string(A.t["JCFN/y"]),
        delay: f,
        children: (0, t.jsx)(o.K0, {
            "aria-label": A.intl.string(A.t["JCFN/y"]),
            buttonRef: S,
            variant: a ? "primary" : "secondary",
            icon: o.okO,
            size: "md",
            onClick: I
        })
    })
}