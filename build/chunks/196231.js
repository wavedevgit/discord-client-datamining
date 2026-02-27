/** chunk id: 196231, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => h
});
var s = n(627968),
    l = n(64700),
    r = n(230109),
    a = n(397927),
    i = n(954571),
    o = n(440938),
    c = n(590180),
    d = n(597783),
    u = n(212407),
    g = n(652215),
    _ = n(985018),
    m = n(201073);
let h = e => {
    let t, {
        category: n,
        subblock: h,
        badgeText: p,
        handleTransition: f
    } = e;
    null != h && (t = c.A.getCategoryByStoreListingId(h?.categoryStoreListingId)?.skuId);
    let x = t ?? n?.skuId ?? "",
        {
            handleCardVisibilityChange: E
        } = (0, d.Z)(x, "home", "marketing featured block"),
        C = (0, u.s4)(n, h),
        A = l.useRef(null),
        b = h?.bodyText,
        S = (0, o.uM)();
    return (0, s.jsx)(r.L, {
        innerRef: A,
        onChange: E,
        threshold: 0,
        children: (0, s.jsxs)(a.DUT, {
            className: m.oT,
            innerRef: A,
            style: {
                ...null != C && {
                    backgroundImage: `url(${C})`
                }
            },
            onClick: () => {
                f({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: n?.isOrbsExclusive
                }), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: x,
                    page_type: "home",
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    tile_type: "FEATURED_BLOCK",
                    tile_position: String(S?.tilePosition),
                    cta_name: null
                })
            },
            children: [null != p && (0, s.jsx)(a.LpS, {
                disableColor: !0,
                text: p,
                className: m.pv
            }), (0, s.jsx)("div", {
                className: m.Gh,
                children: null != b && (0, s.jsx)(a.Heading, {
                    lineClamp: 4,
                    className: m.BN,
                    style: {
                        color: h?.bannerTextColor ?? "white"
                    },
                    variant: "heading-md/medium",
                    children: b
                })
            }), (0, s.jsx)("div", {
                className: m.b2,
                children: (0, s.jsx)(a.Button, {
                    variant: "overlay-primary",
                    text: _.intl.string(_.t.jVcuVY),
                    onClick: e => {
                        f({
                            sourceButton: "shop marketing take me there button",
                            categorySkuId: x,
                            isInternalShopDeeplink: !0,
                            isOrbsExclusive: n?.isOrbsExclusive
                        }), e.stopPropagation(), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: S?.sessionId,
                            sku_id: x,
                            page_type: "home",
                            page_section: S?.pageSection,
                            page_category: S?.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(S?.tilePosition),
                            cta_name: "Take me there button"
                        })
                    }
                })
            })]
        })
    })
}