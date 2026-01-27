/** Chunk was on 59275 **/
/** chunk id: 152568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(554146),
    o = n(230109),
    c = n(397927),
    u = n(367727),
    d = n(976860),
    g = n(44724),
    f = n(954571),
    m = n(975571),
    p = n(440938),
    _ = n(590180),
    b = n(597783),
    h = n(212407),
    E = n(758836),
    v = n(652215),
    C = n(49999),
    A = n(818348),
    S = n(985018),
    x = n(201073);
let O = e => {
    var t, n, s;
    let {
        wideBannerBlock: O,
        tab: y
    } = e, j = _.A.getCategoryByStoreListingId(O.categoryStoreListingId), T = l.useRef(null), L = l.useRef(null), [I, k] = l.useState(), [N, R] = l.useState(!1);
    l.useEffect(() => {
        let e = L.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && k(1080 * (e.naturalHeight / e.naturalWidth))
        };
        return e.complete ? t() : e.onload = t, () => {
            e.onload = null
        }
    }, []);
    let P = null != (t = null == j ? void 0 : j.skuId) ? t : "",
        {
            handleCardVisibilityChange: B
        } = (0, b.Z)(P, "home", "marketing wide banner"),
        w = (0, p.uM)(),
        {
            bannerURL: D
        } = (0, h.w$)(O),
        M = y === E.G2.ORBS,
        H = null != O.ctaRoute && "" !== O.ctaRoute,
        G = !0 !== O.disableCta && (null != O.ctaText && "" !== O.ctaText || H),
        U = null != O.logoURL && "" !== O.logoURL,
        F = l.useCallback(() => {
            if (R(!0), O.isDismissible) {
                var e;
                let t = null != (e = O.dismissibleContentVersion) ? e : 0;
                (0, u.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, t, {
                    dismissAction: C.i.USER_DISMISS
                })
            }
        }, [O.isDismissible, O.dismissibleContentVersion]),
        z = l.useCallback(e => {
            f.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                sku_id: P,
                page_type: y,
                page_section: null == w ? void 0 : w.pageSection,
                page_category: null == w ? void 0 : w.pageCategory,
                tile_type: "WIDE_BANNER",
                tile_position: String(null == w ? void 0 : w.tilePosition),
                cta_name: e
            })
        }, [w, P, y]),
        V = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (z(e), null != O.ctaRoute && "" !== O.ctaRoute) {
                let e = O.ctaRoute;
                if (e.includes("game-shop")) {
                    let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                    if (null != t) {
                        let e = t[1],
                            n = parseInt(t[2], 10);
                        (0, g.default)({
                            guildId: e,
                            pageIndex: n
                        })
                    }
                } else(0, d.pX)(e)
            }
        }, [O.ctaRoute, z]);
    if (null == D || N) return null;
    let K = a()(x.nM, x.Tq, x.TS, x.YB, {
            [x._1]: M,
            [x.vb]: H
        }),
        W = (0, r.jsxs)(r.Fragment, {
            children: [O.isDismissible && (0, r.jsx)("div", {
                className: x.Mh,
                children: (0, r.jsx)(c.JnF, {
                    size: "sm",
                    onClick: e => {
                        e.stopPropagation(), F()
                    },
                    "aria-label": S.intl.string(S.t.WAI6xu)
                })
            }), (0, r.jsx)("div", {
                className: a()(x.zK, {
                    [x._1]: M
                }),
                style: null != I ? {
                    height: "".concat(I, "px")
                } : void 0,
                children: (0, r.jsx)("img", {
                    ref: L,
                    src: D,
                    alt: O.title,
                    className: a()(x.LN, {
                        [x.d5]: M
                    })
                })
            }), (0, r.jsx)("div", {
                className: a()(x.Ep, {
                    [x.Qq]: G
                }),
                style: {
                    maxHeight: null != I ? "".concat(I, "px") : "auto"
                },
                children: (0, r.jsxs)("div", {
                    className: x.E8,
                    children: [(0, r.jsx)(c.Heading, {
                        style: {
                            color: null != (n = O.bannerTextColor) ? n : "var(--text-strong)"
                        },
                        className: M ? x.O2 : void 0,
                        variant: "heading-xl/bold",
                        children: O.title
                    }), (0, r.jsx)(c.Text, {
                        style: {
                            color: "var(--text-muted)"
                        },
                        lineClamp: 2,
                        variant: M ? "text-md/medium" : "text-sm/medium",
                        children: M ? S.intl.format(S.t.SFFP7K, {
                            helpdeskArticle: m.A.getArticleURL(v.MVz.VIRTUAL_CURRENCY_LEARN_MORE)
                        }) : O.body
                    }), G && (0, r.jsxs)("div", {
                        className: x.nP,
                        children: [(0, r.jsx)(c.Button, {
                            variant: "overlay-primary",
                            onClick: e => {
                                var t;
                                e.stopPropagation(), V(null != (t = O.ctaText) ? t : S.intl.string(S.t.jVcuVY))
                            },
                            text: null != (s = O.ctaText) ? s : S.intl.string(S.t.jVcuVY)
                        }), U && (0, r.jsx)("img", {
                            src: O.logoURL,
                            alt: "",
                            className: x.bU
                        })]
                    })]
                })
            })]
        });
    return (0, r.jsx)(c.NPJ, {
        theme: M ? void 0 : A.NJ.DARK,
        children: e => (0, r.jsx)(o.L, {
            innerRef: T,
            onChange: B,
            threshold: 0,
            children: H ? (0, r.jsx)(c.DUT, {
                innerRef: T,
                onClick: () => V(null),
                className: a()(e, K),
                children: W
            }) : (0, r.jsx)("div", {
                ref: T,
                className: a()(e, K),
                children: W
            })
        })
    })
}