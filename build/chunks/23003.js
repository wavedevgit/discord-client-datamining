/** chunk id: 23003 params = (module,exports,require) **/
a.d(t, {
    A0: () => el,
    Ay: () => ec,
    NI: () => eo,
    Tb: () => ed
});
var n, r, s, i = a(627968),
    d = a(64700),
    l = a(192308),
    o = a(397927),
    c = a(793574),
    u = a(688810),
    _ = a(793943),
    m = a(259065),
    p = a(532794),
    b = a(206835),
    f = a(649032),
    g = a(26508),
    h = a(780964),
    A = a(358776),
    x = a(840065),
    R = a(676279),
    C = a(975571),
    E = a(457569),
    v = a(612669),
    N = a(788868),
    I = a(88001),
    T = a(652215),
    S = a(355097),
    y = a(519412),
    P = a(49370),
    j = a(985018),
    D = a(520650),
    U = a(927961),
    O = a(817577),
    M = a(748222),
    L = a(743501),
    w = a(652700),
    B = a(282818),
    k = a(965132),
    G = a(576765),
    V = a(88433),
    W = a(206771),
    Y = a(533234),
    H = a(39508),
    F = a(198962),
    K = a(636395),
    X = a(871891),
    q = a(116427),
    z = a(281146),
    $ = a(324108),
    J = a(158178),
    Z = a(199579),
    Q = a(170467),
    ee = a(909340),
    et = a(455482),
    ea = a(573573),
    en = a(233572),
    er = a(437466),
    es = a(23145),
    ei = a(56582),
    ed = ((n = {}).CONTAINED = "contained", n.OVERLAY = "overlay", n),
    el = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r),
    eo = ((s = {}).REFERRAL_PROGRAM = "referralProgram", s.SERVER_PROFILES = "serverProfiles", s.SHOW_YOUR_STYLE = "showYourStyle", s.YOUR_SPACE = "yourSpace", s.EMOJIS = "emojis", s.NO_LIMITS = "noLimits", s.CUSTOM_THEMES = "customThemes", s.DISPLAY_NAME_STYLES = "displayNameStyles", s.PREMIUM_GROUP = "premiumGroup", s.ORB_REWARDS = "orbRewards", s);
