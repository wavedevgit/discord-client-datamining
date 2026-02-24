/** chunk id: 152568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(554146),
    o = n(230109),
    c = n(397927),
    d = n(367727),
    u = n(976860),
    g = n(44724),
    _ = n(954571),
    m = n(975571),
    h = n(440938),
    p = n(590180),
    f = n(597783),
    x = n(212407),
    E = n(758836),
    C = n(652215),
    A = n(49999),
    b = n(818348),
    S = n(985018),
    v = n(419447);
let L = e => {
    let {
        wideBannerBlock: t,
        tab: n
    } = e, r = p.A.getCategoryByStoreListingId(t.categoryStoreListingId), L = l.useRef(null), I = l.useRef(null), [j, k] = l.useState(), [T, O] = l.useState(!1);
    l.useEffect(() => {
        let e = I.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && k(1080 * (e.naturalHeight / e.naturalWidth))
        };
        return e.complete ? t() : e.onload = t, () => {
            e.onload = null
        }
    }, []);
    let N = r?.skuId ?? "",
        {
            handleCardVisibilityChange: y
        } = (0, f.Z)(N, "home", "marketing wide banner"),
        R = (0, h.uM)(),
        {
            bannerURL: B
        } = (0, x.w$)(t),
        M = n === E.G2.ORBS,
        P = null != t.ctaRoute && "" !== t.ctaRoute,
        D = !0 !== t.disableCta && (null != t.ctaText && "" !== t.ctaText || P),
        H = null != t.logoURL && "" !== t.logoURL,
        w = l.useCallback(() => {
            if (O(!0), t.isDismissible) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, d.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, {
                    dismissAction: A.i.USER_DISMISS
                })
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        U = l.useCallback(e => {
            _.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: R?.sessionId,
                sku_id: N,
                page_type: n,
                page_section: R?.pageSection,
                page_category: R?.pageCategory,
                tile_type: "WIDE_BANNER",
                tile_position: String(R?.tilePosition),
                cta_name: e
            })
        }, [R, N, n]),
        G = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (U(e), null != t.ctaRoute && "" !== t.ctaRoute) {
                let e = t.ctaRoute;
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
                } else(0, u.pX)(e)
            }
        }, [t.ctaRoute, U]);
    if (null == B || T) return null;
    let F = a()(v.nM, v.Tq, v.TS, v.YB, {
            [v._1]: M,
            [v.vb]: P
        }),
        V = (0, s.jsxs)(s.Fragment, {
            children: [t.isDismissible && (0, s.jsx)("div", {
                className: v.Mh,
                children: (0, s.jsx)(c.JnF, {
                    size: "sm",
                    onClick: e => {
                        e.stopPropagation(), w()
                    },
                    "aria-label": S.intl.string(S.t.WAI6xu)
                })
            }), (0, s.jsx)("div", {
                className: a()(v.zK, {
                    [v._1]: M
                }),
                style: null != j ? {
                    height: `${j}px`
                } : void 0,
                children: (0, s.jsx)("img", {
                    ref: I,
                    src: B,
                    alt: t.title,
                    className: a()(v.LN, {
                        [v.d5]: M
                    })
                })
            }), (0, s.jsx)("div", {
                className: a()(v.Ep, {
                    [v.Qq]: D
                }),
                style: {
                    maxHeight: null != j ? `${j}px` : "auto"
                },
                children: (0, s.jsxs)("div", {
                    className: v.E8,
                    children: [(0, s.jsx)(c.Heading, {
                        style: {
                            color: t.bannerTextColor ?? "var(--text-strong)"
                        },
                        className: M ? v.O2 : void 0,
                        variant: "heading-xl/bold",
                        children: t.title
                    }), (0, s.jsx)(c.Text, {
                        style: {
                            color: "var(--text-muted)"
                        },
                        lineClamp: 2,
                        variant: M ? "text-md/medium" : "text-sm/medium",
                        children: M ? S.intl.format(S.t.SFFP7K, {
                            helpdeskArticle: m.A.getArticleURL(C.MVz.VIRTUAL_CURRENCY_LEARN_MORE)
                        }) : t.body
                    }), D && (0, s.jsxs)("div", {
                        className: v.nP,
                        children: [(0, s.jsx)(c.Button, {
                            variant: "overlay-primary",
                            onClick: e => {
                                e.stopPropagation(), G(t.ctaText ?? S.intl.string(S.t.jVcuVY))
                            },
                            text: t.ctaText ?? S.intl.string(S.t.jVcuVY)
                        }), H && (0, s.jsx)("img", {
                            src: t.logoURL,
                            alt: "",
                            className: v.bU
                        })]
                    })]
                })
            })]
        });
    return (0, s.jsx)(c.NPJ, {
        theme: M ? void 0 : b.NJ.DARK,
        children: e => (0, s.jsx)(o.L, {
            innerRef: L,
            onChange: y,
            threshold: 0,
            children: P ? (0, s.jsx)(c.DUT, {
                innerRef: L,
                onClick: () => G(null),
                className: a()(e, F),
                children: V
            }) : (0, s.jsx)("div", {
                ref: L,
                className: a()(e, F),
                children: V
            })
        })
    })
}