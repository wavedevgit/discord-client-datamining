/** chunk id: 23003 params = (module,exports,require) **/
a.d(t, {
    A0: () => er,
    Ay: () => el,
    NI: () => es,
    Tb: () => en
});
var n, r, s, l = a(627968),
    i = a(64700),
    d = a(192308),
    o = a(793574),
    c = a(688810),
    u = a(793943),
    m = a(259065),
    p = a(206835),
    f = a(649032),
    b = a(26508),
    A = a(780964),
    h = a(358776),
    _ = a(840065),
    R = a(676279),
    g = a(975571),
    x = a(612669),
    E = a(88001),
    C = a(652215),
    N = a(355097),
    v = a(519412),
    I = a(49370),
    S = a(985018),
    T = a(520650),
    P = a(927961),
    y = a(817577),
    D = a(748222),
    O = a(743501),
    j = a(652700),
    U = a(282818),
    L = a(965132),
    M = a(576765),
    w = a(88433),
    B = a(206771),
    k = a(533234),
    G = a(39508),
    V = a(198962),
    Y = a(636395),
    W = a(871891),
    H = a(116427),
    F = a(281146),
    K = a(324108),
    X = a(158178),
    $ = a(199579),
    z = a(170467),
    J = a(909340),
    q = a(455482),
    Z = a(573573),
    Q = a(233572),
    ee = a(437466),
    et = a(23145),
    ea = a(56582),
    en = ((n = {}).CONTAINED = "contained", n.OVERLAY = "overlay", n),
    er = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r),
    es = ((s = {}).REFERRAL_PROGRAM = "referralProgram", s.SERVER_PROFILES = "serverProfiles", s.SHOW_YOUR_STYLE = "showYourStyle", s.YOUR_SPACE = "yourSpace", s.EMOJIS = "emojis", s.NO_LIMITS = "noLimits", s.CUSTOM_THEMES = "customThemes", s.DISPLAY_NAME_STYLES = "displayNameStyles", s.PREMIUM_GROUP = "premiumGroup", s.ORB_REWARDS = "orbRewards", s);
