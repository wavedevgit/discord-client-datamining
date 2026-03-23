/** chunk id: 975662 params = (module,exports,require) **/
n.d(t, {
    A: () => ex,
    U: () => eA
});
var i, s = n(627968),
    l = n(64700),
    a = n(417597),
    r = n(554146),
    o = n(736653),
    d = n(793574),
    c = n(688810),
    u = n(531260),
    m = n(915618),
    _ = n(793943),
    g = n(826673),
    A = n(259065),
    x = n(206835),
    p = n(976860),
    h = n(780964),
    f = n(358776),
    T = n(840065),
    E = n(430452),
    S = n(287809),
    b = n(166403),
    C = n(255438),
    N = n(975571),
    v = n(927578),
    I = n(364558),
    j = n(161319),
    y = n(55691),
    O = n(95859),
    R = n(30084),
    L = n(322631),
    P = n(17307),
    D = n(788868),
    M = n(652215),
    G = n(49999),
    k = n(355097),
    U = n(985018),
    w = n(520650),
    V = n(927961),
    B = n(561852),
    F = n(522799),
    H = n(795710),
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
    em = n(20462),
    e_ = n(307966),
    eg = n(864579),
    eA = ((i = {}).CLIENT_THEMES = "clientThemes", i.CLIPS = "clips", i.EARLY_ACCESS = "earlyAccess", i.ENTRANCE_SOUNDS = "entranceSounds", i.PROFILES = "profiles", i.SERVER_BOOSTS = "serverBoosts", i.GREY_SERVER_BOOSTS = "greyServerBoosts", i.SPECIAL_MEMBER_PRICING = "specialMemberPricing", i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", i.SPECIAL_SHOP_PERKS = "specialShopPerks", i.SUPER_REACTIONS = "superReactions", i.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", i.CUSTOM_APP_ICONS = "customAppIcons", i.MORE_EMOJI_POWER = "moreEmojiPower", i.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", i.SPECIAL_STICKER_ACCESS = "specialStickerAccess", i.LARGE_UPLOADS = "largeUploads", i.HD_VIDEO = "hdVideo", i.BADGE = "badge", i.GREY_BADGE = "greyBadge", i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", i.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", i.REFERRAL_PROGRAM = "referralProgram", i.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", i.SERVER_PROFILES = "serverProfiles", i.TENURE_BADGE = "tenureBadge", i.PERMADECOS = "permadecos", i.CUSTOM_THEMES = "customThemes", i.DISPLAY_NAME_STYLES = "displayNameStyles", i.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", i.PREMIUM_GROUP = "premiumGroup", i);
let ex = () => {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, C.Xq)(D.f3 / 1024, {
        useKibibytes: !0
    }), i = (0, a.bG)([b.A], () => b.A.getPremiumTypeSubscription()), eA = null != i ? v.Ay.getPremiumPlanItem(i) : null, ex = (null != eA ? v.Ay.getSkuIdForPlan(eA.planId) : null) === D.pe.TIER_2, ep = S.default.getCurrentUser(), eh = (0, v.TW)(ep, D.PremiumTypes.TIER_2), ef = (0, v.TW)(ep, D.PremiumTypes.TIER_0), eT = (0, m.A)(E.Ay), {
        isFractionalPremiumActive: eE
    } = (0, u.A)(), eS = null != i && i.hasPremiumAtLeast(D.PremiumTypes.TIER_2), eb = (0, g.JZ)(r.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eC = (0, x.A)({
        scrollPosition: k._F.TRY_IT_OUT,
        analyticsLocations: e
    }), eN = () => {
        (0, T.openUserSettings)(h.X.SOUNDBOARD_CATEGORY, {
            analyticsLocations: e
        })
    }, ev = () => {
        (0, p.pX)(M.BVt.COLLECTIBLES_SHOP)
    }, eI = () => {
        let e = (0, f.Ci)("openCustomAppSettings") ? h.X.DISPLAY_IN_APP_ICON_CATEGORY : h.X.APPEARANCE_IN_APP_ICON;
        (0, T.openUserSettings)(e)
    }, ej = l.useCallback(() => {
        (0, T.openUserSettings)(h.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, A.L)({
            analyticsLocations: e
        }))
    }, [e]), ey = new Date, eO = new Date(ey.getFullYear(), ey.getMonth() + 1, 0).getDate(), eR = ey.getDate() / eO * 100, eL = {
        clientThemes: {
            name: "clientThemes",
            title: U.intl.string(U.t.kWM48G),
            subtitle: U.intl.string(U.t.CjRASJ),
            description: U.intl.string(U.t.jBTTws),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: () => {
                let t = (0, f.Ci)("openClientThemes");
                (0, T.openUserSettings)(t ? h.X.DISPLAY_THEME_CATEGORY : h.X.APPEARANCE_PANEL, {
                    analyticsLocations: e
                })
            },
            perkImage: z
        },
        clips: eh ? {
            name: "clips",
            title: U.intl.string(U.t.z2jK6X),
            subtitle: U.intl.string(U.t["hxy0/R"]),
            description: U.intl.string(U.t.Z6v86b),
            descriptionCta: eT ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.hvVgAZ),
            pillText: U.intl.string(U.t.EYxi0o),
            onCtaClick: eT ? () => {
                (0, T.openUserSettings)(h.X.CLIPS_PANEL, {
                    analyticsLocations: e
                })
            } : () => {
                window.open(N.A.getArticleURL(M.MVz.CLIPS), "_blank")
            },
            perkImage: K
        } : {
            name: "clips",
            title: U.intl.string(U.t.z2jK6X),
            subtitle: U.intl.string(U.t["hxy0/R"]),
            description: U.intl.string(U.t.X9IeN3),
            pillText: U.intl.string(U.t.EYxi0o),
            perkImage: K
        },
        earlyAccess: eh ? {
            name: "earlyAccess",
            title: U.intl.string(U.t.UkLVeJ),
            subtitle: U.intl.string(U.t.xf9ePm),
            description: U.intl.string(U.t["+r4vdg"]),
            perkImage: q
        } : {
            name: "earlyAccess",
            title: U.intl.string(U.t.UkLVeJ),
            subtitle: U.intl.string(U.t.xf9ePm),
            description: U.intl.string(U.t["6+xTci"]),
            isPremiumGetCta: !0,
            perkImage: q
        },
        earlyAccessSeeAllVariant: eh ? {
            name: "earlyAccessSeeAllVariant",
            title: U.intl.string(U.t.UkLVeJ),
            subtitle: U.intl.string(U.t.xf9ePm),
            description: U.intl.string(U.t["+r4vdg"]),
            perkImage: J
        } : {
            name: "earlyAccess",
            title: U.intl.string(U.t.UkLVeJ),
            subtitle: U.intl.string(U.t.xf9ePm),
            description: U.intl.string(U.t["6+xTci"]),
            isPremiumGetCta: !0,
            perkImage: J
        },
        entranceSounds: eh ? {
            name: "entranceSounds",
            title: U.intl.string(U.t["f4M+H9"]),
            subtitle: U.intl.string(U.t["7ZCYvC"]),
            description: U.intl.string(U.t.mUT8bO),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: eN,
            perkImage: $
        } : {
            name: "entranceSounds",
            title: U.intl.string(U.t["f4M+H9"]),
            subtitle: U.intl.string(U.t["7ZCYvC"]),
            description: U.intl.string(U.t["3smf/f"]),
            perkImage: $
        },
        entranceSoundsSeeAllVariation: eh ? {
            name: "entranceSoundsSeeAllVariation",
            title: U.intl.string(U.t["f4M+H9"]),
            subtitle: U.intl.string(U.t["7ZCYvC"]),
            description: U.intl.string(U.t.mUT8bO),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: eN,
            perkImage: ee
        } : {
            name: "entranceSoundsSeeAllVariation",
            title: U.intl.string(U.t["f4M+H9"]),
            subtitle: U.intl.string(U.t["7ZCYvC"]),
            description: U.intl.string(U.t["3smf/f"]),
            perkImage: ee
        },
        profiles: {
            name: "profiles",
            title: U.intl.string(U.t.KcyDwF),
            subtitle: U.intl.string(U.t.Mt3U1W),
            description: U.intl.string(U.t.kWcDK8),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: eC,
            perkImage: X
        },
        serverBoosts: {
            name: "serverBoosts",
            title: U.intl.string(U.t["NyDu/6"]),
            subtitle: U.intl.string(U.t["4pEwXL"]),
            description: eE ? null : U.intl.string(U.t.jsyNHm),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: eE ? void 0 : () => {
                (0, T.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    analyticsLocations: e
                })
            },
            perkImage: W,
            hideOnNarrowScreen: !eE,
            imageOverlayText: eE ? U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase() : void 0
        },
        greyServerBoosts: {
            name: "greyServerBoosts",
            title: U.intl.string(U.t["NyDu/6"]),
            subtitle: U.intl.string(U.t["4pEwXL"]),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            perkImage: em.A,
            imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase()
        },
        specialMemberPricing: {
            name: "specialMemberPricing",
            title: U.intl.string(U.t["0Mykgq"]),
            subtitle: U.intl.string(U.t.opgqDZ),
            description: U.intl.string(U.t["t+QZSd"]),
            descriptionCta: U.intl.string(U.t.dBJVnZ),
            onCtaClick: ev,
            perkImage: et
        },
        specialMemberPricingSeeAllVariant: {
            name: "specialMemberPricingSeeAllVariant",
            title: U.intl.string(U.t["0Mykgq"]),
            subtitle: U.intl.string(U.t.opgqDZ),
            description: U.intl.string(U.t["t+QZSd"]),
            descriptionCta: U.intl.string(U.t.dBJVnZ),
            onCtaClick: ev,
            perkImage: et
        },
        specialShopPerks: {
            name: "specialShopPerks",
            title: U.intl.string(U.t.U68LpL),
            subtitle: U.intl.string(U.t.chRZiX),
            description: U.intl.string(U.t["t+QZSd"]),
            descriptionCta: U.intl.string(U.t.dBJVnZ),
            onCtaClick: ev,
            perkImage: et
        },
        superReactions: {
            name: "superReactions",
            title: U.intl.string(U.t["6S7kO7"]),
            subtitle: U.intl.string(U.t.kN1JRI),
            description: U.intl.string(U.t.e7FKCi),
            perkImage: eo
        },
        upcomingDropUntimed: {
            name: "upcomingDropUntimed",
            title: U.intl.string(U.t.O5R3hr),
            pillText: U.intl.string(U.t.yhEY5G),
            backgroundImage: ei
        },
        badge: {
            name: "badge",
            title: U.intl.string(U.t.dcFfSJ),
            subtitle: U.intl.string(U.t["37MFFq"]),
            perkImage: B,
            description: U.intl.string(U.t.T1IS4j)
        },
        greyBadge: {
            name: "greyBadge",
            title: U.intl.string(U.t.dcFfSJ),
            subtitle: U.intl.string(U.t["37MFFq"]),
            perkImage: e_.A,
            description: U.intl.string(U.t.T1IS4j),
            imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase()
        },
        customAppIcons: {
            name: "customAppIcons",
            title: U.intl.string(U.t.OuItFi),
            subtitle: U.intl.string(U.t.mPyrE6),
            perkImage: Z,
            description: U.intl.string(U.t.e7FKCi),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: eI
        },
        moreEmojiPower: {
            name: "moreEmojiPower",
            title: U.intl.string(U.t["R2IV/Q"]),
            subtitle: U.intl.string(U.t.R5Xag2),
            perkImage: Q,
            description: U.intl.string(U.t["8lsjSw"])
        },
        customSoundsEverywhere: {
            name: "customSoundsEverywhere",
            title: U.intl.string(U.t.LWsArT),
            subtitle: U.intl.string(U.t.bTzbVk),
            perkImage: (0, P.t4)(t, F, H),
            description: U.intl.string(U.t.JLnOM2)
        },
        specialStickerAccess: {
            name: "specialStickerAccess",
            title: U.intl.string(U.t.tzdIwI),
            subtitle: U.intl.string(U.t.hJG8ZN),
            perkImage: (0, P.t4)(t, Y, ea),
            description: U.intl.string(U.t.e7FKCi)
        },
        largeUploads: {
            name: "largeUploads",
            title: U.intl.formatToPlainString(U.t.jqhAdL, {
                premiumMaxSize: n
            }),
            subtitle: U.intl.formatToPlainString(U.t["HI+cfm"], {
                premiumMaxSize: n
            }),
            perkImage: ed,
            description: U.intl.string(U.t["R0gx+0"])
        },
        hdVideo: {
            name: "hdVideo",
            title: U.intl.string(U.t.RSXQYO),
            subtitle: U.intl.string(U.t.ymCPxp),
            perkImage: er,
            description: U.intl.string(U.t["4WgB/4"])
        },
        newAppStylesUpdateJune2024: {
            name: "newAppStylesUpdateJune2024",
            title: U.intl.string(U.t.XQCSri),
            subtitle: U.intl.string(U.t.HC5wVV),
            description: U.intl.string(U.t.ee7wQ7),
            descriptionCta: eh || ef ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lc),
            isPremiumGetCta: !(eh || ef),
            onCtaClick: eh || ef ? eI : void 0,
            perkImage: en
        },
        referralProgram: {
            name: "referralProgram",
            title: U.intl.string(U.t.tPY4o9),
            subtitle: U.intl.string(U.t.JY0grC),
            description: U.intl.format(U.t["2JqTF6"], {
                helpdeskArticle: N.A.getArticleURL(M.MVz.REFERRAL_PROGRAM)
            }),
            descriptionCta: U.intl.string(U.t.JST6jl),
            isPremiumGetCta: !ex || void 0,
            perkImage: es
        },
        serverProfiles: {
            name: "serverProfiles",
            title: U.intl.string(U.t.I9TYMg),
            subtitle: U.intl.string(U.t.HMSHeH),
            descriptionCta: eh ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
            isPremiumGetCta: !eh,
            onCtaClick: eh ? eC : void 0,
            perkImage: el
        },
        permadecos: {
            name: "permadecos",
            title: U.intl.string(U.t["57ngoo"]),
            subtitle: U.intl.string(U.t.piFFjd),
            description: U.intl.format(U.t.Pd7olh, {
                learnMoreLink: N.A.getArticleURL(M.MVz.PERMADECOS)
            }),
            descriptionCta: eh ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
            isPremiumGetCta: !eh,
            onCtaClick: eh ? () => {
                eb || (0, g.Dr)(r.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
                    dismissAction: G.i.TAKE_ACTION
                }), eC()
            } : void 0,
            pillText: eb || !eh ? void 0 : U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
            perkImage: eg.A
        },
        customThemes: {
            name: "customThemes",
            title: U.intl.string(w.default["76L4b7"]),
            subtitle: U.intl.string(w.default.i3n50h),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: () => {
                (0, _.nf)(_.HP.CUSTOM_THEME)
            },
            perkImage: eu.A
        },
        displayNameStyles: {
            name: "displayNameStyles",
            title: U.intl.string(V.default.ABtBDQ),
            subtitle: U.intl.string(V.default.jhmU5E),
            descriptionCta: U.intl.string(U.t.jVcuVY),
            onCtaClick: ej,
            dismissibleContentType: r.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
            perkImage: ec.A,
            pillText: U.intl.string(U.t.y2b7CA).toLocaleUpperCase()
        },
        recurring3PPromotions: {
            name: "recurring3PPromotions",
            title: U.intl.string(U.t.m7PucM),
            subtitle: ep?.isFractionalPremiumWithNoStandardSub() ? U.intl.string(U.t.E1ONHQ) : U.intl.format(U.t["43kZKL"], {
                days: eO - ey.getDate()
            }),
            onCtaClick: () => (0, j.uE)({
                analyticsLocations: e
            }),
            pillText: U.intl.string(U.t.oW0eUd).toLocaleUpperCase(),
            description: U.intl.format(U.t.zh1X7u, {}),
            descriptionCta: U.intl.string(U.t.w7s5Qr),
            cardVariant: L.PJ.RECURRING_3P_PROMOTIONS,
            customContent: (0, s.jsx)(y.U, {
                percentage: eR,
                isFNUserWithNoStandardSub: !!ep?.isFractionalPremiumWithNoStandardSub()
            })
        },
        premiumGroup: (0, I.u)()
    };
    return eh && eS && (eL.tenureBadge = {
        name: "tenureBadge",
        title: U.intl.string(U.t.rnsqpa),
        pillText: U.intl.string(U.t["jyYgZ+"]).toLocaleUpperCase(),
        perkComponent: (0, s.jsx)(O.A, {}),
        cardVariant: L.PJ.NITRO_GRADIENT_HOVER_BORDER,
        onClick: () => (0, R.D)({
            analyticsLocations: e
        })
    }), eL
}