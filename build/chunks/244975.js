/** chunk id: 244975 params = (module,exports,require) **/
n.d(t, {
    A: () => L,
    F: () => U
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(934551),
    o = n(311907),
    c = n(421380),
    u = n(397927),
    d = n(384904),
    _ = n(793574),
    E = n(688810),
    A = n(611371),
    T = n(721923),
    I = n(954571),
    N = n(927578),
    p = n(560138),
    h = n(422936),
    m = n(234419),
    S = n(465794),
    C = n(783420),
    R = n(511484),
    g = n(811611),
    O = n(841252),
    y = n(788868),
    P = n(652215),
    x = n(985018),
    f = n(790344),
    D = n(669149);

function L(e) {
    let {
        title: t,
        type: n,
        guildBoostProps: r,
        analyticsSource: a,
        analyticsLocation: C,
        body: L,
        context: U,
        glowUp: M,
        modalClassName: j,
        modalContentClassName: b,
        artContainerClassName: G,
        artClassName: v,
        headerClassName: k,
        bodyClassName: B,
        transitionState: w,
        onClose: F,
        onSubscribeClick: W,
        onSubscribeFinish: H,
        onSecondaryClick: V,
        secondaryCTA: $,
        secondaryCTAClassName: q,
        subscribeButtonText: X,
        showNewBadge: K = !1,
        showBetaBadge: z = !1,
        enableArtBoxShadow: J = !0,
        subscriptionTier: Y = y.pe.TIER_2,
        isLoading: Z = !1,
        hideBackButton: Q,
        backButtonText: ee,
        showEnhancedUpsell: et,
        useSubscribeButtonGradient: en,
        subscribeButtonClassname: ei,
        hidePremiumOfferUpsell: el,
        children: er,
        LeadingComponent: es,
        backgroundElements: ea,
        smallText: eo = !1,
        footerClassName: ec,
        ...eu
    } = e, ed = null != r, e_ = (0, m.V)(), eE = (0, h.O)(), eA = !el && (e_?.subscription_trial?.sku_id === Y || (0, R.U9)(eE, Y)) && !ed, {
        analyticsLocations: eT
    } = (0, E.Ay)(_.A.PREMIUM_UPSELL_MODAL), eI = {
        analyticsLocation: C,
        analyticsLocations: eT,
        analyticsSource: a,
        guildBoostProps: r,
        type: n
    }, eN = l.useRef(eI);
    l.useEffect(() => {
        eN.current = eI
    }), l.useEffect(() => {
        if (Z) return;
        let {
            analyticsLocation: e,
            analyticsLocations: t,
            analyticsSource: n,
            guildBoostProps: i,
            type: l
        } = eN.current;
        ed ? I.default.track(P.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: `${l} - Tier ${i?.boostedGuildTier}`,
            guild_id: i?.guild.id,
            channel_id: i?.channelId,
            location: e,
            location_stack: t
        }) : I.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
            type: l,
            source: n,
            location: e,
            location_stack: t,
            sku_id: (0, N.mH)(Y)
        })
    }, [ed, Y, Z]);
    let ep = (0, o.bG)([p.A], () => p.A.affinities),
        eh = ep.length > 1 && function(e) {
            switch (e) {
                case y.e.ANIMATED_AVATAR_MODAL_UPSELL:
                case y.e.ANIMATED_BANNER_MODAL_UPSELL:
                case y.e.PROFILE_EFFECT_MODAL_UPSELL:
                case y.e.AVATAR_DECORATION_MODAL_UPSELL:
                case y.e.FOR_LATER_MODAL_UPSELL:
                case y.e.VOICE_FILTERS_UPSELL:
                    return !0;
                default:
                    return !1
            }
        }(n),
        em = (0, o.bG)([p.A], () => p.A.hasFetched);
    l.useEffect(() => {
        em || d.xG()
    }, [em]);
    let eS = J ? s()(f.JS, f.OV, G) : s()(f.JS, G),
        eC = null;
    return null != eu.artURL ? eC = (0, i.jsx)("img", {
        className: s()(v, f.Qw),
        alt: "",
        src: eu.artURL
    }) : null != eu.artElement && (eC = eu.artElement), (0, i.jsxs)(u.EOs, {
        "data-migration-pending": !0,
        className: s()(f.zr, !eA && j),
        "aria-label": t,
        transitionState: w,
        parentComponent: "PremiumUpsellModal",
        children: [null != eC && (0, i.jsxs)("div", {
            className: eS,
            children: [eC, K ? (0, i.jsx)("img", {
                className: f.CI,
                alt: "",
                src: D
            }) : null]
        }), (0, i.jsx)(u.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: s()(et ? f.es : f.Qs, !eA && b),
            children: Z ? (0, i.jsx)(u.y$y, {}) : eA ? (0, i.jsx)(g.Ay, {
                onClose: F,
                type: n,
                subscriptionTier: e_?.subscription_trial?.sku_id ?? y.pe.TIER_2,
                headingText: t,
                context: U,
                analyticsLocationObject: C,
                discountOffer: eE,
                trialOffer: e_,
                children: M
            }) : (0, i.jsxs)("div", {
                className: f.hQ,
                children: [es, (0, i.jsxs)("div", {
                    className: f.kQ,
                    children: [(0, i.jsxs)(u.Heading, {
                        className: s()(f.wx, {
                            [f.k]: et
                        }, k),
                        variant: "heading-xl/bold",
                        children: [t, z ? (0, i.jsx)(A.A, {
                            className: f.TN
                        }) : null]
                    }), eh ? (0, i.jsx)(O.A, {
                        affinities: ep
                    }) : void 0, er, (0, i.jsx)(u.Text, {
                        variant: eo ? "text-sm/normal" : "text-md/normal",
                        className: s()(B, f.uI),
                        children: L
                    })]
                })]
            })
        }), (0, i.jsxs)(u.jlY, {
            "data-migration-pending": !0,
            className: s()(f.qr, ec, {
                [f.I$]: et
            }),
            children: [(0, i.jsxs)("div", {
                className: s()(f.E3, {
                    [f.Q_]: et
                }),
                children: [null != $ ? (0, i.jsx)(c.$n, {
                    "data-migration-pending": !0,
                    className: s()(f.Dc, q, {
                        [f.HZ]: et
                    }),
                    onClick: V,
                    size: c.$n.Sizes.SMALL,
                    color: et ? c.$n.Colors.CUSTOM : c.$n.Colors.PRIMARY,
                    look: c.$n.Looks.LINK,
                    children: $
                }) : null, (() => {
                    if (ed) return (0, i.jsx)(T.A, {
                        analyticsLocation: C,
                        guild: r.guild,
                        onClose: F
                    });
                    let e = et ? x.intl.string(x.t.pj0XBN) : void 0;
                    return eA && (null != e_ ? e = (0, N.FY)({
                        intervalType: e_?.subscription_trial?.interval,
                        intervalCount: e_?.subscription_trial?.interval_count
                    }) : null != eE && (e = x.intl.formatToPlainString(x.t.bkQ4bH, {
                        percent: eE.discount.amount
                    }))), (0, i.jsx)(S.A, {
                        className: ei,
                        showGradient: et || en,
                        premiumModalAnalyticsLocation: C,
                        subscriptionTier: Y,
                        size: c.$n.Sizes.SMALL,
                        color: et || en ? c.$n.Colors.CUSTOM : c.$n.Colors.GREEN,
                        onClick: () => {
                            W?.(), F()
                        },
                        onSubscribeModalClose: H,
                        textOptions: {
                            textOverride: X ?? e
                        }
                    })
                })()]
            }), !Q && !et && (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: null != ee ? ee : x.intl.string(x.t["13/7kX"]),
                onClick: F
            })]
        }), et ? (0, i.jsx)(u.s_y, {
            "data-migration-pending": !0,
            onClick: F,
            className: f.b
        }) : null, ea]
    })
}

