/** chunk id: 244975 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var a = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(311907),
    c = t(421380),
    o = t(397927),
    d = t(793574),
    _ = t(688810),
    u = t(323082),
    m = t(611371),
    f = t(721923),
    h = t(954571),
    x = t(927578),
    A = t(560138),
    g = t(422936),
    p = t(234419),
    L = t(725807),
    E = t(511484),
    N = t(811611),
    b = t(841252),
    C = t(788868),
    T = t(652215),
    j = t(985018),
    S = t(790344),
    I = t(669149);

function v(e) {
    let {
        title: n,
        type: t,
        guildBoostProps: s,
        analyticsSource: v,
        analyticsLocation: k,
        body: O,
        context: M,
        glowUp: U,
        modalClassName: D,
        modalContentClassName: y,
        artContainerClassName: R,
        artClassName: P,
        headerClassName: F,
        bodyClassName: z,
        transitionState: H,
        onClose: w,
        onSubscribeClick: B,
        onSubscribeFinish: $,
        onSecondaryClick: G,
        secondaryCTA: Q,
        secondaryCTAClassName: V,
        subscribeButtonText: K,
        showNewBadge: Y = !1,
        showBetaBadge: Z = !1,
        enableArtBoxShadow: q = !0,
        subscriptionTier: J = C.pe.TIER_2,
        isLoading: X = !1,
        hideBackButton: W,
        backButtonText: ee,
        showEnhancedUpsell: en,
        useSubscribeButtonGradient: et,
        subscribeButtonClassname: ea,
        hidePremiumOfferUpsell: ei,
        children: es,
        LeadingComponent: er,
        backgroundElements: el,
        smallText: ec = !1,
        footerClassName: eo,
        ...ed
    } = e, e_ = null != s, eu = (0, p.V)(), em = (0, g.O)(), ef = !ei && (eu?.subscription_trial?.sku_id === J || (0, E.U9)(em, J)) && !e_, {
        analyticsLocations: eh
    } = (0, _.Ay)(d.A.PREMIUM_UPSELL_MODAL), ex = {
        analyticsLocation: k,
        analyticsLocations: eh,
        analyticsSource: v,
        guildBoostProps: s,
        type: t
    }, eA = i.useRef(ex);
    i.useEffect(() => {
        eA.current = ex
    }), i.useEffect(() => {
        if (X) return;
        let {
            analyticsLocation: e,
            analyticsLocations: n,
            analyticsSource: t,
            guildBoostProps: a,
            type: i
        } = eA.current;
        e_ ? h.default.track(T.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: `${i} - Tier ${a?.boostedGuildTier}`,
            guild_id: a?.guild.id,
            channel_id: a?.channelId,
            location: e,
            location_stack: n
        }) : h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
            type: i,
            source: t,
            location: e,
            location_stack: n,
            sku_id: (0, x.mH)(J)
        })
    }, [e_, J, X]);
    let eg = (0, l.bG)([A.A], () => A.A.affinities),
        ep = eg.length > 1 && function(e) {
            switch (e) {
                case C.e.ANIMATED_AVATAR_MODAL_UPSELL:
                case C.e.ANIMATED_BANNER_MODAL_UPSELL:
                case C.e.PROFILE_EFFECT_MODAL_UPSELL:
                case C.e.AVATAR_DECORATION_MODAL_UPSELL:
                case C.e.FOR_LATER_MODAL_UPSELL:
                    return !0;
                default:
                    return !1
            }
        }(t),
        eL = (0, l.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        eL || u.xG()
    }, [eL]);
    let eE = q ? r()(S.JS, S.OV, R) : r()(S.JS, R),
        eN = null;
    return null != ed.artURL ? eN = (0, a.jsx)("img", {
        className: r()(P, S.Qw),
        alt: "",
        src: ed.artURL
    }) : null != ed.artElement && (eN = ed.artElement), (0, a.jsxs)(o.EOs, {
        "data-migration-pending": !0,
        className: r()(S.zr, !ef && D),
        "aria-label": n,
        transitionState: H,
        parentComponent: "PremiumUpsellModal",
        children: [null != eN && (0, a.jsxs)("div", {
            className: eE,
            children: [eN, Y ? (0, a.jsx)("img", {
                className: S.CI,
                alt: "",
                src: I
            }) : null]
        }), (0, a.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: r()(en ? S.es : S.Qs, !ef && y),
            children: X ? (0, a.jsx)(o.y$y, {}) : ef ? (0, a.jsx)(N.Ay, {
                onClose: w,
                type: t,
                subscriptionTier: eu?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                headingText: n,
                context: M,
                analyticsLocationObject: k,
                discountOffer: em,
                trialOffer: eu,
                children: U
            }) : (0, a.jsxs)("div", {
                className: S.hQ,
                children: [er, (0, a.jsxs)("div", {
                    className: S.kQ,
                    children: [(0, a.jsxs)(o.Heading, {
                        className: r()(S.wx, {
                            [S.k]: en
                        }, F),
                        variant: "heading-xl/bold",
                        children: [n, Z ? (0, a.jsx)(m.A, {
                            className: S.TN
                        }) : null]
                    }), ep ? (0, a.jsx)(b.A, {
                        affinities: eg
                    }) : void 0, es, (0, a.jsx)(o.Text, {
                        variant: ec ? "text-sm/normal" : "text-md/normal",
                        className: r()(z, S.uI),
                        children: O
                    })]
                })]
            })
        }), (0, a.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            className: r()(S.qr, eo, {
                [S.I$]: en
            }),
            children: [(0, a.jsxs)("div", {
                className: r()(S.E3, {
                    [S.Q_]: en
                }),
                children: [null != Q ? (0, a.jsx)(c.$n, {
                    "data-migration-pending": !0,
                    className: r()(S.Dc, V, {
                        [S.HZ]: en
                    }),
                    onClick: G,
                    size: c.$n.Sizes.SMALL,
                    color: en ? c.$n.Colors.CUSTOM : c.$n.Colors.PRIMARY,
                    look: c.$n.Looks.LINK,
                    children: Q
                }) : null, (() => {
                    if (e_) return (0, a.jsx)(f.A, {
                        analyticsLocation: k,
                        guild: s.guild,
                        onClose: w
                    });
                    let e = en ? j.intl.string(j.t.pj0XBN) : void 0;
                    return ef && (null != eu ? e = (0, x.FY)({
                        intervalType: eu?.subscription_trial?.interval,
                        intervalCount: eu?.subscription_trial?.interval_count
                    }) : null != em && (e = j.intl.formatToPlainString(j.t.bkQ4bH, {
                        percent: em.discount.amount
                    }))), (0, a.jsx)(L.A, {
                        className: ea,
                        showGradient: en || et,
                        premiumModalAnalyticsLocation: k,
                        subscriptionTier: J,
                        size: c.$n.Sizes.SMALL,
                        color: en || et ? c.$n.Colors.CUSTOM : c.$n.Colors.GREEN,
                        onClick: () => {
                            B?.(), w()
                        },
                        onSubscribeModalClose: $,
                        textOptions: {
                            textOverride: K ?? e
                        }
                    })
                })()]
            }), !W && !en && (0, a.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: null != ee ? ee : j.intl.string(j.t["13/7kX"]),
                onClick: w
            })]
        }), en ? (0, a.jsx)(o.s_y, {
            "data-migration-pending": !0,
            onClick: w,
            className: S.b
        }) : null, el]
    })
}