let el = () => {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(o.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, p.A)({
        scrollPosition: N._F.TRY_IT_OUT,
        analyticsLocations: e
    }), n = (0, x.O9)(), r = (0, i.useCallback)(() => {
        (0, _.openUserSettings)(A.X.PROFILE_PANEL, {
            section: C.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, m.L)({
            analyticsLocations: e
        }))
    }, [e]), s = (0, R.TM)(), en = g.A.getArticleURL(C.MVz.REFERRAL_PROGRAM), er = {
        premiumGroup: {
            thumbnail: y,
            assetUrl: y
        },
        serverProfiles: {
            thumbnail: D,
            assetUrl: s ? et.Ay : ea.Ay
        },
        customThemes: {
            thumbnail: Q.A,
            assetUrl: s ? Z.A : ee.A
        },
        displayNameStyles: {
            thumbnail: j.A,
            assetUrl: s ? O.A : U.A
        },
        referralProgram: {
            thumbnail: Y.A,
            assetUrl: s ? V.A : W.A
        },
        showYourStyle: {
            thumbnail: F.A,
            assetUrl: s ? H.A : K.A
        },
        yourSpace: {
            thumbnail: $.A,
            assetUrl: s ? X.A : z.A
        },
        emojis: {
            thumbnail: M.A,
            assetUrl: s ? L.A : w.A
        },
        noLimits: {
            thumbnail: k.A,
            assetUrl: s ? B.A : G.A
        },
        orbRewards: {
            thumbnail: q.A,
            assetUrl: J.A
        }
    }, es = {
        name: "serverProfiles",
        title: S.intl.string(S.t.I9TYMg),
        description: S.intl.string(S.t.HMSHeH),
        descriptionCta: S.intl.string(S.t.jVcuVY),
        onClick: t,
        previewImage: er.serverProfiles.thumbnail,
        videoUrl: er.serverProfiles.assetUrl
    }, el = {
        name: "referralProgram",
        title: S.intl.string(S.t.tPY4o9),
        description: S.intl.format(S.t.jRPQUH, {
            learnMoreLink: en
        }),
        previewImage: er.referralProgram.thumbnail,
        videoUrl: er.referralProgram.assetUrl
    }, ei = {
        name: "customThemes",
        title: S.intl.string(T.default.XokIHM),
        description: S.intl.string(T.default["7esQMC"]),
        descriptionCta: S.intl.string(S.t.jVcuVY),
        previewImage: er.customThemes.thumbnail,
        onClick: () => {
            (0, u.nf)(u.HP.CUSTOM_THEME)
        },
        videoUrl: er.customThemes.assetUrl
    }, ed = {
        name: "displayNameStyles",
        title: S.intl.string(P.default.ABtBDQ),
        description: S.intl.string(P.default.MFNXZh),
        descriptionCta: S.intl.string(S.t.jVcuVY),
        previewImage: er.displayNameStyles.thumbnail,
        onClick: r,
        badgeText: S.intl.string(S.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: er.displayNameStyles.assetUrl
    }, eo = {
        name: "premiumGroup",
        title: S.intl.formatToPlainString(v.default.VFEDDB, {
            premiumGroupProductName: (0, E.DP)()
        }),
        description: S.intl.formatToPlainString(v.default.WudmR3, {
            totalSeats: E.aw,
            premiumGroupProductName: (0, E.DP)()
        }),
        descriptionCta: S.intl.string(S.t.hvVgAZ),
        previewImage: er.premiumGroup.thumbnail,
        videoUrl: er.premiumGroup.assetUrl,
        onClick: () => {
            (0, d.openModalLazy)(async () => {
                let {
                    default: e
                } = await a.e("69595").then(a.bind(a, 526710));
                return t => (0, l.jsx)(e, {
                    ...t
                })
            })
        },
        badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    }, ec = {
        name: "showYourStyle",
        title: S.intl.string(S.t.Ij3Zmv),
        description: S.intl.string(S.t.UsOUxY),
        descriptionCta: S.intl.string(S.t.jVcuVY),
        previewImage: er.showYourStyle.thumbnail,
        onClick: t,
        videoUrl: er.showYourStyle.assetUrl
    }, eu = {
        name: "yourSpace",
        title: S.intl.string(S.t.Wme3nX),
        description: S.intl.string(S.t["/aAIqV"]),
        descriptionCta: S.intl.string(S.t.jVcuVY),
        previewImage: er.yourSpace.thumbnail,
        onClick: () => {
            {
                let t = (0, h.Ci)("openClientThemes"),
                    {
                        openUserSettings: n
                    } = a(840065);
                n(t ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, {
                    section: C.nc_.APPEARANCE,
                    analyticsLocations: e
                })
            }
        },
        videoUrl: er.yourSpace.assetUrl
    }, em = {
        name: "emojis",
        title: S.intl.string(S.t.zY5PPb),
        description: S.intl.string(S.t.R5Xag2),
        previewImage: er.emojis.thumbnail,
        videoUrl: er.emojis.assetUrl
    }, ep = {
        name: "noLimits",
        title: S.intl.string(S.t["6b3ydG"]),
        description: S.intl.string(S.t["Y+IJyg"]),
        previewImage: er.noLimits.thumbnail,
        videoUrl: er.noLimits.assetUrl
    }, ef = (0, b.DK)(f.W.NITRO, "useBentoBoxes"), eb = {
        name: "orbRewards",
        title: S.intl.string(I.default["ZFJ/NU"]),
        description: S.intl.string(I.default.wMi514),
        descriptionCta: S.intl.string(S.t.hvVgAZ),
        onClick: () => {
            window.open(g.A.getArticleURL(C.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: er.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: er.orbRewards.assetUrl,
        badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    };
    return {
        whatsNewBoxes: n ? ef ? [
            [eo],
            [eb, el]
        ] : [
            [eo],
            [es, el]
        ] : ef ? [
            [eb],
            [es, el]
        ] : [
            [ed],
            [ei, el]
        ],
        bestOfBoxes: [
            [ec],
            [eu],
            [em, ep]
        ]
    }
}