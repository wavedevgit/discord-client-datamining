/** Chunk was on 5606 **/
/** chunk id: 70040, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => L,
    Q: () => G
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(582754),
    o = n(397927),
    c = n(955572),
    d = n(775602),
    u = n(793574),
    p = n(688810),
    _ = n(47671),
    m = n(959443),
    g = n(692798),
    f = n(793943),
    b = n(826673),
    h = n(422936),
    A = n(234419),
    E = n(792656),
    x = n(511484),
    O = n(811611),
    C = n(97469),
    y = n(954571),
    j = n(544028),
    T = n(253932),
    v = n(358776),
    S = n(12901),
    I = n(652215),
    N = n(49999),
    P = n(788868),
    R = n(985018),
    D = n(21082);
let w = () => {
        (0, b.Dr)(s.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: N.i.PRIMARY,
            forceTrack: !0
        }), (0, f.nf)(f.HP.CLIENT_THEMES), (0, S.default)()
    },
    L = () => {
        var e, t;
        let n, {
                analyticsLocations: s
            } = (0, p.Ay)(u.A.USER_SETTINGS),
            a = (0, l.bG)([_.A], () => _.A.isPreview),
            c = (null == (t = (0, A.V)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.pe.TIER_2,
            d = (0, h.O)(),
            f = (0, x.U9)(d, P.pe.TIER_2),
            b = (0, v.dk)("UserSettingsAppearanceClientThemes");
        i.useEffect(() => {
            a && y.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: s
            })
        }, [a, s]);
        let C = c && a && (0, r.jsxs)("div", {
                children: [(0, r.jsx)("div", {
                    className: D.c7,
                    children: (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        fullWidth: !0,
                        text: R.intl.string(R.t["E+COuA"]),
                        onClick: () => w()
                    })
                }), (0, r.jsx)("div", {
                    className: D.BU
                }), (0, r.jsx)(O.Ay, {
                    type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                    subscriptionTier: P.pe.TIER_2
                })]
            }),
            j = (n = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(g.Ay.Gradient, {
                    disabled: !1,
                    renderCTAButtons: () => {
                        if (!a || c) return null;
                        let e = f ? R.intl.formatToPlainString(R.t.bkQ4bH, {
                            percent: null == d ? void 0 : d.discount.amount
                        }) : R.intl.string(R.t.mr4K7D);
                        return (0, r.jsxs)("div", {
                            className: D.gY,
                            children: [(0, r.jsx)(o.Button, {
                                variant: "secondary",
                                text: R.intl.string(R.t["E+COuA"]),
                                onClick: () => w()
                            }), (0, r.jsx)(E.A, {
                                subscriptionTier: P.pe.TIER_2,
                                defaultTextOverride: e,
                                premiumModalAnalyticsLocation: {
                                    object: I.ZSU.BUTTON_CTA,
                                    objectType: I.AnalyticsObjectTypes.BUY
                                },
                                fullWidth: !0
                            })]
                        })
                    }
                }), C]
            }), a && (n = (0, r.jsx)("div", {
                className: D._$,
                children: n
            })), n);
        return (0, r.jsxs)("div", {
            children: [(0, r.jsxs)(g.Ay, {
                type: g.v0.SETTINGS,
                children: [(0, r.jsx)(g.Ay.Basic, {
                    className: D.a6
                }), (0, r.jsx)(M, {}), (0, r.jsx)(m.A, {}), j]
            }), !b && (0, r.jsx)(o.cGx, {
                className: D.yF
            })]
        })
    };

function M() {
    let e = (0, C.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i
        } = (0, l.cf)([j.A, d.A, _.A], () => ({
            theme: j.A.theme,
            useForcedColors: d.A.useForcedColors,
            gradientPreset: _.A.gradientPreset
        })),
        s = null != T.eh.useSetting().customUserThemeSettings;
    return t !== I.NJ8.LIGHT ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.cGx, {
            gap: 24
        }), (0, r.jsx)(o.dOG, {
            label: R.intl.string(R.t.yF54Ks),
            checked: e && (0, a.qB)(t) && !n,
            disabled: t !== I.NJ8.LIGHT || n || null != i || s,
            onChange: c.LO
        }), (0, r.jsx)(o.cGx, {
            gap: 24
        })]
    })
}
let G = () => (0, l.bG)([_.A], () => _.A.isPreview) ? null : (0, r.jsx)(o.Button, {
    variant: "primary",
    text: R.intl.string(R.t.qYXrkX),
    onClick: w
})