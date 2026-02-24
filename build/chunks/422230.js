/** chunk id: 422230, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => y
});
var a = n(627968),
    i = n(64700),
    s = n(732955),
    l = n(890138),
    r = n(793574),
    o = n(688810),
    d = n(22007),
    c = n(857586),
    u = n(757036),
    m = n(780964),
    h = n(840065),
    x = n(954571),
    p = n(156186),
    g = n(602450),
    _ = n(967370),
    f = n(144605),
    b = n(557571),
    v = n(652215),
    j = n(788868),
    C = n(215765),
    A = n(985018),
    T = n(695670),
    S = n(446115);
let y = e => {
    let {
        onClose: t
    } = e, n = (0, u.L)(), {
        installationStatus: y,
        perkAvailableToUser: E,
        isSupportedPrivateBrowsingPerkPlatform: N,
        isWeb: I,
        connectionStatus: k
    } = (0, b.lV)(), R = (0, _.lM)("private_browsing_perk_settings_page"), O = (0, i.useCallback)(() => {
        (0, d.A)(v.BVt.NITRO_HOME), t()
    }, [t]), w = (0, i.useCallback)(() => {
        (0, h.openUserSettings)(m.X.PRIVATE_BROWSING_PANEL, {
            section: v.nc_.PRIVATE_BROWSING
        })
    }, []), D = [g.l7.CONNECTED].includes(k), M = N && R && ![g.Lk.ZERO_TRUST, g.Lk.ERROR].includes(y) && !I && (!n || E), P = (0, i.useMemo)(() => {
        switch (k) {
            case g.l7.CONNECTED:
                return A.intl.string(C.default.FBu3XJ);
            case g.l7.INITIALIZING:
                return A.intl.string(C.default["00vkCU"]);
            default:
                return A.intl.string(C.default["A70/wR"])
        }
    }, [k]), L = (0, i.useMemo)(() => {
        if (!E) return A.intl.string(C.default.KN6HOb);
        switch (y) {
            case g.Lk.INSTALLED:
            case g.Lk.EXISTING_INSTALLATION:
                return P;
            default:
                return A.intl.string(C.default.KN6HOb)
        }
    }, [y, E, P]), U = (0, i.useMemo)(() => {
        if (!E) return (0, a.jsx)(s.EYj, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: A.intl.format(C.default.UDPKcX, {
                helpdeskArticle: p.V
            })
        });
        switch (y) {
            case g.Lk.INSTALLED:
            case g.Lk.EXISTING_INSTALLATION:
                return (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: D ? A.intl.format(C.default.zwW10o, {
                        onClick: () => {
                            (0, l.u)(v.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), O()
                        }
                    }) : A.intl.format(C.default.D4hu0v, {
                        onClick: () => {
                            (0, l.u)(v.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), w()
                        }
                    })
                });
            default:
                return (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.format(C.default.D4hu0v, {
                        onClick: () => {
                            (0, l.u)(v.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), w()
                        }
                    })
                })
        }
    }, [y, E, D, w, O]), {
        analyticsLocations: B
    } = (0, o.Ay)(r.A.MASKED_LINK);
    return ((0, i.useEffect)(() => {
        M && x.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
            type: j.e.PRIVACY_PERK_EXIT_MODAL,
            location_stack: B
        })
    }, [B, M]), M) ? (0, a.jsxs)("div", {
        className: T.kL,
        children: [(0, a.jsx)(f.q, {
            className: T.aZ
        }), (0, a.jsxs)("div", {
            className: T.hQ,
            children: [E && (0, a.jsx)(s.hLv, {
                className: T.h4,
                offsetBottom: -5,
                color: "nitro-pink",
                children: (0, a.jsx)("div", {
                    className: T.ZS,
                    children: (0, a.jsx)("img", {
                        src: S,
                        className: T.KD,
                        alt: "Private Browsing Perk"
                    })
                })
            }), (0, a.jsxs)("div", {
                className: T.zH,
                children: [(0, a.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    children: L
                }), U]
            }), !E && (0, a.jsx)("div", {
                className: T.OQ,
                children: (0, a.jsx)(c.A, {
                    buttonTextOverride: A.intl.string(A.t["8x0jKT"]),
                    subscriptionTier: j.pe.TIER_2,
                    size: "sm",
                    premiumModalAnalyticsLocation: {
                        page: r.A.MASKED_LINK
                    }
                })
            })]
        })]
    }) : null
}