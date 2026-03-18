/** chunk id: 244975 params = (module,exports,require) **/
t.d(n, {
    A: () => O,
    F: () => M
});
var i = t(627968),
    a = t(64700),
    s = t(503698),
    l = t.n(s),
    r = t(934551),
    c = t(311907),
    o = t(421380),
    u = t(397927),
    d = t(384904),
    m = t(793574),
    _ = t(688810),
    f = t(611371),
    x = t(721923),
    h = t(954571),
    p = t(927578),
    g = t(560138),
    E = t(422936),
    A = t(234419),
    L = t(465794),
    N = t(783420),
    j = t(511484),
    v = t(811611),
    T = t(841252),
    b = t(788868),
    I = t(652215),
    k = t(985018),
    S = t(953239),
    C = t(669149);

function O(e) {
    let {
        title: n,
        type: t,
        guildBoostProps: s,
        analyticsSource: r,
        analyticsLocation: N,
        body: O,
        context: M,
        glowUp: y,
        modalClassName: P,
        modalContentClassName: R,
        artContainerClassName: U,
        artClassName: F,
        headerClassName: D,
        bodyClassName: z,
        transitionState: H,
        onClose: $,
        onSubscribeClick: w,
        onSubscribeFinish: G,
        onSecondaryClick: V,
        secondaryCTA: Q,
        secondaryCTAClassName: Y,
        subscribeButtonText: B,
        showNewBadge: X = !1,
        showBetaBadge: Z = !1,
        enableArtBoxShadow: J = !0,
        subscriptionTier: K = b.pe.TIER_2,
        isLoading: W = !1,
        hideBackButton: q,
        backButtonText: ee,
        showEnhancedUpsell: en,
        useSubscribeButtonGradient: et,
        subscribeButtonClassname: ei,
        hidePremiumOfferUpsell: ea,
        children: es,
        LeadingComponent: el,
        backgroundElements: er,
        smallText: ec = !1,
        footerClassName: eo,
        ...eu
    } = e, ed = null != s, em = (0, A.V)(), e_ = (0, E.O)(), ef = !ea && (em?.subscription_trial?.sku_id === K || (0, j.U9)(e_, K)) && !ed, {
        analyticsLocations: ex
    } = (0, _.Ay)(m.A.PREMIUM_UPSELL_MODAL), eh = {
        analyticsLocation: N,
        analyticsLocations: ex,
        analyticsSource: r,
        guildBoostProps: s,
        type: t
    }, ep = a.useRef(eh);
    a.useEffect(() => {
        ep.current = eh
    }), a.useEffect(() => {
        if (W) return;
        let {
            analyticsLocation: e,
            analyticsLocations: n,
            analyticsSource: t,
            guildBoostProps: i,
            type: a
        } = ep.current;
        ed ? h.default.track(I.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: `${a} - Tier ${i?.boostedGuildTier}`,
            guild_id: i?.guild.id,
            channel_id: i?.channelId,
            location: e,
            location_stack: n
        }) : h.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: a,
            source: t,
            location: e,
            location_stack: n,
            sku_id: (0, p.mH)(K)
        })
    }, [ed, K, W]);
    let eg = (0, c.bG)([g.A], () => g.A.affinities),
        eE = eg.length > 1 && function(e) {
            switch (e) {
                case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                case b.e.FOR_LATER_MODAL_UPSELL:
                case b.e.VOICE_FILTERS_UPSELL:
                    return !0;
                default:
                    return !1
            }
        }(t),
        eA = (0, c.bG)([g.A], () => g.A.hasFetched);
    a.useEffect(() => {
        eA || d.xG()
    }, [eA]);
    let eL = J ? l()(S.JS, S.OV, U) : l()(S.JS, U),
        eN = null;
    return null != eu.artURL ? eN = (0, i.jsx)("img", {
        className: l()(F, S.Qw),
        alt: "",
        src: eu.artURL
    }) : null != eu.artElement && (eN = eu.artElement), (0, i.jsxs)(u.EOs, {
        "data-migration-pending": !0,
        className: l()(S.zr, !ef && P),
        "aria-label": n,
        transitionState: H,
        parentComponent: "PremiumUpsellModal",
        children: [null != eN && (0, i.jsxs)("div", {
            className: eL,
            children: [eN, X ? (0, i.jsx)("img", {
                className: S.CI,
                alt: "",
                src: C
            }) : null]
        }), (0, i.jsx)(u.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: l()(en ? S.es : S.Qs, !ef && R),
            children: W ? (0, i.jsx)(u.y$y, {}) : ef ? (0, i.jsx)(v.Ay, {
                onClose: $,
                type: t,
                subscriptionTier: em?.subscription_trial?.sku_id ?? b.pe.TIER_2,
                headingText: n,
                context: M,
                analyticsLocationObject: N,
                discountOffer: e_,
                trialOffer: em,
                children: y
            }) : (0, i.jsxs)("div", {
                className: S.hQ,
                children: [el, (0, i.jsxs)("div", {
                    className: S.kQ,
                    children: [(0, i.jsxs)(u.Heading, {
                        className: l()(S.wx, {
                            [S.k]: en
                        }, D),
                        variant: "heading-xl/bold",
                        children: [n, Z ? (0, i.jsx)(f.A, {
                            className: S.TN
                        }) : null]
                    }), eE ? (0, i.jsx)(T.A, {
                        affinities: eg
                    }) : void 0, es, (0, i.jsx)(u.Text, {
                        variant: ec ? "text-sm/normal" : "text-md/normal",
                        className: l()(z, S.uI),
                        children: O
                    })]
                })]
            })
        }), (0, i.jsxs)(u.jlY, {
            "data-migration-pending": !0,
            className: l()(S.qr, eo, {
                [S.I$]: en
            }),
            children: [(0, i.jsxs)("div", {
                className: l()(S.E3, {
                    [S.Q_]: en
                }),
                children: [null != Q ? (0, i.jsx)(o.$n, {
                    "data-migration-pending": !0,
                    className: l()(S.Dc, Y, {
                        [S.HZ]: en
                    }),
                    onClick: V,
                    size: o.$n.Sizes.SMALL,
                    color: en ? o.$n.Colors.CUSTOM : o.$n.Colors.PRIMARY,
                    look: o.$n.Looks.LINK,
                    children: Q
                }) : null, (() => {
                    if (ed) return (0, i.jsx)(x.A, {
                        analyticsLocation: N,
                        guild: s.guild,
                        onClose: $
                    });
                    let e = en ? k.intl.string(k.t.pj0XBN) : void 0;
                    return ef && (null != em ? e = (0, p.FY)({
                        intervalType: em?.subscription_trial?.interval,
                        intervalCount: em?.subscription_trial?.interval_count
                    }) : null != e_ && (e = k.intl.formatToPlainString(k.t.bkQ4bH, {
                        percent: e_.discount.amount
                    }))), (0, i.jsx)(L.A, {
                        className: ei,
                        showGradient: en || et,
                        premiumModalAnalyticsLocation: N,
                        subscriptionTier: K,
                        size: o.$n.Sizes.SMALL,
                        color: en || et ? o.$n.Colors.CUSTOM : o.$n.Colors.GREEN,
                        onClick: () => {
                            w?.(), $()
                        },
                        onSubscribeModalClose: G,
                        textOptions: {
                            textOverride: B ?? e
                        }
                    })
                })()]
            }), !q && !en && (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: null != ee ? ee : k.intl.string(k.t["13/7kX"]),
                onClick: $
            })]
        }), en ? (0, i.jsx)(u.s_y, {
            "data-migration-pending": !0,
            onClick: $,
            className: S.b
        }) : null, er]
    })
}

