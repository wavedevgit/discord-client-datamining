/** Chunk was on web.js **/
/** chunk id: 878112, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(575593),
    o = n(635358),
    s = n(990078),
    l = n(397927),
    c = n(688810),
    u = n(44120),
    d = n(954571),
    f = n(440938),
    p = n(238184),
    _ = n(766172),
    h = n(652215),
    m = n(788868),
    g = n(985018);
let E = e => {
    let {
        product: t,
        primary: n,
        selectedVariantIndex: E,
        returnRef: y,
        onSuccess: b,
        tooltipDelay: O,
        fullWidth: v = !1
    } = e, {
        analyticsLocations: A
    } = (0, c.Ay)(), I = i.useRef(null), S = (0, f.uM)(), T = (0, p.A)(), C = e => {
        e.stopPropagation(), d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
            sku_id: t.skuId,
            page_section: null == S ? void 0 : S.pageSection,
            page_category: null == S ? void 0 : S.pageCategory,
            tile_type: a.R[t.type],
            tile_position: String(null == S ? void 0 : S.tilePosition),
            cta_name: "gift button",
            page_type: T || "home"
        }), (0, u.A)({
            skuId: (0, _.Y)({
                product: t,
                selectedVariantIndex: E
            }),
            isGift: !0,
            giftingOrigin: m.vQ.SHOP_PAGE,
            analyticsLocations: A,
            returnRef: y,
            variantsReturnStyle: o.g.VARIANTS_GROUP,
            onClose: null != b ? e => {
                e && b()
            } : void 0
        })
    };
    return v ? (0, r.jsx)(l.Button, {
        variant: n ? "primary" : "secondary",
        icon: l.okO,
        onClick: C,
        text: g.intl.string(g.t.gmnzqM),
        fullWidth: !0
    }) : (0, r.jsx)(s.m, {
        text: g.intl.string(g.t["JCFN/y"]),
        delay: O,
        children: (0, r.jsx)(l.K0, {
            "aria-label": g.intl.string(g.t["JCFN/y"]),
            buttonRef: I,
            variant: n ? "primary" : "secondary",
            icon: l.okO,
            size: "md",
            onClick: C
        })
    })
}