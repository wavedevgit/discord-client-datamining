/** chunk id: 975662 params = (module,exports,require) **/
n.d(t, {
    A: () => eh,
    U: () => em
});
var i, s = n(627968),
    l = n(64700),
    a = n(417597),
    r = n(554146),
    o = n(736653),
    d = n(793574),
    c = n(688810),
    u = n(531260),
    _ = n(915618),
    g = n(793943),
    A = n(826673),
    m = n(259065),
    h = n(206835),
    p = n(976860),
    x = n(780964),
    E = n(358776),
    T = n(840065),
    S = n(430452),
    C = n(287809),
    I = n(166403),
    f = n(255438),
    N = n(975571),
    b = n(927578),
    v = n(364558),
    O = n(161319),
    j = n(55691),
    R = n(95859),
    y = n(30084),
    P = n(322631),
    D = n(17307),
    L = n(788868),
    G = n(652215),
    M = n(49999),
    U = n(355097),
    k = n(985018),
    V = n(520650),
    w = n(927961),
    H = n(561852),
    B = n(522799),
    F = n(795710),
    Y = n(484813),
    z = n(659980),
    X = n(881784),
    W = n(8330),
    K = n(554452),
    Z = n(992186),
    q = n(380529),
    J = n(159312),
    Q = n(629139),
    $ = n(2908),
    ee = n(499309),
    et = n(866223),
    en = n(804368),
    ei = n(201337),
    es = n(531935),
    el = n(977838),
    ea = n(330290),
    er = n(260972),
    eo = n(899225),
    ed = n(106731),
    ec = n(419455),
    eu = n(509442),
    e_ = n(20462),
    eg = n(307966),
    eA = n(864579),
    em = ((i = {}).CLIENT_THEMES = "clientThemes", i.CLIPS = "clips", i.EARLY_ACCESS = "earlyAccess", i.ENTRANCE_SOUNDS = "entranceSounds", i.PROFILES = "profiles", i.SERVER_BOOSTS = "serverBoosts", i.GREY_SERVER_BOOSTS = "greyServerBoosts", i.SPECIAL_MEMBER_PRICING = "specialMemberPricing", i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", i.SPECIAL_SHOP_PERKS = "specialShopPerks", i.SUPER_REACTIONS = "superReactions", i.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", i.CUSTOM_APP_ICONS = "customAppIcons", i.MORE_EMOJI_POWER = "moreEmojiPower", i.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", i.SPECIAL_STICKER_ACCESS = "specialStickerAccess", i.LARGE_UPLOADS = "largeUploads", i.HD_VIDEO = "hdVideo", i.BADGE = "badge", i.GREY_BADGE = "greyBadge", i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", i.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", i.REFERRAL_PROGRAM = "referralProgram", i.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", i.SERVER_PROFILES = "serverProfiles", i.TENURE_BADGE = "tenureBadge", i.PERMADECOS = "permadecos", i.CUSTOM_THEMES = "customThemes", i.DISPLAY_NAME_STYLES = "displayNameStyles", i.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", i.PREMIUM_GROUP = "premiumGroup", i);
let eh = () => {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, f.Xq)(L.f3 / 1024, {
        useKibibytes: !0
    }), i = (0, a.bG)([I.A], () => I.A.getPremiumTypeSubscription()), em = null != i ? b.Ay.getPremiumPlanItem(i) : null, eh = (null != em ? b.Ay.getSkuIdForPlan(em.planId) : null) === L.pe.TIER_2, ep = C.default.getCurrentUser(), ex = (0, b.TW)(ep, L.PremiumTypes.TIER_2), eE = (0, b.TW)(ep, L.PremiumTypes.TIER_0), eT = (0, _.A)(S.Ay), {
        isFractionalPremiumActive: eS
    } = (0, u.A)(), eC = null != i && i.hasPremiumAtLeast(L.PremiumTypes.TIER_2), eI = (0, A.JZ)(r.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), ef = (0, h.A)({
        scrollPosition: U._F.TRY_IT_OUT,
        analyticsLocations: e
    }), eN = () => {
        (0, T.openUserSettings)(x.X.SOUNDBOARD_CATEGORY, {
            section: G.nc_.VOICE,
            subsection: U.MJ,
            analyticsLocations: e
        })
    }, eb = () => {
        (0, p.pX)(G.BVt.COLLECTIBLES_SHOP)
    }, ev = () => {
        let e = (0, E.Ci)("openCustomAppSettings") ? x.X.DISPLAY_IN_APP_ICON_CATEGORY : x.X.APPEARANCE_IN_APP_ICON;
        (0, T.openUserSettings)(e, {
            section: G.nc_.APPEARANCE
        })
    }, eO = l.useCallback(() => {
        (0, T.openUserSettings)(x.X.PROFILE_PANEL, {
            section: G.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, m.L)({
            analyticsLocations: e
        }))
    }, [e]), ej = new Date, eR = new Date(ej.getFullYear(), ej.getMonth() + 1, 0).getDate(), ey = ej.getDate() / eR * 100, eP = {
        clientThemes: {
            name: "clientThemes",
            title: k.intl.string(k.t.kWM48G),
            subtitle: k.intl.string(k.t.CjRASJ),
            description: k.intl.string(k.t.jBTTws),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: () => {
                let t = (0, E.Ci)("openClientThemes");
                (0, T.openUserSettings)(t ? x.X.DISPLAY_THEME_CATEGORY : x.X.APPEARANCE_PANEL, {
                    section: G.nc_.APPEARANCE,
                    analyticsLocations: e
                })
            },
            perkImage: z
        },
        clips: ex ? {
            name: "clips",
            title: k.intl.string(k.t.z2jK6X),
            subtitle: k.intl.string(k.t["hxy0/R"]),
            description: k.intl.string(k.t.Z6v86b),
            descriptionCta: eT ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.hvVgAZ),
            pillText: k.intl.string(k.t.EYxi0o),
            onCtaClick: eT ? () => {
                (0, T.openUserSettings)(x.X.CLIPS_PANEL, {
                    section: G.nc_.CLIPS,
                    analyticsLocations: e
                })
            } : () => {
                window.open(N.A.getArticleURL(G.MVz.CLIPS), "_blank")
            },
            perkImage: K
        } : {
            name: "clips",
            title: k.intl.string(k.t.z2jK6X),
            subtitle: k.intl.string(k.t["hxy0/R"]),
            description: k.intl.string(k.t.X9IeN3),
            pillText: k.intl.string(k.t.EYxi0o),
            perkImage: K
        },
        earlyAccess: ex ? {
            name: "earlyAccess",
            title: k.intl.string(k.t.UkLVeJ),
            subtitle: k.intl.string(k.t.xf9ePm),
            description: k.intl.string(k.t["+r4vdg"]),
            perkImage: q
        } : {
            name: "earlyAccess",
            title: k.intl.string(k.t.UkLVeJ),
            subtitle: k.intl.string(k.t.xf9ePm),
            description: k.intl.string(k.t["6+xTci"]),
            isPremiumGetCta: !0,
            perkImage: q
        },
        earlyAccessSeeAllVariant: ex ? {
            name: "earlyAccessSeeAllVariant",
            title: k.intl.string(k.t.UkLVeJ),
            subtitle: k.intl.string(k.t.xf9ePm),
            description: k.intl.string(k.t["+r4vdg"]),
            perkImage: J
        } : {
            name: "earlyAccess",
            title: k.intl.string(k.t.UkLVeJ),
            subtitle: k.intl.string(k.t.xf9ePm),
            description: k.intl.string(k.t["6+xTci"]),
            isPremiumGetCta: !0,
            perkImage: J
        },
        entranceSounds: ex ? {
            name: "entranceSounds",
            title: k.intl.string(k.t["f4M+H9"]),
            subtitle: k.intl.string(k.t["7ZCYvC"]),
            description: k.intl.string(k.t.mUT8bO),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: eN,
            perkImage: $
        } : {
            name: "entranceSounds",
            title: k.intl.string(k.t["f4M+H9"]),
            subtitle: k.intl.string(k.t["7ZCYvC"]),
            description: k.intl.string(k.t["3smf/f"]),
            perkImage: $
        },
        entranceSoundsSeeAllVariation: ex ? {
            name: "entranceSoundsSeeAllVariation",
            title: k.intl.string(k.t["f4M+H9"]),
            subtitle: k.intl.string(k.t["7ZCYvC"]),
            description: k.intl.string(k.t.mUT8bO),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: eN,
            perkImage: ee
        } : {
            name: "entranceSoundsSeeAllVariation",
            title: k.intl.string(k.t["f4M+H9"]),
            subtitle: k.intl.string(k.t["7ZCYvC"]),
            description: k.intl.string(k.t["3smf/f"]),
            perkImage: ee
        },
        profiles: {
            name: "profiles",
            title: k.intl.string(k.t.KcyDwF),
            subtitle: k.intl.string(k.t.Mt3U1W),
            description: k.intl.string(k.t.kWcDK8),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: ef,
            perkImage: X
        },
        serverBoosts: {
            name: "serverBoosts",
            title: k.intl.string(k.t["NyDu/6"]),
            subtitle: k.intl.string(k.t["4pEwXL"]),
            description: eS ? null : k.intl.string(k.t.jsyNHm),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: eS ? void 0 : () => {
                (0, T.openUserSettings)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    section: G.nc_.GUILD_BOOSTING,
                    analyticsLocations: e
                })
            },
            perkImage: W,
            hideOnNarrowScreen: !eS,
            imageOverlayText: eS ? k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase() : void 0
        },
        greyServerBoosts: {
            name: "greyServerBoosts",
            title: k.intl.string(k.t["NyDu/6"]),
            subtitle: k.intl.string(k.t["4pEwXL"]),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            perkImage: e_.A,
            imageOverlayText: k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase()
        },
        specialMemberPricing: {
            name: "specialMemberPricing",
            title: k.intl.string(k.t["0Mykgq"]),
            subtitle: k.intl.string(k.t.opgqDZ),
            description: k.intl.string(k.t["t+QZSd"]),
            descriptionCta: k.intl.string(k.t.dBJVnZ),
            onCtaClick: eb,
            perkImage: et
        },
        specialMemberPricingSeeAllVariant: {
            name: "specialMemberPricingSeeAllVariant",
            title: k.intl.string(k.t["0Mykgq"]),
            subtitle: k.intl.string(k.t.opgqDZ),
            description: k.intl.string(k.t["t+QZSd"]),
            descriptionCta: k.intl.string(k.t.dBJVnZ),
            onCtaClick: eb,
            perkImage: et
        },
        specialShopPerks: {
            name: "specialShopPerks",
            title: k.intl.string(k.t.U68LpL),
            subtitle: k.intl.string(k.t.chRZiX),
            description: k.intl.string(k.t["t+QZSd"]),
            descriptionCta: k.intl.string(k.t.dBJVnZ),
            onCtaClick: eb,
            perkImage: et
        },
        superReactions: {
            name: "superReactions",
            title: k.intl.string(k.t["6S7kO7"]),
            subtitle: k.intl.string(k.t.kN1JRI),
            description: k.intl.string(k.t.e7FKCi),
            perkImage: eo
        },
        upcomingDropUntimed: {
            name: "upcomingDropUntimed",
            title: k.intl.string(k.t.O5R3hr),
            pillText: k.intl.string(k.t.yhEY5G),
            backgroundImage: ei
        },
        badge: {
            name: "badge",
            title: k.intl.string(k.t.dcFfSJ),
            subtitle: k.intl.string(k.t["37MFFq"]),
            perkImage: H,
            description: k.intl.string(k.t.T1IS4j)
        },
        greyBadge: {
            name: "greyBadge",
            title: k.intl.string(k.t.dcFfSJ),
            subtitle: k.intl.string(k.t["37MFFq"]),
            perkImage: eg.A,
            description: k.intl.string(k.t.T1IS4j),
            imageOverlayText: k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase()
        },
        customAppIcons: {
            name: "customAppIcons",
            title: k.intl.string(k.t.OuItFi),
            subtitle: k.intl.string(k.t.mPyrE6),
            perkImage: Z,
            description: k.intl.string(k.t.e7FKCi),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: ev
        },
        moreEmojiPower: {
            name: "moreEmojiPower",
            title: k.intl.string(k.t["R2IV/Q"]),
            subtitle: k.intl.string(k.t.R5Xag2),
            perkImage: Q,
            description: k.intl.string(k.t["8lsjSw"])
        },
        customSoundsEverywhere: {
            name: "customSoundsEverywhere",
            title: k.intl.string(k.t.LWsArT),
            subtitle: k.intl.string(k.t.bTzbVk),
            perkImage: (0, D.t4)(t, B, F),
            description: k.intl.string(k.t.JLnOM2)
        },
        specialStickerAccess: {
            name: "specialStickerAccess",
            title: k.intl.string(k.t.tzdIwI),
            subtitle: k.intl.string(k.t.hJG8ZN),
            perkImage: (0, D.t4)(t, Y, ea),
            description: k.intl.string(k.t.e7FKCi)
        },
        largeUploads: {
            name: "largeUploads",
            title: k.intl.formatToPlainString(k.t.jqhAdL, {
                premiumMaxSize: n
            }),
            subtitle: k.intl.formatToPlainString(k.t["HI+cfm"], {
                premiumMaxSize: n
            }),
            perkImage: ed,
            description: k.intl.string(k.t["R0gx+0"])
        },
        hdVideo: {
            name: "hdVideo",
            title: k.intl.string(k.t.RSXQYO),
            subtitle: k.intl.string(k.t.ymCPxp),
            perkImage: er,
            description: k.intl.string(k.t["4WgB/4"])
        },
        newAppStylesUpdateJune2024: {
            name: "newAppStylesUpdateJune2024",
            title: k.intl.string(k.t.XQCSri),
            subtitle: k.intl.string(k.t.HC5wVV),
            description: k.intl.string(k.t.ee7wQ7),
            descriptionCta: ex || eE ? k.intl.string(k.t.y9TxXV) : k.intl.string(k.t.d8o6lc),
            isPremiumGetCta: !(ex || eE),
            onCtaClick: ex || eE ? ev : void 0,
            perkImage: en
        },
        referralProgram: {
            name: "referralProgram",
            title: k.intl.string(k.t.tPY4o9),
            subtitle: k.intl.string(k.t.JY0grC),
            description: k.intl.format(k.t["2JqTF6"], {
                helpdeskArticle: N.A.getArticleURL(G.MVz.REFERRAL_PROGRAM)
            }),
            descriptionCta: k.intl.string(k.t.JST6jl),
            isPremiumGetCta: !eh || void 0,
            perkImage: es
        },
        serverProfiles: {
            name: "serverProfiles",
            title: k.intl.string(k.t.I9TYMg),
            subtitle: k.intl.string(k.t.HMSHeH),
            descriptionCta: ex ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.JST6jl),
            isPremiumGetCta: !ex,
            onCtaClick: ex ? ef : void 0,
            perkImage: el
        },
        permadecos: {
            name: "permadecos",
            title: k.intl.string(k.t["57ngoo"]),
            subtitle: k.intl.string(k.t.piFFjd),
            description: k.intl.format(k.t.Pd7olh, {
                learnMoreLink: N.A.getArticleURL(G.MVz.PERMADECOS)
            }),
            descriptionCta: ex ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.JST6jl),
            isPremiumGetCta: !ex,
            onCtaClick: ex ? () => {
                eI || (0, A.Dr)(r.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
                    dismissAction: M.i.TAKE_ACTION
                }), ef()
            } : void 0,
            pillText: eI || !ex ? void 0 : k.intl.string(k.t.y2b7CA).toLocaleUpperCase(),
            perkImage: eA.A
        },
        customThemes: {
            name: "customThemes",
            title: k.intl.string(V.default["76L4b7"]),
            subtitle: k.intl.string(V.default.i3n50h),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: () => {
                (0, g.nf)(g.HP.CUSTOM_THEME)
            },
            perkImage: eu.A
        },
        displayNameStyles: {
            name: "displayNameStyles",
            title: k.intl.string(w.default.ABtBDQ),
            subtitle: k.intl.string(w.default.jhmU5E),
            descriptionCta: k.intl.string(k.t.jVcuVY),
            onCtaClick: eO,
            dismissibleContentType: r.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
            perkImage: ec.A,
            pillText: k.intl.string(k.t.y2b7CA).toLocaleUpperCase()
        },
        recurring3PPromotions: {
            name: "recurring3PPromotions",
            title: k.intl.string(k.t.m7PucM),
            subtitle: ep?.isFractionalPremiumWithNoStandardSub() ? k.intl.string(k.t.E1ONHQ) : k.intl.format(k.t["43kZKL"], {
                days: eR - ej.getDate()
            }),
            onCtaClick: () => (0, O.uE)({
                analyticsLocations: e
            }),
            pillText: k.intl.string(k.t.oW0eUd).toLocaleUpperCase(),
            description: k.intl.format(k.t.zh1X7u, {}),
            descriptionCta: k.intl.string(k.t.w7s5Qr),
            cardVariant: P.PJ.RECURRING_3P_PROMOTIONS,
            customContent: (0, s.jsx)(j.U, {
                percentage: ey,
                isFNUserWithNoStandardSub: !!ep?.isFractionalPremiumWithNoStandardSub()
            })
        },
        premiumGroup: (0, v.u)()
    };
    return ex && eC && (eP.tenureBadge = {
        name: "tenureBadge",
        title: k.intl.string(k.t.rnsqpa),
        pillText: k.intl.string(k.t["jyYgZ+"]).toLocaleUpperCase(),
        perkComponent: (0, s.jsx)(R.A, {}),
        cardVariant: P.PJ.NITRO_GRADIENT_HOVER_BORDER,
        onClick: () => (0, y.D)({
            analyticsLocations: e
        })
    }), eP
}