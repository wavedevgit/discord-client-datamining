/** chunk id: 244975 params = (module,exports,require) **/
t.d(n, {
    A: () => M
});
var a = t(627968),
    s = t(64700),
    i = t(503698),
    r = t.n(i),
    l = t(421380),
    c = t(397927),
    o = t(793574),
    d = t(688810),
    _ = t(611371),
    u = t(721923),
    m = t(954571),
    p = t(927578),
    A = t(848245),
    L = t(422936),
    x = t(234419),
    h = t(725807),
    E = t(511484),
    g = t(811611),
    f = t(841252),
    b = t(788868),
    C = t(652215),
    N = t(985018),
    j = t(535192),
    S = t(669149);

function M(e) {
    let {
        title: n,
        type: t,
        guildBoostProps: i,
        analyticsSource: M,
        analyticsLocation: k,
        body: T,
        context: O,
        glowUp: I,
        modalClassName: U,
        modalContentClassName: v,
        artContainerClassName: y,
        artClassName: D,
        headerClassName: R,
        bodyClassName: P,
        transitionState: $,
        onClose: w,
        onSubscribeClick: Q,
        onSubscribeFinish: z,
        onSecondaryClick: B,
        secondaryCTA: H,
        secondaryCTAClassName: V,
        subscribeButtonText: F,
        showNewBadge: G = !1,
        showBetaBadge: q = !1,
        enableArtBoxShadow: Y = !0,
        subscriptionTier: Z = b.pe.TIER_2,
        isLoading: J = !1,
        hideBackButton: K,
        backButtonText: W,
        showEnhancedUpsell: X,
        useSubscribeButtonGradient: ee,
        subscribeButtonClassname: en,
        hidePremiumOfferUpsell: et,
        children: ea,
        LeadingComponent: es,
        backgroundElements: ei,
        smallText: er = !1,
        footerClassName: el,
        ...ec
    } = e, eo = null != i, ed = (0, x.V)(), e_ = (0, L.O)(), eu = !et && (ed?.subscription_trial?.sku_id === Z || (0, E.U9)(e_, Z)) && !eo, {
        analyticsLocations: em
    } = (0, d.Ay)(o.A.PREMIUM_UPSELL_MODAL), ep = {
        analyticsLocation: k,
        analyticsLocations: em,
        analyticsSource: M,
        guildBoostProps: i,
        type: t
    }, eA = s.useRef(ep);
    s.useEffect(() => {
        eA.current = ep
    }), s.useEffect(() => {
        if (J) return;
        let {
            analyticsLocation: e,
            analyticsLocations: n,
            analyticsSource: t,
            guildBoostProps: a,
            type: s
        } = eA.current;
        eo ? m.default.track(C.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: `${s} - Tier ${a?.boostedGuildTier}`,
            guild_id: a?.guild.id,
            channel_id: a?.channelId,
            location: e,
            location_stack: n
        }) : m.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
            type: s,
            source: t,
            location: e,
            location_stack: n,
            sku_id: (0, p.mH)(Z)
        })
    }, [eo, Z, J]);
    let eL = (0, A.b)(),
        ex = eL.length > 1 && function(e) {
            switch (e) {
                case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                case b.e.FOR_LATER_MODAL_UPSELL:
                    return !0;
                default:
                    return !1
            }
        }(t),
        eh = Y ? r()(j.JS, j.OV, y) : r()(j.JS, y),
        eE = null;
    return null != ec.artURL ? eE = (0, a.jsx)("img", {
        className: r()(D, j.Qw),
        alt: "",
        src: ec.artURL
    }) : null != ec.artElement && (eE = ec.artElement), (0, a.jsxs)(c.EOs, {
        "data-migration-pending": !0,
        className: r()(j.zr, !eu && U),
        "aria-label": n,
        transitionState: $,
        parentComponent: "PremiumUpsellModal",
        children: [null != eE && (0, a.jsxs)("div", {
            className: eh,
            children: [eE, G ? (0, a.jsx)("img", {
                className: j.CI,
                alt: "",
                src: S
            }) : null]
        }), (0, a.jsx)(c.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: r()(X ? j.es : j.Qs, !eu && v),
            children: J ? (0, a.jsx)(c.y$y, {}) : eu ? (0, a.jsx)(g.Ay, {
                onClose: w,
                type: t,
                subscriptionTier: ed?.subscription_trial?.sku_id ?? b.pe.TIER_2,
                headingText: n,
                context: O,
                analyticsLocationObject: k,
                discountOffer: e_,
                trialOffer: ed,
                children: I
            }) : (0, a.jsxs)("div", {
                className: j.hQ,
                children: [es, (0, a.jsxs)("div", {
                    className: j.kQ,
                    children: [(0, a.jsxs)(c.Heading, {
                        className: r()(j.wx, {
                            [j.k]: X
                        }, R),
                        variant: "heading-xl/bold",
                        children: [n, q ? (0, a.jsx)(_.A, {
                            className: j.TN
                        }) : null]
                    }), ex ? (0, a.jsx)(f.A, {
                        affinities: eL
                    }) : void 0, ea, (0, a.jsx)(c.Text, {
                        variant: er ? "text-sm/normal" : "text-md/normal",
                        className: r()(P, j.uI),
                        children: T
                    })]
                })]
            })
        }), (0, a.jsxs)(c.jlY, {
            "data-migration-pending": !0,
            className: r()(j.qr, el, {
                [j.I$]: X
            }),
            children: [(0, a.jsxs)("div", {
                className: r()(j.E3, {
                    [j.Q_]: X
                }),
                children: [null != H ? (0, a.jsx)(l.$n, {
                    "data-migration-pending": !0,
                    className: r()(j.Dc, V, {
                        [j.HZ]: X
                    }),
                    onClick: B,
                    size: l.$n.Sizes.SMALL,
                    color: X ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
                    look: l.$n.Looks.LINK,
                    children: H
                }) : null, (() => {
                    if (eo) return (0, a.jsx)(u.A, {
                        analyticsLocation: k,
                        guild: i.guild,
                        onClose: w
                    });
                    let e = X ? N.intl.string(N.t.pj0XBN) : void 0;
                    return eu && (null != ed ? e = (0, p.FY)({
                        intervalType: ed?.subscription_trial?.interval,
                        intervalCount: ed?.subscription_trial?.interval_count
                    }) : null != e_ && (e = N.intl.formatToPlainString(N.t.bkQ4bH, {
                        percent: e_.discount.amount
                    }))), (0, a.jsx)(h.A, {
                        className: en,
                        showGradient: X || ee,
                        premiumModalAnalyticsLocation: k,
                        subscriptionTier: Z,
                        size: l.$n.Sizes.SMALL,
                        color: X || ee ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
                        onClick: () => {
                            Q?.(), w()
                        },
                        onSubscribeModalClose: z,
                        textOptions: {
                            textOverride: F ?? e
                        }
                    })
                })()]
            }), !K && !X && (0, a.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                text: null != W ? W : N.intl.string(N.t["13/7kX"]),
                onClick: w
            })]
        }), X ? (0, a.jsx)(c.s_y, {
            "data-migration-pending": !0,
            onClick: w,
            className: j.b
        }) : null, ei]
    })
}