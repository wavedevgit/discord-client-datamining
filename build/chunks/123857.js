/** chunk id: 123857 params = (module,exports,require) **/
n.d(t, {
    Ix: () => k,
    J3: () => D,
    Q3: () => w,
    mx: () => B
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(582754),
    o = n(397927),
    d = n(955572),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(47671),
    g = n(959443),
    A = n(692798),
    x = n(793943),
    h = n(826673),
    p = n(422936),
    T = n(234419),
    E = n(792656),
    S = n(511484),
    C = n(811611),
    f = n(97469),
    N = n(954571),
    I = n(544028),
    b = n(253932),
    v = n(12901),
    j = n(652215),
    y = n(49999),
    O = n(788868),
    R = n(985018),
    L = n(594969);
let D = () => {
    (0, h.Dr)(a.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
        dismissAction: y.i.PRIMARY,
        forceTrack: !0
    }), (0, x.nf)(x.HP.CLIENT_THEMES), (0, v.default)()
};

function P() {
    let e = (0, p.O)(),
        t = (0, S.U9)(e, O.pe.TIER_2) ? R.intl.formatToPlainString(R.t.bkQ4bH, {
            percent: e?.discount.amount
        }) : R.intl.string(R.t.mr4K7D);
    return (0, i.jsx)(E.A, {
        subscriptionTier: O.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: {
            object: j.ZSU.BUTTON_CTA,
            objectType: j.AnalyticsObjectTypes.BUY
        },
        fullWidth: !0
    })
}

function G() {
    let e = (0, l.bG)([m.A], () => m.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === O.pe.TIER_2;
    return !e || t ? null : (0, i.jsxs)("div", {
        className: L.gY,
        children: [(0, i.jsx)(o.Button, {
            variant: "secondary",
            text: R.intl.string(R.t["E+COuA"]),
            onClick: D
        }), (0, i.jsx)(P, {})]
    })
}

function M(e) {
    let {
        children: t
    } = e, n = (0, l.bG)([m.A], () => m.A.isPreview), {
        analyticsLocations: a
    } = (0, _.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n && N.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
            type: O.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
            location_stack: a
        })
    }, [n, a]), n) ? (0, i.jsx)("div", {
        className: L._$,
        children: t
    }) : t
}

function U() {
    let e = (0, l.bG)([m.A], () => m.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === O.pe.TIER_2;
    return e && t ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: L.c7,
            children: (0, i.jsx)(o.Button, {
                variant: "secondary",
                fullWidth: !0,
                text: R.intl.string(R.t["E+COuA"]),
                onClick: () => D()
            })
        }), (0, i.jsx)("div", {
            className: L.BU
        }), (0, i.jsx)(C.Ay, {
            type: O.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
            subscriptionTier: O.pe.TIER_2
        })]
    }) : null
}
let k = () => (0, i.jsx)("div", {
    children: (0, i.jsxs)(A.Ay, {
        type: A.v0.SETTINGS,
        children: [(0, i.jsx)(A.Ay.Basic, {
            className: L.a6
        }), (0, i.jsx)(V, {}), (0, i.jsx)(g.A, {}), (0, i.jsxs)(M, {
            children: [(0, i.jsx)(A.Ay.Gradient, {
                disabled: !1,
                renderCTAButtons: () => (0, i.jsx)(G, {})
            }), (0, i.jsx)(U, {})]
        })]
    })
});

function V() {
    let e = (0, f.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: s
        } = (0, l.cf)([I.A, c.A, m.A], () => ({
            theme: I.A.theme,
            useForcedColors: c.A.useForcedColors,
            gradientPreset: m.A.gradientPreset
        })),
        a = null != b.eh.useSetting().customUserThemeSettings;
    return t !== j.NJ8.LIGHT ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.cGx, {
            gap: 24
        }), (0, i.jsx)(o.dOG, {
            label: R.intl.string(R.t.yF54Ks),
            checked: e && (0, r.qB)(t) && !n,
            disabled: t !== j.NJ8.LIGHT || n || null != s || a,
            onChange: d.LO
        }), (0, i.jsx)(o.cGx, {
            gap: 24
        })]
    })
}
let w = () => (0, l.bG)([m.A], () => m.A.isPreview) ? null : (0, i.jsx)(o.Button, {
    variant: "primary",
    text: R.intl.string(R.t.qYXrkX),
    onClick: D
});

function B(e) {
    let {
        size: t
    } = e;
    return (0, i.jsx)(A.Ay, {
        type: A.v0.SETTINGS,
        children: (0, i.jsxs)(M, {
            children: [(0, i.jsx)(A.ew, {
                isCoachmark: !1,
                renderCTAButtons: () => (0, i.jsx)(G, {}),
                headingClassName: L.EK,
                titleTextVariant: "text-md/semibold",
                titleClassName: L.cI,
                titleIconClassName: L.Hq
            }), (0, i.jsx)(o.BJc, {
                direction: "horizontal",
                wrap: !0,
                gap: 8,
                padding: {
                    top: 24
                },
                children: (0, i.jsx)(A.Zg, {
                    disabled: !1,
                    size: t
                })
            }), (0, i.jsx)(U, {})]
        })
    })
}