function M(e) {
    let {
        transitionState: n,
        title: t,
        subtitle: a,
        graphic: s,
        guildBoostProps: l,
        onClose: c,
        onSecondaryClick: o,
        secondaryCTA: d,
        showNewBadge: m = !1,
        showBetaBadge: _ = !1,
        subscriptionTier: f = b.pe.TIER_2,
        hidePremiumOfferUpsell: x
    } = e, h = (0, A.V)(), g = (0, E.O)(), L = !x && (h?.subscription_trial?.sku_id === f || (0, j.U9)(g, f)) && null == l, v = k.intl.string(k.t.pj0XBN);
    L && (null != h ? v = (0, p.FY)({
        intervalType: h?.subscription_trial?.interval,
        intervalCount: h?.subscription_trial?.interval_count
    }) : null != g && (v = k.intl.formatToPlainString(k.t.bkQ4bH, {
        percent: g.discount.amount
    })));
    let T = null;
    return m ? T = "new" : _ && (T = "beta"), null != h && (T = "free_trial"), (0, i.jsx)(N.A, {
        subscriptionTier: f,
        children: e => {
            let {
                onClick: l
            } = e;
            return (0, i.jsx)(u.kpP, {
                title: t,
                subtitle: a,
                graphic: s,
                gradientColor: "nitro-pink",
                transitionState: n,
                onClose: async () => await c(),
                actions: [{
                    text: d,
                    variant: "secondary",
                    size: "md",
                    onClick: o
                }, {
                    text: v,
                    variant: "expressive",
                    size: "md",
                    onClick: async e => {
                        await c(), l(e)
                    },
                    icon: r.NitroWheelIcon
                }],
                ...null !== T && {
                    badge: {
                        type: T,
                        variant: "expressive"
                    }
                }
            })
        }
    })
}