/** chunk id: 692798, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => et,
    X8: () => K,
    v0: () => H
}), n(801541), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(889137),
    o = n(311907),
    s = n(873298),
    l = n(421380),
    c = n(397927),
    u = n(817281),
    d = n(775602),
    f = n(793574),
    p = n(688810),
    _ = n(793943),
    h = n(915089),
    m = n(87719),
    g = n(234419),
    E = n(811611),
    y = n(450232),
    b = n(544028),
    O = n(964404),
    v = n(253932),
    A = n(12901),
    I = n(954571),
    S = n(823459),
    T = n(47671),
    C = n(323618),
    N = n(653523),
    w = n(385803),
    R = n(652215),
    P = n(788868),
    D = n(185928),
    L = n(355097),
    x = n(818348),
    M = n(985018),
    j = n(176240);

function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            k(e, t, n[t])
        })
    }
    return e
}

function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function F(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function V(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = B(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function B(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
var H = function(e) {
    return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let Y = Object.freeze({
        EDITOR: L.Sb.SLOW_USER_ACTION,
        SETTINGS: L.Sb.INFREQUENT_USER_ACTION
    }),
    W = i.createContext({}),
    K = e => {
        let {
            isPersisted: t,
            themeName: n,
            analyticsLocations: r
        } = e;
        I.default.track(R.HAw.CLIENT_THEME_UPDATED, {
            feature_name: P.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        })
    },
    z = e => {
        let {
            type: t,
            isPreview: n,
            isCoachmark: i
        } = e, o = (0, a.YW)({
            type: t,
            isPreview: n,
            isCoachmark: i
        }).with({
            type: "EDITOR",
            isCoachmark: !0,
            isPreview: !0
        }, () => M.intl.string(M.t.D29k16)).with({
            type: "EDITOR",
            isCoachmark: !0
        }, () => M.intl.string(M.t["8+vbqd"])).otherwise(() => M.intl.string(M.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: j.DD,
            children: [(0, r.jsx)(c.Heading, {
                "aria-label": o,
                className: j.Qw,
                variant: "text-md/medium",
                children: o
            }), (0, r.jsx)(y.A, {
                className: j.PC
            })]
        })
    },
    q = e => {
        var t, n;
        let {
            type: i,
            isPreview: o,
            isCoachmark: s
        } = e;
        if ((null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.pe.TIER_2 && o) return null;
        let l = (0, a.YW)({
            type: i,
            isPreview: o,
            isCoachmark: s
        }).with({
            type: "EDITOR",
            isPreview: !0
        }, () => M.intl.format(M.t.G8yQXi, {
            onPremiumClick: () => m.Z
        })).with({
            type: "EDITOR",
            isCoachmark: !0
        }, () => M.intl.string(M.t.jmZiNu)).with({
            type: "EDITOR",
            isPreview: !1
        }, () => M.intl.string(M.t.dqDFwe)).with({
            isPreview: !0
        }, () => M.intl.format(M.t["DWIjJ/"], {
            onPremiumClick: () => m.Z
        })).otherwise(() => M.intl.string(M.t["np0X/u"]));
        return (0, r.jsx)(c.Heading, {
            variant: "text-sm/normal",
            className: j.W$,
            children: l
        })
    },
    Z = e => {
        var t, n;
        let {
            renderCTAButtons: a,
            isCoachmark: s
        } = e, {
            type: l
        } = i.useContext(W), [c] = (0, o.yK)([T.A], () => [T.A.isPreview]), u = (null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.pe.TIER_2;
        return "EDITOR" === l && c && u ? (0, r.jsx)(E.Ay, {
            type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
            subscriptionTier: P.pe.TIER_2,
            children: M.intl.format(M.t.G8yQXi, {
                onPremiumClick: () => m.Z
            })
        }) : (0, r.jsxs)("div", {
            className: j.wx,
            children: [(0, r.jsxs)("div", {
                className: j.so,
                children: [(0, r.jsx)(z, {
                    type: l,
                    isPreview: c,
                    isCoachmark: s
                }), (0, r.jsx)(q, {
                    type: l,
                    isPreview: c,
                    isCoachmark: s
                })]
            }), null == a ? void 0 : a()]
        })
    },
    Q = e => {
        let {
            disabled: t
        } = e, {
            type: a,
            delay: l
        } = i.useContext(W), {
            analyticsLocations: h
        } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR), [m, g] = (0, o.yK)([T.A], () => {
            var e;
            return [T.A.isPreview, null == (e = T.A.gradientPreset) ? void 0 : e.id]
        }), [E, y] = i.useState(!1), [b, O] = i.useState(-1), v = (0, o.bG)([d.A], () => d.A.useReducedMotion);
        i.useEffect(() => {
            (b === w.Jm.length - 2 && "EDITOR" === a || g === s.ju.EASTER_EGG) && y(!0)
        }, [b, a, g]);
        let I = (e, t) => {
                if ((0, S.bc)(e.id), K({
                        isPersisted: !m,
                        analyticsLocations: h,
                        themeName: s.ju[e.id]
                    }), m && "SETTINGS" === a ? R(e) : (0, u.u_)({
                        backgroundGradientPresetId: e.id,
                        theme: e.theme,
                        useSystemTheme: m ? D.Q_.OFF : void 0
                    }, l), null != t) {
                    if (E && y(!1), t <= b || 0 === t) return void O(0);
                    O(e => e + 1)
                }
            },
            R = async e => {
                await (0, u.u_)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme,
                    useSystemTheme: m ? D.Q_.OFF : void 0
                }, L.Sb.SLOW_USER_ACTION), (0, _.nf)(_.HP.CLIENT_THEMES), (0, A.default)()
            }, P = () => {
                if (!E) return null;
                let e = w.ag[s.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let {
                        default: e
                    } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e
                }
                return (0, r.jsxs)("div", {
                    className: j.kG,
                    children: [(0, r.jsx)(N.MX, {
                        preset: e,
                        isSelected: g === s.ju.EASTER_EGG,
                        onSelect: () => I(e)
                    }), (0, r.jsx)(c.akl, {
                        importData: t,
                        shouldAnimate: !v,
                        className: j._7
                    })]
                })
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(C.A, {
                isDisabled: t,
                onSelect: () => {
                    (0, _.nf)(_.HP.CUSTOM_THEME, {
                        from: "SETTINGS" === a ? _.xv.SETTING : _.xv.CLIENT_THEMES_EDITOR
                    }), "SETTINGS" === a && (0, A.default)()
                }
            }), w.Jm.filter(e => {
                let {
                    id: t
                } = e;
                return t !== s.ju.EASTER_EGG
            }).map((e, n) => (0, r.jsx)(N.MX, {
                preset: e,
                isSelected: g === e.id,
                onSelect: () => I(e, n),
                disabled: t,
                tabIndex: 0 !== n || t ? void 0 : 0,
                showBadge: !1,
                showLockedBadge: !1
            }, e.id)), P()]
        })
    },
    X = e => {
        let {
            className: t,
            renderCTAButtons: n,
            disabled: i = !1,
            isCoachmark: a
        } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [(0, r.jsx)(Z, {
                renderCTAButtons: n,
                isCoachmark: a
            }), (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                wrap: !0,
                gap: 8,
                style: {
                    marginTop: 16
                },
                children: (0, r.jsx)(Q, {
                    disabled: i
                })
            })]
        })
    },
    J = e => {
        let {
            systemSelectorFirst: t,
            hideSystemSelector: n = !1
        } = e, {
            delay: a
        } = i.useContext(W), {
            analyticsLocations: s
        } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR), [l, c, d] = (0, o.yK)([b.A, O.Ay, T.A], () => [b.A.theme, null == T.A.gradientPreset && null == v.eh.getSetting().customUserThemeSettings, O.Ay.useSystemTheme === D.Q_.ON]), _ = e => {
            (0, S.Py)(), K({
                isPersisted: !0,
                analyticsLocations: s,
                themeName: "default ".concat(e)
            }), (0, u.u_)({
                theme: e
            }, a)
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [!n && t && (0, r.jsx)(N.zy, {
                theme: "system",
                isSelected: c && d,
                onSelect: () => _("system")
            }), (0, r.jsx)(N.zy, {
                theme: x.NJ.LIGHT,
                isSelected: c && !d && l === x.NJ.LIGHT,
                onSelect: () => _(x.NJ.LIGHT)
            }), (0, r.jsx)(N.zy, {
                theme: x.NJ.DARK,
                isSelected: c && !d && l === x.NJ.DARK,
                onSelect: () => _(x.NJ.DARK)
            }), (0, r.jsx)(N.zy, {
                theme: x.NJ.DARKER,
                isSelected: c && !d && l === x.NJ.DARKER,
                onSelect: () => _(x.NJ.DARKER)
            }), (0, r.jsx)(N.zy, {
                theme: x.NJ.MIDNIGHT,
                isSelected: c && !d && l === x.NJ.MIDNIGHT,
                onSelect: () => _(x.NJ.MIDNIGHT)
            }), !n && !t && (0, r.jsx)(N.zy, {
                theme: "system",
                isSelected: c && d,
                onSelect: () => _("system")
            })]
        })
    },
    $ = e => {
        let {
            isEditor: t,
            className: n,
            renderCTAButtons: i,
            isCoachmark: a
        } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [!t && (0, r.jsx)(Z, {
                renderCTAButtons: i,
                isCoachmark: a
            }), t && a && (0, r.jsx)(c.Heading, {
                className: j.tD,
                variant: "heading-sm/semibold",
                children: M.intl.string(M.t.POSLGY)
            }), (0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                wrap: !0,
                gap: 8,
                justify: t ? "center" : "start",
                style: {
                    marginTop: 16
                },
                children: [(0, r.jsx)(J, {
                    systemSelectorFirst: !0
                }), (0, r.jsx)(Q, {
                    disabled: !1
                })]
            })]
        })
    },
    ee = e => {
        let {
            type: t,
            children: n
        } = e, a = (0, h.GV)(), o = (0, l._u)({
            orientation: "horizontal",
            labelledBy: a
        }), {
            ref: s
        } = o, c = V(o, ["ref"]), u = i.useMemo(() => ({
            type: t,
            delay: Y[t]
        }), [t]);
        return (0, r.jsx)(W.Provider, {
            value: u,
            children: (0, r.jsx)("div", F(U({
                ref: s
            }, c), {
                className: j.__invalid_container,
                children: n
            }))
        })
    };
ee.Basic = e => {
    let {
        className: t,
        hideSystemSelector: n
    } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(c.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: {
                marginTop: 16
            },
            children: (0, r.jsx)(J, {
                hideSystemSelector: n
            })
        })
    })
}, ee.Gradient = X, ee.BasicAndGradient = $;
let et = ee