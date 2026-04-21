/** chunk id: 108105 params = (module,exports,require) **/
l.d(t, {
    L: () => z,
    default: () => et
}), l(321073);
var n = l(627968),
    a = l(64700),
    s = l(310784),
    i = l.n(s),
    r = l(503698),
    o = l.n(r),
    c = l(311907),
    d = l(397927),
    u = l(262427),
    _ = l(964486),
    m = l(736653),
    h = l(793574),
    x = l(688810),
    f = l(429913),
    p = l(654107),
    g = l(427209),
    b = l(993046),
    C = l(801228),
    j = l(309954),
    v = l(652165),
    A = l(594832),
    T = l(961350),
    N = l(328968),
    S = l(954571),
    I = l(371794),
    k = l(871123),
    E = l(733391),
    y = l(832163),
    R = l(681064),
    O = l(857875),
    U = l(476438),
    L = l(44724),
    B = l(345938),
    P = l(510022),
    w = l(317560),
    D = l(336231),
    M = l(533406),
    H = l(263911),
    F = l(971146),
    G = l(953590),
    W = l(743693),
    Y = l(995393),
    q = l(188275),
    X = l(652215),
    V = l(985018),
    J = l(199138);

function z(e, t, l) {
    let n = [],
        a = [];
    if (null == e || 0 === e.length) return [n, a];
    for (let s of e) {
        let e = null != s.assetId ? l[s.assetId] : null;
        null != e && (n.push(s), e.mime_type.startsWith("video/") ? a.push({
            type: "video",
            src: (0, I.YE)(t, e, G.B, "mp4"),
            videoThumbnailSrc: (0, I.YE)(t, e, G.B, "webp"),
            thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
            backgroundSrc: null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, G.B, k.pV) : void 0
        }) : a.push({
            type: "image",
            src: (0, I.YE)(t, e, G.B, "webp"),
            thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
            backgroundSrc: null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, G.B, k.pV) : void 0
        }))
    }
    return [n, a]
}

function $(e) {
    let {
        sku: t
    } = e, {
        normalPrice: l,
        discountedPrice: a,
        discountPercent: s
    } = (0, b.CD)({
        sku: t
    });
    return null == l ? null : null != s && null != a ? (0, n.jsxs)("div", {
        className: J.TS,
        children: [(0, n.jsx)(d.Heading, {
            className: J.of,
            variant: "heading-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: l
        }), (0, n.jsx)(d.Heading, {
            variant: "heading-md/bold",
            color: "text-strong",
            children: a
        }), (0, n.jsxs)(d.Heading, {
            variant: "heading-md/bold",
            color: "text-feedback-positive",
            lineClamp: 1,
            children: ["(", s, ")"]
        })]
    }) : (0, n.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: l
    })
}

function K(e) {
    let {
        sku: t,
        guildId: l,
        shouldShowShopLink: s,
        giftRecipient: i,
        giftingOrigin: r,
        trackPDPClick: o,
        analyticsLocations: u
    } = e, _ = t?.id, m = (0, c.bG)([y.A], () => null != _ ? y.A.getNormalizedSKUEligibility(_) : void 0, [_]), x = (0, U.B)(), p = (0, R.R)({
        location: "product_details_modal"
    }), g = (0, b.JL)({
        sku: t
    });
    (0, j.W)({
        disableFetch: !p
    });
    let C = (0, f.h)(t?.applicationId),
        A = a.useCallback(() => {
            null != t && null != l && (o(Y.Jq.BUY_BUTTON), (0, M.a)(t, {
                isGift: !1
            }, {
                analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                guildId: l
            }))
        }, [t, o, l, u]),
        T = a.useCallback(() => {
            null != l && (0, L.X)({
                guildId: l
            })
        }, [l]),
        N = a.useCallback(() => {
            null != l && (o(Y.Jq.VISIT_SHOP), (0, d.s7G)(), (0, L.default)({
                guildId: l
            }))
        }, [l, o]),
        S = a.useCallback(() => {
            null != t && (o(Y.Jq.GIFT_BUTTON), (0, M.a)(t, {
                isGift: !0,
                giftRecipient: i,
                giftingOrigin: r
            }, {
                analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
            }))
        }, [t, o, i, r, u]),
        I = a.useCallback(() => {
            if (null == t || null == C || !p) return;
            o(Y.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, v.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, w.j)(), (0, P.n)({
                        sku: t,
                        application: C,
                        analyticsLocations: e
                    })
                },
                analyticsLocations: e
            })
        }, [t, o, u, C, p]);
    return null == t ? null : (0, n.jsxs)("div", {
        className: J.wt,
        children: [t.exclusive && (0, n.jsx)("div", {
            className: J.K3,
            children: (0, n.jsx)(H.I, {})
        }), (0, n.jsxs)("div", {
            className: J.AX,
            children: [(0, n.jsx)(d.Heading, {
                variant: "heading-xl/bold",
                color: "text-strong",
                children: t.name
            }), (0, n.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: t.description
            })]
        }), (0, n.jsxs)("div", {
            className: J.sj,
            children: [(0, n.jsx)(F.V, {}), (0, n.jsx)($, {
                sku: t
            }), null != t.orbsReward && t.orbsReward > 0 && (0, n.jsx)(en, {
                timeRemaining: x ?? void 0,
                text: V.intl.format(V.t.d3njXi, {
                    orbCount: t.orbsReward
                })
            })]
        }), (0, n.jsxs)("div", {
            className: J.NC,
            children: [!m && (0, n.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: V.intl.string(V.t.IqlPbQ)
            }), m && (0, n.jsx)(d.Button, {
                variant: "primary",
                onClick: A,
                text: V.intl.string(V.t.boqtTA),
                fullWidth: !0
            }), p && m && null != g && (0, n.jsx)(d.Button, {
                icon: d.Cp8,
                variant: "secondary",
                onClick: I,
                text: V.intl.format(V.t.lOtBOI, {
                    orbPrice: g.amount,
                    orbIconHook: () => (0, n.jsx)(d.Cp8, {
                        size: "xs",
                        color: "currentColor"
                    }, "orbs-icon")
                }),
                fullWidth: !0
            }), (0, n.jsxs)(d.ButtonGroup, {
                wrap: !1,
                fullWidth: !0,
                children: [s ? (0, n.jsx)(d.Button, {
                    icon: d.U1X,
                    variant: "secondary",
                    onMouseDown: T,
                    onClick: N,
                    text: V.intl.string(V.t["2QW9nR"]),
                    fullWidth: !0
                }) : null, (0, n.jsx)(d.Button, {
                    icon: d.okO,
                    variant: "secondary",
                    onClick: S,
                    text: V.intl.string(V.t.QAZA5f),
                    fullWidth: !0
                })]
            })]
        })]
    })
}

