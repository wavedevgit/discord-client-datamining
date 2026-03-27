/** chunk id: 929400 params = (module,exports,require) **/
"use strict";
r.d(t, {
    default: () => eW
});
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(284009),
    o = r.n(l),
    c = r(110259),
    d = r(575593),
    u = r(334279),
    m = r(417597),
    p = r(990078),
    h = r(582754),
    x = r(397927),
    f = r(736653),
    v = r(775602),
    g = r(793574),
    _ = r(688810),
    A = r(139286),
    j = r(262295),
    C = r(141468),
    N = r(963852),
    b = r(763754),
    I = r(20851),
    R = r(44120),
    T = r(465794),
    E = r(287070),
    y = r(101058),
    P = r(84540),
    O = r(836602),
    k = r(576622),
    S = r(151252),
    w = r(652165),
    L = r(287809),
    B = r(954571),
    M = r(975571),
    U = r(927578),
    V = r(580630),
    D = r(979286),
    G = r(440938),
    H = r(4227),
    F = r(298072),
    z = r(993408),
    W = r(940980),
    $ = r(495565),
    q = r(740076),
    K = r(466459),
    J = r(442759),
    Y = r(780898),
    Z = r(512213),
    X = r(139136),
    Q = r(623373),
    ee = r(660653),
    et = r(536572),
    er = r(778992),
    en = r(49620),
    ei = r(586445),
    es = r(854818),
    ea = r(177366),
    el = r(11606),
    eo = r(203312),
    ec = r(878112),
    ed = r(501664),
    eu = r(882342),
    em = r(572595),
    ep = r(641405),
    eh = r(812016),
    ex = r(184659),
    ef = r(561769),
    ev = r(63574),
    eg = r(364616),
    e_ = r(846957),
    eA = r(293477),
    ej = r(139146),
    eC = r(929283),
    eN = r(827066),
    eb = r(525723),
    eI = r(212407),
    eR = r(347722),
    eT = r(935094),
    eE = r(57020),
    ey = r(61750),
    eP = r(758836),
    eO = r(652215),
    ek = r(788868),
    eS = r(818348),
    ew = r(985018),
    eL = r(316069);