function U(e) {
    let {
        transitionState: t,
        title: n,
        subtitle: l,
        graphic: r,
        guildBoostProps: s,
        onClose: o,
        onSecondaryClick: c,
        secondaryCTA: d,
        showNewBadge: _ = !1,
        showBetaBadge: E = !1,
        subscriptionTier: A = y.pe.TIER_2,
        hidePremiumOfferUpsell: T
    } = e, I = (0, m.V)(), p = (0, h.O)(), S = !T && (I?.subscription_trial?.sku_id === A || (0, R.U9)(p, A)) && null == s, g = x.intl.string(x.t.pj0XBN);
    S && (null != I ? g = (0, N.FY)({
        intervalType: I?.subscription_trial?.interval,
        intervalCount: I?.subscription_trial?.interval_count
    }) : null != p && (g = x.intl.formatToPlainString(x.t.bkQ4bH, {
        percent: p.discount.amount
    })));
    let O = null;
    return _ ? O = "new" : E && (O = "beta"), null != I && (O = "free_trial"), (0, i.jsx)(C.A, {
        subscriptionTier: A,
        children: e => {
            let {
                onClick: s
            } = e;
            return (0, i.jsx)(u.kpP, {
                title: n,
                subtitle: l,
                graphic: r,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await o(),
                actions: [{
                    text: d,
                    variant: "secondary",
                    size: "md",
                    onClick: c
                }, {
                    text: g,
                    variant: "expressive",
                    size: "md",
                    onClick: async e => {
                        await o(), s(e)
                    },
                    icon: a.NitroWheelIcon
                }],
                ...null !== O && {
                    badge: {
                        type: O,
                        variant: "expressive"
                    }
                }
            })
        }
    })
}