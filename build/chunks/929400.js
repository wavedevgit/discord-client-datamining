/** chunk id: 929400 params = (module,exports,require) **/
a.d(t, {
    default: () => eH
});
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(284009),
    c = a.n(l),
    o = a(575593),
    d = a(334279),
    u = a(635358),
    m = a(417597),
    p = a(990078),
    _ = a(582754),
    h = a(397927),
    x = a(736653),
    f = a(775602),
    g = a(793574),
    v = a(688810),
    A = a(262295),
    C = a(141468),
    j = a(963852),
    N = a(763754),
    b = a(20851),
    I = a(369496),
    T = a(550111),
    R = a(44120),
    y = a(465794),
    E = a(919395),
    P = a(287070),
    S = a(331402),
    O = a(101058),
    k = a(836602),
    w = a(576622),
    L = a(151252),
    B = a(652165),
    M = a(287809),
    U = a(954571),
    D = a(975571),
    G = a(927578),
    V = a(580630),
    F = a(979286),
    H = a(4227),
    z = a(298072),
    W = a(993408),
    $ = a(940980),
    q = a(495565),
    J = a(740076),
    K = a(466459),
    Z = a(442759),
    Y = a(623373),
    X = a(660653),
    Q = a(536572),
    ee = a(778992),
    et = a(49620),
    ea = a(586445),
    en = a(854818),
    er = a(177366),
    ei = a(11606),
    es = a(203312),
    el = a(878112),
    ec = a(501664),
    eo = a(882342),
    ed = a(572595),
    eu = a(641405),
    em = a(812016),
    ep = a(184659),
    e_ = a(561769),
    eh = a(63574),
    ex = a(364616),
    ef = a(846957),
    eg = a(293477),
    ev = a(139146),
    eA = a(929283),
    eC = a(827066),
    ej = a(525723),
    eN = a(212407),
    eb = a(347722),
    eI = a(935094),
    eT = a(57020),
    eR = a(61750),
    ey = a(758836),
    eE = a(652215),
    eP = a(788868),
    eS = a(818348),
    eO = a(985018),
    ek = a(235980);
let ew = e => {
        let {
            item: t,
            product: a,
            user: i
        } = e, s = r.useRef(null), l = (0, W.aw)(a), {
            firstAvatarDecoration: c
        } = (0, Z.f5)(a);
        return t.type === o.R.AVATAR_DECORATION ? (0, n.jsx)("div", {
            className: l ? ek.X2 : ek.h1,
            children: (0, n.jsx)(eA.i, {
                user: i,
                item: t,
                isHighlighted: !0
            })
        }) : t.type === o.R.PROFILE_EFFECT ? (0, n.jsx)("div", {
            className: l ? ek.ME : ek.sm,
            ref: s,
            children: (0, n.jsx)(S.A, {
                skuId: t.skuId,
                removeSetHeight: !0,
                isHighlighted: !0,
                delayProfileEffectIntro: !0
            })
        }) : t.type === o.R.NAMEPLATE ? (0, n.jsx)("div", {
            ref: s,
            className: ek.Dz,
            children: (0, n.jsx)(T.A, {
                className: ek.M4,
                nameplate: t,
                user: i,
                nameplatePreviewSize: "large",
                pendingAvatarDecoration: c,
                isHighlighted: !0
            })
        }) : null
    },
    eL = e => {
        let {
            product: t,
            user: a,
            activeSlide: r = 0
        } = e, i = t.items.length;
        return (0, n.jsx)("div", {
            className: ek.g4,
            children: (0, n.jsx)(h.tN_, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let s = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        c = `(${r+1}/${i})`;
                    return (0, n.jsx)(h.q7S, {
                        id: s,
                        children: (0, n.jsxs)("div", {
                            className: ek.Kg,
                            children: [(0, n.jsx)(ew, {
                                item: e,
                                product: t,
                                user: a
                            }), (0, n.jsxs)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: ek.gx,
                                children: [l?.name, " ", c]
                            })]
                        })
                    }, s)
                })
            })
        })
    },
    eB = e => {
        let {
            product: t,
            user: a,
            activeSlide: r
        } = e;
        return (0, W.aw)(t) ? (0, n.jsx)(eL, {
            product: t,
            user: a,
            activeSlide: r
        }) : (0, ey.pQ)(t.skuId) ? (0, n.jsx)(ef.B, {
            animationState: "on_hover",
            product: t
        }) : t.items.length > 0 ? (0, n.jsx)(ew, {
            item: t.items[0],
            product: t,
            user: a
        }) : null
    },
    eM = e => {
        let {
            skuId: t
        } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY ? (0, n.jsx)(h.Text, {
            variant: "text-sm/normal",
            className: ek.CU,
            children: eO.intl.format(eO.t.Q1scdE, {
                helpdeskArticle: D.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }) : null
    },
    eU = e => {
        let {
            product: t,
            user: a,
            category: i,
            shouldCheckoutWithOrbs: l,
            tab: d,
            onClose: f,
            returnRef: g,
            previewingVariantIndexProps: A,
            selectedVariantIndex: C,
            activeBundleSlide: j
        } = e, {
            analyticsLocations: N
        } = (0, v.Ay)(), b = G.Ay.canUseCollectibles(a), {
            previewingVariantIndex: I,
            handleEntering: T,
            handleLeaving: P
        } = A, S = (0, eC.q)(t, I), O = (0, Y.rb)(t, C);
        c()(null != O, "Selected product should not be null");
        let k = (0, K.h)(t),
            {
                isPurchased: w,
                isPartiallyOwnedBundle: M
            } = (0, K.h)(O),
            {
                isDisabled: U,
                disabledReason: D
            } = (0, J.I)(O.skuId),
            z = (0, W.Zu)({
                product: O,
                isPartiallyOwnedBundle: M,
                isPurchased: w
            }),
            X = (0, m.bG)([H.A], () => H.A.isClaiming === O?.skuId),
            ee = (0, x.Ay)(),
            ea = (0, _.Mw)(ee),
            en = (0, W.G0)(O),
            er = (0, W.yt)(O, eE.lid.DEFAULT),
            em = er?.amount === 0,
            {
                firstAvatarDecoration: ep
            } = (0, Z.f5)(S ?? O),
            ef = r.useMemo(() => (0, W.fT)(O, b), [O, b]),
            ev = (0, Q.VG)(t),
            eA = (0, eb.X)(O),
            {
                enabled: eN
            } = (0, L.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eI = (0, q.r)(O, !1),
            ew = (0, ej.V_)(t),
            eL = null != ew,
            eU = (t.variants?.length ?? 0) > 8,
            eD = (0, $.W)("CollectiblesShopProductDetailsModal"),
            eG = d === ey.G2.ORBS && l ? e_.Hi.ORBS : eD ? e_.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eV,
                isOrbExclusive: eF,
                hasSufficientOrbs: eH
            } = (0, eT.F)({
                product: O,
                isPremiumUser: b,
                hasDiscountOffer: eL,
                prioritizedCurrency: eG
            }),
            ez = r.useCallback(() => (0, R.A)({
                skuId: O.skuId,
                analyticsLocations: N,
                variantsReturnStyle: u.g.VARIANTS_GROUP,
                onClose: e => e ? f() : (0, eS.tE)()
            }), [N, f, O.skuId]);
        return r.useEffect(() => {
            if (null != ep) return (0, E.Dx)(ep), () => (0, E.Dx)(void 0)
        }, [ep]), (0, n.jsxs)("div", {
            className: ek.qA,
            children: [(0, n.jsx)("div", {
                className: ek.gn,
                children: (0, n.jsx)(es.A, {
                    category: i
                })
            }), (0, n.jsx)(eB, {
                product: S ?? O,
                user: a,
                activeSlide: j
            }), (0, n.jsxs)("div", {
                children: [(0, n.jsxs)("div", {
                    className: ek.h_,
                    children: [(0, n.jsx)(ei.A, {
                        product: O,
                        isDarkText: !ea,
                        isOrbExclusive: eF
                    }), (0, n.jsx)(h.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ek.v7,
                        children: ev
                    }), (0, n.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: eI
                    }), (0, n.jsx)(eM, {
                        skuId: O.skuId
                    }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, n.jsx)(et.c, {
                        className: ek.On,
                        isPartiallyPurchased: M
                    }) : en ? (0, n.jsx)(h.Text, {
                        variant: "text-md/semibold",
                        className: ek.On,
                        children: eO.intl.string(eO.t.rt69oo)
                    }) : eN ? (0, n.jsx)(eg.B, {
                        prices: eV,
                        product: O,
                        isPremiumUser: b,
                        discount: ef,
                        hasSufficientOrbs: eH,
                        isProductDisabled: U,
                        discountOfferAmount: ew
                    }) : (0, n.jsxs)("div", {
                        className: ek.pw,
                        children: [(0, n.jsx)(ec.A, {
                            product: O,
                            discount: ef,
                            isPremiumUser: b,
                            hideStrikethroughPrice: !b || eL,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: ew
                        }), b || eL ? null : (0, n.jsx)(eo.A, {
                            product: O
                        })]
                    })]
                }), (0, Y.B1)(t) && (0, n.jsx)(h.M1G, {
                    children: (0, n.jsxs)("div", {
                        className: s()(ek.Oj, {
                            [ek.OJ]: eU
                        }),
                        children: [eU && (0, n.jsx)(eh.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: I,
                            className: ek.L$
                        }), (0, n.jsx)(ex.A, {
                            skuId: t.skuId,
                            onVariantEnter: T,
                            onVariantExit: P,
                            wrap: !0
                        }), !eU && (0, n.jsx)(eh.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: I,
                            className: ek.L$
                        })]
                    })
                }), null !== D && (0, n.jsx)(h.Text, {
                    variant: "text-xs/normal",
                    className: ek.H$,
                    children: D
                }), (0, n.jsx)(h.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: (() => {
                        if (en && !b && !em) {
                            let e;
                            return e = eO.intl.string(eO.t.sEAnVH), (0, n.jsx)(y.A, {
                                subscriptionTier: eP.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: ed.M,
                                onSubscribeModalClose: () => {
                                    (0, ed.t)({
                                        product: O,
                                        category: i,
                                        shouldCheckoutWithOrbs: l,
                                        returnRef: g,
                                        analyticsLocations: N,
                                        tab: d
                                    })
                                }
                            })
                        }
                        return z ? w ? eA ? (0, n.jsxs)(h.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, n.jsx)(eu.A, {
                                product: O,
                                onSuccess: f
                            }), (0, n.jsx)(el.A, {
                                primary: !0,
                                product: O,
                                onSuccess: f
                            })]
                        }) : (0, n.jsx)(eu.A, {
                            product: O,
                            onSuccess: f
                        }) : en ? (0, n.jsx)(h.Button, {
                            loading: X,
                            loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                            loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                            onClick: async () => {
                                await (0, F.iJ)(O.skuId), f(), (0, eR.A)({
                                    product: O,
                                    analyticsLocations: N,
                                    purchaseType: ey.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: eO.intl.string(eO.t.zp6caO),
                            fullWidth: !0
                        }) : (0, n.jsx)(n.Fragment, {
                            children: eV.map((e, t) => {
                                let a, r = 0 === t;
                                if (e.currency === eS.Yr.DISCORD_ORB) {
                                    let t, a, i, s;
                                    return t = U ? eO.intl.string(eO.t.cTdr3x) : eO.intl.string(eO.t.zqh7ZM), a = !eH || U, i = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), s = a ? `${i}, ${t}` : i, (0, n.jsx)(p.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: a,
                                        "aria-label": !1,
                                        children: (0, n.jsx)(h.Button, {
                                            variant: r ? "primary" : "secondary",
                                            onClick: () => {
                                                (0, B.B4)({
                                                    skuId: O.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, F.gB)({
                                                            variantsReturnStyle: u.g.VARIANTS_GROUP
                                                        }), f(), (0, eR.A)({
                                                            product: O,
                                                            analyticsLocations: N,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: ey.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: N
                                                })
                                            },
                                            disabled: a,
                                            "aria-label": s,
                                            text: eO.intl.format(eO.t.lOtBOI, {
                                                orbPrice: e.amount,
                                                orbIconHook: () => (0, n.jsx)(h.Cp8, {
                                                    className: ek.fN,
                                                    size: "sm",
                                                    color: "currentColor"
                                                })
                                            }),
                                            fullWidth: !0
                                        })
                                    })
                                }
                                return a = (0, W.aw)(O) ? eO.intl.string(eO.t.V1AWw0) : O.type === o.R.PROFILE_EFFECT ? eO.intl.string(eO.t.kAeDcK) : O.type === o.R.NAMEPLATE ? eO.intl.string(eO.t.H3vhqU) : eO.intl.string(eO.t.AQ0Veg), eL ? a = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                    discountOfferAmount: ew
                                }) : eN && (a = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                    price: (0, V.$g)(e.amount, e.currency)
                                })), (0, n.jsxs)(h.ButtonGroup, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [(0, n.jsx)(h.Button, {
                                        variant: r ? "primary" : "secondary",
                                        onClick: ez,
                                        text: a,
                                        fullWidth: !0
                                    }), eA && (0, n.jsx)(el.A, {
                                        primary: r,
                                        product: O,
                                        onSuccess: f
                                    })]
                                })
                            })
                        }) : eA ? (0, n.jsx)(el.A, {
                            primary: !0,
                            product: O,
                            onSuccess: f,
                            fullWidth: !0
                        }) : null
                    })()
                }), (0, n.jsx)(h.Text, {
                    className: s()(ek.ed, !ea && ek.un),
                    variant: "text-xxs/normal",
                    children: en && !w ? eO.intl.string(eO.t.nKdAlO) : null
                })]
            })]
        })
    },
    eD = e => {
        let {
            user: t,
            innerClassName: a
        } = e;
        return (0, n.jsx)("div", {
            className: ek.mV,
            children: (0, n.jsx)(A.A, {
                avatar: (0, n.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE
                }),
                name: t.name,
                innerClassName: s()(ek.$L, a)
            })
        })
    },
    eG = e => {
        let {
            user: t,
            nameplate: a,
            avatarDecoration: r
        } = e, i = (0, I.Ov)();
        return (0, n.jsx)("div", {
            className: ek.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, n.jsxs)(h.M1G, {
                children: [(0, n.jsx)(eD, {
                    user: i.mallow,
                    innerClassName: ek.ab
                }), (0, n.jsxs)(h.Text, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"]
                }), (0, n.jsx)(eD, {
                    user: i.phibi,
                    innerClassName: ek.e9
                }), (0, n.jsx)("div", {
                    className: ek.mV,
                    children: (0, n.jsx)(T.A, {
                        className: ek.M4,
                        innerClassName: ek.e9,
                        user: t,
                        nameplate: a,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: r
                    })
                }), (0, n.jsx)(eD, {
                    user: i.locke,
                    innerClassName: ek.e9
                }), (0, n.jsxs)(h.Text, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [eO.intl.string(eO.t["NG43/6"]), " - 12"]
                }), (0, n.jsx)(eD, {
                    user: i.boom,
                    innerClassName: ek.bD
                }), (0, n.jsx)(eD, {
                    user: i.cherry,
                    innerClassName: ek.bD
                })]
            })
        })
    },
    eV = e => {
        let {
            product: t,
            user: a,
            activeBundleSlide: r,
            isTransitioning: i
        } = e, l = (0, m.bG)([f.A], () => f.A.useReducedMotion), c = G.Ay.canUsePremiumProfileCustomization(a), {
            pendingAvatar: d,
            ...u
        } = (0, m.cf)([k.A], () => k.A.getPendingChanges()), p = (0, O.V7)({
            userId: a.id,
            image: d
        }), _ = t.type === o.R.AVATAR_DECORATION, [h] = t.items, {
            firstAvatarDecoration: x,
            firstProfileEffect: g,
            firstNameplate: v
        } = (0, Z.f5)(t), A = null != g, C = () => (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(P.A, {
                ...u,
                pendingAvatar: p,
                user: a,
                canUsePremiumCustomization: c,
                pendingAvatarDecoration: x,
                pendingProfileEffect: g,
                disabledInputs: !0,
                hideMessageInput: !A,
                hideCustomStatus: !0,
                hideBioSection: _,
                hideExampleButton: !0,
                interactive: !1
            }), _ && (0, n.jsx)(eF, {
                user: a
            })]
        }), j = e => (0, n.jsx)(eG, {
            user: a,
            nameplate: e,
            avatarDecoration: x
        });
        if (t.type === o.R.BUNDLE) {
            if (!(0, X.Wb)(t)) return (0, n.jsx)("div", {
                className: ek.RA,
                children: (0, n.jsx)("div", {
                    className: ek.bo,
                    children: C()
                })
            });
            {
                let e = r ?? 0,
                    a = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== a?.type && !l;
                return a.type === o.R.NAMEPLATE ? (0, n.jsx)("div", {
                    className: s()(ek.Zj, i && d ? ek.p2 : ""),
                    children: j(a)
                }) : (0, n.jsx)("div", {
                    className: s()(ek.Ak, i && d ? ek.p2 : ""),
                    children: C()
                })
            }
        }
        return null != v ? (0, n.jsx)("div", {
            className: ek.Zj,
            children: j(v)
        }) : (0, n.jsx)("div", {
            className: h?.type === o.R.AVATAR_DECORATION ? ek.RA : ek.Ak,
            children: C()
        })
    },
    eF = e => {
        let {
            user: t
        } = e, a = (e => {
            let {
                author: t
            } = e;
            return (0, C.rh)({
                ...(0, j.Ay)({
                    author: t,
                    channelId: "1337",
                    content: eO.intl.string(eO.t.d5YwK5)
                }),
                state: eE.cmJ.SENT,
                id: "0"
            })
        })({
            author: t
        });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, n.jsx)(h.M1G, {
                children: (0, n.jsxs)(h.ZpM, {
                    className: ek.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(b.A, {
                        className: ek.G5,
                        author: (0, N.p_)(a),
                        message: a
                    }, a.id), (0, n.jsxs)("div", {
                        className: ek.lG,
                        children: [(0, n.jsx)(h.U1e, {
                            size: "md",
                            color: "currentColor",
                            className: ek.hq
                        }), (0, n.jsx)(h.nm2, {
                            size: "md",
                            color: "currentColor",
                            className: ek.hq
                        })]
                    })]
                })
            })
        })
    },
    eH = e => {
        let {
            transitionState: t,
            onClose: a,
            product: i,
            category: l,
            returnRef: u,
            analyticsSource: p,
            analyticsLocations: _,
            shouldCheckoutWithOrbs: x,
            tab: f
        } = e, A = (0, m.bG)([M.default], () => M.default.getCurrentUser()), C = (0, eI.f)(i), {
            previewingVariantIndex: j
        } = C, N = (0, z.Q)(i), b = (0, eC.q)(i, j), I = (0, Y.rb)(i, N);
        c()(null != I, "Selected product should not be null");
        let {
            analyticsLocations: T
        } = (0, v.Ay)([..._, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(I.skuId);
        let R = (0, eN.U1)(l);
        r.useEffect(() => {
            null != A && (0, w.A)(A.id, A.getAvatarURL(void 0, 80))
        }, [A]);
        let y = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: I.skuId,
                product_type: y
            }), (0, F.RD)(I.skuId)
        }, [p, T, I.skuId, y]);
        let E = (0, B.o6)(),
            P = t === h.ip4.EXITING,
            S = (0, ej.$R)(i),
            O = S?.amount,
            k = null != O && (S?.discountId === eP.eR || S?.discountId === eP.Qz),
            L = r.useMemo(() => (0, W.aw)(I) ? I.items.length : 0, [I]),
            {
                activeSlide: D,
                isTransitioning: G
            } = (0, ee.X)({
                slideCount: L,
                intervalMs: 5e3
            });
        return null == A ? null : (0, n.jsx)(v.f5, {
            value: T,
            children: (0, n.jsxs)(h.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: ek.CR,
                returnRef: u,
                transitionState: t,
                size: h.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, n.jsxs)(h.$mQ, {
                    "data-migration-pending": !0,
                    className: ek.jE,
                    children: [(0, n.jsx)(eU, {
                        user: A,
                        product: i,
                        category: l,
                        onClose: a,
                        previewingVariantIndexProps: C,
                        selectedVariantIndex: N,
                        shouldCheckoutWithOrbs: x,
                        tab: f,
                        activeBundleSlide: D
                    }), (0, n.jsxs)("div", {
                        className: s()(ek.i1, I.skuId === d.j.PREMIUM_TIER_2_3_DAY ? ek.bF : I.type === o.R.AVATAR_DECORATION ? ek.Jq : ek.eF),
                        style: {
                            backgroundImage: `url(${R})`
                        },
                        children: [(0, ey.pQ)(i.skuId) ? i.skuId === ey.Dp.ORB_PROFILE_BADGE ? E || P ? null : (0, n.jsx)(ep.z, {
                            user: A
                        }) : i.skuId === d.j.PREMIUM_TIER_2_3_DAY ? (0, n.jsx)(em.I, {}) : (0, n.jsx)(ef.B, {
                            product: i,
                            className: ek.Ms
                        }) : (0, n.jsx)(eV, {
                            user: A,
                            product: b ?? I,
                            activeBundleSlide: D,
                            isTransitioning: G
                        }), (0, n.jsxs)("div", {
                            className: ek.VG,
                            children: [(0, n.jsx)(ev.R, {
                                product: i,
                                selectedVariantIndex: N,
                                variant: "overlay-secondary",
                                size: "sm"
                            }), (0, n.jsx)(ea.V, {
                                skuId: I.skuId,
                                tab: f
                            }), (0, n.jsx)(h.K0, {
                                "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                onClick: a,
                                icon: h.d$L,
                                variant: "overlay-secondary",
                                size: "sm"
                            })]
                        })]
                    })]
                }), k && (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(h.jlY, {
                        "data-migration-pending": !0,
                        className: ek.Hx,
                        children: [(0, n.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                            alt: "",
                            className: ek.OC
                        }), (0, n.jsxs)("div", {
                            className: ek.do,
                            children: [(0, n.jsx)(h.Text, {
                                variant: "text-sm/semibold",
                                className: ek.Q2,
                                children: eO.intl.format(eO.t["78ph4b"], {
                                    discountOfferAmount: O
                                })
                            }), S?.expiresAt != null && (0, n.jsx)(en.e, {
                                endDate: S.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }