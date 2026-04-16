/** chunk id: 817176 params = (module,exports,require) **/
n.d(t, {
    A: () => D
});
var i = n(627968),
    l = n(64700),
    s = n(310784),
    a = n.n(s),
    r = n(503698),
    o = n.n(r),
    c = n(158954),
    d = n(311907),
    u = n(397927),
    h = n(775602),
    m = n(587895),
    A = n(713517),
    g = n(993046),
    _ = n(544028),
    p = n(594832),
    f = n(121700),
    E = n(627001),
    C = n(754804),
    x = n(871123),
    S = n(317560),
    I = n(533406),
    T = n(366523),
    v = n(652215),
    N = n(788868),
    y = n(985018),
    b = n(789901);
let j = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: u._3J.SIZE_24,
        wishlistButtonSize: "md"
    }),
    R = a()("#000000").darken(1.5).alpha(.9).hex(),
    M = a()("#000000").alpha(0).hex(),
    L = `linear-gradient(to top, ${R} 30%, ${M} 80%)`;

function D(e) {
    var t, n;
    let {
        sku: s,
        targetUser: a,
        isTargetingCurrentUser: r,
        source: R,
        showIcons: M,
        guildId: D,
        channelId: O,
        analyticsLocations: P,
        onCardClick: w,
        onButtonClick: U
    } = e, k = l.useRef(null), G = (0, d.bG)([_.A], () => (0, c.Mwr)(_.A.theme)), F = (0, d.bG)([h.A], () => h.A.useReducedMotion), {
        isHoveringOrFocusing: H
    } = (0, A.A)(k), {
        guildId: B
    } = (0, x.nG)(s.applicationId), V = (0, d.bG)([m.A], () => m.A.getApplication(s.applicationId)), {
        primaryIconAsset: W,
        primaryIconLabel: K
    } = l.useMemo(() => (0, x.Cv)(s, s.applicationId), [s]), {
        priceComponent: z,
        extendedHeight: Y,
        displayPrice: J
    } = function(e) {
        let {
            sku: t,
            priceSetAssignmentPurchaseType: n
        } = e, {
            normalPrice: s,
            discountedPrice: a,
            discountPercent: r
        } = (0, g.ou)({
            sku: t,
            priceSetAssignmentPurchaseType: n
        }), o = a ?? s, d = l.useMemo(() => null != t && null != t.orbsReward && t.orbsReward > 0 ? (0, i.jsx)("div", {
            className: b.pt,
            children: (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                color: "currentColor",
                children: y.intl.format(y.t.GiVd2Q, {
                    orbCount: t.orbsReward,
                    orbIconHook: () => (0, i.jsx)(c.Cp8, {
                        size: "xs",
                        color: "currentColor"
                    }, "orbs-icon")
                })
            })
        }) : null, [t]);
        return null == t || null == o ? {
            priceComponent: null,
            extendedHeight: !1,
            displayPrice: o
        } : null != r && null != a ? {
            priceComponent: (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: b.p6,
                    children: [null != s && (0, i.jsx)(u.Text, {
                        className: b.of,
                        variant: "text-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: s
                    }), (0, i.jsx)(u.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        lineClamp: 1,
                        children: a
                    }), (0, i.jsxs)(u.Text, {
                        variant: "text-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", r, ")"]
                    })]
                }), d]
            }),
            extendedHeight: null != d,
            displayPrice: o
        } : {
            priceComponent: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(u.Text, {
                    variant: "text-md/bold",
                    color: "always-white",
                    lineClamp: 1,
                    children: s
                }), d]
            }),
            extendedHeight: !1,
            displayPrice: o
        }
    }({
        sku: s,
        priceSetAssignmentPurchaseType: r ? v.lid.DEFAULT : v.lid.GIFT
    }), q = l.useCallback(e => {
        e.stopPropagation(), w?.(), (0, S.R)({
            skuId: s.id,
            applicationId: s.applicationId,
            isStorefront: !1,
            giftRecipient: a,
            giftingOrigin: N.vQ.GUILD_CHANNEL,
            analyticsLocations: P
        })
    }, [s.id, s.applicationId, a, P, w]), $ = l.useCallback(e => {
        e.stopPropagation(), U?.(), (0, I.a)(s, {
            isGift: !r,
            giftRecipient: a,
            giftingOrigin: N.vQ.GUILD_CHANNEL
        }, {
            analyticsLocations: P,
            guildId: B
        })
    }, [s, a, r, P, B, U]);
    return (0, i.jsx)(c.vN3, {
        children: (0, i.jsxs)(u.sqX, {
            onClick: q,
            className: o()(b.Nr, {
                [b.Zl]: !F,
                [b.BN]: G,
                [b.YF]: H
            }),
            ref: k,
            "aria-label": s.name,
            children: [(0, i.jsx)(E.P, {
                spec: j,
                application: V
            }), (0, i.jsx)(f.A, {
                spec: j,
                sku: s,
                isCardHovered: H,
                location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                replacedElement: M && !r && R === p.uS.WISHLIST ? (0, i.jsx)(C.n, {
                    spec: j,
                    user: a,
                    guildId: D ?? void 0,
                    channelId: O ?? void 0
                }) : null
            }), (0, i.jsx)(T.e, {
                shape: "custom",
                sku: s,
                containerClassName: b.Vl,
                foregroundImageClassName: b.wP,
                backgroundImageClassName: b.GC
            }), (0, i.jsx)("div", {
                className: b.iZ,
                style: {
                    background: L
                }
            }), (0, i.jsxs)("div", {
                className: b.zH,
                children: [(0, i.jsxs)("div", {
                    className: o()(b.gn, {
                        [b.ov]: null == z,
                        [b.w4]: Y
                    }),
                    children: [null != W && (0, i.jsx)("img", {
                        src: W.toString(),
                        alt: K,
                        className: b.ye
                    }), (0, i.jsx)(u.Text, {
                        color: "always-white",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: s.name
                    })]
                }), (0, i.jsx)("div", {
                    className: b.iQ,
                    children: z
                })]
            }), (0, i.jsx)("div", {
                className: b.li,
                children: (0, i.jsx)(c.$nd, {
                    variant: "primary",
                    onClick: $,
                    text: (t = J, n = r, null != t ? n ? y.intl.format(y.t.Xp5WTn, {
                        price: t
                    }) : y.intl.format(y.t.o2WeeD, {
                        price: t
                    }) : n ? y.intl.string(y.t.boqtTA) : y.intl.string(y.t.QAZA5f)),
                    fullWidth: !0
                })
            })]
        })
    })
}