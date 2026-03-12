/** chunk id: 189024 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(367622),
    r = n(397927),
    a = n(793574),
    o = n(688810),
    d = n(954921),
    c = n(793943),
    u = n(259065),
    _ = n(780964),
    m = n(358776),
    g = n(840065),
    A = n(398523),
    h = n(612669),
    x = n(161319),
    p = n(920050),
    T = n(9458),
    E = n(88001),
    C = n(652215),
    S = n(518582),
    f = n(985018),
    N = n(998663),
    b = n(817577),
    I = n(419455),
    v = n(288604),
    j = n(893160),
    O = n(509442);

function y() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(a.A.PREMIUM_MARKETING_PERK_CARD), t = (0, h.O9)(), y = A.A.useExperiment({
        location: "PremiumWhatsNewSection"
    }).enabled, R = (0, s.useCallback)(() => {
        (0, g.openUserSettings)(_.X.PROFILE_PANEL, {
            section: C.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, u.L)({
            analyticsLocations: e
        }))
    }, [e]), P = (0, s.useCallback)(() => {
        (0, g.openUserSettings)(_.X.PROFILE_PANEL, {
            section: C.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: e
        }, () => (0, d.L)({
            analyticsLocations: e
        }))
    }, [e]), D = (0, s.useCallback)(() => {
        let e = (0, m.Ci)("openCustomAppSettings") ? _.X.DISPLAY_IN_APP_ICON_CATEGORY : _.X.APPEARANCE_IN_APP_ICON;
        (0, g.openUserSettings)(e, {
            section: C.nc_.APPEARANCE
        })
    }, []), L = (0, T.A)(e), {
        currentDate: M,
        nDaysInMonth: G
    } = (0, s.useMemo)(() => {
        let e = new Date;
        return {
            currentDate: e,
            nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
        }
    }, []);
    return (0, s.useMemo)(() => {
        let s = [t ? {
                id: p.PREMIUM_GROUP_CARD_ID,
                title: f.intl.string(S.default.YkvksF),
                description: f.intl.formatToPlainString(S.default.JlyGQj, {
                    totalSeats: E.aw,
                    premiumGroupProductName: (0, E.DP)()
                }),
                pillText: f.intl.string(f.t.oW0eUd),
                primaryAsset: b,
                ctaText: f.intl.string(f.t.jVcuVY),
                onCtaClick: () => {
                    (0, r.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("69595").then(n.bind(n, 526710));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                }
            } : null, y ? {
                id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                title: f.intl.string(f.t.m7PucM),
                description: f.intl.format(f.t.zh1X7u, {}),
                subscriptionRequired: !0,
                pillText: f.intl.string(f.t.oW0eUd),
                caption: (0, i.jsx)("img", {
                    src: N,
                    alt: "SteelSeries"
                }),
                backgroundAssetUrl: j.A,
                progress: M.getDate() / G,
                ctaText: f.intl.string(f.t.w7s5Qr),
                onCtaClick: () => (0, x.uE)({
                    analyticsLocations: e
                }),
                blurTint: "#2E213D"
            } : null, {
                id: p.DISPLAY_NAME_STYLES_CARD_ID,
                title: f.intl.string(f.t.OLtTrt),
                description: f.intl.string(f.t["di/pXR"]),
                onCtaClick: R,
                primaryAsset: I.A,
                ctaText: f.intl.string(f.t.jVcuVY),
                pillText: f.intl.string(f.t.y2b7CA)
            }, {
                id: p.CLIENT_THEMES_CARD_ID,
                title: f.intl.string(f.t.acc6h6),
                description: f.intl.formatToPlainString(f.t.WQazjs, {
                    themeCount: 20
                }),
                primaryAsset: O.A,
                ctaText: f.intl.string(f.t.jVcuVY),
                onCtaClick: () => {
                    (0, c.nf)(c.HP.CUSTOM_THEME)
                }
            }, {
                id: p.PERMADECOS_CARD_ID,
                title: f.intl.string(f.t.L14NZN),
                description: f.intl.string(f.t.eCZkAI),
                primaryAsset: (0, i.jsx)(l.u7P, {
                    alt: "",
                    ariaHidden: !0
                }),
                ctaText: f.intl.string(f.t.jVcuVY),
                onCtaClick: P
            }, {
                id: p.CUSTOM_APP_ICONS_CARD_ID,
                title: f.intl.string(f.t.rkb1vA),
                description: f.intl.string(f.t["1uPk1Z"]),
                primaryAsset: v.A,
                ctaText: f.intl.string(f.t.y9TxXV),
                onCtaClick: D
            }],
            a = (s = s.filter(e => null != e))[0].featured,
            o = a ? 5 : 6;
        return s.splice(+!!a, 0, L), s.length > o && s.splice(o, s.length - o), s
    }, [L, t, y, G, M, e, R, D, P])
}