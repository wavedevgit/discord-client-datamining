/** chunk id: 244975 params = (module,exports,require) **/
t.d(n, {
    A: () => T
});
var a = t(627968),
    s = t(64700),
    i = t(503698),
    r = t.n(i),
    l = t(311907),
    c = t(421380),
    o = t(397927),
    d = t(793574),
    _ = t(688810),
    u = t(323082),
    m = t(611371),
    A = t(721923),
    p = t(954571),
    x = t(927578),
    L = t(560138),
    h = t(422936),
    E = t(234419),
    f = t(725807),
    g = t(511484),
    b = t(811611),
    C = t(841252),
    N = t(788868),
    j = t(652215),
    S = t(985018),
    M = t(535192),
    k = t(669149);

function T(e) {
    let {
        title: n,
        type: t,
        guildBoostProps: i,
        analyticsSource: T,
        analyticsLocation: O,
        body: I,
        context: U,
        glowUp: v,
        modalClassName: y,
        modalContentClassName: D,
        artContainerClassName: R,
        artClassName: P,
        headerClassName: $,
        bodyClassName: w,
        transitionState: Q,
        onClose: z,
        onSubscribeClick: B,
        onSubscribeFinish: H,
        onSecondaryClick: F,
        secondaryCTA: V,
        secondaryCTAClassName: G,
        subscribeButtonText: q,
        showNewBadge: Y = !1,
        showBetaBadge: Z = !1,
        enableArtBoxShadow: J = !0,
        subscriptionTier: K = N.pe.TIER_2,
        isLoading: W = !1,
        hideBackButton: X,
        backButtonText: ee,
        showEnhancedUpsell: en,
        useSubscribeButtonGradient: et,
        subscribeButtonClassname: ea,
        hidePremiumOfferUpsell: es,
        children: ei,
        LeadingComponent: er,
        backgroundElements: el,
        smallText: ec = !1,
        footerClassName: eo,
        ...ed
    } = e, e_ = null != i, eu = (0, E.V)(), em = (0, h.O)(), eA = !es && (eu?.subscription_trial?.sku_id === K || (0, g.U9)(em, K)) && !e_, {
        analyticsLocations: ep
    } = (0, _.Ay)(d.A.PREMIUM_UPSELL_MODAL), ex = {
        analyticsLocation: O,
        analyticsLocations: ep,
        analyticsSource: T,
        guildBoostProps: i,
        type: t
    }, eL = s.useRef(ex);
    s.useEffect(() => {
        eL.current = ex
    }), s.useEffect(() => {
        if (W) return;
        let {
            analyticsLocation: e,
            analyticsLocations: n,
            analyticsSource: t,
            guildBoostProps: a,
            type: s
        } = eL.current;
        e_ ? p.default.track(j.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: `${s} - Tier ${a?.boostedGuildTier}`,
            guild_id: a?.guild.id,
            channel_id: a?.channelId,
            location: e,
            location_stack: n
        }) : p.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
            type: s,
            source: t,
            location: e,
            location_stack: n,
            sku_id: (0, x.mH)(K)
        })
    }, [e_, K, W]);
    let eh = (0, l.bG)([L.A], () => L.A.affinities),
        eE = eh.length > 1 && function(e) {
            switch (e) {
                case N.e.ANIMATED_AVATAR_MODAL_UPSELL:
                case N.e.ANIMATED_BANNER_MODAL_UPSELL:
                case N.e.PROFILE_EFFECT_MODAL_UPSELL:
                case N.e.AVATAR_DECORATION_MODAL_UPSELL:
                case N.e.FOR_LATER_MODAL_UPSELL:
                    return !0;
                default:
                    return !1
            }
        }(t),
        ef = (0, l.bG)([L.A], () => L.A.hasFetched);
    s.useEffect(() => {
        ef || u.xG()
    }, [ef]);
    let eg = J ? r()(M.JS, M.OV, R) : r()(M.JS, R),
        eb = null;
    return null != ed.artURL ? eb = (0, a.jsx)("img", {
        className: r()(P, M.Qw),
        alt: "",
        src: ed.artURL
    }) : null != ed.artElement && (eb = ed.artElement), (0, a.jsxs)(o.EOs, {
        "data-migration-pending": !0,
        className: r()(M.zr, !eA && y),
        "aria-label": n,
        transitionState: Q,
        parentComponent: "PremiumUpsellModal",
        children: [null != eb && (0, a.jsxs)("div", {
            className: eg,
            children: [eb, Y ? (0, a.jsx)("img", {
                className: M.CI,
                alt: "",
                src: k
            }) : null]
        }), (0, a.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: r()(en ? M.es : M.Qs, !eA && D),
            children: W ? (0, a.jsx)(o.y$y, {}) : eA ? (0, a.jsx)(b.Ay, {
                onClose: z,
                type: t,
                subscriptionTier: eu?.subscription_trial?.sku_id ?? N.pe.TIER_2,
                headingText: n,
                context: U,
                analyticsLocationObject: O,
                discountOffer: em,
                trialOffer: eu,
                children: v
            }) : (0, a.jsxs)("div", {
                className: M.hQ,
                children: [er, (0, a.jsxs)("div", {
                    className: M.kQ,
                    children: [(0, a.jsxs)(o.Heading, {
                        className: r()(M.wx, {
                            [M.k]: en
                        }, $),
                        variant: "heading-xl/bold",
                        children: [n, Z ? (0, a.jsx)(m.A, {
                            className: M.TN
                        }) : null]
                    }), eE ? (0, a.jsx)(C.A, {
                        affinities: eh
                    }) : void 0, ei, (0, a.jsx)(o.Text, {
                        variant: ec ? "text-sm/normal" : "text-md/normal",
                        className: r()(w, M.uI),
                        children: I
                    })]
                })]
            })
        }), (0, a.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            className: r()(M.qr, eo, {
                [M.I$]: en
            }),
            children: [(0, a.jsxs)("div", {
                className: r()(M.E3, {
                    [M.Q_]: en
                }),
                children: [null != V ? (0, a.jsx)(c.$n, {
                    "data-migration-pending": !0,
                    className: r()(M.Dc, G, {
                        [M.HZ]: en
                    }),
                    onClick: F,
                    size: c.$n.Sizes.SMALL,
                    color: en ? c.$n.Colors.CUSTOM : c.$n.Colors.PRIMARY,
                    look: c.$n.Looks.LINK,
                    children: V
                }) : null, (() => {
                    if (e_) return (0, a.jsx)(A.A, {
                        analyticsLocation: O,
                        guild: i.guild,
                        onClose: z
                    });
                    let e = en ? S.intl.string(S.t.pj0XBN) : void 0;
                    return eA && (null != eu ? e = (0, x.FY)({
                        intervalType: eu?.subscription_trial?.interval,
                        intervalCount: eu?.subscription_trial?.interval_count
                    }) : null != em && (e = S.intl.formatToPlainString(S.t.bkQ4bH, {
                        percent: em.discount.amount
                    }))), (0, a.jsx)(f.A, {
                        className: ea,
                        showGradient: en || et,
                        premiumModalAnalyticsLocation: O,
                        subscriptionTier: K,
                        size: c.$n.Sizes.SMALL,
                        color: en || et ? c.$n.Colors.CUSTOM : c.$n.Colors.GREEN,
                        onClick: () => {
                            B?.(), z()
                        },
                        onSubscribeModalClose: H,
                        textOptions: {
                            textOverride: q ?? e
                        }
                    })
                })()]
            }), !X && !en && (0, a.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: null != ee ? ee : S.intl.string(S.t["13/7kX"]),
                onClick: z
            })]
        }), en ? (0, a.jsx)(o.s_y, {
            "data-migration-pending": !0,
            onClick: z,
            className: M.b
        }) : null, el]
    })
}