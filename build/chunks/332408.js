/** Chunk was on web.js **/
/** chunk id: 332408, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => F
}), n(896048), n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(889137),
    l = n(311907),
    c = n(873298),
    u = n(732955),
    d = n(397927),
    f = n(817281),
    p = n(82495),
    _ = n(775602),
    h = n(793574),
    m = n(688810),
    g = n(793943),
    E = n(996254),
    y = n(234419),
    b = n(792656),
    O = n(450232),
    v = n(780964),
    A = n(840065),
    I = n(287809),
    S = n(954571),
    T = n(927578),
    C = n(47671),
    N = n(11029),
    w = n(58034),
    R = n(474529),
    P = n(692798),
    D = n(652215),
    x = n(49999),
    L = n(788868),
    j = n(985018),
    M = n(218098);
let k = () => (0, r.jsx)("div", {
        className: M.nV,
        children: (0, r.jsxs)("div", {
            className: M.mR,
            children: [(0, r.jsx)(O.A, {
                className: M.PC
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-md/bold",
                color: "always-white",
                children: j.intl.string(j.t.POSLGY)
            })]
        })
    }),
    U = e => {
        let {
            markAsDismissed: t
        } = e, n = (0, w.H)(), i = () => {
            null != t && t(x.i.DISMISS), n(D.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, N.D)()
        };
        return (0, r.jsxs)("div", {
            className: M.nV,
            children: [(0, r.jsx)(d.DUT, {
                className: M.VV,
                onClick: i,
                children: (0, r.jsx)(d.aXh, {
                    size: "md",
                    color: "currentColor",
                    className: M.P0
                })
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t["xSR+a/"])
            })]
        })
    },
    G = e => {
        var t, n, i;
        let {
            onSubscribeSuccess: a,
            markAsDismissed: s
        } = e, {
            analyticsLocations: o
        } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR), [u, d] = (0, l.yK)([I.default, C.A], () => [C.A.gradientPreset, T.Ay.isPremium(I.default.getCurrentUser())]), p = (0, y.V)(), _ = (0, T.FY)({
            intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
            intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count
        }), g = d ? j.intl.string(j.t.IJI7yk) : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === L.pe.TIER_2 ? _ : j.intl.string(j.t.mr4K7D), E = e => {
            e && (null == a || a(), null != s && s(x.i.PRIMARY), null != u && ((0, P.X8)({
                isPersisted: !0,
                themeName: c.ju[u.id],
                analyticsLocations: o
            }), (0, f.u_)({
                backgroundGradientPresetId: u.id,
                theme: u.theme
            })))
        };
        return (0, r.jsx)(b.A, {
            subscriptionTier: L.pe.TIER_2,
            defaultTextOverride: g,
            premiumModalAnalyticsLocation: {
                object: D.ZSU.BUTTON_CTA,
                objectType: D.AnalyticsObjectTypes.BUY
            },
            onSubscribeModalClose: E,
            fullWidth: !0
        })
    },
    V = e => {
        let {
            markAsDismissed: t,
            isCoachmark: n
        } = e, {
            isPreview: a
        } = (0, l.cf)([C.A], () => ({
            isPreview: C.A.isPreview
        })), [s, c] = i.useState(!1), d = (0, w.H)(), f = () => {
            null != t && t(x.i.DISMISS), d(D.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, N.D)(), n || (0, A.openUserSettings)(v.X.APPEARANCE_PANEL, {
                section: D.nc_.APPEARANCE
            })
        }, p = (0, E.X)({
            no: j.t["3D5yo/"],
            "sv-SE": j.t["3D5yo/"],
            uk: j.t["3D5yo/"],
            de: j.t["3D5yo/"]
        }, j.t["dqH+qr"]), _ = (0, o.YW)({
            isPreview: a,
            isCoachmark: n,
            forceShowCloseButton: s
        }).with({
            isCoachmark: !0
        }, {
            forceShowCloseButton: !0
        }, () => j.intl.string(j.t.cpT0Cq)).with({
            isPreview: !0
        }, () => p).otherwise(() => j.intl.string(j.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: M.N3,
            children: [a && (0, r.jsx)(G, {
                onSubscribeSuccess: () => {
                    c(!0)
                },
                markAsDismissed: t
            }), (0, r.jsx)(u.$nd, {
                fullWidth: !0,
                onClick: f,
                variant: "secondary",
                text: _
            })]
        })
    };

function F(e) {
    let {
        markAsDismissed: t,
        showClientThemesCoachmark: n
    } = e, {
        analyticsLocations: a
    } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR), {
        isPreview: o,
        shouldEditorAnimate: c
    } = (0, l.cf)([C.A, _.A], () => ({
        isPreview: C.A.isPreview,
        shouldEditorAnimate: n && !_.A.useReducedMotion
    })), u = (0, g.fy)().activePanel === g.HP.CLIENT_THEMES, f = (0, w.H)();
    i.useEffect(() => f(D.HAw.CLIENT_THEME_PREVIEW_VIEWED), [f]), i.useEffect(() => {
        o && S.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, {
            type: L.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
            location_stack: a
        })
    }, [o, a]);
    let E = (0, w.Z)(),
        y = (0, p.A)(null, o ? E : D.tEg);
    return i.useEffect(() => {
        if (o && !u) return E
    }, [o, u, E]), (0, r.jsx)(m.f5, {
        value: a,
        children: (0, r.jsx)("div", {
            ref: y,
            "data-app-right-panel": !0,
            className: s()(M.HS, c ? M.hP : null),
            children: (0, r.jsxs)(d.Fmo, {
                children: [n ? (0, r.jsx)(k, {}) : (0, r.jsx)(U, {
                    markAsDismissed: t
                }), (0, r.jsx)(R.A, {}), (0, r.jsx)(d.HOs, {
                    className: M.sV,
                    children: (0, r.jsxs)(P.Ay, {
                        type: P.v0.EDITOR,
                        children: [!o && (0, r.jsx)(P.Ay.Basic, {
                            className: M.Gg
                        }), (0, r.jsx)(P.Ay.Gradient, {
                            className: M.Gg,
                            isCoachmark: n
                        })]
                    })
                }), (0, r.jsx)(V, {
                    markAsDismissed: t,
                    isCoachmark: n
                })]
            })
        })
    })
}