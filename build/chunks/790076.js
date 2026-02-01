/** chunk id: 790076, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => eW,
    DA: () => eC,
    F: () => eY,
    F1: () => eG,
    G6: () => ev,
    Gj: () => eM,
    Gk: () => ek,
    PP: () => eE,
    VQ: () => eH,
    fE: () => eL,
    nR: () => ew,
    ze: () => eU
}), n(228524), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(812729),
    o = n.n(a),
    c = n(284009),
    u = n.n(c),
    d = n(735438),
    p = n.n(d),
    h = n(311907),
    g = n(554146),
    f = n(990078),
    m = n(397927),
    b = n(544420),
    A = n(97260),
    y = n(391973),
    O = n(684013),
    j = n(117178),
    x = n(56562),
    _ = n(964486),
    v = n(793574),
    E = n(587895),
    C = n(429913),
    S = n(379848),
    I = n(15285),
    N = n(286237),
    T = n(843402),
    P = n(769015),
    w = n(496885),
    R = n(810412),
    D = n(93465),
    L = n(41984),
    M = n(589051),
    G = n(994322),
    k = n(833551),
    U = n(515183),
    V = n(592598),
    B = n(395011),
    H = n(663677),
    F = n(682763),
    Y = n(237984),
    K = n(897720),
    W = n(393172),
    z = n(968898),
    X = n(847521),
    q = n(942405),
    J = n(824189),
    Q = n(95701),
    Z = n(427157),
    $ = n(288737),
    ee = n(760751),
    et = n(555528),
    en = n(189081),
    er = n(287809),
    el = n(532624),
    ei = n(242286),
    es = n(256415),
    ea = n(954571),
    eo = n(403362),
    ec = n(723702),
    eu = n(350535),
    ed = n(9302),
    ep = n(780964),
    eh = n(790174),
    eg = n(652215),
    ef = n(49999),
    em = n(672396);
n(392164);
var eb = n(985018),
    eA = n(202942),
    ey = n(130324),
    eO = n(966040);

function ej(e) {
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
}

function ex(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let e_ = eS(null),
    ev = 1,
    eE = 25,
    eC = [0, 5, 10, 15, 20, 25];

function eS(e) {
    var t;
    let n = es.default.getNotificationPositionMode(),
        r = n !== eg.G6Q.DISABLED,
        l = el.Ay.getOverlayKeybind(),
        i = el.Ay.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: V.A.isNotificationDisabled(em.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != l ? (0, eu.dI)(l.shortcut) : null,
        text_activation_hotkey: null != i ? (0, eu.dI)(i.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : ei.default.enabled
    }
}

function eI(e) {
    let {
        header: t,
        icon: n,
        title: l,
        description: i,
        action: a,
        hint: o,
        warning: c,
        onClick: u,
        "aria-label": d,
        className: p
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(eA.HS, p),
        children: [(0, r.jsxs)(m.sqX, {
            "aria-label": d,
            onClick: u,
            children: [null != t && (0, r.jsx)("div", {
                className: eA.x_,
                children: t
            }), (0, r.jsxs)("div", {
                className: eA.rN,
                children: [null != n && (0, r.jsx)("div", {
                    className: eA.$t,
                    children: n
                }), (0, r.jsxs)("div", {
                    className: eA.c8,
                    children: [(0, r.jsx)(m.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: eA.SZ,
                        children: l
                    }), null != i && (0, r.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: i
                    }), null != o && (0, r.jsx)(m.Text, {
                        variant: "text-xxs/medium",
                        color: "text-muted",
                        children: o
                    })]
                }), (0, r.jsx)("div", {
                    className: eA.a$,
                    children: a
                })]
            })]
        }), (0, r.jsx)("div", {
            className: eA.Om,
            children: c
        })]
    })
}

function eN(e) {
    let {
        children: t,
        className: n,
        onExpand: i
    } = e, a = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["children", "className", "onExpand"]), [o, c] = l.useState(!1);
    return (0, r.jsx)(m.Nt8, {
        className: eA.uR,
        collapsibleContent: (0, r.jsx)("div", {
            className: eA.oV,
            children: t
        }),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(eI, ex(ej({}, a), {
                onClick: e => {
                    var n;
                    c(n = !o), null == i || i(n), null == t || t(e)
                },
                className: s()(eA.AC, n),
                action: (0, r.jsxs)("div", {
                    className: eA.rc,
                    children: [a.action, o ? (0, r.jsx)(m.abt, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--interactive-text-active)"
                    }) : (0, r.jsx)(m._BQ, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--interactive-text-active)"
                    })]
                })
            }))
        }
    })
}
let eT = new Set([L.AR.INITIALIZING, L.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, L.AR.WAITING_FOR_MODULE_TRACKING, L.AR.WAITING_FOR_OVERLAY_OPEN, L.AR.WAITING_FOR_POPOUT_OPEN, L.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, L.AR.WAITING_FOR_REACT_INITIALIZATION, L.AR.WAITING_FOR_PID_FOCUS, L.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
    eP = e => {
        e.preventDefault(), e.stopPropagation()
    };

function ew() {
    var e, t, n;
    let {
        runningGame: i,
        runningGameApplication: s
    } = (0, N.A)(), a = null == i ? void 0 : i.pid, c = (0, h.bG)([k.default], () => null == i || null == a ? null : k.default.getTrackedGameByPid(a), [i, a], o()), {
        enabledLegacy: u,
        enabledOOP: d
    } = (0, h.cf)([ee.A, en.A], () => {
        if (null == i && null == c) return {
            enabledLegacy: !1,
            enabledOOP: !1
        };
        if (null == i) {
            var e, t;
            return {
                enabledLegacy: null != (e = null == c ? void 0 : c.legacyEnabled) && e,
                enabledOOP: null != (t = null == c ? void 0 : c.oopEnabled) && t
            }
        }
        return (0, I.hw)(i, !1, [ee.A, en.A])
    }, [i, c]), p = (0, h.bG)([I.Ay, ee.A, en.A], () => null == i ? null : (0, I.xU)(i, I.Ay, ee.A, en.A), [i], o()), [g, A] = l.useState(d), [y, j] = l.useState(u), [v, E] = l.useState(!1);
    l.useEffect(() => {
        A(d), j(u)
    }, [d, u]);
    let C = !(0, ed.supportsLegacy)(),
        S = !(0, ed.supportsOutOfProcess)(),
        {
            legacyEnabled: T,
            oopEnabled: D
        } = (0, h.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        M = (e, t) => {
            var n, r, l;
            if (null == i) return;
            let s = !1,
                a = !1;
            switch (t) {
                case R.OverlayToggledClientSettingType.LEGACY_GAME:
                    j(e), b.A.toggleOverlay(i, e, g), s = !e && y;
                    break;
                case R.OverlayToggledClientSettingType.OOP_GAME:
                    A(e), b.A.toggleOverlay(i, y, e), a = !e && g;
                    break;
                case R.OverlayToggledClientSettingType.LEGACY:
                    O.A.setEnabled(e, D), (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, null != (n = i.id) ? n : null);
                    break;
                case R.OverlayToggledClientSettingType.OOP:
                    O.A.setEnabled(T, e), (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, null != (r = i.id) ? r : null)
            }(s || a) && (0, H.L)(s ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.OOP_GAME, null != (l = i.id) ? l : null)
        },
        G = C && S,
        U = !T && !D,
        V = !g && !T && y && !C,
        B = !y && !D && g && !S,
        F = (null == c ? void 0 : c.overlayMethod) === L.Ue.Disabled,
        Y = (null == c ? void 0 : c.state) === L.AR.OVERLAY_RENDERING && !F,
        K = (null == c ? void 0 : c.state) != null && eT.has(c.state) && !F,
        W = (null == c ? void 0 : c.overlayMethod) === L.Ue.OutOfProcess,
        z = (null == c ? void 0 : c.overlayMethod) === L.Ue.OutOfProcessLimitedInteraction,
        X = (null == c ? void 0 : c.overlayMethod) === L.Ue.Hook,
        q = (null == c ? void 0 : c.state) === L.AR.OVERLAY_CRASHED || (null == c ? void 0 : c.state) === L.AR.OVERLAY_CRASHED_DISABLED,
        Q = !g && !y,
        [Z, $] = (() => {
            switch (!0) {
                case Y && W:
                    return [eb.intl.format(eb.t.hFVBIg, {
                        overlayMethod: eb.intl.string(eb.t.a3eXSw),
                        overlayMethodHook: function(e, t) {
                            return (0, r.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-positive",
                                children: e
                            }, t)
                        }
                    }), null];
                case Y && z:
                    return [eb.intl.format(eb.t.hFVBIg, {
                        overlayMethod: eb.intl.string(eb.t["506Aba"]),
                        overlayMethodHook: function(e, t) {
                            return (0, r.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-warning",
                                children: e
                            }, t)
                        }
                    }), null];
                case Y && X:
                    return [eb.intl.format(eb.t.hFVBIg, {
                        overlayMethod: eb.intl.string(eb.t.bvlpDR),
                        overlayMethodHook: function(e, t) {
                            return (0, r.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: e
                            }, t)
                        }
                    }), function() {
                        var e, t;
                        switch (!0) {
                            case (null == c ? void 0 : c.fullscreenType) !== x.aI.BORDERLESS_FULLSCREEN:
                                return eb.intl.string(eb.t.mJmbeC);
                            case S:
                                return eb.intl.string(eb.t.C7bLTQ);
                            case !(null != (e = null == c ? void 0 : c.oopEnabled) && e):
                                return eb.intl.string(eb.t.WiY24u);
                            case !D:
                                return eb.intl.string(eb.t.cAFVsL);
                            case !(null != (t = null == c ? void 0 : c.supportsOutOfProcess) && t):
                                return eb.intl.string(eb.t.XcGEcs);
                            default:
                                return eb.intl.string(eb.t.bJXH2v)
                        }
                    }()];
                case q:
                    return [eb.intl.string(eb.t.OFC2aw), null];
                case G:
                    return [eb.intl.string(eb.t.m7X4az), null];
                case U:
                    return [eb.intl.string(eb.t["9DUS5l"]), null];
                case Q:
                    return [eb.intl.string(eb.t.nQ9EdJ), null];
                case V:
                case B:
                    return [eb.intl.string(eb.t.VWUn0a), null];
                case K:
                    if (W) return [eb.intl.string(eb.t["s8+CFq"]), null];
                    if (X) return [eb.intl.string(eb.t.JEEdqt), null];
                    if (z) return [eb.intl.string(eb.t.pzBMwY), null];
                    return [eb.intl.string(eb.t["2Xhy9k"]), null];
                case null == c:
                    return [eb.intl.string(eb.t.vwHPRi), null];
                case F: {
                    let e = (null == c ? void 0 : c.fullscreenType) === x.aI.FULLSCREEN ? eb.intl.string(eb.t.mJmbeC) : null;
                    return [eb.intl.string(eb.t.VPW4XY), e]
                }
                default:
                    return [eb.intl.string(eb.t.ONovP5), null]
            }
        })();
    (0, _.Ay)(() => {
        b.A.getDetectableGames()
    });
    let [et, er] = l.useMemo(() => K ? ["text-muted", m.LU0.colors.TEXT_MUTED.css] : Y && z ? ["text-feedback-warning", m.LU0.colors.TEXT_FEEDBACK_WARNING.css] : Y && W ? ["text-feedback-positive", m.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : Y && X ? ["text-strong", m.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", m.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [K, Y, z, W, X]);
    return null == i ? null : (0, r.jsxs)(eN, {
        onExpand: E,
        className: v ? eA.tx : void 0,
        title: (0, r.jsxs)(r.Fragment, {
            children: [null != (e = null != (t = null != (n = null == s ? void 0 : s.name) ? n : null == p ? void 0 : p.name) ? t : null == i ? void 0 : i.gameName) ? e : "", null != p && p.verified ? (0, r.jsx)(f.m, {
                text: eb.intl.string(eb.t["4PJP5p"]),
                children: (0, r.jsx)(w.A, {
                    size: 16,
                    color: m.LU0.colors.BACKGROUND_BRAND.css,
                    children: (0, r.jsx)(m.Uzd, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: m.LU0.colors.WHITE.css
                    })
                })
            }) : null]
        }),
        description: Z,
        hint: null != $ ? $ : void 0,
        header: (0, r.jsxs)(r.Fragment, {
            children: [Y || K ? (0, r.jsx)(m.kN9, {
                size: "xxs",
                color: er
            }) : (0, r.jsx)("div", {
                className: eA.W4
            }), (0, r.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: et,
                children: eb.intl.string(eb.t.CDOx3w)
            })]
        }),
        icon: (0, r.jsx)(P.A, {
            game: s,
            pid: null == i ? void 0 : i.pid,
            size: P.M.MEDIUM
        }),
        "aria-label": eb.intl.string(eb.t["87O5GC"]),
        action: (0, r.jsx)(m.DUT, {
            onClick: e => eP(e),
            children: (0, r.jsx)(m.dOG, {
                checked: g && D || y && T,
                disabled: G,
                onChange: e => {
                    ((e, t) => {
                        if (null == i) return;
                        let n = !1,
                            r = !1;
                        switch (t) {
                            case "game":
                                b.A.toggleOverlay(i, e, e), j(e), A(e), n = !e && y, r = !e && g;
                                break;
                            case "global":
                                O.A.setEnabled(e, e), n = !e && T, r = !e && D;
                                break;
                            case "both":
                                O.A.setEnabled(e, e), b.A.toggleOverlay(i, e, e), j(e), A(e), n = !e && T || !e && y, r = !e && D || !e && g
                        }
                        let l = null;
                        if (n ? l = "game" === t ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.LEGACY : r && (l = "game" === t ? R.OverlayToggledClientSettingType.OOP_GAME : R.OverlayToggledClientSettingType.OOP), null != l) {
                            var s;
                            (0, H.L)(l, null != (s = i.id) ? s : null)
                        }
                    })(e, ((e, t) => {
                        let n = !t && e,
                            r = !D && g,
                            l = !T && y,
                            i = !g && D,
                            s = !y && T;
                        switch (!0) {
                            case n && (r || l) && (i || s):
                                return "both";
                            case n && (r || l):
                                return "global";
                            default:
                                return "game"
                        }
                    })(e, g && D || y && T))
                }
            })
        }),
        warning: (0, r.jsx)(J.A, {
            className: eA.Hh,
            game: i
        }),
        children: [(0, r.jsx)(eI, {
            title: eb.intl.string(eb.t["7BlVIs"]),
            description: eb.intl.string(eb.t.ndgADE),
            hint: D ? void 0 : eb.intl.string(eb.t.cAFVsL),
            "aria-label": eb.intl.string(eb.t["7BlVIs"]),
            action: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.dOG, {
                    checked: g && D,
                    disabled: S,
                    onChange: e => {
                        e && !D ? M(e, R.OverlayToggledClientSettingType.OOP) : M(e, R.OverlayToggledClientSettingType.OOP_GAME)
                    }
                }), (0, r.jsx)("div", {
                    className: eA.Kz
                })]
            })
        }), (0, r.jsx)(eI, {
            title: eb.intl.string(eb.t.BfFpW1),
            description: eb.intl.string(eb.t.OzInYk),
            hint: T ? void 0 : eb.intl.string(eb.t["3sYHXm"]),
            "aria-label": eb.intl.string(eb.t.BfFpW1),
            action: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.dOG, {
                    checked: y && T,
                    disabled: C,
                    onChange: e => {
                        e && !T ? M(e, R.OverlayToggledClientSettingType.LEGACY) : M(e, R.OverlayToggledClientSettingType.LEGACY_GAME)
                    }
                }), (0, r.jsx)("div", {
                    className: eA.Kz
                })]
            })
        })]
    })
}

function eR(e) {
    let {
        game: t,
        gameApplication: n
    } = e, i = l.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), s = (0, h.bG)([E.A], () => null != n ? n : E.A.getApplication(null == t ? void 0 : t.id), [n, t]);
    return (0, r.jsx)(P.A, {
        game: s,
        pid: i,
        size: P.M.SMALL
    })
}

function eD(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: a,
        clientSettingType: o,
        ariaLabel: c
    } = e, u = (0, h.cf)([I.Ay, ee.A, en.A], () => (0, I.xU)(t, I.Ay, ee.A, en.A)), d = (0, h.cf)([ee.A, en.A], () => (0, I.hw)(t, !1, [ee.A, en.A]), [t]), p = s(d), [g, f] = l.useState(p);
    return l.useEffect(() => {
        f(p)
    }, [p]), (0, r.jsx)(eI, {
        title: t.name,
        icon: (0, r.jsx)(eR, {
            game: u,
            gameApplication: n
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.dOG, {
                checked: g,
                disabled: i,
                onChange: e => (e => {
                    let n = !e && g;
                    if (f(e), a(e, u, d), n) {
                        var r, l;
                        (0, H.L)(o, null != (r = null != (l = u.id) ? l : null == t ? void 0 : t.id) ? r : null)
                    }
                })(e)
            }), (0, r.jsx)("div", {
                className: eA.Kz
            })]
        })
    })
}

function eL() {
    let [e, t] = l.useState(!1), {
        legacyEnabled: n,
        oopEnabled: i
    } = (0, h.cf)([k.default], () => k.default.getGlobalEnabledStatus()), s = (0, h.yK)([I.Ay], () => I.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), a = (0, C.A)(s.map(e => e.id)), o = !(0, ed.supportsLegacy)(), c = e => {
        var t, r;
        O.A.setEnabled(e, i);
        let l = null != (t = null == (r = I.Ay.getCurrentGameForAnalytics()) ? void 0 : r.id) ? t : null;
        (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, l), !e && n && (0, H.L)(R.OverlayToggledClientSettingType.LEGACY, l)
    }, u = (e, t, n) => {
        let {
            enabledOOP: r
        } = n;
        b.A.toggleOverlay(t, e, r)
    }, d = l.useMemo(() => (0, ed.supportsLegacy)() ? o ? eb.intl.string(eb.t.r9jEVw) : eb.intl.string(eb.t.OzInYk) : eb.intl.string(eb.t["8Ox6/E"]), [o]);
    return 0 === s.length ? (0, r.jsx)(eI, {
        title: eb.intl.string(eb.t.BfFpW1),
        description: d,
        "aria-label": eb.intl.string(eb.t.BfFpW1),
        className: eA.dA,
        action: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.dOG, {
                checked: n,
                disabled: o,
                onChange: e => c(e)
            }), em.OX && (0, r.jsx)("div", {
                className: eA.Kz
            })]
        })
    }) : (0, r.jsxs)(eN, {
        onExpand: t,
        className: e ? eA.tx : void 0,
        title: eb.intl.string(eb.t.BfFpW1),
        description: d,
        "aria-label": eb.intl.string(eb.t.BfFpW1),
        action: (0, r.jsx)(m.DUT, {
            onClick: e => eP(e),
            children: (0, r.jsx)(m.dOG, {
                checked: n,
                disabled: o,
                onChange: e => c(e)
            })
        }),
        children: [(0, r.jsx)("div", {
            className: eA.SC,
            children: (0, r.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eb.intl.string(eb.t.FzoWRo)
            })
        }), (0, r.jsx)(m.IpV, {
            className: eA.XG,
            children: s.map((e, t) => (0, r.jsx)(eD, {
                rawGame: e,
                clientSettingType: R.OverlayToggledClientSettingType.LEGACY_GAME,
                supportDisabled: o,
                gameApplication: a[t],
                getEnabledFromStatus: e => {
                    let {
                        enabledLegacy: t
                    } = e;
                    return t
                },
                onChange: u,
                ariaLabel: eb.intl.format(eb.t.hvPYsF, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function eM() {
    let [e, t] = l.useState(!1), {
        oopEnabled: n,
        legacyEnabled: i
    } = (0, h.cf)([k.default], () => k.default.getGlobalEnabledStatus()), s = !(0, ed.supportsOutOfProcess)(), a = (0, h.yK)([I.Ay], () => I.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), o = (0, C.A)(a.map(e => e.id)), c = e => {
        var t, r;
        let l = !e && n;
        O.A.setEnabled(i, e);
        let s = null != (t = null == (r = I.Ay.getCurrentGameForAnalytics()) ? void 0 : r.id) ? t : null;
        (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, s), l && (0, H.L)(R.OverlayToggledClientSettingType.OOP, s)
    }, u = (e, t, n) => {
        let {
            enabledLegacy: r
        } = n;
        b.A.toggleOverlay(t, e, r)
    }, d = l.useMemo(() => em.OX ? s ? eb.intl.string(eb.t.C7bLTQ) : eb.intl.string(eb.t.ndgADE) : eb.intl.string(eb.t.m7X4az), [s]);
    return 0 === a.length ? (0, r.jsx)(eI, {
        title: eb.intl.string(eb.t["7BlVIs"]),
        description: d,
        "aria-label": eb.intl.string(eb.t["7BlVIs"]),
        className: eA.dA,
        action: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.dOG, {
                checked: n,
                disabled: s,
                onChange: e => c(e)
            }), em.OX && (0, r.jsx)("div", {
                className: eA.Kz
            })]
        })
    }) : (0, r.jsxs)(eN, {
        onExpand: t,
        className: e ? eA.tx : void 0,
        title: eb.intl.string(eb.t["7BlVIs"]),
        description: d,
        "aria-label": eb.intl.string(eb.t["7BlVIs"]),
        action: (0, r.jsx)(m.DUT, {
            onClick: e => eP(e),
            children: (0, r.jsx)(m.dOG, {
                checked: n,
                disabled: s,
                onChange: e => c(e)
            })
        }),
        children: [(0, r.jsx)("div", {
            className: eA.SC,
            children: (0, r.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eb.intl.string(eb.t.FzoWRo)
            })
        }), (0, r.jsx)(m.IpV, {
            className: eA.XG,
            children: a.map((e, t) => (0, r.jsx)(eD, {
                rawGame: e,
                clientSettingType: R.OverlayToggledClientSettingType.OOP_GAME,
                gameApplication: o[t],
                supportDisabled: s,
                getEnabledFromStatus: e => {
                    let {
                        enabledOOP: t
                    } = e;
                    return t
                },
                onChange: u,
                ariaLabel: eb.intl.format(eb.t.nByTd3, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function eG() {
    return (0, M.X4)(v.A.USER_SETTINGS) ? (0, r.jsx)(eI, {
        title: eb.intl.string(eb.t["z4/l+V"]),
        description: eb.intl.string(eb.t["3aZq/0"]),
        action: (0, r.jsx)(m.Button, {
            variant: "primary",
            text: eb.intl.string(eb.t.s2nVhG),
            onClick: () => {
                (0, Y.b)(v.A.USER_SETTINGS, eg.BRT.APP)
            }
        }),
        "aria-label": eb.intl.string(eb.t["z4/l+V"])
    }) : null
}

function ek(e) {
    var t;
    let {
        isLegacySettings: n = !1
    } = e, l = (0, h.bG)([el.Ay], () => el.Ay.getOverlayKeybind()), i = !(0, ed.supportsLegacy)(), s = !(0, ed.supportsOutOfProcess)(), [a, o] = (0, h.yK)([I.Ay], () => [I.Ay.canShowAdminWarning, I.Ay.getVisibleGame()], []), c = (0, q.NP)(), d = null != o && o.elevated && a && !c, p = !(0, el.DV)(null != (t = null == l ? void 0 : l.shortcut) ? t : []);
    return (0, r.jsx)("div", {
        className: eA.hc,
        children: (0, r.jsxs)("div", {
            className: eA.eH,
            children: [(0, r.jsxs)("div", {
                className: eA.Bu,
                children: [(0, r.jsx)(m.Text, {
                    variant: n ? "text-md/semibold" : "text-md/medium",
                    color: "text-strong",
                    children: eb.intl.string(eb.t.VsAZcC)
                }), d && (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: eA.y7,
                    children: eb.intl.string(eb.t.NsowVa)
                }), p && (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: eA.y7,
                    children: eb.intl.string(eb.t["UNoTw/"])
                })]
            }), (0, r.jsx)("div", {
                className: eA.IH,
                children: (0, r.jsx)(j.A, {
                    disabled: i && s,
                    defaultValue: null != l ? l.shortcut : [],
                    onChange: function(e) {
                        u()(null != l, "Keybind should never be undefined"), A.A.setKeybind(ex(ej({}, l), {
                            shortcut: e
                        }))
                    }
                })
            })]
        })
    })
}

function eU(e) {
    return [{
        title: eb.t.eVE4LX,
        description: eb.t["72WNqk"],
        disabledSetting: D.M.TEXT_CHAT,
        key: ep.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
    }, {
        title: eb.t.oifnSh,
        description: eb.t.bgU5r0,
        disabledSetting: D.M.WELCOME_GENERAL,
        key: ep.X.OVERLAY_NOTIFICATIONS_WELCOME
    }, {
        title: eb.t.hqsZJW,
        description: eb.t.kHjdqc,
        disabledSetting: D.M.GO_LIVE_NUDGE,
        key: ep.X.OVERLAY_NOTIFICATIONS_GO_LIVE
    }, {
        title: eb.t.sop3rn,
        description: eb.t.pjgffc,
        disabledSetting: D.M.GAME_ACTIVITY,
        key: ep.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
    }, {
        title: eb.t["2QVhbb"],
        description: eb.t.wQ4ilB,
        disabledSetting: D.M.NOW_PLAYING,
        key: ep.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
    }, e && {
        title: eb.t["5/21FT"],
        description: eb.t.EIzwfA,
        disabledSetting: D.M.FRIEND_STREAM_WATCH_NUDGE,
        key: ep.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
        usePredicate: () => {
            let {
                enabled: e
            } = (0, M.QC)("OverlayV3StreamWatchNudge");
            return e
        }
    }].filter(e => !1 !== e).filter(Boolean)
}

function eV() {
    let {
        enabled: e
    } = (0, M.QC)("OverlayV3StreamWatchNudge"), t = eU(e), n = (0, h.bG)([V.A], () => V.A.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eA.AO,
        children: [(0, r.jsx)(m.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: eb.intl.string(eb.t.xOE5bA)
        }), t.map(e => {
            let t;
            return (0, r.jsxs)("div", {
                className: eA.vx,
                children: [(0, r.jsxs)("div", {
                    className: eA.LS,
                    children: [(0, r.jsx)(m.Text, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        children: eb.intl.string(e.title)
                    }), (0, r.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eb.intl.string(e.description)
                    })]
                }), (0, r.jsx)(m.dOG, {
                    checked: !n.has(e.disabledSetting),
                    onChange: (t = e.disabledSetting, e => {
                        O.A.setNotificationDisabledSetting(t, !e)
                    })
                })]
            }, e.disabledSetting)
        })]
    })
}

function eB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new $.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: r
        }),
        user: new Z.A({
            id: l,
            username: e
        }),
        member: {
            nick: e,
            userId: l,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: {
                primaryColor: "#000000",
                secondaryColor: null,
                tertiaryColor: null
            }
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0
    }
}

function eH(e) {
    var t, n;
    let i, {
            isLegacySettings: a = !1
        } = e,
        o = (0, h.bG)([er.default], () => er.default.getCurrentUser()),
        {
            avatarSizeMode: c,
            displayNameMode: u,
            displayUserMode: d
        } = (0, h.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode()
        })),
        [p] = l.useState(() => [eB(eb.intl.string(eb.t.C0ZDvo), !0, !1), eB(eb.intl.string(eb.t.iOtj8E), !1, !1, !0), eB(eb.intl.string(eb.t["0oqNgL"]), !1, !0)]),
        g = (0, h.bG)([B.A, et.A], () => {
            let e = B.A.getWidgetByType(eg.uss.VOICE_V3);
            if (null == e) return null;
            let t = et.A.getWidget(e.id);
            return null != t && (0, K.ZO)(t) ? t : null
        }),
        f = null != (t = null == g || null == (n = g.meta) ? void 0 : n.voiceStatesMaxShown) ? t : 8,
        b = [null != o ? ((i = eB(o.username)).user = o, i) : null, ...p].filter(eo.Vq),
        A = [new Map(b.map(e => [e.user.id, e])), b.map(e => e.user.id)],
        y = (0, r.jsx)(m.NPJ, {
            theme: eg.NJ8.MIDNIGHT,
            children: e => {
                var t, n;
                return (0, r.jsxs)("div", {
                    className: s()(eA.Y5, e),
                    children: [(0, r.jsx)("div", {
                        className: eA.kJ,
                        children: (0, r.jsx)(W.DH, {
                            id: "voice-widget",
                            title: eb.intl.string(eb.t.KNJ6Vq),
                            channel: (0, Q.createChannelRecord)({
                                id: "123",
                                name: "Test Channel",
                                type: eg.rbe.GUILD_VOICE,
                                guild_id: "456"
                            }),
                            overlayVoiceStates: A,
                            displayNameMode: u,
                            displayUserMode: d,
                            avatarSizeMode: c,
                            widget: eg.uss.VOICE,
                            anchorLeft: !0,
                            application: null,
                            stream: null,
                            streamApplication: null,
                            streamMetadata: null,
                            locked: !1,
                            pinned: !1,
                            isSettingsPreview: !0,
                            isPreviewingInGame: !1,
                            maxDisplayedVoiceStates: f
                        })
                    }), (0, r.jsxs)("div", {
                        className: eA.R$,
                        children: [(0, r.jsx)(z.Pl, {
                            children: eb.intl.string(eb.t.KNJ6Vq)
                        }), (0, r.jsx)(z.CS, {}), (0, r.jsx)(z.O0, {
                            id: null != (t = null == g ? void 0 : g.id) ? t : "voice-widget",
                            pinned: null != (n = null == g ? void 0 : g.pinned) && n
                        })]
                    })]
                })
            }
        });
    return a ? y : (0, r.jsx)("div", {
        className: eA.F9,
        children: y
    })
}

function eF() {
    var e, t;
    let {
        avatarSizeMode: n,
        displayNameMode: l,
        displayUserMode: i
    } = (0, h.cf)([es.default], () => ({
        avatarSizeMode: es.default.getAvatarSizeMode(),
        displayNameMode: es.default.getDisplayNameMode(),
        displayUserMode: es.default.getDisplayUserMode()
    })), s = (0, h.bG)([B.A, et.A], () => {
        let e = B.A.getWidgetByType(eg.uss.VOICE_V3);
        if (null == e) return null;
        let t = et.A.getWidget(e.id);
        return null != t && (0, K.ZO)(t) ? t : null
    }), a = null != (e = null == s || null == (t = s.meta) ? void 0 : t.voiceStatesMaxShown) ? e : 8;
    return (0, r.jsxs)("div", {
        className: eA.ri,
        children: [(0, r.jsx)(m.l6P, {
            label: eb.intl.string(eb.t.dnvZSg),
            options: [{
                id: "large",
                label: eb.intl.string(eb.t.YcOxtr),
                value: eg.OSZ.LARGE
            }, {
                id: "small",
                label: eb.intl.string(eb.t.BKIKqx),
                value: eg.OSZ.SMALL
            }],
            onSelectionChange: O.A.setAvatarSizeMode,
            value: n,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)(m.l6P, {
            label: eb.intl.string(eb.t.J0dpcB),
            options: [{
                id: "always",
                label: eb.intl.string(eb.t.nBmDrT),
                value: eg.pwA.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eb.intl.string(eb.t["2OvIZY"]),
                value: eg.pwA.ONLY_WHILE_SPEAKING
            }, {
                id: "never",
                label: eb.intl.string(eb.t.ekjlPL),
                value: eg.pwA.NEVER
            }],
            onSelectionChange: O.A.setDisplayNameMode,
            value: l,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)(eH, {
            isLegacySettings: !0
        }), (0, r.jsx)(m.l6P, {
            label: eb.intl.string(eb.t.swsWWC),
            options: [{
                id: "always",
                label: eb.intl.string(eb.t.nBmDrT),
                value: eg.f5z.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eb.intl.string(eb.t["2OvIZY"]),
                value: eg.f5z.ONLY_WHILE_SPEAKING
            }],
            onSelectionChange: O.A.setDisplayUserMode,
            value: i,
            selectionMode: "single",
            fullWidth: !0
        }), (0, r.jsx)("div", {
            className: eA.xJ,
            children: (0, r.jsx)(m.Apm, {
                label: eb.intl.string(eb.t["X/Uyzc"]),
                initialValue: a,
                onValueRender: e => e < ev ? eb.intl.string(eb.t.nrUzFL) : "".concat(Math.floor(e)),
                minValue: ev - 1,
                maxValue: eE,
                onValueChange: function(e) {
                    null != s && (e < ev ? (0, y.cC)(s.id, {
                        voiceStatesMaxShown: -1
                    }) : (0, y.cC)(s.id, {
                        voiceStatesMaxShown: Math.floor(e)
                    }))
                },
                markers: eC,
                barStyles: {
                    background: m.LU0.colors.BACKGROUND_MOD_STRONG.css
                },
                fillStyles: {
                    background: m.LU0.colors.BACKGROUND_BRAND.css
                },
                onMarkerRender: e => e < ev ? eb.intl.string(eb.t.nrUzFL) : "".concat(Math.floor(e))
            })
        })]
    })
}

function eY(e) {
    let {
        showDivider: t = !1
    } = e, [n, l] = (0, S.kn)([g.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, _.Ay)(() => () => {
        l(ef.i.AUTO_DISMISS)
    }), n !== g.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, r.jsxs)("div", {
        className: eA.xC,
        children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("img", {
                src: ey.A,
                alt: eb.intl.string(eb.t.mdXZh1),
                className: eA.tl
            })
        }), (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
                className: eA.vJ,
                children: [(0, r.jsx)(m.Heading, {
                    variant: "heading-xl/medium",
                    color: "text-strong",
                    children: eb.intl.string(eb.t.jzjJQg)
                }), (0, r.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eb.intl.string(eb.t["5dOfxb"])
                })]
            })
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)("img", {
                src: eO.A,
                alt: eb.intl.string(eb.t.mdXZh1),
                className: eA.lh
            })
        }), (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: eA.VV,
            children: (0, r.jsx)(m.Button, {
                variant: "primary",
                text: eb.intl.string(eb.t.Q26diF),
                onClick: () => void l(ef.i.DISMISS)
            })
        }), t ? (0, r.jsx)("div", {
            className: eA.$x
        }) : null]
    })
}

function eK(e) {
    let {
        runningGame: t,
        runningGameApplication: n
    } = e, i = null == n ? void 0 : n.id, s = (0, h.bG)([V.A], () => V.A.isLimitedInteractionOverrideEnabled(i), [i]), a = l.useMemo(() => null != t && (0, U.qJ)(t.pid), [t]), o = (0, G.A)({
        location: "overlay_user_settings"
    }), {
        disableClickableRegions: c,
        shouldShowKeybindIndicators: u
    } = (0, h.cf)([es.default], () => ({
        disableClickableRegions: es.default.disableClickableRegions,
        shouldShowKeybindIndicators: es.default.showKeybindIndicators
    }));
    return (0, r.jsxs)("div", {
        className: eA.U$,
        children: [(0, r.jsx)(ek, {
            isLegacySettings: !0
        }), o && (0, r.jsx)(m.dOG, {
            label: eb.intl.string(eb.t.XZTl9r),
            checked: u,
            onChange: e => O.A.setShowKeybindIndicators(e)
        }), null != i && (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                className: eA.yB,
                children: [(0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eb.intl.string(eb.t.wgVQND)
                }), (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eb.intl.string(eb.t["5SsyF5"])
                })]
            }), (0, r.jsx)(m.dOG, {
                checked: s || a,
                disabled: a,
                onChange: e => {
                    null != n && (0, F.x8)(n.id, e)
                }
            })]
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                className: eA.yB,
                children: [(0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eb.intl.string(eb.t["+eFXxq"])
                }), (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eb.intl.string(eb.t.kivMAp)
                })]
            }), (0, r.jsx)(m.dOG, {
                checked: !c,
                onChange: function() {
                    O.A.setDisableClickableRegions(!c)
                }
            })]
        })]
    })
}

function eW() {
    let e, {
            runningGame: t,
            runningGameApplication: n
        } = (0, N.A)(),
        l = (0, h.bG)([er.default], () => er.default.getCurrentUser());
    return (0, _.Ay)(() => {
        if (ec.isPlatformEmbedded) return (0, T.a2)(), T.e0
    }), (e = eS(e_), p().isEqual(e, e_) || (ea.default.track(eg.HAw.OVERLAY_SETTINGS_UPDATED, e), e_ = e), null == l) ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(eh.A, {
            title: eb.intl.string(eb.t["9cb1Uz"]),
            children: [(0, r.jsx)(eY, {
                showDivider: !0
            }), (0, r.jsxs)("div", {
                className: eA.U$,
                children: [(0, r.jsx)(ew, {}), (0, r.jsx)(eM, {}), (0, r.jsx)(eL, {}), (0, r.jsx)(eG, {})]
            }), (0, r.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(eK, {
                runningGame: t,
                runningGameApplication: n
            }), (0, r.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, r.jsxs)(m.D0$, {
            label: eb.intl.string(eb.t.r1TZfh),
            children: [(0, r.jsx)(eF, {}), (0, r.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, r.jsx)(eV, {})]
    })
}