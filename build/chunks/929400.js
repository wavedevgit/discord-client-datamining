/** chunk id: 929400 params = (module,exports,require) **/
n.d(t, {
    default: () => eV
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    c = n.n(s),
    o = n(575593),
    d = n(334279),
    u = n(417597),
    m = n(990078),
    h = n(582754),
    x = n(397927),
    p = n(736653),
    f = n(775602),
    v = n(793574),
    _ = n(688810),
    g = n(262295),
    A = n(141468),
    j = n(963852),
    N = n(763754),
    C = n(20851),
    b = n(369496),
    R = n(550111),
    I = n(44120),
    T = n(465794),
    E = n(919395),
    P = n(287070),
    y = n(331402),
    O = n(101058),
    S = n(836602),
    k = n(576622),
    w = n(151252),
    L = n(652165),
    B = n(287809),
    U = n(954571),
    M = n(975571),
    D = n(927578),
    G = n(580630),
    H = n(979286),
    V = n(4227),
    F = n(298072),
    z = n(993408),
    W = n(940980),
    $ = n(495565),
    q = n(740076),
    J = n(466459),
    K = n(442759),
    Z = n(623373),
    Y = n(660653),
    X = n(536572),
    Q = n(778992),
    ee = n(49620),
    et = n(586445),
    en = n(854818),
    er = n(177366),
    ei = n(11606),
    ea = n(203312),
    el = n(878112),
    es = n(501664),
    ec = n(882342),
    eo = n(572595),
    ed = n(641405),
    eu = n(812016),
    em = n(184659),
    eh = n(561769),
    ex = n(63574),
    ep = n(364616),
    ef = n(846957),
    ev = n(293477),
    e_ = n(139146),
    eg = n(929283),
    eA = n(827066),
    ej = n(525723),
    eN = n(212407),
    eC = n(347722),
    eb = n(935094),
    eR = n(57020),
    eI = n(61750),
    eT = n(758836),
    eE = n(652215),
    eP = n(788868),
    ey = n(818348),
    eO = n(985018),
    eS = n(235980);
let ek = e => {
        let {
            item: t,
            product: n,
            user: a
        } = e, l = i.useRef(null), s = (0, z.aw)(n), {
            firstAvatarDecoration: c
        } = (0, K.f5)(n);
        return t.type === o.R.AVATAR_DECORATION ? (0, r.jsx)("div", {
            className: s ? eS.X2 : eS.h1,
            children: (0, r.jsx)(eg.i, {
                user: a,
                item: t,
                isHighlighted: !0
            })
        }) : t.type === o.R.PROFILE_EFFECT ? (0, r.jsx)("div", {
            className: s ? eS.ME : eS.sm,
            ref: l,
            children: (0, r.jsx)(y.A, {
                skuId: t.skuId,
                removeSetHeight: !0,
                isHighlighted: !0,
                delayProfileEffectIntro: !0
            })
        }) : t.type === o.R.NAMEPLATE ? (0, r.jsx)("div", {
            ref: l,
            className: eS.Dz,
            children: (0, r.jsx)(R.A, {
                className: eS.M4,
                nameplate: t,
                user: a,
                nameplatePreviewSize: "large",
                pendingAvatarDecoration: c,
                isHighlighted: !0
            })
        }) : null
    },
    ew = e => {
        let {
            product: t,
            user: n,
            activeSlide: i = 0
        } = e, a = t.items.length;
        return (0, r.jsx)("div", {
            className: eS.g4,
            children: (0, r.jsx)(x.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i+1}/${a})`;
                    return (0, r.jsx)(x.q7S, {
                        id: l,
                        children: (0, r.jsxs)("div", {
                            className: eS.Kg,
                            children: [(0, r.jsx)(ek, {
                                item: e,
                                product: t,
                                user: n
                            }), (0, r.jsxs)(x.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: eS.gx,
                                children: [s?.name, " ", c]
                            })]
                        })
                    }, l)
                })
            })
        })
    },
    eL = e => {
        let {
            product: t,
            user: n,
            activeSlide: i
        } = e;
        return (0, z.aw)(t) ? (0, r.jsx)(ew, {
            product: t,
            user: n,
            activeSlide: i
        }) : (0, eT.pQ)(t.skuId) ? (0, r.jsx)(ef.B, {
            animationState: "on_hover",
            product: t
        }) : t.items.length > 0 ? (0, r.jsx)(ek, {
            item: t.items[0],
            product: t,
            user: n
        }) : null
    },
    eB = e => {
        let {
            skuId: t
        } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(x.Text, {
            variant: "text-sm/normal",
            className: eS.CU,
            children: eO.intl.format(eO.t.Q1scdE, {
                helpdeskArticle: M.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }) : null
    },
    eU = e => {
        let {
            product: t,
            user: n,
            category: a,
            shouldCheckoutWithOrbs: s,
            tab: d,
            onClose: f,
            returnRef: v,
            previewingVariantIndexProps: g,
            selectedVariantIndex: A,
            activeBundleSlide: j
        } = e, {
            analyticsLocations: N
        } = (0, _.Ay)(), C = D.Ay.canUseCollectibles(n), {
            previewingVariantIndex: b,
            handleEntering: R,
            handleLeaving: P
        } = g, y = (0, eA.q)(t, b), O = (0, Z.rb)(t, A);
        c()(null != O, "Selected product should not be null");
        let S = (0, J.h)(t),
            {
                isPurchased: k,
                isPartiallyOwnedBundle: B
            } = (0, J.h)(O),
            {
                isDisabled: U,
                disabledReason: M
            } = (0, q.I)(O.skuId),
            F = (0, z.Zu)({
                product: O,
                isPartiallyOwnedBundle: B,
                isPurchased: k
            }),
            Y = (0, u.bG)([V.A], () => V.A.isClaiming === O?.skuId),
            Q = (0, p.Ay)(),
            et = (0, h.Mw)(Q),
            en = (0, z.G0)(O),
            er = (0, z.yt)(O, eE.lid.DEFAULT),
            eu = er?.amount === 0,
            {
                firstAvatarDecoration: em
            } = (0, K.f5)(y ?? O),
            ef = i.useMemo(() => (0, z.fT)(O, C), [O, C]),
            e_ = (0, X.VG)(t),
            eg = (0, eC.X)(O),
            {
                enabled: eN
            } = (0, w.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eb = (0, $.r)(O, !1),
            ek = (0, ej.V_)(t),
            ew = null != ek,
            eU = (t.variants?.length ?? 0) > 8,
            eM = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eD = d === eT.G2.ORBS && s ? eh.Hi.ORBS : eM ? eh.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eH,
                hasSufficientOrbs: eV
            } = (0, eR.F)({
                product: O,
                isPremiumUser: C,
                hasDiscountOffer: ew,
                prioritizedCurrency: eD
            }),
            eF = i.useCallback(() => (0, I.A)({
                skuId: O.skuId,
                analyticsLocations: N,
                onClose: e => e ? f() : (0, ey.tE)()
            }), [N, f, O.skuId]);
        return i.useEffect(() => {
            if (null != em) return (0, E.Dx)(em), () => (0, E.Dx)(void 0)
        }, [em]), (0, r.jsxs)("div", {
            className: eS.qA,
            children: [(0, r.jsx)("div", {
                className: eS.gn,
                children: (0, r.jsx)(ea.A, {
                    category: a
                })
            }), (0, r.jsx)(eL, {
                product: y ?? O,
                user: n,
                activeSlide: j
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsxs)("div", {
                    className: eS.h_,
                    children: [(0, r.jsx)(ei.A, {
                        product: O,
                        isDarkText: !et,
                        isOrbExclusive: eH
                    }), (0, r.jsx)(x.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eS.v7,
                        children: e_
                    }), (0, r.jsx)(x.Text, {
                        variant: "text-sm/normal",
                        children: eb
                    }), (0, r.jsx)(eB, {
                        skuId: O.skuId
                    }), S.isPurchased || S.isPartiallyOwnedBundle ? (0, r.jsx)(ee.c, {
                        className: eS.On,
                        isPartiallyPurchased: B
                    }) : en ? (0, r.jsx)(x.Text, {
                        variant: "text-md/semibold",
                        className: eS.On,
                        children: eO.intl.string(eO.t.rt69oo)
                    }) : eN ? (0, r.jsx)(ev.B, {
                        prices: eG,
                        product: O,
                        isPremiumUser: C,
                        discount: ef,
                        hasSufficientOrbs: eV,
                        isProductDisabled: U,
                        discountOfferAmount: ek
                    }) : (0, r.jsxs)("div", {
                        className: eS.pw,
                        children: [(0, r.jsx)(es.A, {
                            product: O,
                            discount: ef,
                            isPremiumUser: C,
                            hideStrikethroughPrice: !C || ew,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: ek
                        }), C || ew ? null : (0, r.jsx)(ec.A, {
                            product: O
                        })]
                    })]
                }), (0, Z.B1)(t) && (0, r.jsx)(x.M1G, {
                    children: (0, r.jsxs)("div", {
                        className: l()(eS.Oj, {
                            [eS.OJ]: eU
                        }),
                        children: [eU && (0, r.jsx)(ex.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: b,
                            className: eS.L$
                        }), (0, r.jsx)(ep.A, {
                            skuId: t.skuId,
                            onVariantEnter: R,
                            onVariantExit: P,
                            wrap: !0
                        }), !eU && (0, r.jsx)(ex.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: b,
                            className: eS.L$
                        })]
                    })
                }), null !== M && (0, r.jsx)(x.Text, {
                    variant: "text-xs/normal",
                    className: eS.H$,
                    children: M
                }), (0, r.jsx)(x.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: (() => {
                        if (en && !C && !eu) {
                            let e;
                            return e = eO.intl.string(eO.t.sEAnVH), (0, r.jsx)(T.A, {
                                subscriptionTier: eP.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: eo.M,
                                onSubscribeModalClose: () => {
                                    (0, eo.t)({
                                        product: O,
                                        category: a,
                                        shouldCheckoutWithOrbs: s,
                                        returnRef: v,
                                        analyticsLocations: N,
                                        tab: d
                                    })
                                }
                            })
                        }
                        return F ? k ? eg ? (0, r.jsxs)(x.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, r.jsx)(ed.A, {
                                product: O,
                                onSuccess: f
                            }), (0, r.jsx)(el.A, {
                                primary: !0,
                                product: O,
                                onSuccess: f
                            })]
                        }) : (0, r.jsx)(ed.A, {
                            product: O,
                            onSuccess: f
                        }) : en ? (0, r.jsx)(x.Button, {
                            loading: Y,
                            loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                            loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                            onClick: async () => {
                                await (0, H.iJ)(O.skuId), f(), (0, eI.A)({
                                    product: O,
                                    analyticsLocations: N,
                                    purchaseType: eT.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: eO.intl.string(eO.t.zp6caO),
                            fullWidth: !0
                        }) : (0, r.jsx)(r.Fragment, {
                            children: eG.map((e, t) => {
                                let n, i = 0 === t;
                                if (e.currency === ey.Yr.DISCORD_ORB) {
                                    let t, n, a, l;
                                    return t = U ? eO.intl.string(eO.t.cTdr3x) : eO.intl.string(eO.t.zqh7ZM), n = !eV || U, a = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), l = n ? `${a}, ${t}` : a, (0, r.jsx)(m.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: n,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(x.Button, {
                                            variant: i ? "primary" : "secondary",
                                            onClick: () => {
                                                (0, L.B4)({
                                                    skuId: O.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, H.gB)(), f(), (0, eI.A)({
                                                            product: O,
                                                            analyticsLocations: N,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: eT.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: N
                                                })
                                            },
                                            disabled: n,
                                            "aria-label": l,
                                            text: eO.intl.format(eO.t.lOtBOI, {
                                                orbPrice: e.amount,
                                                orbIconHook: () => (0, r.jsx)(x.Cp8, {
                                                    className: eS.fN,
                                                    size: "sm",
                                                    color: "currentColor"
                                                })
                                            }),
                                            fullWidth: !0
                                        })
                                    })
                                }
                                return n = (0, z.aw)(O) ? eO.intl.string(eO.t.V1AWw0) : O.type === o.R.PROFILE_EFFECT ? eO.intl.string(eO.t.kAeDcK) : O.type === o.R.NAMEPLATE ? eO.intl.string(eO.t.H3vhqU) : eO.intl.string(eO.t.AQ0Veg), ew ? n = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                    discountOfferAmount: ek
                                }) : eN && (n = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                    price: (0, G.$g)(e.amount, e.currency)
                                })), (0, r.jsxs)(x.ButtonGroup, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [(0, r.jsx)(x.Button, {
                                        variant: i ? "primary" : "secondary",
                                        onClick: eF,
                                        text: n,
                                        fullWidth: !0
                                    }), eg && (0, r.jsx)(el.A, {
                                        primary: i,
                                        product: O,
                                        onSuccess: f
                                    })]
                                })
                            })
                        }) : eg ? (0, r.jsx)(el.A, {
                            primary: !0,
                            product: O,
                            onSuccess: f,
                            fullWidth: !0
                        }) : null
                    })()
                }), (0, r.jsx)(x.Text, {
                    className: l()(eS.ed, !et && eS.un),
                    variant: "text-xxs/normal",
                    children: en && !k ? eO.intl.string(eO.t.nKdAlO) : null
                })]
            })]
        })
    },
    eM = e => {
        let {
            user: t,
            innerClassName: n
        } = e;
        return (0, r.jsx)("div", {
            className: eS.mV,
            children: (0, r.jsx)(g.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE
                }),
                name: t.name,
                innerClassName: l()(eS.$L, n)
            })
        })
    },
    eD = e => {
        let {
            user: t,
            nameplate: n,
            avatarDecoration: i
        } = e, a = (0, b.Ov)();
        return (0, r.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [(0, r.jsx)(eM, {
                    user: a.mallow,
                    innerClassName: eS.ab
                }), (0, r.jsxs)(x.Text, {
                    variant: "text-sm/semibold",
                    className: eS.OS,
                    children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"]
                }), (0, r.jsx)(eM, {
                    user: a.phibi,
                    innerClassName: eS.e9
                }), (0, r.jsx)("div", {
                    className: eS.mV,
                    children: (0, r.jsx)(R.A, {
                        className: eS.M4,
                        innerClassName: eS.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i
                    })
                }), (0, r.jsx)(eM, {
                    user: a.locke,
                    innerClassName: eS.e9
                }), (0, r.jsxs)(x.Text, {
                    variant: "text-sm/semibold",
                    className: eS.OS,
                    children: [eO.intl.string(eO.t["NG43/6"]), " - 12"]
                }), (0, r.jsx)(eM, {
                    user: a.boom,
                    innerClassName: eS.bD
                }), (0, r.jsx)(eM, {
                    user: a.cherry,
                    innerClassName: eS.bD
                })]
            })
        })
    },
    eG = e => {
        let {
            product: t,
            user: n,
            activeBundleSlide: i,
            isTransitioning: a
        } = e, s = (0, u.bG)([f.A], () => f.A.useReducedMotion), c = D.Ay.canUsePremiumProfileCustomization(n), {
            pendingAvatar: d,
            ...m
        } = (0, u.cf)([S.A], () => S.A.getPendingChanges()), h = (0, O.V7)({
            userId: n.id,
            image: d
        }), x = t.type === o.R.AVATAR_DECORATION, [p] = t.items, {
            firstAvatarDecoration: v,
            firstProfileEffect: _,
            firstNameplate: g
        } = (0, K.f5)(t), A = null != _, j = () => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(P.A, {
                ...m,
                pendingAvatar: h,
                user: n,
                canUsePremiumCustomization: c,
                pendingAvatarDecoration: v,
                pendingProfileEffect: _,
                disabledInputs: !0,
                hideMessageInput: !A,
                hideCustomStatus: !0,
                hideBioSection: x,
                hideExampleButton: !0,
                interactive: !1
            }), x && (0, r.jsx)(eH, {
                user: n
            })]
        }), N = e => (0, r.jsx)(eD, {
            user: n,
            nameplate: e,
            avatarDecoration: v
        });
        if (t.type === o.R.BUNDLE) {
            if (!(0, Y.Wb)(t)) return (0, r.jsx)("div", {
                className: eS.RA,
                children: (0, r.jsx)("div", {
                    className: eS.bo,
                    children: j()
                })
            });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== n?.type && !s;
                return n.type === o.R.NAMEPLATE ? (0, r.jsx)("div", {
                    className: l()(eS.Zj, a && d ? eS.p2 : ""),
                    children: N(n)
                }) : (0, r.jsx)("div", {
                    className: l()(eS.Ak, a && d ? eS.p2 : ""),
                    children: j()
                })
            }
        }
        return null != g ? (0, r.jsx)("div", {
            className: eS.Zj,
            children: N(g)
        }) : (0, r.jsx)("div", {
            className: p?.type === o.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
            children: j()
        })
    },
    eH = e => {
        let {
            user: t
        } = e, n = (e => {
            let {
                author: t
            } = e;
            return (0, A.rh)({
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
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [(0, r.jsx)(C.A, {
                        className: eS.G5,
                        author: (0, N.p_)(n),
                        message: n
                    }, n.id), (0, r.jsxs)("div", {
                        className: eS.lG,
                        children: [(0, r.jsx)(x.U1e, {
                            size: "md",
                            color: "currentColor",
                            className: eS.hq
                        }), (0, r.jsx)(x.nm2, {
                            size: "md",
                            color: "currentColor",
                            className: eS.hq
                        })]
                    })]
                })
            })
        })
    },
    eV = e => {
        let {
            transitionState: t,
            onClose: n,
            product: a,
            category: s,
            returnRef: m,
            analyticsSource: h,
            analyticsLocations: p,
            shouldCheckoutWithOrbs: f,
            tab: g
        } = e, A = (0, u.bG)([B.default], () => B.default.getCurrentUser()), j = (0, eb.f)(a), {
            previewingVariantIndex: N
        } = j, C = (0, F.Q)(a), b = (0, eA.q)(a, N), R = (0, Z.rb)(a, C);
        c()(null != R, "Selected product should not be null");
        let {
            analyticsLocations: I
        } = (0, _.Ay)([...p, v.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(R.skuId);
        let T = (0, eN.U1)(s);
        i.useEffect(() => {
            null != A && (0, k.A)(A.id, A.getAvatarURL(void 0, 80))
        }, [A]);
        let E = i.useMemo(() => (0, z.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: I,
                sku_id: R.skuId,
                product_type: E
            }), (0, H.RD)(R.skuId)
        }, [h, I, R.skuId, E]);
        let P = (0, L.o6)(),
            y = t === x.ip4.EXITING,
            O = (0, ej.$R)(a),
            S = O?.amount,
            w = null != S && (O?.discountId === eP.eR || O?.discountId === eP.Qz),
            M = i.useMemo(() => (0, z.aw)(R) ? R.items.length : 0, [R]),
            {
                activeSlide: D,
                isTransitioning: G
            } = (0, Q.X)({
                slideCount: M,
                intervalMs: 5e3
            });
        return null == A ? null : (0, r.jsx)(_.f5, {
            value: I,
            children: (0, r.jsxs)(x.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eS.CR,
                returnRef: m,
                transitionState: t,
                size: x.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, r.jsxs)(x.$mQ, {
                    "data-migration-pending": !0,
                    className: eS.jE,
                    children: [(0, r.jsx)(eU, {
                        user: A,
                        product: a,
                        category: s,
                        onClose: n,
                        previewingVariantIndexProps: j,
                        selectedVariantIndex: C,
                        shouldCheckoutWithOrbs: f,
                        tab: g,
                        activeBundleSlide: D
                    }), (0, r.jsxs)("div", {
                        className: l()(eS.i1, R.skuId === d.j.PREMIUM_TIER_2_3_DAY ? eS.bF : R.type === o.R.AVATAR_DECORATION ? eS.Jq : eS.eF),
                        style: {
                            backgroundImage: `url(${T})`
                        },
                        children: [(0, eT.pQ)(a.skuId) ? a.skuId === eT.Dp.ORB_PROFILE_BADGE ? P || y ? null : (0, r.jsx)(em.z, {
                            user: A
                        }) : a.skuId === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.I, {}) : (0, r.jsx)(ef.B, {
                            product: a,
                            className: eS.Ms
                        }) : (0, r.jsx)(eG, {
                            user: A,
                            product: b ?? R,
                            activeBundleSlide: D,
                            isTransitioning: G
                        }), (0, r.jsxs)("div", {
                            className: eS.VG,
                            children: [(0, r.jsx)(e_.R, {
                                product: a,
                                selectedVariantIndex: C,
                                variant: "overlay-secondary",
                                size: "sm"
                            }), (0, r.jsx)(et.V, {
                                skuId: R.skuId,
                                tab: g
                            }), (0, r.jsx)(x.K0, {
                                "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                onClick: n,
                                icon: x.d$L,
                                variant: "overlay-secondary",
                                size: "sm"
                            })]
                        })]
                    })]
                }), w && (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(x.jlY, {
                        "data-migration-pending": !0,
                        className: eS.Hx,
                        children: [(0, r.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                            alt: "",
                            className: eS.OC
                        }), (0, r.jsxs)("div", {
                            className: eS.do,
                            children: [(0, r.jsx)(x.Text, {
                                variant: "text-sm/semibold",
                                className: eS.Q2,
                                children: eO.intl.format(eO.t["78ph4b"], {
                                    discountOfferAmount: S
                                })
                            }), O?.expiresAt != null && (0, r.jsx)(en.e, {
                                endDate: O.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }