/** chunk id: 929400 params = (module,exports,require) **/
n.d(t, {
    default: () => eq
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    o = n.n(l),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    m = n(417597),
    p = n(990078),
    _ = n(582754),
    h = n(397927),
    x = n(736653),
    f = n(775602),
    g = n(793574),
    v = n(688810),
    A = n(139286),
    C = n(262295),
    I = n(141468),
    j = n(963852),
    T = n(763754),
    b = n(20851),
    N = n(44120),
    R = n(725807),
    k = n(287070),
    E = n(101058),
    y = n(84540),
    O = n(836602),
    S = n(576622),
    P = n(761705),
    L = n(270051),
    w = n(652165),
    B = n(287809),
    M = n(954571),
    U = n(975571),
    D = n(927578),
    V = n(580630),
    H = n(979286),
    G = n(440938),
    F = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(640634),
    K = n(940980),
    q = n(495565),
    J = n(740076),
    Y = n(466459),
    Z = n(442759),
    Q = n(966619),
    X = n(780898),
    ee = n(512213),
    et = n(139136),
    en = n(623373),
    ea = n(660653),
    er = n(536572),
    ei = n(778992),
    es = n(49620),
    el = n(586445),
    eo = n(854818),
    ec = n(177366),
    ed = n(11606),
    eu = n(203312),
    em = n(878112),
    ep = n(501664),
    e_ = n(882342),
    eh = n(572595),
    ex = n(641405),
    ef = n(812016),
    eg = n(184659),
    ev = n(561769),
    eA = n(63574),
    eC = n(364616),
    eI = n(846957),
    ej = n(293477),
    eT = n(139146),
    eb = n(929283),
    eN = n(827066),
    eR = n(525723),
    ek = n(212407),
    eE = n(347722),
    ey = n(935094),
    eO = n(57020),
    eS = n(61750),
    eP = n(758836),
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
            firstAvatarDecoration: o
        } = (0, Z.f5)(n);
        return t.type === d.R.AVATAR_DECORATION ? (0, a.jsx)("div", {
            className: l ? eU.X2 : eU.h1,
            children: (0, a.jsx)(eb.i, {
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
                pendingAvatarDecoration: o,
                isHighlighted: !0
            })
        }) : null
    },
    eV = e => {
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
                        o = `(${r+1}/${i})`;
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
                                children: [l?.name, " ", o]
                            })]
                        })
                    }, s)
                })
            })
        })
    },
    eH = e => {
        let {
            product: t,
            user: n,
            activeSlide: r
        } = e;
        return (0, W.aw)(t) ? (0, a.jsx)(eV, {
            product: t,
            user: n,
            activeSlide: r
        }) : (0, eP.pQ)(t.skuId) ? (0, a.jsx)(eI.B, {
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
    eF = e => {
        let {
            product: t,
            user: n,
            category: i,
            shouldCheckoutWithOrbs: l,
            tab: c,
            onClose: u,
            returnRef: f,
            previewingVariantIndexProps: g,
            selectedVariantIndex: A,
            activeBundleSlide: C,
            giftRecipient: I,
            giftingOrigin: j,
            onTrackClick: T
        } = e, {
            analyticsLocations: b
        } = (0, v.Ay)(), {
            cardId: k,
            sessionId: E,
            tilePosition: O
        } = (0, G.uM)() ?? {}, S = D.Ay.canUseCollectibles(n), {
            previewingVariantIndex: B,
            handleEntering: M,
            handleLeaving: U
        } = g, z = (0, eN.q)(t, B), Q = (0, en.rb)(t, A);
        o()(null != Q, "Selected product should not be null");
        let X = (0, Y.h)(t),
            {
                isPurchased: ee,
                isPartiallyOwnedBundle: et
            } = (0, Y.h)(Q),
            {
                isDisabled: ea,
                disabledReason: ei
            } = (0, J.I)(Q.skuId),
            el = (0, W.Zu)({
                product: Q,
                isPartiallyOwnedBundle: et,
                isPurchased: ee
            }),
            eo = (0, m.bG)([F.A], () => F.A.isClaiming === Q?.skuId),
            ec = (0, x.Ay)(),
            ef = (0, _.Mw)(ec),
            eg = (0, W.G0)(Q),
            eI = (0, W.yt)(Q, eL.lid.DEFAULT),
            eT = eI?.amount === 0,
            {
                firstAvatarDecoration: eb
            } = (0, Z.f5)(z ?? Q),
            ek = r.useMemo(() => (0, W.fT)(Q, S), [Q, S]),
            ey = (0, er.VG)(t),
            eD = (0, eE.X)(Q),
            {
                enabled: eV
            } = (0, L.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eF = (0, q.r)(Q, !1),
            ez = (0, eR.V_)(t),
            eW = null != ez,
            e$ = (t.variants?.length ?? 0) > 8,
            eK = (0, K.W)("CollectiblesShopProductDetailsModal"),
            eq = c === eP.G2.ORBS && l ? ev.Hi.ORBS : eK ? ev.Hi.FIAT : void 0,
            eJ = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eY,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eQ
            } = (0, eO.F)({
                product: Q,
                isPremiumUser: S,
                hasDiscountOffer: eW,
                prioritizedCurrency: eq
            }),
            eX = r.useMemo(() => eY.some(e => e.currency === eB.Yr.DISCORD_ORB), [eY]);
        (0, P.W)({
            disableFetch: !eX
        });
        let e0 = r.useCallback(() => {
            T(eP.sH.BUY_WITH_FIAT), (0, N.A)({
                skuId: Q.skuId,
                analyticsLocations: b,
                onClose: e => e ? u() : (0, eB.tE)()
            })
        }, [b, u, Q.skuId, T]);
        return r.useEffect(() => {
            if (null != eb) return (0, y.p)({
                avatarDecoration: eb
            }), () => (0, y.p)({
                avatarDecoration: void 0
            })
        }, [eb]), (0, a.jsxs)("div", {
            className: eU.qA,
            children: [(0, a.jsx)("div", {
                className: eU.gn,
                children: (0, a.jsx)(eu.A, {
                    category: i
                })
            }), (0, a.jsx)(eH, {
                product: z ?? Q,
                user: n,
                activeSlide: C
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsxs)("div", {
                    className: eU.h_,
                    children: [(0, a.jsx)(ed.A, {
                        product: Q,
                        isDarkText: !ef,
                        isOrbExclusive: eZ
                    }), (0, a.jsx)(h.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eU.v7,
                        children: ey
                    }), (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: eF
                    }), (0, a.jsx)(eG, {
                        skuId: Q.skuId
                    }), X.isPurchased || X.isPartiallyOwnedBundle ? (0, a.jsx)(es.c, {
                        className: eU.On,
                        isPartiallyPurchased: et
                    }) : eg ? (0, a.jsx)(h.Text, {
                        variant: "text-md/semibold",
                        className: eU.On,
                        children: eM.intl.string(eM.t.rt69oo)
                    }) : eV ? (0, a.jsx)(ej.B, {
                        prices: eY,
                        product: Q,
                        isPremiumUser: S,
                        discount: ek,
                        hasSufficientOrbs: eQ,
                        isProductDisabled: ea,
                        discountOfferAmount: ez,
                        onTrackClick: T
                    }) : eZ ? null : (0, a.jsxs)("div", {
                        className: eU.pw,
                        children: [(0, a.jsx)(ep.A, {
                            product: Q,
                            discount: ek,
                            isPremiumUser: S,
                            hideStrikethroughPrice: !S || eW,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: ez
                        }), S || eW ? null : (0, a.jsx)(e_.A, {
                            product: Q,
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
                        if (eg && !S && !eT) {
                            let e;
                            return e = eM.intl.string(eM.t.sEAnVH), (0, a.jsx)(R.A, {
                                subscriptionTier: ew.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: () => {
                                    T(eP.sH.UNLOCK_WITH_NITRO), (0, eh.M)()
                                },
                                onSubscribeModalClose: () => {
                                    (0, eh.t)({
                                        product: Q,
                                        category: i,
                                        shouldCheckoutWithOrbs: l,
                                        returnRef: f,
                                        analyticsLocations: b,
                                        tab: c,
                                        giftRecipient: I,
                                        giftingOrigin: j,
                                        cardId: k,
                                        sessionId: E,
                                        tilePosition: O
                                    })
                                }
                            })
                        }
                        return el ? ee ? eD ? (0, a.jsxs)(h.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, a.jsx)(ex.A, {
                                product: Q,
                                onSuccess: u,
                                onTrackClick: T
                            }), (0, a.jsx)(em.A, {
                                primary: !0,
                                product: Q,
                                onSuccess: u,
                                giftRecipient: I,
                                giftingOrigin: j,
                                onTrackClick: T
                            })]
                        }) : (0, a.jsx)(ex.A, {
                            product: Q,
                            onSuccess: u,
                            onTrackClick: T
                        }) : eg ? (0, a.jsx)(h.Button, {
                            loading: eo,
                            loadingStartedLabel: eM.intl.string(eM.t["TYw+9s"]),
                            loadingFinishedLabel: eM.intl.string(eM.t.Pg1UP5),
                            onClick: async () => {
                                T(eP.sH.ADD_TO_COLLECTION), await (0, H.iJ)(Q.skuId), u(), (0, eS.A)({
                                    product: Q,
                                    analyticsLocations: b,
                                    purchaseType: eP.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: eM.intl.string(eM.t.zp6caO),
                            fullWidth: !0
                        }) : (0, a.jsx)(a.Fragment, {
                            children: eY.map((e, t) => {
                                let n, r = 0 === t;
                                if (e.currency === eB.Yr.DISCORD_ORB) {
                                    let t, n, i, s;
                                    return t = ea ? eM.intl.string(eM.t.cTdr3x) : eM.intl.string(eM.t.zqh7ZM), n = !eQ || ea, i = eM.intl.formatToPlainString(eM.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), s = n ? `${i}, ${t}` : i, (0, a.jsx)(p.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: n,
                                        "aria-label": !1,
                                        children: (0, a.jsx)(h.Button, {
                                            variant: r ? "primary" : "secondary",
                                            onClick: () => {
                                                T(eP.sH.BUY_WITH_ORBS), (0, w.B4)({
                                                    skuId: Q.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, H.gB)(), u(), (0, eS.A)({
                                                            product: Q,
                                                            analyticsLocations: b,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: eP.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: b
                                                })
                                            },
                                            disabled: n,
                                            "aria-label": s,
                                            text: eM.intl.format(eJ ? eM.t.JC15qj : eM.t.lOtBOI, {
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
                                return n = (0, W.aw)(Q) ? eM.intl.string(eM.t.V1AWw0) : Q.type === d.R.PROFILE_EFFECT ? eM.intl.string(eM.t.kAeDcK) : Q.type === d.R.NAMEPLATE ? eM.intl.string(eM.t.H3vhqU) : eM.intl.string(eM.t.AQ0Veg), eW ? n = eM.intl.formatToPlainString(eM.t["5U5RB5"], {
                                    discountOfferAmount: ez
                                }) : eV && (n = eM.intl.formatToPlainString(eM.t["cNSL/j"], {
                                    price: (0, V.$g)(e.amount, e.currency)
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
                                        product: Q,
                                        onSuccess: u,
                                        giftRecipient: I,
                                        giftingOrigin: j,
                                        onTrackClick: T
                                    })]
                                })
                            })
                        }) : eD ? (0, a.jsx)(em.A, {
                            primary: !0,
                            product: Q,
                            onSuccess: u,
                            fullWidth: !0,
                            giftRecipient: I,
                            giftingOrigin: j,
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
        } = e, i = (0, X.Ov)();
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
        } = e, l = (0, m.bG)([f.A], () => f.A.useReducedMotion), o = D.Ay.canUsePremiumProfileCustomization(n), {
            pendingAvatar: c,
            ...u
        } = (0, m.cf)([O.A], () => O.A.getPendingChanges()), p = (0, E.V7)({
            userId: n.id,
            image: c
        }), _ = t.type === d.R.AVATAR_DECORATION, [h] = t.items, {
            firstAvatarDecoration: x,
            firstProfileEffect: g,
            firstNameplate: v
        } = (0, Z.f5)(t), A = null != g, C = () => (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(k.A, {
                ...u,
                pendingAvatar: p,
                user: n,
                canUsePremiumCustomization: o,
                pendingAvatarDecoration: x,
                pendingProfileEffect: g,
                disabledInputs: !0,
                hideMessageInput: !A,
                hideCustomStatus: !0,
                hideBioSection: _,
                hideExampleButton: !0,
                interactive: !1
            }), _ && (0, a.jsx)(eK, {
                user: n
            })]
        }), I = e => (0, a.jsx)(eW, {
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
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE ? (0, a.jsx)("div", {
                    className: s()(eU.Zj, i && c ? eU.p2 : ""),
                    children: I(n)
                }) : (0, a.jsx)("div", {
                    className: s()(eU.Ak, i && c ? eU.p2 : ""),
                    children: C()
                })
            }
        }
        return null != v ? (0, a.jsx)("div", {
            className: eU.Zj,
            children: I(v)
        }) : (0, a.jsx)("div", {
            className: h?.type === d.R.AVATAR_DECORATION ? eU.RA : eU.Ak,
            children: C()
        })
    },
    eK = e => {
        let {
            user: t
        } = e, n = (e => {
            let {
                author: t
            } = e;
            return (0, I.rh)({
                ...(0, j.Ay)({
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
                    children: [(0, a.jsx)(b.A, {
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
            returnRef: p,
            analyticsSource: _,
            analyticsLocations: x,
            shouldCheckoutWithOrbs: f,
            tab: C,
            giftRecipient: I,
            giftingOrigin: j
        } = e, T = (0, m.bG)([B.default], () => B.default.getCurrentUser()), b = (0, ey.f)(i), {
            previewingVariantIndex: N
        } = b, R = (0, z.Q)(i), k = (0, eN.q)(i, N), E = (0, en.rb)(i, R);
        o()(null != E, "Selected product should not be null");
        let {
            analyticsLocations: y
        } = (0, v.Ay)([...x, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ec.Yr)(E.skuId);
        let O = (0, ek.U1)(l);
        r.useEffect(() => {
            null != T && (0, S.A)(T.id, T.getAvatarURL(void 0, 80))
        }, [T]);
        let P = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            M.default.track(eL.HAw.OPEN_MODAL, {
                type: eL.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: _,
                location_stack: y,
                sku_id: E.skuId,
                product_type: P
            }), (0, H.RD)(E.skuId)
        }, [_, y, E.skuId, P]);
        let {
            cardId: L,
            sessionId: U,
            tilePosition: D
        } = (0, G.uM)() ?? {}, V = r.useMemo(() => (0, en.v8)(i), [i]), F = (0, Q.R)({
            skuId: E.skuId,
            productSkuIds: V,
            analyticsLocations: y
        });
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: E.skuId,
                card_id: L,
                shop_session_id: U,
                position_in_section: D,
                product_sku_ids: V,
                location_stack: y
            }
        });
        let $ = (0, w.o6)(),
            K = t === h.ip4.EXITING,
            q = (0, eR.$R)(i),
            J = q?.amount,
            Y = null != J && (q?.discountId === ew.eR || q?.discountId === ew.Qz),
            Z = r.useMemo(() => (0, W.aw)(E) ? E.items.length : 0, [E]),
            {
                activeSlide: X,
                isTransitioning: ee
            } = (0, ei.X)({
                slideCount: Z,
                intervalMs: 5e3
            });
        return null == T ? null : (0, a.jsx)(v.f5, {
            value: y,
            children: (0, a.jsxs)(h.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eU.CR,
                returnRef: p,
                transitionState: t,
                size: h.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, a.jsxs)(h.$mQ, {
                    "data-migration-pending": !0,
                    className: eU.jE,
                    children: [(0, a.jsx)(eF, {
                        user: T,
                        product: i,
                        category: l,
                        onClose: n,
                        previewingVariantIndexProps: b,
                        selectedVariantIndex: R,
                        shouldCheckoutWithOrbs: f,
                        tab: C,
                        activeBundleSlide: X,
                        giftRecipient: I?.id !== T.id ? I : void 0,
                        giftingOrigin: I?.id !== T.id ? j : void 0,
                        onTrackClick: F
                    }), (0, a.jsxs)("div", {
                        className: s()(eU.i1, E.skuId === u.j.PREMIUM_TIER_2_3_DAY ? eU.bF : E.type === d.R.AVATAR_DECORATION ? eU.Jq : eU.eF),
                        style: {
                            backgroundImage: `url(${O})`
                        },
                        children: [(0, eP.pQ)(i.skuId) ? i.skuId === eP.Dp.ORB_PROFILE_BADGE ? $ || K ? null : (0, a.jsx)(eg.z, {
                            user: T
                        }) : i.skuId === u.j.PREMIUM_TIER_2_3_DAY ? (0, a.jsx)(ef.I, {}) : (0, a.jsx)(eI.B, {
                            product: i,
                            className: eU.Ms
                        }) : (0, a.jsx)(e$, {
                            user: T,
                            product: k ?? E,
                            activeBundleSlide: X,
                            isTransitioning: ee
                        }), (0, a.jsxs)("div", {
                            className: eU.VG,
                            children: [(0, a.jsx)(eT.R, {
                                product: i,
                                selectedVariantIndex: R,
                                variant: "overlay-secondary",
                                size: "sm",
                                onTrackClick: F
                            }), (0, a.jsx)(el.V, {
                                skuId: E.skuId,
                                tab: C,
                                onTrackClick: F
                            }), (0, a.jsx)(h.K0, {
                                "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                onClick: () => {
                                    F(eP.sH.CLOSE_DETAIL), n()
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
                                    discountOfferAmount: J
                                })
                            }), q?.expiresAt != null && (0, a.jsx)(eo.e, {
                                endDate: q.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }