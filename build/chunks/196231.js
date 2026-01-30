/** chunk id: 196231, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => p
});
var r = n(627968),
    l = n(64700),
    s = n(230109),
    a = n(397927),
    i = n(954571),
    o = n(440938),
    c = n(590180),
    u = n(597783),
    d = n(212407),
    g = n(652215),
    f = n(985018),
    m = n(201073);
let p = e => {
    var t, n, p;
    let _, {
        category: b,
        subblock: h,
        badgeText: E,
        handleTransition: v
    } = e;
    null != h && (_ = null == (p = c.A.getCategoryByStoreListingId(null == h ? void 0 : h.categoryStoreListingId)) ? void 0 : p.skuId);
    let C = null != (t = null != _ ? _ : null == b ? void 0 : b.skuId) ? t : "",
        {
            handleCardVisibilityChange: A
        } = (0, u.Z)(C, "home", "marketing featured block"),
        S = (0, d.s4)(b, h),
        x = l.useRef(null),
        O = null == h ? void 0 : h.bodyText,
        y = (0, o.uM)();
    return (0, r.jsx)(s.L, {
        innerRef: x,
        onChange: A,
        threshold: 0,
        children: (0, r.jsxs)(a.DUT, {
            className: m.oT,
            innerRef: x,
            style: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, null != S && {
                backgroundImage: "url(".concat(S, ")")
            }),
            onClick: () => {
                v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: C,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == b ? void 0 : b.isOrbsExclusive
                }), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                    sku_id: C,
                    page_type: "home",
                    page_section: null == y ? void 0 : y.pageSection,
                    page_category: null == y ? void 0 : y.pageCategory,
                    tile_type: "FEATURED_BLOCK",
                    tile_position: String(null == y ? void 0 : y.tilePosition),
                    cta_name: null
                })
            },
            children: [null != E && (0, r.jsx)(a.LpS, {
                disableColor: !0,
                text: E,
                className: m.pv
            }), (0, r.jsx)("div", {
                className: m.Gh,
                children: null != O && (0, r.jsx)(a.Heading, {
                    lineClamp: 4,
                    className: m.BN,
                    style: {
                        color: null != (n = null == h ? void 0 : h.bannerTextColor) ? n : "white"
                    },
                    variant: "heading-md/medium",
                    children: O
                })
            }), (0, r.jsx)("div", {
                className: m.b2,
                children: (0, r.jsx)(a.Button, {
                    variant: "overlay-primary",
                    text: f.intl.string(f.t.jVcuVY),
                    onClick: e => {
                        v({
                            sourceButton: "shop marketing take me there button",
                            categorySkuId: C,
                            isInternalShopDeeplink: !0,
                            isOrbsExclusive: null == b ? void 0 : b.isOrbsExclusive
                        }), e.stopPropagation(), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                            sku_id: C,
                            page_type: "home",
                            page_section: null == y ? void 0 : y.pageSection,
                            page_category: null == y ? void 0 : y.pageCategory,
                            tile_type: "FEATURED_BLOCK",
                            tile_position: String(null == y ? void 0 : y.tilePosition),
                            cta_name: "Take me there button"
                        })
                    }
                })
            })]
        })
    })
}