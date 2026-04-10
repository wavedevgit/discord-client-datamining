/** chunk id: 817176 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(587895),
    h = n(713517),
    m = n(993046),
    A = n(544028),
    g = n(594832),
    p = n(121700),
    _ = n(627001),
    f = n(754804),
    E = n(871123),
    C = n(317560),
    x = n(533406),
    S = n(366523),
    I = n(652215),
    T = n(788868),
    v = n(985018),
    N = n(906269);
let y = Object.freeze({
    size: 0,
    iconSize: 20,
    iconInset: 12,
    buttonInset: 8,
    avatarSize: c._3J.SIZE_24,
    wishlistButtonSize: "md"
});

function b(e) {
    var t, n;
    let {
        sku: a,
        targetUser: b,
        isTargetingCurrentUser: j,
        source: R,
        showIcons: M,
        guildId: L,
        channelId: O,
        analyticsLocations: D,
        onCardClick: P,
        onButtonClick: U
    } = e, k = l.useRef(null), w = (0, o.bG)([A.A], () => (0, r.Mwr)(A.A.theme)), G = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
        isHoveringOrFocusing: F
    } = (0, h.A)(k), {
        guildId: H
    } = (0, E.nG)(a.applicationId), B = (0, o.bG)([u.A], () => u.A.getApplication(a.applicationId)), {
        primaryIconAsset: V,
        primaryIconLabel: W
    } = l.useMemo(() => (0, E.Cv)(a, a.applicationId), [a]), {
        normalPrice: K,
        discountedPrice: z
    } = (0, m.ou)({
        sku: a,
        priceSetAssignmentPurchaseType: j ? I.lid.DEFAULT : I.lid.GIFT
    }), Y = z ?? K, J = null != Y, q = l.useCallback(e => {
        e.stopPropagation(), P?.(), (0, C.R)({
            skuId: a.id,
            applicationId: a.applicationId,
            isStorefront: !1,
            giftRecipient: b,
            giftingOrigin: T.vQ.GUILD_CHANNEL,
            analyticsLocations: D
        })
    }, [a.id, a.applicationId, b, D, P]), $ = l.useCallback(e => {
        e.stopPropagation(), U?.(), (0, x.a)(a, {
            isGift: !j,
            giftRecipient: b,
            giftingOrigin: T.vQ.GUILD_CHANNEL
        }, {
            analyticsLocations: D,
            guildId: H
        })
    }, [a, b, j, D, H, U]);
    return (0, i.jsx)(r.vN3, {
        children: (0, i.jsxs)(c.sqX, {
            onClick: q,
            className: s()(N.Nr, {
                [N.Zl]: !G,
                [N.BN]: w,
                [N.YF]: F
            }),
            ref: k,
            "aria-label": a.name,
            children: [(0, i.jsx)(_.P, {
                spec: y,
                application: B
            }), (0, i.jsx)(p.A, {
                spec: y,
                sku: a,
                isCardHovered: F,
                location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                replacedElement: M && !j && R === g.uS.WISHLIST ? (0, i.jsx)(f.n, {
                    spec: y,
                    user: b,
                    guildId: L ?? void 0,
                    channelId: O ?? void 0
                }) : null
            }), (0, i.jsx)(S.e, {
                shape: "custom",
                sku: a,
                containerClassName: N.Vl,
                foregroundImageClassName: N.wP,
                backgroundImageClassName: N.GC
            }), (0, i.jsxs)("div", {
                className: N.zH,
                children: [(0, i.jsxs)("div", {
                    className: s()(N.gn, {
                        [N.ov]: !J
                    }),
                    children: [null != V && (0, i.jsx)("img", {
                        src: V.toString(),
                        alt: W,
                        className: N.ye
                    }), (0, i.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: a.name
                    })]
                }), (0, i.jsxs)("div", {
                    className: N.iQ,
                    children: [J && (0, i.jsx)(c.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        lineClamp: 1,
                        children: Y
                    }), null != a.orbsReward && a.orbsReward > 0 && (0, i.jsx)("div", {
                        className: N.pt,
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "currentColor",
                            children: v.intl.format(v.t.GiVd2Q, {
                                orbCount: a.orbsReward,
                                orbIconHook: () => (0, i.jsx)(r.Cp8, {
                                    size: "xs",
                                    color: "currentColor"
                                }, "orbs-icon")
                            })
                        })
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: N.li,
                children: (0, i.jsx)(r.$nd, {
                    variant: "primary",
                    onClick: $,
                    text: (t = Y, n = j, null != t ? n ? v.intl.format(v.t.Xp5WTn, {
                        price: t
                    }) : v.intl.format(v.t.o2WeeD, {
                        price: t
                    }) : n ? v.intl.string(v.t.boqtTA) : v.intl.string(v.t.QAZA5f)),
                    fullWidth: !0
                })
            })]
        })
    })
}