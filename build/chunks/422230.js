/** Chunk was on 87557 **/
/** chunk id: 422230, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => O
});
var a = n(627968),
    l = n(64700),
    r = n(732955),
    i = n(890138),
    s = n(793574),
    o = n(688810),
    c = n(22007),
    d = n(857586),
    u = n(757036),
    m = n(780964),
    p = n(840065),
    h = n(954571),
    x = n(156186),
    g = n(602450),
    f = n(967370),
    b = n(144605),
    v = n(557571),
    j = n(652215),
    _ = n(788868),
    y = n(895431),
    A = n(985018),
    C = n(405040),
    S = n(446115);
let O = e => {
    let {
        onClose: t
    } = e, n = (0, u.L)(), {
        installationStatus: O,
        perkAvailableToUser: T,
        isSupportedPrivateBrowsingPerkPlatform: E,
        isWeb: N,
        connectionStatus: w
    } = (0, v.lV)(), I = (0, f.lM)("private_browsing_perk_settings_page"), P = (0, l.useCallback)(() => {
        (0, c.A)(j.BVt.NITRO_HOME), t()
    }, [t]), k = (0, l.useCallback)(() => {
        (0, p.openUserSettings)(m.X.PRIVATE_BROWSING_PANEL, {
            section: j.nc_.PRIVATE_BROWSING
        })
    }, []), R = [g.l7.CONNECTED].includes(w), D = E && I && ![g.Lk.ZERO_TRUST, g.Lk.ERROR].includes(O) && !N && (!n || T), M = (0, l.useMemo)(() => {
        switch (w) {
            case g.l7.CONNECTED:
                return A.intl.string(y.default.FBu3XJ);
            case g.l7.INITIALIZING:
                return A.intl.string(y.default["00vkCU"]);
            default:
                return A.intl.string(y.default["A70/wR"])
        }
    }, [w]), L = (0, l.useMemo)(() => {
        if (!T) return A.intl.string(y.default.KN6HOb);
        switch (O) {
            case g.Lk.INSTALLED:
            case g.Lk.EXISTING_INSTALLATION:
                return M;
            default:
                return A.intl.string(y.default.KN6HOb)
        }
    }, [O, T, M]), U = (0, l.useMemo)(() => {
        if (!T) return (0, a.jsx)(r.EYj, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: A.intl.format(y.default.UDPKcX, {
                helpdeskArticle: x.V
            })
        });
        switch (O) {
            case g.Lk.INSTALLED:
            case g.Lk.EXISTING_INSTALLATION:
                return (0, a.jsx)(r.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: R ? A.intl.format(y.default.zwW10o, {
                        onClick: () => {
                            (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), P()
                        }
                    }) : A.intl.format(y.default.D4hu0v, {
                        onClick: () => {
                            (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), k()
                        }
                    })
                });
            default:
                return (0, a.jsx)(r.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.format(y.default.D4hu0v, {
                        onClick: () => {
                            (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), k()
                        }
                    })
                })
        }
    }, [O, T, R, k, P]), {
        analyticsLocations: B
    } = (0, o.Ay)(s.A.MASKED_LINK);
    return ((0, l.useEffect)(() => {
        D && h.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
            type: _.e.PRIVACY_PERK_EXIT_MODAL,
            location_stack: B
        })
    }, [B, D]), D) ? (0, a.jsxs)("div", {
        className: C.kL,
        children: [(0, a.jsx)(b.q, {
            className: C.aZ
        }), (0, a.jsxs)("div", {
            className: C.hQ,
            children: [T && (0, a.jsx)(r.hLv, {
                className: C.h4,
                offsetBottom: -5,
                color: "nitro-pink",
                children: (0, a.jsx)("div", {
                    className: C.ZS,
                    children: (0, a.jsx)("img", {
                        src: S,
                        className: C.KD,
                        alt: "Private Browsing Perk"
                    })
                })
            }), (0, a.jsxs)("div", {
                className: C.zH,
                children: [(0, a.jsx)(r.DZT, {
                    variant: "heading-md/semibold",
                    children: L
                }), U]
            }), !T && (0, a.jsx)("div", {
                className: C.OQ,
                children: (0, a.jsx)(d.A, {
                    buttonTextOverride: A.intl.string(A.t["8x0jKT"]),
                    subscriptionTier: _.pe.TIER_2,
                    size: "sm",
                    premiumModalAnalyticsLocation: {
                        page: s.A.MASKED_LINK
                    }
                })
            })]
        })]
    }) : null
}