let ec = () => {
    let {
        analyticsLocations: e
    } = (0, u.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, b.A)({
        scrollPosition: S._F.TRY_IT_OUT,
        analyticsLocations: e
    }), n = (0, v.O9)(), r = (0, E.A)({
        location: "bento_box"
    }), s = (0, d.useCallback)(() => {
        (0, x.openUserSettings)(h.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, m.L)({
            analyticsLocations: e
        }))
    }, [e]), ed = (0, d.useCallback)(() => {
        (0, p.A)({
            subscriptionTier: N.pe.TIER_2,
            initialPlanId: N.gD.PREMIUM_GROUP_MONTH,
            analyticsLocations: e
        })
    }, [e]), el = (0, R.TM)(), eo = C.A.getArticleURL(T.MVz.REFERRAL_PROGRAM), ec = {
        premiumGroup: {
            thumbnail: O,
            assetUrl: O
        },
        serverProfiles: {
            thumbnail: M,
            assetUrl: el ? es.Ay : ei.Ay
        },
        customThemes: {
            thumbnail: en.A,
            assetUrl: el ? ea.A : er.A
        },
        displayNameStyles: {
            thumbnail: w.A,
            assetUrl: el ? L.A : B.A
        },
        referralProgram: {
            thumbnail: K.A,
            assetUrl: el ? F.A : X.A
        },
        showYourStyle: {
            thumbnail: z.A,
            assetUrl: el ? q.A : $.A
        },
        yourSpace: {
            thumbnail: Z.A,
            assetUrl: el ? J.A : Q.A
        },
        emojis: {
            thumbnail: G.A,
            assetUrl: el ? k.A : V.A
        },
        noLimits: {
            thumbnail: Y.A,
            assetUrl: el ? W.A : H.A
        },
        orbRewards: {
            thumbnail: et.A,
            assetUrl: ee.A
        }
    }, eu = {
        name: "serverProfiles",
        title: j.intl.string(j.t.I9TYMg),
        description: j.intl.string(j.t.HMSHeH),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        onClick: t,
        previewImage: ec.serverProfiles.thumbnail,
        videoUrl: ec.serverProfiles.assetUrl
    }, e_ = {
        name: "referralProgram",
        title: j.intl.string(j.t.tPY4o9),
        description: j.intl.format(j.t.jRPQUH, {
            learnMoreLink: eo
        }),
        previewImage: ec.referralProgram.thumbnail,
        videoUrl: ec.referralProgram.assetUrl
    }, em = {
        name: "customThemes",
        title: j.intl.string(D.default.XokIHM),
        description: j.intl.string(D.default["7esQMC"]),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: ec.customThemes.thumbnail,
        onClick: () => {
            (0, _.nf)(_.HP.CUSTOM_THEME)
        },
        videoUrl: ec.customThemes.assetUrl
    }, ep = {
        name: "displayNameStyles",
        title: j.intl.string(U.default.ABtBDQ),
        description: j.intl.string(U.default.MFNXZh),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: ec.displayNameStyles.thumbnail,
        onClick: s,
        badgeText: j.intl.string(j.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: ec.displayNameStyles.assetUrl
    }, eb = {
        name: "premiumGroup",
        title: j.intl.formatToPlainString(y.default.VFEDDB, {
            premiumGroupProductName: (0, I.DP)()
        }),
        description: j.intl.formatToPlainString(y.default.WudmR3, {
            totalSeats: I.aw,
            premiumGroupProductName: (0, I.DP)()
        }),
        previewImage: ec.premiumGroup.thumbnail,
        videoUrl: ec.premiumGroup.assetUrl,
        actions: [...r ? [{
            variant: "primary",
            text: j.intl.formatToPlainString(y.default.LwdrNi, {
                premiumGroupProductName: (0, I.DP)()
            }),
            onClick: ed,
            icon: o.tvc,
            iconPosition: "start"
        }] : [], {
            variant: "secondary",
            text: j.intl.string(j.t.hvVgAZ),
            onClick: () => {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.e("69595").then(a.bind(a, 526710));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        }],
        badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    }, ef = {
        name: "showYourStyle",
        title: j.intl.string(j.t.Ij3Zmv),
        description: j.intl.string(j.t.UsOUxY),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: ec.showYourStyle.thumbnail,
        onClick: t,
        videoUrl: ec.showYourStyle.assetUrl
    }, eg = {
        name: "yourSpace",
        title: j.intl.string(j.t.Wme3nX),
        description: j.intl.string(j.t["/aAIqV"]),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: ec.yourSpace.thumbnail,
        onClick: () => {
            {
                let t = (0, A.Ci)("openClientThemes"),
                    {
                        openUserSettings: n
                    } = a(840065);
                n(t ? h.X.DISPLAY_THEME_CATEGORY : h.X.APPEARANCE_PANEL, {
                    analyticsLocations: e
                })
            }
        },
        videoUrl: ec.yourSpace.assetUrl
    }, eh = {
        name: "emojis",
        title: j.intl.string(j.t.zY5PPb),
        description: j.intl.string(j.t.R5Xag2),
        previewImage: ec.emojis.thumbnail,
        videoUrl: ec.emojis.assetUrl
    }, eA = {
        name: "noLimits",
        title: j.intl.string(j.t["6b3ydG"]),
        description: j.intl.string(j.t["Y+IJyg"]),
        previewImage: ec.noLimits.thumbnail,
        videoUrl: ec.noLimits.assetUrl
    }, ex = (0, g.DK)(f.W.NITRO, "useBentoBoxes"), eR = {
        name: "orbRewards",
        title: j.intl.string(P.default["ZFJ/NU"]),
        description: j.intl.string(P.default.wMi514),
        descriptionCta: j.intl.string(j.t.hvVgAZ),
        onClick: () => {
            window.open(C.A.getArticleURL(T.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: ec.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: ec.orbRewards.assetUrl,
        badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    };
    return {
        whatsNewBoxes: n ? ex ? [
            [eb],
            [eR, e_]
        ] : [
            [eb],
            [eu, e_]
        ] : ex ? [
            [eR],
            [eu, e_]
        ] : [
            [ep],
            [em, e_]
        ],
        bestOfBoxes: [
            [ef],
            [eg],
            [eh, eA]
        ]
    }
}