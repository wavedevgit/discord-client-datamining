/** chunk id: 878112 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    l = n(575593),
    r = n(990078),
    o = n(397927),
    s = n(688810),
    d = n(44120),
    u = n(954571),
    p = n(440938),
    c = n(238184),
    _ = n(766172),
    E = n(652215),
    S = n(788868),
    h = n(985018);
let v = e => {
    let {
        product: t,
        primary: n,
        selectedVariantIndex: v,
        returnRef: g,
        onSuccess: A,
        tooltipDelay: I,
        fullWidth: T = !1
    } = e, {
        analyticsLocations: R
    } = (0, s.Ay)(), y = i.useRef(null), m = (0, p.uM)(), N = (0, c.A)(), C = e => {
        e.stopPropagation(), u.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: m?.sessionId,
            sku_id: t.skuId,
            page_section: m?.pageSection,
            page_category: m?.pageCategory,
            tile_type: l.R[t.type],
            tile_position: String(m?.tilePosition),
            cta_name: "gift button",
            page_type: N || "home"
        }), (0, d.A)({
            skuId: (0, _.Y)({
                product: t,
                selectedVariantIndex: v
            }),
            isGift: !0,
            giftingOrigin: S.vQ.SHOP_PAGE,
            analyticsLocations: R,
            returnRef: g,
            onClose: null != A ? e => {
                e && A()
            } : void 0
        })
    };
    return T ? (0, a.jsx)(o.Button, {
        variant: n ? "primary" : "secondary",
        icon: o.okO,
        onClick: C,
        text: h.intl.string(h.t.gmnzqM),
        fullWidth: !0
    }) : (0, a.jsx)(r.m, {
        text: h.intl.string(h.t["JCFN/y"]),
        delay: I,
        children: (0, a.jsx)(o.K0, {
            "aria-label": h.intl.string(h.t["JCFN/y"]),
            buttonRef: y,
            variant: n ? "primary" : "secondary",
            icon: o.okO,
            size: "md",
            onClick: C
        })
    })
}