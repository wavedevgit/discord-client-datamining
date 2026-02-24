/** chunk id: 422230, original params: t,e,n (module,exports,require) **/
n.d(e, {
    l: () => T
});
var a = n(627968),
    i = n(64700),
    s = n(732955),
    l = n(890138),
    r = n(793574),
    d = n(688810),
    c = n(22007),
    o = n(857586),
    u = n(757036),
    h = n(780964),
    _ = n(840065),
    b = n(954571),
    m = n(156186),
    x = n(602450),
    E = n(967370),
    L = n(144605),
    C = n(557571),
    I = n(652215),
    p = n(788868),
    A = n(895431),
    N = n(985018),
    f = n(405040),
    k = n(446115);
let T = t => {
    let {
        onClose: e
    } = t, n = (0, u.L)(), {
        installationStatus: T,
        perkAvailableToUser: g,
        isSupportedPrivateBrowsingPerkPlatform: S,
        isWeb: v,
        connectionStatus: D
    } = (0, C.lV)(), R = (0, E.lM)("private_browsing_perk_settings_page"), j = (0, i.useCallback)(() => {
        (0, c.A)(I.BVt.NITRO_HOME), e()
    }, [e]), O = (0, i.useCallback)(() => {
        (0, _.openUserSettings)(h.X.PRIVATE_BROWSING_PANEL, {
            section: I.nc_.PRIVATE_BROWSING
        })
    }, []), K = [x.l7.CONNECTED].includes(D), M = S && R && ![x.Lk.ZERO_TRUST, x.Lk.ERROR].includes(T) && !v && (!n || g), P = (0, i.useMemo)(() => {
        switch (D) {
            case x.l7.CONNECTED:
                return N.intl.string(A.default.FBu3XJ);
            case x.l7.INITIALIZING:
                return N.intl.string(A.default["00vkCU"]);
            default:
                return N.intl.string(A.default["A70/wR"])
        }
    }, [D]), w = (0, i.useMemo)(() => {
        if (!g) return N.intl.string(A.default.KN6HOb);
        switch (T) {
            case x.Lk.INSTALLED:
            case x.Lk.EXISTING_INSTALLATION:
                return P;
            default:
                return N.intl.string(A.default.KN6HOb)
        }
    }, [T, g, P]), U = (0, i.useMemo)(() => {
        if (!g) return (0, a.jsx)(s.EYj, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: N.intl.format(A.default.UDPKcX, {
                helpdeskArticle: m.V
            })
        });
        switch (T) {
            case x.Lk.INSTALLED:
            case x.Lk.EXISTING_INSTALLATION:
                return (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: K ? N.intl.format(A.default.zwW10o, {
                        onClick: () => {
                            (0, l.u)(I.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), j()
                        }
                    }) : N.intl.format(A.default.D4hu0v, {
                        onClick: () => {
                            (0, l.u)(I.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), O()
                        }
                    })
                });
            default:
                return (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: N.intl.format(A.default.D4hu0v, {
                        onClick: () => {
                            (0, l.u)(I.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), O()
                        }
                    })
                })
        }
    }, [T, g, K, O, j]), {
        analyticsLocations: H
    } = (0, d.Ay)(r.A.MASKED_LINK);
    return ((0, i.useEffect)(() => {
        M && b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: p.e.PRIVACY_PERK_EXIT_MODAL,
            location_stack: H
        })
    }, [H, M]), M) ? (0, a.jsxs)("div", {
        className: f.kL,
        children: [(0, a.jsx)(L.q, {
            className: f.aZ
        }), (0, a.jsxs)("div", {
            className: f.hQ,
            children: [g && (0, a.jsx)(s.hLv, {
                className: f.h4,
                offsetBottom: -5,
                color: "nitro-pink",
                children: (0, a.jsx)("div", {
                    className: f.ZS,
                    children: (0, a.jsx)("img", {
                        src: k,
                        className: f.KD,
                        alt: "Private Browsing Perk"
                    })
                })
            }), (0, a.jsxs)("div", {
                className: f.zH,
                children: [(0, a.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    children: w
                }), U]
            }), !g && (0, a.jsx)("div", {
                className: f.OQ,
                children: (0, a.jsx)(o.A, {
                    buttonTextOverride: N.intl.string(N.t["8x0jKT"]),
                    subscriptionTier: p.pe.TIER_2,
                    size: "sm",
                    premiumModalAnalyticsLocation: {
                        page: r.A.MASKED_LINK
                    }
                })
            })]
        })]
    }) : null
}