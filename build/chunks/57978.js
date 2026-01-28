/** Chunk was on 5606 **/
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
    p = n(259065),
    _ = n(206835),
    m = n(780964),
    g = n(840065),
    f = n(676279),
    b = n(975571),
    h = n(612669),
    A = n(84483),
    E = n(88001),
    x = n(652215),
    O = n(355097),
    C = n(519412),
    y = n(49370),
    j = n(985018),
    T = n(520650),
    v = n(927961),
    S = n(817577),
    I = n(748222),
    N = n(743501),
    P = n(652700),
    R = n(282818),
    D = n(965132),
    w = n(576765),
    L = n(88433),
    M = n(206771),
    G = n(533234),
    U = n(39508),
    k = n(198962),
    H = n(636395),
    B = n(871891),
    V = n(116427),
    F = n(281146),
    Y = n(324108),
    W = n(158178),
    K = n(199579),
    z = n(170467),
    Z = n(909340),
    q = n(455482),
    X = n(573573),
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
    } = (0, d.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, _.A)({
        scrollPosition: O._F.TRY_IT_OUT,
        analyticsLocations: e
    }), r = (0, h.O9)(), i = (0, a.useCallback)(() => {
        (0, g.openUserSettings)(m.X.PROFILE_PANEL, {
            section: x.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, p.L)({
            analyticsLocations: e
        }))
    }, [e]), l = (0, f.TM)(), et = b.A.getArticleURL(x.MVz.REFERRAL_PROGRAM), en = {
        premiumGroup: {
            thumbnail: S,
            assetUrl: S
        },
        serverProfiles: {
            thumbnail: I,
            assetUrl: l ? $.Ay : ee.Ay
        },
        customThemes: {
            thumbnail: J.A,
            assetUrl: l ? X.A : Q.A
        },
        displayNameStyles: {
            thumbnail: P.A,
            assetUrl: l ? N.A : R.A
        },
        referralProgram: {
            thumbnail: H.A,
            assetUrl: l ? k.A : B.A
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
            thumbnail: w.A,
            assetUrl: l ? D.A : L.A
        },
        noLimits: {
            thumbnail: G.A,
            assetUrl: l ? M.A : U.A
        },
        orbRewards: {
            thumbnail: q.A,
            assetUrl: Z.A
        }
    }, er = {
        name: "serverProfiles",
        title: j.intl.string(j.t.I9TYMg),
        description: j.intl.string(j.t.HMSHeH),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        onClick: t,
        previewImage: en.serverProfiles.thumbnail,
        videoUrl: en.serverProfiles.assetUrl
    }, ei = {
        name: "referralProgram",
        title: j.intl.string(j.t.tPY4o9),
        description: j.intl.format(j.t.jRPQUH, {
            learnMoreLink: et
        }),
        previewImage: en.referralProgram.thumbnail,
        videoUrl: en.referralProgram.assetUrl
    }, el = {
        name: "customThemes",
        title: j.intl.string(T.default.XokIHM),
        description: j.intl.string(T.default["7esQMC"]),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: en.customThemes.thumbnail,
        onClick: () => {
            (0, u.nf)(u.HP.CUSTOM_THEME)
        },
        videoUrl: en.customThemes.assetUrl
    }, es = {
        name: "displayNameStyles",
        title: j.intl.string(v.default.ABtBDQ),
        description: j.intl.string(v.default.MFNXZh),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: en.displayNameStyles.thumbnail,
        onClick: i,
        badgeText: j.intl.string(j.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: en.displayNameStyles.assetUrl
    }, ea = {
        name: "premiumGroup",
        title: j.intl.formatToPlainString(C.default.VFEDDB, {
            premiumGroupProductName: (0, E.DP)()
        }),
        description: j.intl.formatToPlainString(C.default.WudmR3, {
            totalSeats: E.aw,
            premiumGroupProductName: (0, E.DP)()
        }),
        descriptionCta: j.intl.string(j.t.hvVgAZ),
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
        badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    }, eo = {
        name: "showYourStyle",
        title: j.intl.string(j.t.Ij3Zmv),
        description: j.intl.string(j.t.UsOUxY),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: en.showYourStyle.thumbnail,
        onClick: t,
        videoUrl: en.showYourStyle.assetUrl
    }, ec = {
        name: "yourSpace",
        title: j.intl.string(j.t.Wme3nX),
        description: j.intl.string(j.t["/aAIqV"]),
        descriptionCta: j.intl.string(j.t.jVcuVY),
        previewImage: en.yourSpace.thumbnail,
        onClick: () => {
            {
                let {
                    openUserSettings: t
                } = n(840065);
                t(m.X.APPEARANCE_PANEL, {
                    section: x.nc_.APPEARANCE,
                    analyticsLocations: e
                })
            }
        },
        videoUrl: en.yourSpace.assetUrl
    }, ed = {
        name: "emojis",
        title: j.intl.string(j.t.zY5PPb),
        description: j.intl.string(j.t.R5Xag2),
        previewImage: en.emojis.thumbnail,
        videoUrl: en.emojis.assetUrl
    }, eu = {
        name: "noLimits",
        title: j.intl.string(j.t["6b3ydG"]),
        description: j.intl.string(j.t["Y+IJyg"]),
        previewImage: en.noLimits.thumbnail,
        videoUrl: en.noLimits.assetUrl
    }, {
        isInTreatment: ep
    } = (0, A.uX)("useBentoBoxes"), e_ = {
        name: "orbRewards",
        title: j.intl.string(y.default["ZFJ/NU"]),
        description: j.intl.string(y.default.wMi514),
        descriptionCta: j.intl.string(j.t.hvVgAZ),
        onClick: () => {
            window.open(b.A.getArticleURL(x.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: en.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: en.orbRewards.assetUrl,
        badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
    };
    return {
        whatsNewBoxes: r ? ep ? [
            [ea],
            [e_, ei]
        ] : [
            [ea],
            [er, ei]
        ] : ep ? [
            [e_],
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