let eB = e => {
        let {
            item: t,
            product: r,
            user: s
        } = e, a = i.useRef(null), l = (0, z.aw)(r), {
            firstAvatarDecoration: o
        } = (0, J.f5)(r);
        return t.type === d.R.AVATAR_DECORATION ? (0, n.jsx)("div", {
            className: l ? eL.X2 : eL.h1,
            children: (0, n.jsx)(eC.i, {
                user: s,
                item: t,
                isHighlighted: !0
            })
        }) : t.type === d.R.PROFILE_EFFECT ? (0, n.jsx)("div", {
            className: l ? eL.ME : eL.sm,
            ref: a,
            children: (0, n.jsx)(X.A, {
                skuId: t.skuId,
                removeSetHeight: !0,
                isHighlighted: !0,
                delayProfileEffectIntro: !0
            })
        }) : t.type === d.R.NAMEPLATE ? (0, n.jsx)("div", {
            ref: a,
            className: eL.Dz,
            children: (0, n.jsx)(Z.A, {
                className: eL.M4,
                nameplate: t,
                user: s,
                nameplatePreviewSize: "large",
                pendingAvatarDecoration: o,
                isHighlighted: !0
            })
        }) : null
    },
    eM = e => {
        let {
            product: t,
            user: r,
            activeSlide: i = 0
        } = e, s = t.items.length;
        return (0, n.jsx)("div", {
            className: eL.g4,
            children: (0, n.jsx)(x.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = `(${i+1}/${s})`;
                    return (0, n.jsx)(x.q7S, {
                        id: a,
                        children: (0, n.jsxs)("div", {
                            className: eL.Kg,
                            children: [(0, n.jsx)(eB, {
                                item: e,
                                product: t,
                                user: r
                            }), (0, n.jsxs)(x.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: eL.gx,
                                children: [l?.name, " ", o]
                            })]
                        })
                    }, a)
                })
            })
        })
    },
    eU = e => {
        let {
            product: t,
            user: r,
            activeSlide: i
        } = e;
        return (0, z.aw)(t) ? (0, n.jsx)(eM, {
            product: t,
            user: r,
            activeSlide: i
        }) : (0, eP.pQ)(t.skuId) ? (0, n.jsx)(e_.B, {
            animationState: "on_hover",
            product: t
        }) : t.items.length > 0 ? (0, n.jsx)(eB, {
            item: t.items[0],
            product: t,
            user: r
        }) : null
    },
    eV = e => {
        let {
            skuId: t
        } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY ? (0, n.jsx)(x.Text, {
            variant: "text-sm/normal",
            className: eL.CU,
            children: ew.intl.format(ew.t.Q1scdE, {
                helpdeskArticle: M.A.getArticleURL(eO.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }) : null
    },
    eD = e => {
        let {
            product: t,
            user: r,
            category: s,
            shouldCheckoutWithOrbs: l,
            tab: c,
            onClose: u,
            returnRef: v,
            previewingVariantIndexProps: g,
            selectedVariantIndex: A,
            activeBundleSlide: j,
            giftRecipient: C,
            giftingOrigin: N
        } = e, {
            analyticsLocations: b
        } = (0, _.Ay)(), {
            cardId: I,
            sessionId: E,
            tilePosition: y
        } = (0, G.uM)() ?? {}, O = U.Ay.canUseCollectibles(r), {
            previewingVariantIndex: k,
            handleEntering: L,
            handleLeaving: B
        } = g, M = (0, eN.q)(t, k), F = (0, Q.rb)(t, A);
        o()(null != F, "Selected product should not be null");
        let Y = (0, K.h)(t),
            {
                isPurchased: Z,
                isPartiallyOwnedBundle: X
            } = (0, K.h)(F),
            {
                isDisabled: ee,
                disabledReason: er
            } = (0, q.I)(F.skuId),
            ei = (0, z.Zu)({
                product: F,
                isPartiallyOwnedBundle: X,
                isPurchased: Z
            }),
            es = (0, m.bG)([H.A], () => H.A.isClaiming === F?.skuId),
            ea = (0, f.Ay)(),
            eh = (0, h.Mw)(ea),
            ex = (0, z.G0)(F),
            e_ = (0, z.yt)(F, eO.lid.DEFAULT),
            ej = e_?.amount === 0,
            {
                firstAvatarDecoration: eC
            } = (0, J.f5)(M ?? F),
            eI = i.useMemo(() => (0, z.fT)(F, O), [F, O]),
            eT = (0, et.VG)(t),
            eB = (0, eR.X)(F),
            {
                enabled: eM
            } = (0, S.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eD = (0, $.r)(F, !1),
            eG = (0, eb.V_)(t),
            eH = null != eG,
            eF = (t.variants?.length ?? 0) > 8,
            ez = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eW = c === eP.G2.ORBS && l ? ef.Hi.ORBS : ez ? ef.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: e$,
                isOrbExclusive: eq,
                hasSufficientOrbs: eK
            } = (0, eE.F)({
                product: F,
                isPremiumUser: O,
                hasDiscountOffer: eH,
                prioritizedCurrency: eW
            }),
            eJ = i.useCallback(() => (0, R.A)({
                skuId: F.skuId,
                analyticsLocations: b,
                onClose: e => e ? u() : (0, eS.tE)()
            }), [b, u, F.skuId]);
        return i.useEffect(() => {
            if (null != eC) return (0, P.p)({
                avatarDecoration: eC
            }), () => (0, P.p)({
                avatarDecoration: void 0
            })
        }, [eC]), (0, n.jsxs)("div", {
            className: eL.qA,
            children: [(0, n.jsx)("div", {
                className: eL.gn,
                children: (0, n.jsx)(eo.A, {
                    category: s
                })
            }), (0, n.jsx)(eU, {
                product: M ?? F,
                user: r,
                activeSlide: j
            }), (0, n.jsxs)("div", {
                children: [(0, n.jsxs)("div", {
                    className: eL.h_,
                    children: [(0, n.jsx)(el.A, {
                        product: F,
                        isDarkText: !eh,
                        isOrbExclusive: eq
                    }), (0, n.jsx)(x.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eL.v7,
                        children: eT
                    }), (0, n.jsx)(x.Text, {
                        variant: "text-sm/normal",
                        children: eD
                    }), (0, n.jsx)(eV, {
                        skuId: F.skuId
                    }), Y.isPurchased || Y.isPartiallyOwnedBundle ? (0, n.jsx)(en.c, {
                        className: eL.On,
                        isPartiallyPurchased: X
                    }) : ex ? (0, n.jsx)(x.Text, {
                        variant: "text-md/semibold",
                        className: eL.On,
                        children: ew.intl.string(ew.t.rt69oo)
                    }) : eM ? (0, n.jsx)(eA.B, {
                        prices: e$,
                        product: F,
                        isPremiumUser: O,
                        discount: eI,
                        hasSufficientOrbs: eK,
                        isProductDisabled: ee,
                        discountOfferAmount: eG
                    }) : (0, n.jsxs)("div", {
                        className: eL.pw,
                        children: [(0, n.jsx)(ed.A, {
                            product: F,
                            discount: eI,
                            isPremiumUser: O,
                            hideStrikethroughPrice: !O || eH,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: eG
                        }), O || eH ? null : (0, n.jsx)(eu.A, {
                            product: F
                        })]
                    })]
                }), (0, Q.B1)(t) && (0, n.jsx)(x.M1G, {
                    children: (0, n.jsxs)("div", {
                        className: a()(eL.Oj, {
                            [eL.OJ]: eF
                        }),
                        children: [eF && (0, n.jsx)(ev.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: k,
                            className: eL.L$
                        }), (0, n.jsx)(eg.A, {
                            skuId: t.skuId,
                            onVariantEnter: L,
                            onVariantExit: B,
                            wrap: !0
                        }), !eF && (0, n.jsx)(ev.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: k,
                            className: eL.L$
                        })]
                    })
                }), null !== er && (0, n.jsx)(x.Text, {
                    variant: "text-xs/normal",
                    className: eL.H$,
                    children: er
                }), (0, n.jsx)(x.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: (() => {
                        if (ex && !O && !ej) {
                            let e;
                            return e = ew.intl.string(ew.t.sEAnVH), (0, n.jsx)(T.A, {
                                subscriptionTier: ek.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: em.M,
                                onSubscribeModalClose: () => {
                                    (0, em.t)({
                                        product: F,
                                        category: s,
                                        shouldCheckoutWithOrbs: l,
                                        returnRef: v,
                                        analyticsLocations: b,
                                        tab: c,
                                        giftRecipient: C,
                                        giftingOrigin: N,
                                        cardId: I,
                                        sessionId: E,
                                        tilePosition: y
                                    })
                                }
                            })
                        }
                        return ei ? Z ? eB ? (0, n.jsxs)(x.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, n.jsx)(ep.A, {
                                product: F,
                                onSuccess: u
                            }), (0, n.jsx)(ec.A, {
                                primary: !0,
                                product: F,
                                onSuccess: u,
                                giftRecipient: C,
                                giftingOrigin: N
                            })]
                        }) : (0, n.jsx)(ep.A, {
                            product: F,
                            onSuccess: u
                        }) : ex ? (0, n.jsx)(x.Button, {
                            loading: es,
                            loadingStartedLabel: ew.intl.string(ew.t["TYw+9s"]),
                            loadingFinishedLabel: ew.intl.string(ew.t.Pg1UP5),
                            onClick: async () => {
                                await (0, D.iJ)(F.skuId), u(), (0, ey.A)({
                                    product: F,
                                    analyticsLocations: b,
                                    purchaseType: eP.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: ew.intl.string(ew.t.zp6caO),
                            fullWidth: !0
                        }) : (0, n.jsx)(n.Fragment, {
                            children: e$.map((e, t) => {
                                let r, i = 0 === t;
                                if (e.currency === eS.Yr.DISCORD_ORB) {
                                    let t, r, s, a;
                                    return t = ee ? ew.intl.string(ew.t.cTdr3x) : ew.intl.string(ew.t.zqh7ZM), r = !eK || ee, s = ew.intl.formatToPlainString(ew.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), a = r ? `${s}, ${t}` : s, (0, n.jsx)(p.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: r,
                                        "aria-label": !1,
                                        children: (0, n.jsx)(x.Button, {
                                            variant: i ? "primary" : "secondary",
                                            onClick: () => {
                                                (0, w.B4)({
                                                    skuId: F.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, D.gB)(), u(), (0, ey.A)({
                                                            product: F,
                                                            analyticsLocations: b,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: eP.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: b
                                                })
                                            },
                                            disabled: r,
                                            "aria-label": a,
                                            text: ew.intl.format(ew.t.lOtBOI, {
                                                orbPrice: e.amount,
                                                orbIconHook: () => (0, n.jsx)(x.Cp8, {
                                                    className: eL.fN,
                                                    size: "sm",
                                                    color: "currentColor"
                                                })
                                            }),
                                            fullWidth: !0
                                        })
                                    })
                                }
                                return r = (0, z.aw)(F) ? ew.intl.string(ew.t.V1AWw0) : F.type === d.R.PROFILE_EFFECT ? ew.intl.string(ew.t.kAeDcK) : F.type === d.R.NAMEPLATE ? ew.intl.string(ew.t.H3vhqU) : ew.intl.string(ew.t.AQ0Veg), eH ? r = ew.intl.formatToPlainString(ew.t["5U5RB5"], {
                                    discountOfferAmount: eG
                                }) : eM && (r = ew.intl.formatToPlainString(ew.t["cNSL/j"], {
                                    price: (0, V.$g)(e.amount, e.currency)
                                })), (0, n.jsxs)(x.ButtonGroup, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [(0, n.jsx)(x.Button, {
                                        variant: i ? "primary" : "secondary",
                                        onClick: eJ,
                                        text: r,
                                        fullWidth: !0
                                    }), eB && (0, n.jsx)(ec.A, {
                                        primary: i,
                                        product: F,
                                        onSuccess: u,
                                        giftRecipient: C,
                                        giftingOrigin: N
                                    })]
                                })
                            })
                        }) : eB ? (0, n.jsx)(ec.A, {
                            primary: !0,
                            product: F,
                            onSuccess: u,
                            fullWidth: !0,
                            giftRecipient: C,
                            giftingOrigin: N
                        }) : null
                    })()
                }), (0, n.jsx)(x.Text, {
                    className: a()(eL.ed, !eh && eL.un),
                    variant: "text-xxs/normal",
                    children: ex && !Z ? ew.intl.string(ew.t.nKdAlO) : null
                })]
            })]
        })
    },
    eG = e => {
        let {
            user: t,
            innerClassName: r
        } = e;
        return (0, n.jsx)("div", {
            className: eL.mV,
            children: (0, n.jsx)(j.A, {
                avatar: (0, n.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE
                }),
                name: t.name,
                innerClassName: a()(eL.$L, r)
            })
        })
    },
    eH = e => {
        let {
            user: t,
            nameplate: r,
            avatarDecoration: i
        } = e, s = (0, Y.Ov)();
        return (0, n.jsx)("div", {
            className: eL.nJ,
            role: "img",
            "aria-label": ew.intl.string(ew.t.SZeUdR),
            children: (0, n.jsxs)(x.M1G, {
                children: [(0, n.jsx)(eG, {
                    user: s.mallow,
                    innerClassName: eL.ab
                }), (0, n.jsxs)(x.Text, {
                    variant: "text-sm/semibold",
                    className: eL.OS,
                    children: [ew.intl.string(ew.t["yzW/fZ"]), " - 3"]
                }), (0, n.jsx)(eG, {
                    user: s.phibi,
                    innerClassName: eL.e9
                }), (0, n.jsx)("div", {
                    className: eL.mV,
                    children: (0, n.jsx)(Z.A, {
                        className: eL.M4,
                        innerClassName: eL.e9,
                        user: t,
                        nameplate: r,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i
                    })
                }), (0, n.jsx)(eG, {
                    user: s.locke,
                    innerClassName: eL.e9
                }), (0, n.jsxs)(x.Text, {
                    variant: "text-sm/semibold",
                    className: eL.OS,
                    children: [ew.intl.string(ew.t["NG43/6"]), " - 12"]
                }), (0, n.jsx)(eG, {
                    user: s.boom,
                    innerClassName: eL.bD
                }), (0, n.jsx)(eG, {
                    user: s.cherry,
                    innerClassName: eL.bD
                })]
            })
        })
    },
    eF = e => {
        let {
            product: t,
            user: r,
            activeBundleSlide: i,
            isTransitioning: s
        } = e, l = (0, m.bG)([v.A], () => v.A.useReducedMotion), o = U.Ay.canUsePremiumProfileCustomization(r), {
            pendingAvatar: c,
            ...u
        } = (0, m.cf)([O.A], () => O.A.getPendingChanges()), p = (0, y.V7)({
            userId: r.id,
            image: c
        }), h = t.type === d.R.AVATAR_DECORATION, [x] = t.items, {
            firstAvatarDecoration: f,
            firstProfileEffect: g,
            firstNameplate: _
        } = (0, J.f5)(t), A = null != g, j = () => (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(E.A, {
                ...u,
                pendingAvatar: p,
                user: r,
                canUsePremiumCustomization: o,
                pendingAvatarDecoration: f,
                pendingProfileEffect: g,
                disabledInputs: !0,
                hideMessageInput: !A,
                hideCustomStatus: !0,
                hideBioSection: h,
                hideExampleButton: !0,
                interactive: !1
            }), h && (0, n.jsx)(ez, {
                user: r
            })]
        }), C = e => (0, n.jsx)(eH, {
            user: r,
            nameplate: e,
            avatarDecoration: f
        });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ee.Wb)(t)) return (0, n.jsx)("div", {
                className: eL.RA,
                children: (0, n.jsx)("div", {
                    className: eL.bo,
                    children: j()
                })
            });
            {
                let e = i ?? 0,
                    r = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== r?.type && !l;
                return r.type === d.R.NAMEPLATE ? (0, n.jsx)("div", {
                    className: a()(eL.Zj, s && c ? eL.p2 : ""),
                    children: C(r)
                }) : (0, n.jsx)("div", {
                    className: a()(eL.Ak, s && c ? eL.p2 : ""),
                    children: j()
                })
            }
        }
        return null != _ ? (0, n.jsx)("div", {
            className: eL.Zj,
            children: C(_)
        }) : (0, n.jsx)("div", {
            className: x?.type === d.R.AVATAR_DECORATION ? eL.RA : eL.Ak,
            children: j()
        })
    },
    ez = e => {
        let {
            user: t
        } = e, r = (e => {
            let {
                author: t
            } = e;
            return (0, C.rh)({
                ...(0, N.Ay)({
                    author: t,
                    channelId: "1337",
                    content: ew.intl.string(ew.t.d5YwK5)
                }),
                state: eO.cmJ.SENT,
                id: "0"
            })
        })({
            author: t
        });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": ew.intl.string(ew.t["TN+ZvB"]),
            children: (0, n.jsx)(x.M1G, {
                children: (0, n.jsxs)(x.ZpM, {
                    className: eL.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(I.A, {
                        className: eL.G5,
                        author: (0, b.p_)(r),
                        message: r
                    }, r.id), (0, n.jsxs)("div", {
                        className: eL.lG,
                        children: [(0, n.jsx)(x.U1e, {
                            size: "md",
                            color: "currentColor",
                            className: eL.hq
                        }), (0, n.jsx)(x.nm2, {
                            size: "md",
                            color: "currentColor",
                            className: eL.hq
                        })]
                    })]
                })
            })
        })
    },
    eW = e => {
        let {
            transitionState: t,
            onClose: r,
            product: s,
            category: l,
            returnRef: p,
            analyticsSource: h,
            analyticsLocations: f,
            shouldCheckoutWithOrbs: v,
            tab: j,
            giftRecipient: C,
            giftingOrigin: N
        } = e, b = (0, m.bG)([L.default], () => L.default.getCurrentUser()), I = (0, eT.f)(s), {
            previewingVariantIndex: R
        } = I, T = (0, F.Q)(s), E = (0, eN.q)(s, R), y = (0, Q.rb)(s, T);
        o()(null != y, "Selected product should not be null");
        let {
            analyticsLocations: P
        } = (0, _.Ay)([...f, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.Yr)(y.skuId);
        let O = (0, eI.U1)(l);
        i.useEffect(() => {
            null != b && (0, k.A)(b.id, b.getAvatarURL(void 0, 80))
        }, [b]);
        let S = i.useMemo(() => (0, z.V6)(s.type, s.skuId), [s.type, s.skuId]);
        i.useEffect(() => {
            B.default.track(eO.HAw.OPEN_MODAL, {
                type: eO.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: P,
                sku_id: y.skuId,
                product_type: S
            }), (0, D.RD)(y.skuId)
        }, [h, P, y.skuId, S]);
        let {
            cardId: M,
            sessionId: U,
            tilePosition: V
        } = (0, G.uM)() ?? {};
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: y.skuId,
                card_id: M,
                shop_session_id: U,
                position_in_section: V,
                product_sku_ids: (0, Q.B1)(s) ? s.variants.map(e => e.skuId) : [s.skuId],
                location_stack: P
            }
        });
        let H = (0, w.o6)(),
            W = t === x.ip4.EXITING,
            $ = (0, eb.$R)(s),
            q = $?.amount,
            K = null != q && ($?.discountId === ek.eR || $?.discountId === ek.Qz),
            J = i.useMemo(() => (0, z.aw)(y) ? y.items.length : 0, [y]),
            {
                activeSlide: Y,
                isTransitioning: Z
            } = (0, er.X)({
                slideCount: J,
                intervalMs: 5e3
            });
        return null == b ? null : (0, n.jsx)(_.f5, {
            value: P,
            children: (0, n.jsxs)(x.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eL.CR,
                returnRef: p,
                transitionState: t,
                size: x.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, n.jsxs)(x.$mQ, {
                    "data-migration-pending": !0,
                    className: eL.jE,
                    children: [(0, n.jsx)(eD, {
                        user: b,
                        product: s,
                        category: l,
                        onClose: r,
                        previewingVariantIndexProps: I,
                        selectedVariantIndex: T,
                        shouldCheckoutWithOrbs: v,
                        tab: j,
                        activeBundleSlide: Y,
                        giftRecipient: C,
                        giftingOrigin: N
                    }), (0, n.jsxs)("div", {
                        className: a()(eL.i1, y.skuId === u.j.PREMIUM_TIER_2_3_DAY ? eL.bF : y.type === d.R.AVATAR_DECORATION ? eL.Jq : eL.eF),
                        style: {
                            backgroundImage: `url(${O})`
                        },
                        children: [(0, eP.pQ)(s.skuId) ? s.skuId === eP.Dp.ORB_PROFILE_BADGE ? H || W ? null : (0, n.jsx)(ex.z, {
                            user: b
                        }) : s.skuId === u.j.PREMIUM_TIER_2_3_DAY ? (0, n.jsx)(eh.I, {}) : (0, n.jsx)(e_.B, {
                            product: s,
                            className: eL.Ms
                        }) : (0, n.jsx)(eF, {
                            user: b,
                            product: E ?? y,
                            activeBundleSlide: Y,
                            isTransitioning: Z
                        }), (0, n.jsxs)("div", {
                            className: eL.VG,
                            children: [(0, n.jsx)(ej.R, {
                                product: s,
                                selectedVariantIndex: T,
                                variant: "overlay-secondary",
                                size: "sm"
                            }), (0, n.jsx)(ei.V, {
                                skuId: y.skuId,
                                tab: j
                            }), (0, n.jsx)(x.K0, {
                                "aria-label": ew.intl.string(ew.t.cpT0Cq),
                                onClick: r,
                                icon: x.d$L,
                                variant: "overlay-secondary",
                                size: "sm"
                            })]
                        })]
                    })]
                }), K && (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(x.jlY, {
                        "data-migration-pending": !0,
                        className: eL.Hx,
                        children: [(0, n.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                            alt: "",
                            className: eL.OC
                        }), (0, n.jsxs)("div", {
                            className: eL.do,
                            children: [(0, n.jsx)(x.Text, {
                                variant: "text-sm/semibold",
                                className: eL.Q2,
                                children: ew.intl.format(ew.t["78ph4b"], {
                                    discountOfferAmount: q
                                })
                            }), $?.expiresAt != null && (0, n.jsx)(es.e, {
                                endDate: $.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }