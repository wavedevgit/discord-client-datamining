/** chunk id: 929400 params = (module,exports,require) **/
n.d(t, {
    default: () => eq
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    c = n.n(l),
    o = n(110259),
    d = n(575593),
    u = n(334279),
    m = n(417597),
    _ = n(990078),
    p = n(582754),
    h = n(397927),
    x = n(736653),
    f = n(775602),
    g = n(793574),
    v = n(688810),
    A = n(139286),
    C = n(262295),
    j = n(141468),
    I = n(963852),
    T = n(763754),
    N = n(20851),
    R = n(44120),
    b = n(725807),
    E = n(287070),
    k = n(101058),
    O = n(84540),
    y = n(836602),
    P = n(576622),
    S = n(761705),
    L = n(270051),
    w = n(652165),
    B = n(287809),
    M = n(954571),
    U = n(975571),
    D = n(927578),
    H = n(580630),
    F = n(979286),
    G = n(440938),
    V = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(640634),
    J = n(940980),
    q = n(495565),
    K = n(740076),
    Y = n(466459),
    Z = n(442759),
    X = n(966619),
    Q = n(780898),
    ee = n(512213),
    et = n(139136),
    en = n(623373),
    ea = n(660653),
    er = n(536572),
    ei = n(778992),
    es = n(49620),
    el = n(586445),
    ec = n(854818),
    eo = n(177366),
    ed = n(11606),
    eu = n(203312),
    em = n(878112),
    e_ = n(501664),
    ep = n(882342),
    eh = n(572595),
    ex = n(641405),
    ef = n(812016),
    eg = n(184659),
    ev = n(561769),
    eA = n(63574),
    eC = n(364616),
    ej = n(846957),
    eI = n(293477),
    eT = n(139146),
    eN = n(929283),
    eR = n(827066),
    eb = n(525723),
    eE = n(212407),
    ek = n(347722),
    eO = n(935094),
    ey = n(57020),
    eP = n(61750),
    eS = n(758836),
    eL = n(652215),
    ew = n(788868),
    eB = n(818348),
    eM = n(985018),
    eU = n(127157);
let eD = e => {
        let {
            item: t,
            product: n,
            user: i
        } = e, s = r.useRef(null), l = (0, W.aw)(n), {
            firstAvatarDecoration: c
        } = (0, Z.f5)(n);
        return t.type === d.R.AVATAR_DECORATION ? (0, a.jsx)("div", {
            className: l ? eU.X2 : eU.h1,
            children: (0, a.jsx)(eN.i, {
                user: i,
                item: t,
                isHighlighted: !0
            })
        }) : t.type === d.R.PROFILE_EFFECT ? (0, a.jsx)("div", {
            className: l ? eU.ME : eU.sm,
            ref: s,
            children: (0, a.jsx)(et.A, {
                skuId: t.skuId,
                removeSetHeight: !0,
                isHighlighted: !0,
                delayProfileEffectIntro: !0
            })
        }) : t.type === d.R.NAMEPLATE ? (0, a.jsx)("div", {
            ref: s,
            className: eU.Dz,
            children: (0, a.jsx)(ee.A, {
                className: eU.M4,
                nameplate: t,
                user: i,
                nameplatePreviewSize: "large",
                pendingAvatarDecoration: c,
                isHighlighted: !0
            })
        }) : null
    },
    eH = e => {
        let {
            product: t,
            user: n,
            activeSlide: r = 0
        } = e, i = t.items.length;
        return (0, a.jsx)("div", {
            className: eU.g4,
            children: (0, a.jsx)(h.tN_, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let s = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        c = `(${r+1}/${i})`;
                    return (0, a.jsx)(h.q7S, {
                        id: s,
                        children: (0, a.jsxs)("div", {
                            className: eU.Kg,
                            children: [(0, a.jsx)(eD, {
                                item: e,
                                product: t,
                                user: n
                            }), (0, a.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: eU.gx,
                                children: [l?.name, " ", c]
                            })]
                        })
                    }, s)
                })
            })
        })
    },
    eF = e => {
        let {
            product: t,
            user: n,
            activeSlide: r
        } = e;
        return (0, W.aw)(t) ? (0, a.jsx)(eH, {
            product: t,
            user: n,
            activeSlide: r
        }) : (0, eS.pQ)(t.skuId) ? (0, a.jsx)(ej.B, {
            animationState: "on_hover",
            product: t
        }) : t.items.length > 0 ? (0, a.jsx)(eD, {
            item: t.items[0],
            product: t,
            user: n
        }) : null
    },
    eG = e => {
        let {
            skuId: t
        } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY ? (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            className: eU.CU,
            children: eM.intl.format(eM.t.Q1scdE, {
                helpdeskArticle: U.A.getArticleURL(eL.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }) : null
    },
    eV = e => {
        let {
            product: t,
            user: n,
            category: i,
            shouldCheckoutWithOrbs: l,
            tab: o,
            onClose: u,
            returnRef: f,
            previewingVariantIndexProps: g,
            selectedVariantIndex: A,
            activeBundleSlide: C,
            giftRecipient: j,
            giftingOrigin: I,
            onTrackClick: T
        } = e, {
            analyticsLocations: N
        } = (0, v.Ay)(), {
            cardId: E,
            sessionId: k,
            tilePosition: y
        } = (0, G.uM)() ?? {}, P = D.Ay.canUseCollectibles(n), {
            previewingVariantIndex: B,
            handleEntering: M,
            handleLeaving: U
        } = g, z = (0, eR.q)(t, B), X = (0, en.rb)(t, A);
        c()(null != X, "Selected product should not be null");
        let Q = (0, Y.h)(t),
            {
                isPurchased: ee,
                isPartiallyOwnedBundle: et
            } = (0, Y.h)(X),
            {
                isDisabled: ea,
                disabledReason: ei
            } = (0, K.I)(X.skuId),
            el = (0, W.Zu)({
                product: X,
                isPartiallyOwnedBundle: et,
                isPurchased: ee
            }),
            ec = (0, m.bG)([V.A], () => V.A.isClaiming === X?.skuId),
            eo = (0, x.Ay)(),
            ef = (0, p.Mw)(eo),
            eg = (0, W.G0)(X),
            ej = (0, W.yt)(X, eL.lid.DEFAULT),
            eT = ej?.amount === 0,
            {
                firstAvatarDecoration: eN
            } = (0, Z.f5)(z ?? X),
            eE = r.useMemo(() => (0, W.fT)(X, P), [X, P]),
            eO = (0, er.VG)(t),
            eD = (0, ek.X)(X),
            {
                enabled: eH
            } = (0, L.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eV = (0, q.r)(X, !1),
            ez = (0, eb.V_)(t),
            eW = null != ez,
            e$ = (t.variants?.length ?? 0) > 8,
            eJ = (0, J.W)("CollectiblesShopProductDetailsModal"),
            eq = o === eS.G2.ORBS && l ? ev.Hi.ORBS : eJ ? ev.Hi.FIAT : void 0,
            eK = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eY,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eX
            } = (0, ey.F)({
                product: X,
                isPremiumUser: P,
                hasDiscountOffer: eW,
                prioritizedCurrency: eq
            }),
            eQ = r.useMemo(() => eY.some(e => e.currency === eB.Yr.DISCORD_ORB), [eY]);
        (0, S.W)({
            disableFetch: !eQ
        });
        let e0 = r.useCallback(() => {
            T(eS.sH.BUY_WITH_FIAT), (0, R.A)({
                skuId: X.skuId,
                analyticsLocations: N,
                onClose: e => e ? u() : (0, eB.tE)()
            })
        }, [N, u, X.skuId, T]);
        return r.useEffect(() => {
            if (null != eN) return (0, O.p)({
                avatarDecoration: eN
            }), () => (0, O.p)({
                avatarDecoration: void 0
            })
        }, [eN]), (0, a.jsxs)("div", {
            className: eU.qA,
            children: [(0, a.jsx)("div", {
                className: eU.gn,
                children: (0, a.jsx)(eu.A, {
                    category: i
                })
            }), (0, a.jsx)(eF, {
                product: z ?? X,
                user: n,
                activeSlide: C
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsxs)("div", {
                    className: eU.h_,
                    children: [(0, a.jsx)(ed.A, {
                        product: X,
                        isDarkText: !ef,
                        isOrbExclusive: eZ
                    }), (0, a.jsx)(h.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eU.v7,
                        children: eO
                    }), (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: eV
                    }), (0, a.jsx)(eG, {
                        skuId: X.skuId
                    }), Q.isPurchased || Q.isPartiallyOwnedBundle ? (0, a.jsx)(es.c, {
                        className: eU.On,
                        isPartiallyPurchased: et
                    }) : eg ? (0, a.jsx)(h.Text, {
                        variant: "text-md/semibold",
                        className: eU.On,
                        children: eM.intl.string(eM.t.rt69oo)
                    }) : eH ? (0, a.jsx)(eI.B, {
                        prices: eY,
                        product: X,
                        isPremiumUser: P,
                        discount: eE,
                        hasSufficientOrbs: eX,
                        isProductDisabled: ea,
                        discountOfferAmount: ez,
                        onTrackClick: T
                    }) : eZ ? null : (0, a.jsxs)("div", {
                        className: eU.pw,
                        children: [(0, a.jsx)(e_.A, {
                            product: X,
                            discount: eE,
                            isPremiumUser: P,
                            hideStrikethroughPrice: !P || eW,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: ez
                        }), P || eW ? null : (0, a.jsx)(ep.A, {
                            product: X,
                            onTrackClick: T
                        })]
                    })]
                }), (0, en.B1)(t) && (0, a.jsx)(h.M1G, {
                    children: (0, a.jsxs)("div", {
                        className: s()(eU.Oj, {
                            [eU.OJ]: e$
                        }),
                        children: [e$ && (0, a.jsx)(eA.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: B,
                            className: eU.L$
                        }), (0, a.jsx)(eC.A, {
                            skuId: t.skuId,
                            onVariantEnter: M,
                            onVariantExit: U,
                            wrap: !0
                        }), !e$ && (0, a.jsx)(eA.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: B,
                            className: eU.L$
                        })]
                    })
                }), null !== ei && (0, a.jsx)(h.Text, {
                    variant: "text-xs/normal",
                    className: eU.H$,
                    children: ei
                }), (0, a.jsx)(h.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: (() => {
                        if (eg && !P && !eT) {
                            let e;
                            return e = eM.intl.string(eM.t.sEAnVH), (0, a.jsx)(b.A, {
                                subscriptionTier: ew.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: () => {
                                    T(eS.sH.UNLOCK_WITH_NITRO), (0, eh.M)()
                                },
                                onSubscribeModalClose: () => {
                                    (0, eh.t)({
                                        product: X,
                                        category: i,
                                        shouldCheckoutWithOrbs: l,
                                        returnRef: f,
                                        analyticsLocations: N,
                                        tab: o,
                                        giftRecipient: j,
                                        giftingOrigin: I,
                                        cardId: E,
                                        sessionId: k,
                                        tilePosition: y
                                    })
                                }
                            })
                        }
                        return el ? ee ? eD ? (0, a.jsxs)(h.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, a.jsx)(ex.A, {
                                product: X,
                                onSuccess: u,
                                onTrackClick: T
                            }), (0, a.jsx)(em.A, {
                                primary: !0,
                                product: X,
                                onSuccess: u,
                                giftRecipient: j,
                                giftingOrigin: I,
                                onTrackClick: T
                            })]
                        }) : (0, a.jsx)(ex.A, {
                            product: X,
                            onSuccess: u,
                            onTrackClick: T
                        }) : eg ? (0, a.jsx)(h.Button, {
                            loading: ec,
                            loadingStartedLabel: eM.intl.string(eM.t["TYw+9s"]),
                            loadingFinishedLabel: eM.intl.string(eM.t.Pg1UP5),
                            onClick: async () => {
                                T(eS.sH.ADD_TO_COLLECTION), await (0, F.iJ)(X.skuId), u(), (0, eP.A)({
                                    product: X,
                                    analyticsLocations: N,
                                    purchaseType: eS.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: eM.intl.string(eM.t.zp6caO),
                            fullWidth: !0
                        }) : (0, a.jsx)(a.Fragment, {
                            children: eY.map((e, t) => {
                                let n, r = 0 === t;
                                if (e.currency === eB.Yr.DISCORD_ORB) {
                                    let t, n, i, s;
                                    return t = ea ? eM.intl.string(eM.t.cTdr3x) : eM.intl.string(eM.t.zqh7ZM), n = !eX || ea, i = eM.intl.formatToPlainString(eM.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), s = n ? `${i}, ${t}` : i, (0, a.jsx)(_.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: n,
                                        "aria-label": !1,
                                        children: (0, a.jsx)(h.Button, {
                                            variant: r ? "primary" : "secondary",
                                            onClick: () => {
                                                T(eS.sH.BUY_WITH_ORBS), (0, w.B4)({
                                                    skuId: X.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, F.gB)(), u(), (0, eP.A)({
                                                            product: X,
                                                            analyticsLocations: N,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: eS.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: N
                                                })
                                            },
                                            disabled: n,
                                            "aria-label": s,
                                            text: eM.intl.format(eK ? eM.t.JC15qj : eM.t.lOtBOI, {
                                                orbPrice: e.amount,
                                                orbIconHook: () => (0, a.jsx)(h.Cp8, {
                                                    className: eU.fN,
                                                    size: "sm",
                                                    color: "currentColor"
                                                })
                                            }),
                                            fullWidth: !0
                                        })
                                    })
                                }
                                return n = (e => {
                                    switch (e.type) {
                                        case d.R.BUNDLE:
                                            return eM.intl.string(eM.t.V1AWw0);
                                        case d.R.PROFILE_EFFECT:
                                            return eM.intl.string(eM.t.kAeDcK);
                                        case d.R.NAMEPLATE:
                                            return eM.intl.string(eM.t.H3vhqU);
                                        case d.R.PROFILE_FRAME:
                                            return eM.intl.string(eM.t.BlSW1e);
                                        case d.R.AVATAR_DECORATION:
                                        default:
                                            return eM.intl.string(eM.t.AQ0Veg)
                                    }
                                })(X), eW ? n = eM.intl.formatToPlainString(eM.t["5U5RB5"], {
                                    discountOfferAmount: ez
                                }) : eH && (n = eM.intl.formatToPlainString(eM.t["cNSL/j"], {
                                    price: (0, H.$g)(e.amount, e.currency)
                                })), (0, a.jsxs)(h.ButtonGroup, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [(0, a.jsx)(h.Button, {
                                        variant: r ? "primary" : "secondary",
                                        onClick: e0,
                                        text: n,
                                        fullWidth: !0
                                    }), eD && (0, a.jsx)(em.A, {
                                        primary: r,
                                        product: X,
                                        onSuccess: u,
                                        giftRecipient: j,
                                        giftingOrigin: I,
                                        onTrackClick: T
                                    })]
                                })
                            })
                        }) : eD ? (0, a.jsx)(em.A, {
                            primary: !0,
                            product: X,
                            onSuccess: u,
                            fullWidth: !0,
                            giftRecipient: j,
                            giftingOrigin: I,
                            onTrackClick: T
                        }) : null
                    })()
                }), (0, a.jsx)(h.Text, {
                    className: s()(eU.ed, !ef && eU.un),
                    variant: "text-xxs/normal",
                    children: eg && !ee ? eM.intl.string(eM.t.nKdAlO) : null
                })]
            })]
        })
    },
    ez = e => {
        let {
            user: t,
            innerClassName: n
        } = e;
        return (0, a.jsx)("div", {
            className: eU.mV,
            children: (0, a.jsx)(C.A, {
                avatar: (0, a.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE
                }),
                name: t.name,
                innerClassName: s()(eU.$L, n)
            })
        })
    },
    eW = e => {
        let {
            user: t,
            nameplate: n,
            avatarDecoration: r
        } = e, i = (0, Q.Ov)();
        return (0, a.jsx)("div", {
            className: eU.nJ,
            role: "img",
            "aria-label": eM.intl.string(eM.t.SZeUdR),
            children: (0, a.jsxs)(h.M1G, {
                children: [(0, a.jsx)(ez, {
                    user: i.mallow,
                    innerClassName: eU.ab
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/semibold",
                    className: eU.OS,
                    children: [eM.intl.string(eM.t["yzW/fZ"]), " - 3"]
                }), (0, a.jsx)(ez, {
                    user: i.phibi,
                    innerClassName: eU.e9
                }), (0, a.jsx)("div", {
                    className: eU.mV,
                    children: (0, a.jsx)(ee.A, {
                        className: eU.M4,
                        innerClassName: eU.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: r
                    })
                }), (0, a.jsx)(ez, {
                    user: i.locke,
                    innerClassName: eU.e9
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/semibold",
                    className: eU.OS,
                    children: [eM.intl.string(eM.t["NG43/6"]), " - 12"]
                }), (0, a.jsx)(ez, {
                    user: i.boom,
                    innerClassName: eU.bD
                }), (0, a.jsx)(ez, {
                    user: i.cherry,
                    innerClassName: eU.bD
                })]
            })
        })
    },
    e$ = e => {
        let {
            product: t,
            user: n,
            activeBundleSlide: r,
            isTransitioning: i
        } = e, l = (0, m.bG)([f.A], () => f.A.useReducedMotion), c = D.Ay.canUsePremiumProfileCustomization(n), {
            pendingAvatar: o,
            ...u
        } = (0, m.cf)([y.A], () => y.A.getPendingChanges()), _ = (0, k.V7)({
            userId: n.id,
            image: o
        }), p = t.type === d.R.AVATAR_DECORATION, [h] = t.items, {
            firstAvatarDecoration: x,
            firstProfileEffect: g,
            firstNameplate: v
        } = (0, Z.f5)(t), A = null != g, C = () => (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(E.A, {
                ...u,
                pendingAvatar: _,
                user: n,
                canUsePremiumCustomization: c,
                pendingAvatarDecoration: x,
                pendingProfileEffect: g,
                disabledInputs: !0,
                hideMessageInput: !A,
                hideCustomStatus: !0,
                hideBioSection: p,
                hideExampleButton: !0,
                interactive: !1
            }), p && (0, a.jsx)(eJ, {
                user: n
            })]
        }), j = e => (0, a.jsx)(eW, {
            user: n,
            nameplate: e,
            avatarDecoration: x
        });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ea.Wb)(t)) return (0, a.jsx)("div", {
                className: eU.RA,
                children: (0, a.jsx)("div", {
                    className: eU.bo,
                    children: C()
                })
            });
            {
                let e = r ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE ? (0, a.jsx)("div", {
                    className: s()(eU.Zj, i && o ? eU.p2 : ""),
                    children: j(n)
                }) : (0, a.jsx)("div", {
                    className: s()(eU.Ak, i && o ? eU.p2 : ""),
                    children: C()
                })
            }
        }
        return null != v ? (0, a.jsx)("div", {
            className: eU.Zj,
            children: j(v)
        }) : (0, a.jsx)("div", {
            className: h?.type === d.R.AVATAR_DECORATION ? eU.RA : eU.Ak,
            children: C()
        })
    },
    eJ = e => {
        let {
            user: t
        } = e, n = (e => {
            let {
                author: t
            } = e;
            return (0, j.rh)({
                ...(0, I.Ay)({
                    author: t,
                    channelId: "1337",
                    content: eM.intl.string(eM.t.d5YwK5)
                }),
                state: eL.cmJ.SENT,
                id: "0"
            })
        })({
            author: t
        });
        return (0, a.jsx)("div", {
            role: "img",
            "aria-label": eM.intl.string(eM.t["TN+ZvB"]),
            children: (0, a.jsx)(h.M1G, {
                children: (0, a.jsxs)(h.ZpM, {
                    className: eU.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [(0, a.jsx)(N.A, {
                        className: eU.G5,
                        author: (0, T.p_)(n),
                        message: n
                    }, n.id), (0, a.jsxs)("div", {
                        className: eU.lG,
                        children: [(0, a.jsx)(h.U1e, {
                            size: "md",
                            color: "currentColor",
                            className: eU.hq
                        }), (0, a.jsx)(h.nm2, {
                            size: "md",
                            color: "currentColor",
                            className: eU.hq
                        })]
                    })]
                })
            })
        })
    },
    eq = e => {
        let {
            transitionState: t,
            onClose: n,
            product: i,
            category: l,
            returnRef: _,
            analyticsSource: p,
            analyticsLocations: x,
            shouldCheckoutWithOrbs: f,
            tab: C,
            giftRecipient: j,
            giftingOrigin: I
        } = e, T = (0, m.bG)([B.default], () => B.default.getCurrentUser()), N = (0, eO.f)(i), {
            previewingVariantIndex: R
        } = N, b = (0, z.Q)(i), E = (0, eR.q)(i, R), k = (0, en.rb)(i, b);
        c()(null != k, "Selected product should not be null");
        let {
            analyticsLocations: O
        } = (0, v.Ay)([...x, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eo.Yr)(k.skuId);
        let y = (0, eE.U1)(l);
        r.useEffect(() => {
            null != T && (0, P.A)(T.id, T.getAvatarURL(void 0, 80))
        }, [T]);
        let S = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            M.default.track(eL.HAw.OPEN_MODAL, {
                type: eL.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: O,
                sku_id: k.skuId,
                product_type: S
            }), (0, F.RD)(k.skuId)
        }, [p, O, k.skuId, S]);
        let {
            cardId: L,
            sessionId: U,
            tilePosition: D
        } = (0, G.uM)() ?? {}, H = r.useMemo(() => (0, en.v8)(i), [i]), V = (0, X.R)({
            skuId: k.skuId,
            productSkuIds: H,
            analyticsLocations: O
        });
        (0, A.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: k.skuId,
                card_id: L,
                shop_session_id: U,
                position_in_section: D,
                product_sku_ids: H,
                location_stack: O
            }
        });
        let $ = (0, w.o6)(),
            J = t === h.ip4.EXITING,
            q = (0, eb.$R)(i),
            K = q?.amount,
            Y = null != K && (q?.discountId === ew.eR || q?.discountId === ew.Qz),
            Z = r.useMemo(() => (0, W.aw)(k) ? k.items.length : 0, [k]),
            {
                activeSlide: Q,
                isTransitioning: ee
            } = (0, ei.X)({
                slideCount: Z,
                intervalMs: 5e3
            });
        return null == T ? null : (0, a.jsx)(v.f5, {
            value: O,
            children: (0, a.jsxs)(h.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eU.CR,
                returnRef: _,
                transitionState: t,
                size: h.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, a.jsxs)(h.$mQ, {
                    "data-migration-pending": !0,
                    className: eU.jE,
                    children: [(0, a.jsx)(eV, {
                        user: T,
                        product: i,
                        category: l,
                        onClose: n,
                        previewingVariantIndexProps: N,
                        selectedVariantIndex: b,
                        shouldCheckoutWithOrbs: f,
                        tab: C,
                        activeBundleSlide: Q,
                        giftRecipient: j?.id !== T.id ? j : void 0,
                        giftingOrigin: j?.id !== T.id ? I : void 0,
                        onTrackClick: V
                    }), (0, a.jsxs)("div", {
                        className: s()(eU.i1, k.skuId === u.j.PREMIUM_TIER_2_3_DAY ? eU.bF : k.type === d.R.AVATAR_DECORATION ? eU.Jq : eU.eF),
                        style: {
                            backgroundImage: `url(${y})`
                        },
                        children: [(0, eS.pQ)(i.skuId) ? i.skuId === eS.Dp.ORB_PROFILE_BADGE ? $ || J ? null : (0, a.jsx)(eg.z, {
                            user: T
                        }) : i.skuId === u.j.PREMIUM_TIER_2_3_DAY ? (0, a.jsx)(ef.I, {}) : (0, a.jsx)(ej.B, {
                            product: i,
                            className: eU.Ms
                        }) : (0, a.jsx)(e$, {
                            user: T,
                            product: E ?? k,
                            activeBundleSlide: Q,
                            isTransitioning: ee
                        }), (0, a.jsxs)("div", {
                            className: eU.VG,
                            children: [(0, a.jsx)(eT.R, {
                                product: i,
                                selectedVariantIndex: b,
                                variant: "overlay-secondary",
                                size: "sm",
                                onTrackClick: V
                            }), (0, a.jsx)(el.V, {
                                skuId: k.skuId,
                                tab: C,
                                onTrackClick: V
                            }), (0, a.jsx)(h.K0, {
                                "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                onClick: () => {
                                    V(eS.sH.CLOSE_DETAIL), n()
                                },
                                icon: h.d$L,
                                variant: "overlay-secondary",
                                size: "sm"
                            })]
                        })]
                    })]
                }), Y && (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(h.jlY, {
                        "data-migration-pending": !0,
                        className: eU.Hx,
                        children: [(0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                            alt: "",
                            className: eU.OC
                        }), (0, a.jsxs)("div", {
                            className: eU.do,
                            children: [(0, a.jsx)(h.Text, {
                                variant: "text-sm/semibold",
                                className: eU.Q2,
                                children: eM.intl.format(eM.t["78ph4b"], {
                                    discountOfferAmount: K
                                })
                            }), q?.expiresAt != null && (0, a.jsx)(ec.e, {
                                endDate: q.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }