/** chunk id: 196231 params = (module,exports,require) **/
"use strict";
s.d(t, {
    S: () => h
});
var n = s(627968),
    r = s(64700),
    l = s(230109),
    i = s(397927),
    a = s(954571),
    o = s(440938),
    c = s(590180),
    d = s(597783),
    u = s(212407),
    _ = s(652215),
    g = s(985018),
    m = s(201073);
let h = e => {
    let t, {
        category: s,
        subblock: h,
        badgeText: p,
        handleTransition: f
    } = e;
    null != h && (t = c.A.getCategoryByStoreListingId(h?.categoryStoreListingId)?.skuId);
    let x = t ?? s?.skuId ?? "",
        {
            handleCardVisibilityChange: C
        } = (0, d.Z)(x, "home", "marketing featured block"),
        E = (0, u.s4)(s, h),
        b = r.useRef(null),
        A = h?.bodyText,
        S = (0, o.uM)();
    return (0, n.jsx)(l.L, {
        innerRef: b,
        onChange: C,
        threshold: 0,
        children: (0, n.jsxs)(i.DUT, {
            className: m.oT,
            innerRef: b,
            style: {
                ...null != E && {
                    backgroundImage: `url(${E})`
                }
            },
            onClick: () => {
                f({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: s?.isOrbsExclusive
                }), a.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            children: [null != p && (0, n.jsx)(i.LpS, {
                disableColor: !0,
                text: p,
                className: m.pv
            }), (0, n.jsx)("div", {
                className: m.Gh,
                children: null != A && (0, n.jsx)(i.Heading, {
                    lineClamp: 4,
                    className: m.BN,
                    style: {
                        color: h?.bannerTextColor ?? "white"
                    },
                    variant: "heading-md/medium",
                    children: A
                })
            }), (0, n.jsx)("div", {
                className: m.b2,
                children: (0, n.jsx)(i.Button, {
                    variant: "overlay-primary",
                    text: g.intl.string(g.t.jVcuVY),
                    onClick: e => {
                        f({
                            sourceButton: "shop marketing take me there button",
                            categorySkuId: x,
                            isInternalShopDeeplink: !0,
                            isOrbsExclusive: s?.isOrbsExclusive
                        }), e.stopPropagation(), a.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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