function Q(e) {
    let {
        sku: t,
        applicationId: l,
        assets: s,
        onSelectedCarouselItemChange: i,
        isMuted: r,
        trackPDPClick: o
    } = e, [c, d] = a.useState([]), [u, _] = a.useState([]), m = a.useCallback(e => {
        let t = u.findIndex(t => t === e);
        i?.(c[t] ?? null)
    }, [i, c, u]);
    return (a.useEffect(() => {
        let [e, n] = z(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], l, s);
        d(e), _(n)
    }, [t, s, l]), 0 === u.length) ? null : (0, n.jsx)(G.A, {
        className: J.Dk,
        items: u,
        onItemChange: m,
        isMuted: r,
        onTrackClick: o
    })
}

function Z(e) {
    let {
        selectedCarouselItem: t,
        applicationId: l
    } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, I.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: J.HI,
        children: [null != a && (0, n.jsx)("img", {
            className: J.IX,
            src: a,
            alt: t.label
        }, a), (0, n.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: t.label
        })]
    })
}

function ee(e) {
    let {
        onClick: t,
        children: l,
        ariaLabel: a
    } = e;
    return (0, n.jsx)(d.DUT, {
        onClick: t,
        className: J.jU,
        "aria-label": a,
        role: "button",
        children: l
    })
}

function et(e) {
    return (0, O.O)({
        location: "product_details_modal"
    }) ? (0, n.jsx)(D.A, {
        ...e
    }) : (0, n.jsx)(el, {
        ...e
    })
}

