/** chunk id: 929400 params = (module,exports,require) **/
n.d(t, {
    default: () => eV
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(575593),
    d = n(334279),
    u = n(417597),
    m = n(990078),
    h = n(582754),
    p = n(397927),
    f = n(736653),
    x = n(775602),
    _ = n(793574),
    v = n(688810),
    A = n(262295),
    g = n(141468),
    j = n(963852),
    C = n(763754),
    N = n(20851),
    I = n(369496),
    R = n(550111),
    b = n(44120),
    T = n(465794),
    E = n(919395),
    P = n(287070),
    O = n(331402),
    y = n(101058),
    S = n(836602),
    k = n(576622),
    w = n(151252),
    L = n(652165),
    B = n(287809),
    U = n(954571),
    M = n(975571),
    D = n(927578),
    G = n(580630),
    F = n(979286),
    V = n(4227),
    H = n(298072),
    z = n(993408),
    W = n(940980),
    q = n(495565),
    $ = n(740076),
    J = n(466459),
    Y = n(442759),
    K = n(623373),
    Z = n(660653),
    X = n(536572),
    Q = n(778992),
    ee = n(49620),
    et = n(586445),
    en = n(854818),
    er = n(177366),
    ea = n(11606),
    ei = n(203312),
    el = n(878112),
    es = n(501664),
    eo = n(882342),
    ec = n(572595),
    ed = n(641405),
    eu = n(812016),
    em = n(184659),
    eh = n(561769),
    ep = n(63574),
    ef = n(364616),
    ex = n(846957),
    e_ = n(293477),
    ev = n(139146),
    eA = n(929283),
    eg = n(827066),
    ej = n(525723),
    eC = n(212407),
    eN = n(347722),
    eI = n(935094),
    eR = n(57020),
    eb = n(61750),
    eT = n(758836),
    eE = n(652215),
    eP = n(788868),
    eO = n(818348),
    ey = n(985018),
    eS = n(484978);
let ek = e => {
        let {
            item: t,
            product: n,
            user: i
        } = e, l = a.useRef(null), s = (0, z.aw)(n), {
            firstAvatarDecoration: o
        } = (0, Y.f5)(n);
        return t.type === c.R.AVATAR_DECORATION ? (0, r.jsx)("div", {
            className: s ? eS.X2 : eS.h1,
            children: (0, r.jsx)(eA.i, {
                user: i,
                item: t,
                isHighlighted: !0
            })
        }) : t.type === c.R.PROFILE_EFFECT ? (0, r.jsx)("div", {
            className: s ? eS.ME : eS.sm,
            ref: l,
            children: (0, r.jsx)(O.A, {
                skuId: t.skuId,
                removeSetHeight: !0,
                isHighlighted: !0,
                delayProfileEffectIntro: !0
            })
        }) : t.type === c.R.NAMEPLATE ? (0, r.jsx)("div", {
            ref: l,
            className: eS.Dz,
            children: (0, r.jsx)(R.A, {
                className: eS.M4,
                nameplate: t,
                user: i,
                nameplatePreviewSize: "large",
                pendingAvatarDecoration: o,
                isHighlighted: !0
            })
        }) : null
    },
    ew = e => {
        let {
            product: t,
            user: n,
            activeSlide: a = 0
        } = e, i = t.items.length;
        return (0, r.jsx)("div", {
            className: eS.g4,
            children: (0, r.jsx)(p.tN_, {
                activeSlide: String(a),
                children: t.items.map((e, a) => {
                    let l = String(a),
                        s = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        o = `(${a+1}/${i})`;
                    return (0, r.jsx)(p.q7S, {
                        id: l,
                        children: (0, r.jsxs)("div", {
                            className: eS.Kg,
                            children: [(0, r.jsx)(ek, {
                                item: e,
                                product: t,
                                user: n
                            }), (0, r.jsxs)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: eS.gx,
                                children: [s?.name, " ", o]
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
            activeSlide: a
        } = e;
        return (0, z.aw)(t) ? (0, r.jsx)(ew, {
            product: t,
            user: n,
            activeSlide: a
        }) : (0, eT.pQ)(t.skuId) ? (0, r.jsx)(ex.B, {
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
        return t === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            className: eS.CU,
            children: ey.intl.format(ey.t.Q1scdE, {
                helpdeskArticle: M.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }) : null
    },
    eU = e => {
        let {
            product: t,
            user: n,
            category: i,
            shouldCheckoutWithOrbs: s,
            tab: d,
            onClose: x,
            returnRef: _,
            previewingVariantIndexProps: A,
            selectedVariantIndex: g,
            activeBundleSlide: j
        } = e, {
            analyticsLocations: C
        } = (0, v.Ay)(), N = D.Ay.canUseCollectibles(n), {
            previewingVariantIndex: I,
            handleEntering: R,
            handleLeaving: P
        } = A, O = (0, eg.q)(t, I), y = (0, K.rb)(t, g);
        o()(null != y, "Selected product should not be null");
        let S = (0, J.h)(t),
            {
                isPurchased: k,
                isPartiallyOwnedBundle: B
            } = (0, J.h)(y),
            {
                isDisabled: U,
                disabledReason: M
            } = (0, $.I)(y.skuId),
            H = (0, z.Zu)({
                product: y,
                isPartiallyOwnedBundle: B,
                isPurchased: k
            }),
            Z = (0, u.bG)([V.A], () => V.A.isClaiming === y?.skuId),
            Q = (0, f.Ay)(),
            et = (0, h.Mw)(Q),
            en = (0, z.G0)(y),
            er = (0, z.yt)(y, eE.lid.DEFAULT),
            eu = er?.amount === 0,
            {
                firstAvatarDecoration: em
            } = (0, Y.f5)(O ?? y),
            ex = a.useMemo(() => (0, z.fT)(y, N), [y, N]),
            ev = (0, X.VG)(t),
            eA = (0, eN.X)(y),
            {
                enabled: eC
            } = (0, w.Z)({
                location: "collectibles_shop_product_details_modal"
            }),
            eI = (0, q.r)(y, !1),
            ek = (0, ej.V_)(t),
            ew = null != ek,
            eU = (t.variants?.length ?? 0) > 8,
            eM = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eD = d === eT.G2.ORBS && s ? eh.Hi.ORBS : eM ? eh.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eF,
                hasSufficientOrbs: eV
            } = (0, eR.F)({
                product: y,
                isPremiumUser: N,
                hasDiscountOffer: ew,
                prioritizedCurrency: eD
            }),
            eH = a.useCallback(() => (0, b.A)({
                skuId: y.skuId,
                analyticsLocations: C,
                onClose: e => e ? x() : (0, eO.tE)()
            }), [C, x, y.skuId]);
        return a.useEffect(() => {
            if (null != em) return (0, E.Dx)(em), () => (0, E.Dx)(void 0)
        }, [em]), (0, r.jsxs)("div", {
            className: eS.qA,
            children: [(0, r.jsx)("div", {
                className: eS.gn,
                children: (0, r.jsx)(ei.A, {
                    category: i
                })
            }), (0, r.jsx)(eL, {
                product: O ?? y,
                user: n,
                activeSlide: j
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsxs)("div", {
                    className: eS.h_,
                    children: [(0, r.jsx)(ea.A, {
                        product: y,
                        isDarkText: !et,
                        isOrbExclusive: eF
                    }), (0, r.jsx)(p.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eS.v7,
                        children: ev
                    }), (0, r.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        children: eI
                    }), (0, r.jsx)(eB, {
                        skuId: y.skuId
                    }), S.isPurchased || S.isPartiallyOwnedBundle ? (0, r.jsx)(ee.c, {
                        className: eS.On,
                        isPartiallyPurchased: B
                    }) : en ? (0, r.jsx)(p.Text, {
                        variant: "text-md/semibold",
                        className: eS.On,
                        children: ey.intl.string(ey.t.rt69oo)
                    }) : eC ? (0, r.jsx)(e_.B, {
                        prices: eG,
                        product: y,
                        isPremiumUser: N,
                        discount: ex,
                        hasSufficientOrbs: eV,
                        isProductDisabled: U,
                        discountOfferAmount: ek
                    }) : (0, r.jsxs)("div", {
                        className: eS.pw,
                        children: [(0, r.jsx)(es.A, {
                            product: y,
                            discount: ex,
                            isPremiumUser: N,
                            hideStrikethroughPrice: !N || ew,
                            nitroIconType: "tooltip",
                            nitroIconSize: "xs",
                            discountOfferAmount: ek
                        }), N || ew ? null : (0, r.jsx)(eo.A, {
                            product: y
                        })]
                    })]
                }), (0, K.B1)(t) && (0, r.jsx)(p.M1G, {
                    children: (0, r.jsxs)("div", {
                        className: l()(eS.Oj, {
                            [eS.OJ]: eU
                        }),
                        children: [eU && (0, r.jsx)(ep.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: I,
                            className: eS.L$
                        }), (0, r.jsx)(ef.A, {
                            skuId: t.skuId,
                            onVariantEnter: R,
                            onVariantExit: P,
                            wrap: !0
                        }), !eU && (0, r.jsx)(ep.A, {
                            skuId: t.skuId,
                            overrideVariantIndex: I,
                            className: eS.L$
                        })]
                    })
                }), null !== M && (0, r.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    className: eS.H$,
                    children: M
                }), (0, r.jsx)(p.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: (() => {
                        if (en && !N && !eu) {
                            let e;
                            return e = ey.intl.string(ey.t.sEAnVH), (0, r.jsx)(T.A, {
                                subscriptionTier: eP.pe.TIER_2,
                                fullWidth: !0,
                                textOptions: {
                                    textOverride: e
                                },
                                onClick: ec.M,
                                onSubscribeModalClose: () => {
                                    (0, ec.t)({
                                        product: y,
                                        category: i,
                                        shouldCheckoutWithOrbs: s,
                                        returnRef: _,
                                        analyticsLocations: C,
                                        tab: d
                                    })
                                }
                            })
                        }
                        return H ? k ? eA ? (0, r.jsxs)(p.ButtonGroup, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [(0, r.jsx)(ed.A, {
                                product: y,
                                onSuccess: x
                            }), (0, r.jsx)(el.A, {
                                primary: !0,
                                product: y,
                                onSuccess: x
                            })]
                        }) : (0, r.jsx)(ed.A, {
                            product: y,
                            onSuccess: x
                        }) : en ? (0, r.jsx)(p.Button, {
                            loading: Z,
                            loadingStartedLabel: ey.intl.string(ey.t["TYw+9s"]),
                            loadingFinishedLabel: ey.intl.string(ey.t.Pg1UP5),
                            onClick: async () => {
                                await (0, F.iJ)(y.skuId), x(), (0, eb.A)({
                                    product: y,
                                    analyticsLocations: C,
                                    purchaseType: eT.gs.PREMIUM_PURCHASE
                                })
                            },
                            text: ey.intl.string(ey.t.zp6caO),
                            fullWidth: !0
                        }) : (0, r.jsx)(r.Fragment, {
                            children: eG.map((e, t) => {
                                let n, a = 0 === t;
                                if (e.currency === eO.Yr.DISCORD_ORB) {
                                    let t, n, i, l;
                                    return t = U ? ey.intl.string(ey.t.cTdr3x) : ey.intl.string(ey.t.zqh7ZM), n = !eV || U, i = ey.intl.formatToPlainString(ey.t.yi41qQ, {
                                        orbPrice: e.amount
                                    }), l = n ? `${i}, ${t}` : i, (0, r.jsx)(m.m, {
                                        position: "top",
                                        text: t,
                                        shouldShow: n,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(p.Button, {
                                            variant: a ? "primary" : "secondary",
                                            onClick: () => {
                                                (0, L.B4)({
                                                    skuId: y.skuId,
                                                    onCheckoutSuccess: e => {
                                                        let {
                                                            entitlements: t
                                                        } = e;
                                                        (0, F.gB)(), x(), (0, eb.A)({
                                                            product: y,
                                                            analyticsLocations: C,
                                                            itemConsumed: t[0]?.consumed,
                                                            purchaseType: eT.gs.ORB
                                                        })
                                                    },
                                                    analyticsLocations: C
                                                })
                                            },
                                            disabled: n,
                                            "aria-label": l,
                                            text: ey.intl.format(ey.t.lOtBOI, {
                                                orbPrice: e.amount,
                                                orbIconHook: () => (0, r.jsx)(p.Cp8, {
                                                    className: eS.fN,
                                                    size: "sm",
                                                    color: "currentColor"
                                                })
                                            }),
                                            fullWidth: !0
                                        })
                                    })
                                }
                                return n = (0, z.aw)(y) ? ey.intl.string(ey.t.V1AWw0) : y.type === c.R.PROFILE_EFFECT ? ey.intl.string(ey.t.kAeDcK) : y.type === c.R.NAMEPLATE ? ey.intl.string(ey.t.H3vhqU) : ey.intl.string(ey.t.AQ0Veg), ew ? n = ey.intl.formatToPlainString(ey.t["5U5RB5"], {
                                    discountOfferAmount: ek
                                }) : eC && (n = ey.intl.formatToPlainString(ey.t["cNSL/j"], {
                                    price: (0, G.$g)(e.amount, e.currency)
                                })), (0, r.jsxs)(p.ButtonGroup, {
                                    wrap: !1,
                                    fullWidth: !0,
                                    children: [(0, r.jsx)(p.Button, {
                                        variant: a ? "primary" : "secondary",
                                        onClick: eH,
                                        text: n,
                                        fullWidth: !0
                                    }), eA && (0, r.jsx)(el.A, {
                                        primary: a,
                                        product: y,
                                        onSuccess: x
                                    })]
                                })
                            })
                        }) : eA ? (0, r.jsx)(el.A, {
                            primary: !0,
                            product: y,
                            onSuccess: x,
                            fullWidth: !0
                        }) : null
                    })()
                }), (0, r.jsx)(p.Text, {
                    className: l()(eS.ed, !et && eS.un),
                    variant: "text-xxs/normal",
                    children: en && !k ? ey.intl.string(ey.t.nKdAlO) : null
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
            children: (0, r.jsx)(A.A, {
                avatar: (0, r.jsx)(p.euF, {
                    src: t.avatarSrc,
                    size: p._3J.SIZE_32,
                    "aria-label": t.name,
                    status: p.clD.ONLINE
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
            avatarDecoration: a
        } = e, i = (0, I.Ov)();
        return (0, r.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": ey.intl.string(ey.t.SZeUdR),
            children: (0, r.jsxs)(p.M1G, {
                children: [(0, r.jsx)(eM, {
                    user: i.mallow,
                    innerClassName: eS.ab
                }), (0, r.jsxs)(p.Text, {
                    variant: "text-sm/semibold",
                    className: eS.OS,
                    children: [ey.intl.string(ey.t["yzW/fZ"]), " - 3"]
                }), (0, r.jsx)(eM, {
                    user: i.phibi,
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
                        pendingAvatarDecoration: a
                    })
                }), (0, r.jsx)(eM, {
                    user: i.locke,
                    innerClassName: eS.e9
                }), (0, r.jsxs)(p.Text, {
                    variant: "text-sm/semibold",
                    className: eS.OS,
                    children: [ey.intl.string(ey.t["NG43/6"]), " - 12"]
                }), (0, r.jsx)(eM, {
                    user: i.boom,
                    innerClassName: eS.bD
                }), (0, r.jsx)(eM, {
                    user: i.cherry,
                    innerClassName: eS.bD
                })]
            })
        })
    },
    eG = e => {
        let {
            product: t,
            user: n,
            activeBundleSlide: a,
            isTransitioning: i
        } = e, s = (0, u.bG)([x.A], () => x.A.useReducedMotion), o = D.Ay.canUsePremiumProfileCustomization(n), {
            pendingAvatar: d,
            ...m
        } = (0, u.cf)([S.A], () => S.A.getPendingChanges()), h = (0, y.V7)({
            userId: n.id,
            image: d
        }), p = t.type === c.R.AVATAR_DECORATION, [f] = t.items, {
            firstAvatarDecoration: _,
            firstProfileEffect: v,
            firstNameplate: A
        } = (0, Y.f5)(t), g = null != v, j = () => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(P.A, {
                ...m,
                pendingAvatar: h,
                user: n,
                canUsePremiumCustomization: o,
                pendingAvatarDecoration: _,
                pendingProfileEffect: v,
                disabledInputs: !0,
                hideMessageInput: !g,
                hideCustomStatus: !0,
                hideBioSection: p,
                hideExampleButton: !0,
                interactive: !1
            }), p && (0, r.jsx)(eF, {
                user: n
            })]
        }), C = e => (0, r.jsx)(eD, {
            user: n,
            nameplate: e,
            avatarDecoration: _
        });
        if (t.type === c.R.BUNDLE) {
            if (!(0, Z.Wb)(t)) return (0, r.jsx)("div", {
                className: eS.RA,
                children: (0, r.jsx)("div", {
                    className: eS.bo,
                    children: j()
                })
            });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    d = o?.type !== n?.type && !s;
                return n.type === c.R.NAMEPLATE ? (0, r.jsx)("div", {
                    className: l()(eS.Zj, i && d ? eS.p2 : ""),
                    children: C(n)
                }) : (0, r.jsx)("div", {
                    className: l()(eS.Ak, i && d ? eS.p2 : ""),
                    children: j()
                })
            }
        }
        return null != A ? (0, r.jsx)("div", {
            className: eS.Zj,
            children: C(A)
        }) : (0, r.jsx)("div", {
            className: f?.type === c.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
            children: j()
        })
    },
    eF = e => {
        let {
            user: t
        } = e, n = (e => {
            let {
                author: t
            } = e;
            return (0, g.rh)({
                ...(0, j.Ay)({
                    author: t,
                    channelId: "1337",
                    content: ey.intl.string(ey.t.d5YwK5)
                }),
                state: eE.cmJ.SENT,
                id: "0"
            })
        })({
            author: t
        });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ey.intl.string(ey.t["TN+ZvB"]),
            children: (0, r.jsx)(p.M1G, {
                children: (0, r.jsxs)(p.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [(0, r.jsx)(N.A, {
                        className: eS.G5,
                        author: (0, C.p_)(n),
                        message: n
                    }, n.id), (0, r.jsxs)("div", {
                        className: eS.lG,
                        children: [(0, r.jsx)(p.U1e, {
                            size: "md",
                            color: "currentColor",
                            className: eS.hq
                        }), (0, r.jsx)(p.nm2, {
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
            product: i,
            category: s,
            returnRef: m,
            analyticsSource: h,
            analyticsLocations: f,
            shouldCheckoutWithOrbs: x,
            tab: A
        } = e, g = (0, u.bG)([B.default], () => B.default.getCurrentUser()), j = (0, eI.f)(i), {
            previewingVariantIndex: C
        } = j, N = (0, H.Q)(i), I = (0, eg.q)(i, C), R = (0, K.rb)(i, N);
        o()(null != R, "Selected product should not be null");
        let {
            analyticsLocations: b
        } = (0, v.Ay)([...f, _.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(R.skuId);
        let T = (0, eC.U1)(s);
        a.useEffect(() => {
            null != g && (0, k.A)(g.id, g.getAvatarURL(void 0, 80))
        }, [g]);
        let E = a.useMemo(() => (0, z.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: b,
                sku_id: R.skuId,
                product_type: E
            }), (0, F.RD)(R.skuId)
        }, [h, b, R.skuId, E]);
        let P = (0, L.o6)(),
            O = t === p.ip4.EXITING,
            y = (0, ej.$R)(i),
            S = y?.amount,
            w = null != S && (y?.discountId === eP.eR || y?.discountId === eP.Qz),
            M = a.useMemo(() => (0, z.aw)(R) ? R.items.length : 0, [R]),
            {
                activeSlide: D,
                isTransitioning: G
            } = (0, Q.X)({
                slideCount: M,
                intervalMs: 5e3
            });
        return null == g ? null : (0, r.jsx)(v.f5, {
            value: b,
            children: (0, r.jsxs)(p.EOs, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: eS.CR,
                returnRef: m,
                transitionState: t,
                size: p.rIJ.DYNAMIC,
                parentComponent: "CollectiblesShopProductDetailsModal",
                children: [(0, r.jsxs)(p.$mQ, {
                    "data-migration-pending": !0,
                    className: eS.jE,
                    children: [(0, r.jsx)(eU, {
                        user: g,
                        product: i,
                        category: s,
                        onClose: n,
                        previewingVariantIndexProps: j,
                        selectedVariantIndex: N,
                        shouldCheckoutWithOrbs: x,
                        tab: A,
                        activeBundleSlide: D
                    }), (0, r.jsxs)("div", {
                        className: l()(eS.i1, R.skuId === d.j.PREMIUM_TIER_2_3_DAY ? eS.bF : R.type === c.R.AVATAR_DECORATION ? eS.Jq : eS.eF),
                        style: {
                            backgroundImage: `url(${T})`
                        },
                        children: [(0, eT.pQ)(i.skuId) ? i.skuId === eT.Dp.ORB_PROFILE_BADGE ? P || O ? null : (0, r.jsx)(em.z, {
                            user: g
                        }) : i.skuId === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.I, {}) : (0, r.jsx)(ex.B, {
                            product: i,
                            className: eS.Ms
                        }) : (0, r.jsx)(eG, {
                            user: g,
                            product: I ?? R,
                            activeBundleSlide: D,
                            isTransitioning: G
                        }), (0, r.jsxs)("div", {
                            className: eS.VG,
                            children: [(0, r.jsx)(ev.R, {
                                product: i,
                                selectedVariantIndex: N,
                                variant: "overlay-secondary",
                                size: "sm"
                            }), (0, r.jsx)(et.V, {
                                skuId: R.skuId,
                                tab: A
                            }), (0, r.jsx)(p.K0, {
                                "aria-label": ey.intl.string(ey.t.cpT0Cq),
                                onClick: n,
                                icon: p.d$L,
                                variant: "overlay-secondary",
                                size: "sm"
                            })]
                        })]
                    })]
                }), w && (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(p.jlY, {
                        "data-migration-pending": !0,
                        className: eS.Hx,
                        children: [(0, r.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                            alt: "",
                            className: eS.OC
                        }), (0, r.jsxs)("div", {
                            className: eS.do,
                            children: [(0, r.jsx)(p.Text, {
                                variant: "text-sm/semibold",
                                className: eS.Q2,
                                children: ey.intl.format(ey.t["78ph4b"], {
                                    discountOfferAmount: S
                                })
                            }), y?.expiresAt != null && (0, r.jsx)(en.e, {
                                endDate: y.expiresAt
                            })]
                        })]
                    })
                })]
            })
        })
    }