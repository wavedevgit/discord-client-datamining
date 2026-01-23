/** Chunk was on 85426 **/
/** chunk id: 108105, original params: e,t,l (module,exports,require) **/
l.d(t, {
    default: () => X
}), l(896048), l(321073), l(228524);
var n = l(627968),
    r = l(64700),
    a = l(310784),
    s = l.n(a),
    i = l(503698),
    o = l.n(i),
    c = l(311907),
    u = l(397927),
    d = l(964486),
    m = l(736653),
    _ = l(793574),
    h = l(688810),
    p = l(654107),
    f = l(139146),
    g = l(427209),
    b = l(594832),
    C = l(67480),
    x = l(328968),
    j = l(954571),
    k = l(580630),
    v = l(371794),
    A = l(871123),
    I = l(733391),
    E = l(832163),
    S = l(44724),
    y = l(486318),
    N = l(345938),
    T = l(533406),
    O = l(953590),
    P = l(995393),
    U = l(188275),
    R = l(652215),
    w = l(818348),
    L = l(985018),
    D = l(88465);

function B(e) {
    var t, l, a, s;
    let {
        sku: i,
        guildId: o,
        shouldShowShopLink: c,
        onClose: d,
        trackPDPClick: m
    } = e, h = r.useCallback(() => {
        null != i && (m(P.Jq.BUY_BUTTON), (0, T.a)(i, {
            isGift: !1
        }, {
            analyticsLocations: [_.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
        }))
    }, [i, m]), p = r.useCallback(() => {
        (0, S.X)({
            guildId: o
        })
    }, [o]), f = r.useCallback(() => {
        m(P.Jq.VISIT_SHOP), (0, S.default)({
            guildId: o
        }), d()
    }, [o, d, m]), g = r.useCallback(() => {
        null != i && (m(P.Jq.GIFT_BUTTON), (0, T.a)(i, {
            isGift: !0
        }, {
            analyticsLocations: [_.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
        }))
    }, [i, m]);
    if (null == i) return null;
    let b = (0, k.$g)(null != (t = null == (a = i.price) ? void 0 : a.amount) ? t : 0, null != (l = null == (s = i.price) ? void 0 : s.currency) ? l : w.Yr.USD);
    return (0, n.jsxs)("div", {
        className: D.wt,
        children: [(0, n.jsxs)("div", {
            className: D.AX,
            children: [(0, n.jsx)(u.Heading, {
                variant: "heading-xl/bold",
                color: "text-strong",
                children: i.name
            }), (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: i.description
            })]
        }), (0, n.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: b
        }), (0, n.jsxs)("div", {
            className: D.NC,
            children: [(0, n.jsx)(u.Button, {
                variant: "primary",
                onClick: h,
                text: L.intl.string(L.t.boqtTA),
                fullWidth: !0
            }), (0, n.jsxs)(u.ButtonGroup, {
                wrap: !1,
                fullWidth: !0,
                children: [c ? (0, n.jsx)(u.Button, {
                    icon: u.U1X,
                    variant: "secondary",
                    onMouseDown: p,
                    onClick: f,
                    text: L.intl.string(L.t["2QW9nR"]),
                    fullWidth: !0
                }) : null, (0, n.jsx)(u.Button, {
                    icon: u.okO,
                    variant: "secondary",
                    onClick: g,
                    text: L.intl.string(L.t.QAZA5f),
                    fullWidth: !0
                })]
            })]
        })]
    })
}

function M(e) {
    let {
        sku: t,
        applicationId: l,
        storefront: a,
        onSelectedCarouselItemChange: s,
        isMuted: i,
        trackPDPClick: o
    } = e, [c, u] = r.useState([]), [d, m] = r.useState([]), _ = r.useCallback(e => {
        var t;
        let l = d.findIndex(t => t === e);
        null == s || s(null != (t = c[l]) ? t : null)
    }, [s, c, d]);
    return (r.useEffect(() => {
        var e, n, r;
        let [s, i] = function(e, t, l) {
            let n = [],
                r = [];
            if (null == e || 0 === e.length) return [n, r];
            for (let a of e) {
                let e = null != a.assetId ? l[a.assetId] : null;
                null != e && (n.push(a), e.mime_type.startsWith("video/") ? r.push({
                    type: "video",
                    src: (0, v.YE)(t, e, O.B, "mp4"),
                    videoThumbnailSrc: (0, v.YE)(t, e, O.B, "webp"),
                    thumbnailSrc: null != a.thumbnailAssetId ? (0, v.YE)(t, a.thumbnailAssetId, 112, "webp") : void 0,
                    backgroundSrc: null != a.backgroundAssetId ? (0, v.YE)(t, a.backgroundAssetId, O.B, A.pV) : void 0
                }) : r.push({
                    type: "image",
                    src: (0, v.YE)(t, e, O.B, "webp"),
                    thumbnailSrc: null != a.thumbnailAssetId ? (0, v.YE)(t, a.thumbnailAssetId, 112, "webp") : void 0,
                    backgroundSrc: null != a.backgroundAssetId ? (0, v.YE)(t, a.backgroundAssetId, O.B, A.pV) : void 0
                }))
            }
            return [n, r]
        }(null != (e = null == t || null == (r = t.tenantMetadata) || null == (n = r.socialLayer) ? void 0 : n.carouselItems) ? e : [], l, a.assets);
        u(s), m(i)
    }, [t, a.assets, l]), 0 === d.length) ? null : (0, n.jsx)(O.A, {
        className: D.Dk,
        items: d,
        onItemChange: _,
        isMuted: i,
        onTrackClick: o
    })
}

function H(e) {
    let {
        selectedCarouselItem: t,
        applicationId: l
    } = e;
    if (null == t) return null;
    let r = null != t.labelIconAssetId ? (0, v.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: D.HI,
        children: [null != r && (0, n.jsx)("img", {
            className: D.IX,
            src: r,
            alt: t.label
        }, r), (0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: t.label
        })]
    })
}

function Y(e) {
    let {
        onClick: t,
        children: l,
        ariaLabel: r
    } = e;
    return (0, n.jsx)(u.DUT, {
        onClick: t,
        className: D.jU,
        "aria-label": r,
        role: "button",
        children: l
    })
}

function X(e) {
    var t;
    let {
        transitionState: l,
        returnRef: a,
        skuId: i,
        applicationId: _,
        guildId: k,
        isStorefront: A,
        analyticsLocations: S,
        analyticsContext: T,
        onClose: O
    } = e, {
        analyticsLocations: w
    } = (0, h.Ay)(null != S ? S : []), X = (0, c.bG)([E.A], () => E.A.getStorefrontData(k), [k]), q = (0, c.bG)([x.A], () => x.A.isFetchingForSKU(i)), F = (0, u.Mwr)((0, m.Ay)()), [G, J] = r.useState(!0), V = (0, c.bG)([C.A], () => C.A.get(i)), [z, W] = r.useState(null), $ = function(e, t) {
        let l = (null == t ? void 0 : t.labelIconAssetId) != null ? (0, v.YE)(e, null == t ? void 0 : t.labelIconAssetId) : null,
            [n, a] = (0, p.rh)(l, "#000000"),
            i = r.useMemo(() => {
                let e = s()(n).darken(1);
                return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
            }, [n]);
        return null != l && "#000000" !== n ? i : void 0
    }(_, z);
    (0, b.pE)(), (0, d.Ay)(() => {
        j.default.track(R.HAw.OPEN_MODAL, {
            location_stack: w,
            type: U.Nh,
            sku_id: i,
            application_id: _
        })
    });
    let K = r.useCallback(e => {
        j.default.track(R.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
            slayer_storefront_session_id: null == T ? void 0 : T.sessionId,
            sku_id: i,
            guild_id: null == T ? void 0 : T.guildId,
            cta_type: e,
            location_stack: w
        })
    }, [T, i, w]);
    r.useEffect(() => {
        null == k || null == i || x.A.isFetchingForSKU(i) || (0, I.qf)(k, i)
    }, [k, i]);
    let Q = r.useCallback(() => {
            null != V && (K(P.Jq.FORWARD_BUTTON), (0, N.d)({
                sku: V,
                guildId: k,
                source: "social-layer-storefront-pdp",
                analyticsLocations: w,
                analyticsContext: T
            }))
        }, [V, k, K, w, T]),
        Z = r.useCallback(() => {
            K(P.Jq.WISHLIST_BUTTON)
        }, [K]),
        ee = r.useCallback(() => {
            J(!G), K(P.Jq.MUTE_BUTTON)
        }, [G, K]);
    if (null == (null == V || null == (t = V.tenantMetadata) ? void 0 : t.socialLayer) || (null == X ? void 0 : X.storefront) == null) return q ? (0, n.jsx)(u.y$y, {}) : null;
    let et = null != X.storefront.logoAssetId ? (0, v.YE)(X.storefront.applicationId, X.storefront.logoAssetId, 75) : null,
        el = null != X.storefront.lightThemeLogoAssetId ? (0, v.YE)(X.storefront.applicationId, X.storefront.lightThemeLogoAssetId, 75) : null,
        en = null;
    return en = F ? null != et ? et : el : null != el ? el : et, (0, n.jsx)(u.EOs, {
        transitionState: l,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: D.CR,
        size: u.rIJ.DYNAMIC,
        returnRef: a,
        children: (0, n.jsxs)(u.$mQ, {
            className: D.jE,
            children: [(0, n.jsxs)("div", {
                className: D.op,
                style: {
                    background: $
                },
                children: [(0, n.jsx)("div", {
                    className: D.r$,
                    children: null != en ? (0, n.jsx)("img", {
                        className: D.wm,
                        src: en,
                        alt: ""
                    }) : null
                }), (0, n.jsx)(H, {
                    applicationId: _,
                    selectedCarouselItem: z
                }), (0, n.jsx)(B, {
                    sku: V,
                    guildId: k,
                    shouldShowShopLink: !A,
                    onClose: O,
                    trackPDPClick: K
                })]
            }), (0, n.jsxs)("div", {
                className: D.Cf,
                children: [(0, n.jsx)(M, {
                    sku: V,
                    applicationId: _,
                    storefront: X.storefront,
                    onSelectedCarouselItemChange: W,
                    isMuted: G,
                    trackPDPClick: K
                }), (0, n.jsxs)("div", {
                    className: D.V7,
                    children: [null != V && (0, n.jsx)(f._, {
                        skuId: V.id,
                        isCardHovered: !0,
                        className: o()(D.jU, D.ij),
                        nuxGraphic: (0, y.N)(V),
                        onClick: Z
                    }), (0, n.jsx)(Y, {
                        onClick: Q,
                        ariaLabel: L.intl.string(L.t.Ej3B3Y),
                        children: (0, n.jsx)(g.A, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    }), (0, n.jsx)(Y, {
                        onClick: ee,
                        ariaLabel: G ? L.intl.string(L.t.YqAjXy) : L.intl.string(L.t.w4m945),
                        children: G ? (0, n.jsx)(u._RO, {
                            size: "refresh_sm",
                            color: "currentColor"
                        }) : (0, n.jsx)(u.HKD, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    }), (0, n.jsx)(Y, {
                        onClick: O,
                        ariaLabel: L.intl.string(L.t.cpT0Cq),
                        children: (0, n.jsx)(u.d$L, {
                            size: "refresh_sm",
                            color: "currentColor"
                        })
                    })]
                })]
            })]
        })
    })
}