function el(e) {
    let {
        transitionState: t,
        returnRef: l,
        skuId: s,
        applicationId: r,
        isStorefront: u,
        giftRecipient: h,
        giftingOrigin: f,
        analyticsLocations: b,
        analyticsContext: j,
        onClose: v
    } = e, {
        analyticsLocations: R
    } = (0, x.Ay)(b ?? []), {
        guildId: O
    } = (0, k.nG)(r), U = (0, c.bG)([T.default], () => T.default.getId());
    a.useEffect(() => {
        null != O && null != s && (0, E.iR)(O, s)
    }, [O, s]);
    let L = (0, c.bG)([y.A], () => y.A.getStorefrontMetadata(r), [r]),
        P = (0, c.bG)([y.A], () => y.A.getSkuAssets()),
        w = (0, c.bG)([N.A], () => N.A.isFetchingForSKU(s)),
        D = (0, d.Mwr)((0, m.Ay)()),
        [M, H] = a.useState(!0),
        F = (0, C.A)({
            skuId: s,
            location: "SocialLayerStorefrontProductDetailsModal"
        }),
        [G, z] = a.useState(null),
        $ = function(e, t) {
            let l = t?.labelIconAssetId != null ? (0, I.YE)(e, t?.labelIconAssetId) : null,
                [n, s] = (0, p.rh)(l, "#000000"),
                r = a.useMemo(() => {
                    let e = i()(n).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(.25).hex()} 0%, transparent 100%)`
                }, [n]);
            return null != l && "#000000" !== n ? r : void 0
        }(r, G);
    (0, A.pE)(), (0, _.Ay)(() => {
        S.default.track(X.HAw.OPEN_MODAL, {
            location_stack: R,
            type: q.Nh,
            sku_id: s,
            application_id: r
        }), (0, E.Xw)()
    });
    let et = a.useCallback(e => {
        S.default.track(X.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
            slayer_storefront_session_id: j?.sessionId,
            sku_id: s,
            guild_id: j?.guildId,
            cta_type: e,
            location_stack: R
        })
    }, [j, s, R]);
    a.useEffect(() => {
        null == O || null == s || N.A.isFetchingForSKU(s) || (0, E.qf)(O, s)
    }, [O, s]);
    let el = a.useCallback(() => {
            null != F && null != O && (et(Y.Jq.FORWARD_BUTTON), (0, B.d)({
                sku: F,
                guildId: O,
                source: "social-layer-storefront-pdp",
                analyticsLocations: R,
                analyticsContext: j
            }))
        }, [F, O, et, R, j]),
        en = a.useCallback(() => {
            et(Y.Jq.WISHLIST_BUTTON)
        }, [et]),
        ea = a.useCallback(() => {
            H(!M), et(Y.Jq.MUTE_BUTTON)
        }, [M, et]);
    if (null == F?.tenantMetadata?.socialLayer) return w ? (0, n.jsx)(d.y$y, {}) : null;
    let es = L?.logoAssetId != null ? (0, I.YE)(r, L.logoAssetId, 75) : null,
        ei = L?.lightThemeLogoAssetId != null ? (0, I.YE)(r, L.lightThemeLogoAssetId, 75) : null,
        er = null;
    return er = D ? es ?? ei : ei ?? es, (0, n.jsx)(d.EOs, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: J.CR,
        size: d.rIJ.DYNAMIC,
        returnRef: l,
        children: (0, n.jsxs)(d.$mQ, {
            className: J.jE,
            children: [(0, n.jsxs)("div", {
                className: J.op,
                style: {
                    background: $
                },
                children: [(0, n.jsx)("div", {
                    className: J.r$,
                    children: null != er ? (0, n.jsx)("img", {
                        className: J.wm,
                        src: er,
                        alt: ""
                    }) : null
                }), (0, n.jsx)(Z, {
                    applicationId: r,
                    selectedCarouselItem: G
                }), (0, n.jsx)(K, {
                    sku: F,
                    guildId: O,
                    shouldShowShopLink: !u,
                    giftRecipient: h?.id !== U ? h : void 0,
                    giftingOrigin: h?.id !== U ? f : void 0,
                    trackPDPClick: et,
                    analyticsLocations: R
                })]
            }), (0, n.jsxs)("div", {
                className: J.Cf,
                children: [(0, n.jsx)(Q, {
                    sku: F,
                    applicationId: r,
                    assets: P,
                    onSelectedCarouselItemChange: z,
                    isMuted: M,
                    trackPDPClick: et
                }), (0, n.jsxs)("div", {
                    className: J.V7,
                    children: [null != F && (0, n.jsx)(W._, {
                        sku: F,
                        isCardHovered: !0,
                        className: o()(J.jU, J.ij),
                        trackButtonClick: en,
                        variant: "overlay-secondary",
                        location: "social_layer_storefront_product_details_modal"
                    }), (0, n.jsx)(ee, {
                        onClick: el,
                        ariaLabel: V.intl.string(V.t.Ej3B3Y),
                        children: (0, n.jsx)(g.A, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    }), (0, n.jsx)(ee, {
                        onClick: ea,
                        ariaLabel: M ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                        children: M ? (0, n.jsx)(d._RO, {
                            size: "refresh_sm",
                            color: "currentColor"
                        }) : (0, n.jsx)(d.HKD, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    }), (0, n.jsx)(ee, {
                        onClick: v,
                        ariaLabel: V.intl.string(V.t.cpT0Cq),
                        children: (0, n.jsx)(d.d$L, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    })]
                })]
            })]
        })
    })
}

function en(e) {
    let {
        timeRemaining: t,
        text: l
    } = e;
    return (0, n.jsx)(u.A, {
        className: J.qw,
        Icon: d.Cp8,
        children: (0, n.jsxs)("div", {
            className: J.Yu,
            children: [(0, n.jsxs)(d.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: [V.intl.string(V.t.yYEZGi), null != t && ` (${t})`]
            }), (0, n.jsx)("div", {
                className: J.fb,
                children: (0, n.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: l
                })
            })]
        })
    })
}