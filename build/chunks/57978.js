/** chunk id: 57978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A0: () => en,
    Ay: () => ei,
    NI: () => er,
    Tb: () => et
});
var r, i, l, s = n(627968),
    a = n(64700),
    o = n(192308),
    c = n(793574),
    d = n(688810),
    u = n(793943),
    _ = n(259065),
    p = n(206835),
    m = n(780964),
    g = n(840065),
    A = n(676279),
    f = n(975571),
    b = n(612669),
    h = n(84483),
    E = n(88001),
    O = n(652215),
    x = n(355097),
    C = n(519412),
    S = n(49370),
    T = n(985018),
    I = n(520650),
    N = n(927961),
    j = n(817577),
    y = n(748222),
    v = n(743501),
    P = n(652700),
    R = n(282818),
    D = n(965132),
    L = n(576765),
    w = n(88433),
    M = n(206771),
    G = n(533234),
    U = n(39508),
    k = n(198962),
    B = n(636395),
    H = n(871891),
    V = n(116427),
    F = n(281146),
    Y = n(324108),
    W = n(158178),
    K = n(199579),
    z = n(170467),
    Z = n(909340),
    X = n(455482),
    q = n(573573),
    J = n(233572),
    Q = n(437466),
    $ = n(23145),
    ee = n(56582),
    et = ((r = {}).CONTAINED = "contained", r.OVERLAY = "overlay", r),
    en = ((i = {}).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i),
    er = ((l = {}).REFERRAL_PROGRAM = "referralProgram", l.SERVER_PROFILES = "serverProfiles", l.SHOW_YOUR_STYLE = "showYourStyle", l.YOUR_SPACE = "yourSpace", l.EMOJIS = "emojis", l.NO_LIMITS = "noLimits", l.CUSTOM_THEMES = "customThemes", l.DISPLAY_NAME_STYLES = "displayNameStyles", l.PREMIUM_GROUP = "premiumGroup", l.ORB_REWARDS = "orbRewards", l);
let ei = () => {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, p.A)({
        scrollPosition: x._F.TRY_IT_OUT,
        analyticsLocations: e
    }), r = (0, b.O9)(), i = (0, a.useCallback)(() => {
        (0, g.openUserSettings)(m.X.PROFILE_PANEL, {
            section: O.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, _.L)({
            analyticsLocations: e
        }))
    }, [e]), l = (0, A.TM)(), et = f.A.getArticleURL(O.MVz.REFERRAL_PROGRAM), en = {
        premiumGroup: {
            thumbnail: j,
            assetUrl: j
        },
        serverProfiles: {
            thumbnail: y,
            assetUrl: l ? $.Ay : ee.Ay
        },
        customThemes: {
            thumbnail: J.A,
            assetUrl: l ? q.A : Q.A
        },
        displayNameStyles: {
            thumbnail: P.A,
            assetUrl: l ? v.A : R.A
        },
        referralProgram: {
            thumbnail: B.A,
            assetUrl: l ? k.A : H.A
        },
        showYourStyle: {
            thumbnail: F.A,
            assetUrl: l ? V.A : Y.A
        },
        yourSpace: {
            thumbnail: K.A,
            assetUrl: l ? W.A : z.A
        },
        emojis: {
            thumbnail: L.A,
            assetUrl: l ? D.A : w.A
        },
        noLimits: {
            thumbnail: G.A,
            assetUrl: l ? M.A : U.A
        },
        orbRewards: {
            thumbnail: X.A,
            assetUrl: Z.A
        }
    }, er = {
        name: "serverProfiles",
        title: T.intl.string(T.t.I9TYMg),
        description: T.intl.string(T.t.HMSHeH),
        descriptionCta: T.intl.string(T.t.jVcuVY),
        onClick: t,
        previewImage: en.serverProfiles.thumbnail,
        videoUrl: en.serverProfiles.assetUrl
    }, ei = {
        name: "referralProgram",
        title: T.intl.string(T.t.tPY4o9),
        description: T.intl.format(T.t.jRPQUH, {
            learnMoreLink: et
        }),
        previewImage: en.referralProgram.thumbnail,
        videoUrl: en.referralProgram.assetUrl
    }, el = {
        name: "customThemes",
        title: T.intl.string(I.default.XokIHM),
        description: T.intl.string(I.default["7esQMC"]),
        descriptionCta: T.intl.string(T.t.jVcuVY),
        previewImage: en.customThemes.thumbnail,
        onClick: () => {
            (0, u.nf)(u.HP.CUSTOM_THEME)
        },
        videoUrl: en.customThemes.assetUrl
    }, es = {
        name: "displayNameStyles",
        title: T.intl.string(N.default.ABtBDQ),
        description: T.intl.string(N.default.MFNXZh),
        descriptionCta: T.intl.string(T.t.jVcuVY),
        previewImage: en.displayNameStyles.thumbnail,
        onClick: i,
        badgeText: T.intl.string(T.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: en.displayNameStyles.assetUrl
    }, ea = {
        name: "premiumGroup",
        title: T.intl.formatToPlainString(C.default.VFEDDB, {
            premiumGroupProductName: (0, E.DP)()
        }),
        description: T.intl.formatToPlainString(C.default.WudmR3, {
            totalSeats: E.aw,
            premiumGroupProductName: (0, E.DP)()
        }),
        descriptionCta: T.intl.string(T.t.hvVgAZ),
        previewImage: en.premiumGroup.thumbnail,
        videoUrl: en.premiumGroup.assetUrl,
        onClick: () => {
            (0, o.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.e("69595").then(n.bind(n, 526710));
                return t => (0, s.jsx)(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, t))
            })
        },
        badgeText: T.intl.string(T.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    }, eo = {
        name: "showYourStyle",
        title: T.intl.string(T.t.Ij3Zmv),
        description: T.intl.string(T.t.UsOUxY),
        descriptionCta: T.intl.string(T.t.jVcuVY),
        previewImage: en.showYourStyle.thumbnail,
        onClick: t,
        videoUrl: en.showYourStyle.assetUrl
    }, ec = {
        name: "yourSpace",
        title: T.intl.string(T.t.Wme3nX),
        description: T.intl.string(T.t["/aAIqV"]),
        descriptionCta: T.intl.string(T.t.jVcuVY),
        previewImage: en.yourSpace.thumbnail,
        onClick: () => {
            {
                let {
                    openUserSettings: t
                } = n(840065);
                t(m.X.APPEARANCE_PANEL, {
                    section: O.nc_.APPEARANCE,
                    analyticsLocations: e
                })
            }
        },
        videoUrl: en.yourSpace.assetUrl
    }, ed = {
        name: "emojis",
        title: T.intl.string(T.t.zY5PPb),
        description: T.intl.string(T.t.R5Xag2),
        previewImage: en.emojis.thumbnail,
        videoUrl: en.emojis.assetUrl
    }, eu = {
        name: "noLimits",
        title: T.intl.string(T.t["6b3ydG"]),
        description: T.intl.string(T.t["Y+IJyg"]),
        previewImage: en.noLimits.thumbnail,
        videoUrl: en.noLimits.assetUrl
    }, {
        isInTreatment: e_
    } = (0, h.uX)("useBentoBoxes"), ep = {
        name: "orbRewards",
        title: T.intl.string(S.default["ZFJ/NU"]),
        description: T.intl.string(S.default.wMi514),
        descriptionCta: T.intl.string(T.t.hvVgAZ),
        onClick: () => {
            window.open(f.A.getArticleURL(O.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: en.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: en.orbRewards.assetUrl,
        badgeText: T.intl.string(T.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    };
    return {
        whatsNewBoxes: r ? e_ ? [
            [ea],
            [ep, ei]
        ] : [
            [ea],
            [er, ei]
        ] : e_ ? [
            [ep],
            [er, ei]
        ] : [
            [es],
            [el, ei]
        ],
        bestOfBoxes: [
            [eo],
            [ec],
            [ed, eu]
        ]
    }
}