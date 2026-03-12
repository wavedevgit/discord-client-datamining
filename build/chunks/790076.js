/** chunk id: 790076 params = (module,exports,require) **/
n.d(t, {
    Ay: () => ek,
    DA: () => eT,
    F1: () => ey,
    G6: () => ex,
    Gj: () => eO,
    Gk: () => eR,
    PP: () => ep,
    VQ: () => eM,
    fE: () => ej,
    nR: () => eb,
    ze: () => eP
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(812729),
    o = n.n(a),
    d = n(284009),
    c = n.n(d),
    u = n(735438),
    _ = n.n(u),
    m = n(311907),
    g = n(990078),
    A = n(397927),
    h = n(544420),
    x = n(97260),
    p = n(391973),
    T = n(684013),
    E = n(117178),
    C = n(56562),
    S = n(964486),
    f = n(793574),
    N = n(587895),
    b = n(429913),
    I = n(15285),
    v = n(286237),
    j = n(843402),
    O = n(769015),
    y = n(496885),
    R = n(810412),
    P = n(93465),
    D = n(206885),
    L = n(41984),
    M = n(589051),
    G = n(833551),
    U = n(515183),
    k = n(592598),
    V = n(395011),
    w = n(663677),
    B = n(682763),
    H = n(237984),
    F = n(897720),
    Y = n(393172),
    z = n(968898),
    X = n(847521),
    W = n(942405),
    K = n(824189),
    Z = n(95701),
    q = n(427157),
    J = n(288737),
    Q = n(760751),
    $ = n(555528),
    ee = n(189081),
    et = n(287809),
    en = n(532624),
    ei = n(242286),
    es = n(256415),
    el = n(954571),
    er = n(403362),
    ea = n(723702),
    eo = n(350535),
    ed = n(9302),
    ec = n(780964),
    eu = n(790174),
    e_ = n(652215),
    em = n(672396);
n(392164);
var eg = n(985018),
    eA = n(101128);
let eh = eE(null),
    ex = 1,
    ep = 25,
    eT = [0, 5, 10, 15, 20, 25];

function eE(e) {
    let t = es.default.getNotificationPositionMode(),
        n = t !== e_.G6Q.DISABLED,
        i = en.Ay.getOverlayKeybind(),
        s = en.Ay.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: k.A.isNotificationDisabled(em.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eo.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eo.dI)(s.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ei.default.enabled
    }
}

function eC(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: l,
        action: a,
        hint: o,
        warning: d,
        onClick: c,
        "aria-label": u,
        className: _
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(eA.HS, _),
        children: [(0, i.jsxs)(A.sqX, {
            "aria-label": u,
            onClick: c,
            children: [null != t && (0, i.jsx)("div", {
                className: eA.x_,
                children: t
            }), (0, i.jsxs)("div", {
                className: eA.rN,
                children: [null != n && (0, i.jsx)("div", {
                    className: eA.$t,
                    children: n
                }), (0, i.jsxs)("div", {
                    className: eA.c8,
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: eA.SZ,
                        children: s
                    }), null != l && (0, i.jsx)(A.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: l
                    }), null != o && (0, i.jsx)(A.Text, {
                        variant: "text-xxs/medium",
                        color: "text-muted",
                        children: o
                    })]
                }), (0, i.jsx)("div", {
                    className: eA.a$,
                    children: a
                })]
            })]
        }), (0, i.jsx)("div", {
            className: eA.Om,
            children: d
        })]
    })
}

function eS(e) {
    let {
        children: t,
        className: n,
        onExpand: l,
        ...a
    } = e, [o, d] = s.useState(!1);
    return (0, i.jsx)(A.Nt8, {
        className: eA.uR,
        collapsibleContent: (0, i.jsx)("div", {
            className: eA.oV,
            children: t
        }),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, i.jsx)(eC, {
                ...a,
                onClick: e => {
                    var n;
                    d(n = !o), l?.(n), t?.(e)
                },
                className: r()(eA.AC, n),
                action: (0, i.jsxs)("div", {
                    className: eA.rc,
                    children: [a.action, o ? (0, i.jsx)(A.abt, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--interactive-text-active)"
                    }) : (0, i.jsx)(A._BQ, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--interactive-text-active)"
                    })]
                })
            })
        }
    })
}
let ef = new Set([L.AR.INITIALIZING, L.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, L.AR.WAITING_FOR_MODULE_TRACKING, L.AR.WAITING_FOR_OVERLAY_OPEN, L.AR.WAITING_FOR_POPOUT_OPEN, L.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, L.AR.WAITING_FOR_REACT_INITIALIZATION, L.AR.WAITING_FOR_PID_FOCUS, L.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
    eN = e => {
        e.preventDefault(), e.stopPropagation()
    };

function eb() {
    let {
        runningGame: e,
        runningGameApplication: t
    } = (0, v.A)(), n = e?.pid, l = (0, m.bG)([G.default], () => null == e || null == n ? null : G.default.getTrackedGameByPid(n), [e, n], o()), {
        enabledLegacy: r,
        enabledOOP: a
    } = (0, m.cf)([Q.A, ee.A], () => null == e && null == l ? {
        enabledLegacy: !1,
        enabledOOP: !1
    } : null == e ? {
        enabledLegacy: l?.legacyEnabled ?? !1,
        enabledOOP: l?.oopEnabled ?? !1
    } : (0, I.hw)(e, !1, [Q.A, ee.A]), [e, l]), d = (0, m.bG)([I.Ay, Q.A, ee.A], () => null == e ? null : (0, I.xU)(e, I.Ay, Q.A, ee.A), [e], o()), [c, u] = s.useState(a), [_, x] = s.useState(r), [p, E] = s.useState(!1);
    s.useEffect(() => {
        u(a), x(r)
    }, [a, r]);
    let f = !(0, ed.supportsLegacy)(),
        N = !(0, ed.supportsOutOfProcess)(),
        {
            legacyEnabled: b,
            oopEnabled: j
        } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        P = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case R.OverlayToggledClientSettingType.LEGACY_GAME:
                    x(t), h.A.toggleOverlay(e, t, c), i = !t && _;
                    break;
                case R.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), h.A.toggleOverlay(e, _, t), s = !t && c;
                    break;
                case R.OverlayToggledClientSettingType.LEGACY:
                    T.A.setEnabled(t, j), (0, R.Q3)(t, R.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case R.OverlayToggledClientSettingType.OOP:
                    T.A.setEnabled(b, t), (0, R.Q3)(t, R.OverlayToggledClientSettingType.OOP, e.id ?? null)
            }(i || s) && (0, w.L)(i ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.OOP_GAME, e.id ?? null)
        },
        D = f && N,
        M = !b && !j,
        U = !c && !b && _ && !f,
        k = !_ && !j && c && !N,
        V = l?.overlayMethod === L.Ue.Disabled,
        B = l?.state === L.AR.OVERLAY_RENDERING && !V,
        H = l?.state != null && ef.has(l.state) && !V,
        F = l?.overlayMethod === L.Ue.OutOfProcess,
        Y = l?.overlayMethod === L.Ue.OutOfProcessLimitedInteraction,
        z = l?.overlayMethod === L.Ue.Hook,
        X = l?.state === L.AR.OVERLAY_CRASHED || l?.state === L.AR.OVERLAY_CRASHED_DISABLED,
        W = !c && !_,
        [Z, q] = (() => {
            switch (!0) {
                case B && F:
                    return [eg.intl.format(eg.t.hFVBIg, {
                        overlayMethod: eg.intl.string(eg.t.a3eXSw),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(A.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-positive",
                                children: e
                            }, t)
                        }
                    }), null];
                case B && Y:
                    return [eg.intl.format(eg.t.hFVBIg, {
                        overlayMethod: eg.intl.string(eg.t["506Aba"]),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(A.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-warning",
                                children: e
                            }, t)
                        }
                    }), null];
                case B && z:
                    return [eg.intl.format(eg.t.hFVBIg, {
                        overlayMethod: eg.intl.string(eg.t.bvlpDR),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(A.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: e
                            }, t)
                        }
                    }), function() {
                        switch (!0) {
                            case l?.fullscreenType !== C.aI.BORDERLESS_FULLSCREEN:
                                return eg.intl.string(eg.t.mJmbeC);
                            case N:
                                return eg.intl.string(eg.t.C7bLTQ);
                            case !l?.oopEnabled:
                                return eg.intl.string(eg.t.WiY24u);
                            case !j:
                                return eg.intl.string(eg.t.cAFVsL);
                            case !l?.supportsOutOfProcess:
                                return eg.intl.string(eg.t.XcGEcs);
                            default:
                                return eg.intl.string(eg.t.bJXH2v)
                        }
                    }()];
                case X:
                    return [eg.intl.string(eg.t.OFC2aw), null];
                case D:
                    return [eg.intl.string(eg.t.m7X4az), null];
                case M:
                    return [eg.intl.string(eg.t["9DUS5l"]), null];
                case W:
                    return [eg.intl.string(eg.t.nQ9EdJ), null];
                case U:
                case k:
                    return [eg.intl.string(eg.t.VWUn0a), null];
                case H:
                    if (F) return [eg.intl.string(eg.t["s8+CFq"]), null];
                    if (z) return [eg.intl.string(eg.t.JEEdqt), null];
                    if (Y) return [eg.intl.string(eg.t.pzBMwY), null];
                    return [eg.intl.string(eg.t["2Xhy9k"]), null];
                case null == l:
                    return [eg.intl.string(eg.t.vwHPRi), null];
                case V: {
                    let e = l?.fullscreenType === C.aI.FULLSCREEN ? eg.intl.string(eg.t.mJmbeC) : null;
                    return [eg.intl.string(eg.t.VPW4XY), e]
                }
                default:
                    return [eg.intl.string(eg.t.ONovP5), null]
            }
        })();
    (0, S.Ay)(() => {
        h.A.getDetectableGames()
    });
    let [J, $] = s.useMemo(() => H ? ["text-muted", A.LU0.colors.TEXT_MUTED.css] : B && Y ? ["text-feedback-warning", A.LU0.colors.TEXT_FEEDBACK_WARNING.css] : B && F ? ["text-feedback-positive", A.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : B && z ? ["text-strong", A.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", A.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [H, B, Y, F, z]);
    return null == e ? null : (0, i.jsxs)(eS, {
        onExpand: E,
        className: p ? eA.tx : void 0,
        title: (0, i.jsxs)(i.Fragment, {
            children: [t?.name ?? d?.name ?? e?.gameName ?? "", null != d && d.verified ? (0, i.jsx)(g.m, {
                text: eg.intl.string(eg.t["4PJP5p"]),
                children: (0, i.jsx)(y.A, {
                    size: 16,
                    color: A.LU0.colors.BACKGROUND_BRAND.css,
                    children: (0, i.jsx)(A.Uzd, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: A.LU0.colors.WHITE.css
                    })
                })
            }) : null]
        }),
        description: Z,
        hint: null != q ? q : void 0,
        header: (0, i.jsxs)(i.Fragment, {
            children: [B || H ? (0, i.jsx)(A.kN9, {
                size: "xxs",
                color: $
            }) : (0, i.jsx)("div", {
                className: eA.W4
            }), (0, i.jsx)(A.Text, {
                variant: "text-xs/semibold",
                color: J,
                children: eg.intl.string(eg.t.CDOx3w)
            })]
        }),
        icon: (0, i.jsx)(O.A, {
            game: t,
            pid: e?.pid,
            size: O.M.MEDIUM
        }),
        "aria-label": eg.intl.string(eg.t["87O5GC"]),
        action: (0, i.jsx)(A.DUT, {
            onClick: e => eN(e),
            children: (0, i.jsx)(A.dOG, {
                checked: c && j || _ && b,
                disabled: D,
                onChange: t => {
                    ((t, n) => {
                        if (null == e) return;
                        let i = !1,
                            s = !1;
                        switch (n) {
                            case "game":
                                h.A.toggleOverlay(e, t, t), x(t), u(t), i = !t && _, s = !t && c;
                                break;
                            case "global":
                                T.A.setEnabled(t, t), i = !t && b, s = !t && j;
                                break;
                            case "both":
                                T.A.setEnabled(t, t), h.A.toggleOverlay(e, t, t), x(t), u(t), i = !t && b || !t && _, s = !t && j || !t && c
                        }
                        let l = null;
                        i ? l = "game" === n ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.LEGACY : s && (l = "game" === n ? R.OverlayToggledClientSettingType.OOP_GAME : R.OverlayToggledClientSettingType.OOP), null != l && (0, w.L)(l, e.id ?? null)
                    })(t, ((e, t) => {
                        let n = !t && e,
                            i = !j && c,
                            s = !b && _,
                            l = !c && j,
                            r = !_ && b;
                        switch (!0) {
                            case n && (i || s) && (l || r):
                                return "both";
                            case n && (i || s):
                                return "global";
                            default:
                                return "game"
                        }
                    })(t, c && j || _ && b))
                }
            })
        }),
        warning: (0, i.jsx)(K.A, {
            className: eA.Hh,
            game: e
        }),
        children: [(0, i.jsx)(eC, {
            title: eg.intl.string(eg.t["7BlVIs"]),
            description: eg.intl.string(eg.t.ndgADE),
            hint: j ? void 0 : eg.intl.string(eg.t.cAFVsL),
            "aria-label": eg.intl.string(eg.t["7BlVIs"]),
            action: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(A.dOG, {
                    checked: c && j,
                    disabled: N,
                    onChange: e => {
                        e && !j ? P(e, R.OverlayToggledClientSettingType.OOP) : P(e, R.OverlayToggledClientSettingType.OOP_GAME)
                    }
                }), (0, i.jsx)("div", {
                    className: eA.Kz
                })]
            })
        }), (0, i.jsx)(eC, {
            title: eg.intl.string(eg.t.BfFpW1),
            description: eg.intl.string(eg.t.OzInYk),
            hint: b ? void 0 : eg.intl.string(eg.t["3sYHXm"]),
            "aria-label": eg.intl.string(eg.t.BfFpW1),
            action: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(A.dOG, {
                    checked: _ && b,
                    disabled: f,
                    onChange: e => {
                        e && !b ? P(e, R.OverlayToggledClientSettingType.LEGACY) : P(e, R.OverlayToggledClientSettingType.LEGACY_GAME)
                    }
                }), (0, i.jsx)("div", {
                    className: eA.Kz
                })]
            })
        })]
    })
}

function eI(e) {
    let {
        game: t,
        gameApplication: n
    } = e, l = s.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), r = (0, m.bG)([N.A], () => null != n ? n : N.A.getApplication(t?.id), [n, t]);
    return (0, i.jsx)(O.A, {
        game: r,
        pid: l,
        size: O.M.SMALL
    })
}

function ev(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: l,
        getEnabledFromStatus: r,
        onChange: a,
        clientSettingType: o,
        ariaLabel: d
    } = e, c = (0, m.cf)([I.Ay, Q.A, ee.A], () => (0, I.xU)(t, I.Ay, Q.A, ee.A)), u = (0, m.cf)([Q.A, ee.A], () => (0, I.hw)(t, !1, [Q.A, ee.A]), [t]), _ = r(u), [g, h] = s.useState(_);
    return s.useEffect(() => {
        h(_)
    }, [_]), (0, i.jsx)(eC, {
        title: t.name,
        icon: (0, i.jsx)(eI, {
            game: c,
            gameApplication: n
        }),
        "aria-label": d,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A.dOG, {
                checked: g,
                disabled: l,
                onChange: e => {
                    let n;
                    return n = !e && g, void(h(e), a(e, c, u), n && (0, w.L)(o, c.id ?? t?.id ?? null))
                }
            }), (0, i.jsx)("div", {
                className: eA.Kz
            })]
        })
    })
}

function ej() {
    let [e, t] = s.useState(!1), {
        legacyEnabled: n,
        oopEnabled: l
    } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()), r = (0, m.yK)([I.Ay], () => I.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), a = (0, b.A)(r.map(e => e.id)), o = !(0, ed.supportsLegacy)(), d = e => {
        T.A.setEnabled(e, l);
        let t = I.Ay.getCurrentGameForAnalytics()?.id ?? null;
        (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, t), !e && n && (0, w.L)(R.OverlayToggledClientSettingType.LEGACY, t)
    }, c = (e, t, n) => {
        let {
            enabledOOP: i
        } = n;
        h.A.toggleOverlay(t, e, i)
    }, u = s.useMemo(() => (0, ed.supportsLegacy)() ? o ? eg.intl.string(eg.t.r9jEVw) : eg.intl.string(eg.t.OzInYk) : eg.intl.string(eg.t["8Ox6/E"]), [o]);
    return 0 === r.length ? (0, i.jsx)(eC, {
        title: eg.intl.string(eg.t.BfFpW1),
        description: u,
        "aria-label": eg.intl.string(eg.t.BfFpW1),
        className: eA.dA,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A.dOG, {
                checked: n,
                disabled: o,
                onChange: e => d(e)
            }), D.O && (0, i.jsx)("div", {
                className: eA.Kz
            })]
        })
    }) : (0, i.jsxs)(eS, {
        onExpand: t,
        className: e ? eA.tx : void 0,
        title: eg.intl.string(eg.t.BfFpW1),
        description: u,
        "aria-label": eg.intl.string(eg.t.BfFpW1),
        action: (0, i.jsx)(A.DUT, {
            onClick: e => eN(e),
            children: (0, i.jsx)(A.dOG, {
                checked: n,
                disabled: o,
                onChange: e => d(e)
            })
        }),
        children: [(0, i.jsx)("div", {
            className: eA.SC,
            children: (0, i.jsx)(A.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eg.intl.string(eg.t.FzoWRo)
            })
        }), (0, i.jsx)(A.IpV, {
            className: eA.XG,
            children: r.map((e, t) => (0, i.jsx)(ev, {
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
                onChange: c,
                ariaLabel: eg.intl.format(eg.t.hvPYsF, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function eO() {
    let [e, t] = s.useState(!1), {
        oopEnabled: n,
        legacyEnabled: l
    } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()), r = !(0, ed.supportsOutOfProcess)(), a = (0, m.yK)([I.Ay], () => I.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), o = (0, b.A)(a.map(e => e.id)), d = e => {
        let t = !e && n;
        T.A.setEnabled(l, e);
        let i = I.Ay.getCurrentGameForAnalytics()?.id ?? null;
        (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, i), t && (0, w.L)(R.OverlayToggledClientSettingType.OOP, i)
    }, c = (e, t, n) => {
        let {
            enabledLegacy: i
        } = n;
        h.A.toggleOverlay(t, e, i)
    }, u = s.useMemo(() => D.O ? r ? eg.intl.string(eg.t.C7bLTQ) : eg.intl.string(eg.t.ndgADE) : eg.intl.string(eg.t.m7X4az), [r]);
    return 0 === a.length ? (0, i.jsx)(eC, {
        title: eg.intl.string(eg.t["7BlVIs"]),
        description: u,
        "aria-label": eg.intl.string(eg.t["7BlVIs"]),
        className: eA.dA,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A.dOG, {
                checked: n,
                disabled: r,
                onChange: e => d(e)
            }), D.O && (0, i.jsx)("div", {
                className: eA.Kz
            })]
        })
    }) : (0, i.jsxs)(eS, {
        onExpand: t,
        className: e ? eA.tx : void 0,
        title: eg.intl.string(eg.t["7BlVIs"]),
        description: u,
        "aria-label": eg.intl.string(eg.t["7BlVIs"]),
        action: (0, i.jsx)(A.DUT, {
            onClick: e => eN(e),
            children: (0, i.jsx)(A.dOG, {
                checked: n,
                disabled: r,
                onChange: e => d(e)
            })
        }),
        children: [(0, i.jsx)("div", {
            className: eA.SC,
            children: (0, i.jsx)(A.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eg.intl.string(eg.t.FzoWRo)
            })
        }), (0, i.jsx)(A.IpV, {
            className: eA.XG,
            children: a.map((e, t) => (0, i.jsx)(ev, {
                rawGame: e,
                clientSettingType: R.OverlayToggledClientSettingType.OOP_GAME,
                gameApplication: o[t],
                supportDisabled: r,
                getEnabledFromStatus: e => {
                    let {
                        enabledOOP: t
                    } = e;
                    return t
                },
                onChange: c,
                ariaLabel: eg.intl.format(eg.t.nByTd3, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function ey() {
    return (0, M.X4)(f.A.USER_SETTINGS) ? (0, i.jsx)(eC, {
        title: eg.intl.string(eg.t["z4/l+V"]),
        description: eg.intl.string(eg.t["3aZq/0"]),
        action: (0, i.jsx)(A.Button, {
            variant: "primary",
            text: eg.intl.string(eg.t.s2nVhG),
            onClick: () => {
                (0, H.b)(f.A.USER_SETTINGS, e_.BRT.APP)
            }
        }),
        "aria-label": eg.intl.string(eg.t["z4/l+V"])
    }) : null
}

function eR(e) {
    let {
        isLegacySettings: t = !1
    } = e, n = (0, m.bG)([en.Ay], () => en.Ay.getOverlayKeybind()), s = !(0, ed.supportsLegacy)(), l = !(0, ed.supportsOutOfProcess)(), [r, a] = (0, m.yK)([I.Ay], () => [I.Ay.canShowAdminWarning, I.Ay.getVisibleGame()], []), o = (0, W.NP)(), d = null != a && a.elevated && r && !o, u = !(0, en.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: eA.hc,
        children: (0, i.jsxs)("div", {
            className: eA.eH,
            children: [(0, i.jsxs)("div", {
                className: eA.Bu,
                children: [(0, i.jsx)(A.Text, {
                    variant: t ? "text-md/semibold" : "text-md/medium",
                    color: "text-strong",
                    children: eg.intl.string(eg.t.VsAZcC)
                }), d && (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: eA.y7,
                    children: eg.intl.string(eg.t.NsowVa)
                }), u && (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: eA.y7,
                    children: eg.intl.string(eg.t["UNoTw/"])
                })]
            }), (0, i.jsx)("div", {
                className: eA.IH,
                children: (0, i.jsx)(E.A, {
                    disabled: s && l,
                    defaultValue: null != n ? n.shortcut : [],
                    onChange: function(e) {
                        c()(null != n, "Keybind should never be undefined"), x.A.setKeybind({
                            ...n,
                            shortcut: e
                        })
                    }
                })
            })]
        })
    })
}

function eP(e, t) {
    return [{
        title: eg.t.eVE4LX,
        description: eg.t["72WNqk"],
        disabledSetting: P.M.TEXT_CHAT,
        key: ec.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
    }, {
        title: eg.t.oifnSh,
        description: eg.t.bgU5r0,
        disabledSetting: P.M.WELCOME_GENERAL,
        key: ec.X.OVERLAY_NOTIFICATIONS_WELCOME
    }, {
        title: eg.t.hqsZJW,
        description: eg.t.kHjdqc,
        disabledSetting: P.M.GO_LIVE_NUDGE,
        key: ec.X.OVERLAY_NOTIFICATIONS_GO_LIVE
    }, {
        title: eg.t.sop3rn,
        description: eg.t.pjgffc,
        disabledSetting: P.M.GAME_ACTIVITY,
        key: ec.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
    }, {
        title: eg.t["2QVhbb"],
        description: eg.t.wQ4ilB,
        disabledSetting: P.M.NOW_PLAYING,
        key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
    }, t && {
        title: eg.t.giM9fA,
        description: eg.t.EhAfWj,
        disabledSetting: P.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let {
                showNowPlayingForDifferentGames: e
            } = (0, M.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"), t = (0, m.bG)([k.A], () => k.A.isNotificationDisabledBySetting(P.M.NOW_PLAYING));
            return !!e && !t
        }
    }, e && {
        title: eg.t["5/21FT"],
        description: eg.t.EIzwfA,
        disabledSetting: P.M.FRIEND_STREAM_WATCH_NUDGE,
        key: ec.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
        usePredicate: () => {
            let {
                enabled: e
            } = (0, M.QC)("OverlayV3StreamWatchNudge");
            return e
        }
    }].filter(e => !1 !== e).filter(Boolean)
}

function eD() {
    let {
        enabled: e
    } = (0, M.QC)("OverlayV3StreamWatchNudge"), {
        showNowPlayingForDifferentGames: t
    } = (0, M.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"), n = (0, m.bG)([k.A], () => k.A.getDisabledNotifications()), s = eP(e, t && !n.has(P.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: eA.AO,
        children: [(0, i.jsx)(A.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: eg.intl.string(eg.t.xOE5bA)
        }), s.map(e => {
            let t;
            return (0, i.jsxs)("div", {
                className: eA.vx,
                children: [(0, i.jsxs)("div", {
                    className: eA.LS,
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        children: eg.intl.string(e.title)
                    }), (0, i.jsx)(A.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eg.intl.string(e.description)
                    })]
                }), (0, i.jsx)(A.dOG, {
                    checked: !n.has(e.disabledSetting),
                    onChange: (t = e.disabledSetting, e => {
                        T.A.setNotificationDisabledSetting(t, !e)
                    })
                })]
            }, e.disabledSetting)
        })]
    })
}

function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new J.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i
        }),
        user: new q.A({
            id: s,
            username: e
        }),
        member: {
            nick: e,
            userId: s,
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

function eM(e) {
    let t, {
            isLegacySettings: n = !1
        } = e,
        l = (0, m.bG)([et.default], () => et.default.getCurrentUser()),
        {
            avatarSizeMode: a,
            displayNameMode: o,
            displayUserMode: d
        } = (0, m.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode()
        })),
        [c] = s.useState(() => [eL(eg.intl.string(eg.t.C0ZDvo), !0, !1), eL(eg.intl.string(eg.t.iOtj8E), !1, !1, !0), eL(eg.intl.string(eg.t["0oqNgL"]), !1, !0)]),
        u = (0, m.bG)([V.A, $.A], () => {
            let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, F.ZO)(t) ? t : null
        }),
        _ = u?.meta?.voiceStatesMaxShown ?? 8,
        g = [null != l ? ((t = eL(l.username)).user = l, t) : null, ...c].filter(er.Vq),
        h = [new Map(g.map(e => [e.user.id, e])), g.map(e => e.user.id)],
        x = (0, i.jsx)(A.NPJ, {
            theme: e_.NJ8.MIDNIGHT,
            children: e => (0, i.jsxs)("div", {
                className: r()(eA.Y5, e),
                children: [(0, i.jsx)("div", {
                    className: eA.kJ,
                    children: (0, i.jsx)(Y.DH, {
                        id: "voice-widget",
                        title: eg.intl.string(eg.t.KNJ6Vq),
                        channel: (0, Z.createChannelRecord)({
                            id: "123",
                            name: "Test Channel",
                            type: e_.rbe.GUILD_VOICE,
                            guild_id: "456"
                        }),
                        overlayVoiceStates: h,
                        displayNameMode: o,
                        displayUserMode: d,
                        avatarSizeMode: a,
                        widget: e_.uss.VOICE,
                        anchorLeft: !0,
                        application: null,
                        stream: null,
                        streamApplication: null,
                        streamMetadata: null,
                        locked: !1,
                        pinned: !1,
                        isSettingsPreview: !0,
                        isPreviewingInGame: !1,
                        maxDisplayedVoiceStates: _
                    })
                }), (0, i.jsxs)("div", {
                    className: eA.R$,
                    children: [(0, i.jsx)(z.Pl, {
                        children: eg.intl.string(eg.t.KNJ6Vq)
                    }), (0, i.jsx)(z.CS, {}), (0, i.jsx)(z.O0, {
                        id: u?.id ?? "voice-widget",
                        pinned: u?.pinned ?? !1
                    })]
                })]
            })
        });
    return n ? x : (0, i.jsx)("div", {
        className: eA.F9,
        children: x
    })
}

function eG() {
    let {
        avatarSizeMode: e,
        displayNameMode: t,
        displayUserMode: n
    } = (0, m.cf)([es.default], () => ({
        avatarSizeMode: es.default.getAvatarSizeMode(),
        displayNameMode: es.default.getDisplayNameMode(),
        displayUserMode: es.default.getDisplayUserMode()
    })), s = (0, m.bG)([V.A, $.A], () => {
        let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
        if (null == e) return null;
        let t = $.A.getWidget(e.id);
        return null != t && (0, F.ZO)(t) ? t : null
    }), l = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: eA.ri,
        children: [(0, i.jsx)(A.l6P, {
            label: eg.intl.string(eg.t.dnvZSg),
            options: [{
                id: "large",
                label: eg.intl.string(eg.t.YcOxtr),
                value: e_.OSZ.LARGE
            }, {
                id: "small",
                label: eg.intl.string(eg.t.BKIKqx),
                value: e_.OSZ.SMALL
            }],
            onSelectionChange: T.A.setAvatarSizeMode,
            value: e,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)(A.l6P, {
            label: eg.intl.string(eg.t.J0dpcB),
            options: [{
                id: "always",
                label: eg.intl.string(eg.t.nBmDrT),
                value: e_.pwA.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eg.intl.string(eg.t["2OvIZY"]),
                value: e_.pwA.ONLY_WHILE_SPEAKING
            }, {
                id: "never",
                label: eg.intl.string(eg.t.ekjlPL),
                value: e_.pwA.NEVER
            }],
            onSelectionChange: T.A.setDisplayNameMode,
            value: t,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)(eM, {
            isLegacySettings: !0
        }), (0, i.jsx)(A.l6P, {
            label: eg.intl.string(eg.t.swsWWC),
            options: [{
                id: "always",
                label: eg.intl.string(eg.t.nBmDrT),
                value: e_.f5z.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eg.intl.string(eg.t["2OvIZY"]),
                value: e_.f5z.ONLY_WHILE_SPEAKING
            }],
            onSelectionChange: T.A.setDisplayUserMode,
            value: n,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)("div", {
            className: eA.xJ,
            children: (0, i.jsx)(A.Apm, {
                label: eg.intl.string(eg.t["X/Uyzc"]),
                initialValue: l,
                onValueRender: e => e < ex ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`,
                minValue: ex - 1,
                maxValue: ep,
                onValueChange: function(e) {
                    null != s && (e < ex ? (0, p.cC)(s.id, {
                        voiceStatesMaxShown: -1
                    }) : (0, p.cC)(s.id, {
                        voiceStatesMaxShown: Math.floor(e)
                    }))
                },
                markers: eT,
                barStyles: {
                    background: A.LU0.colors.BACKGROUND_MOD_STRONG.css
                },
                fillStyles: {
                    background: A.LU0.colors.BACKGROUND_BRAND.css
                },
                onMarkerRender: e => e < ex ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`
            })
        })]
    })
}

function eU(e) {
    let {
        runningGame: t,
        runningGameApplication: n
    } = e, l = n?.id, r = (0, m.bG)([k.A], () => k.A.isLimitedInteractionOverrideEnabled(l), [l]), a = s.useMemo(() => null != t && (0, U.qJ)(t.pid), [t]), o = (0, m.bG)([es.default], () => es.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: eA.U$,
        children: [(0, i.jsx)(eR, {
            isLegacySettings: !0
        }), null != l && (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                className: eA.yB,
                children: [(0, i.jsx)(A.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eg.intl.string(eg.t.wgVQND)
                }), (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eg.intl.string(eg.t["5SsyF5"])
                })]
            }), (0, i.jsx)(A.dOG, {
                checked: r || a,
                disabled: a,
                onChange: e => {
                    null != n && (0, B.x8)(n.id, e)
                }
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                className: eA.yB,
                children: [(0, i.jsx)(A.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eg.intl.string(eg.t["+eFXxq"])
                }), (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eg.intl.string(eg.t.kivMAp)
                })]
            }), (0, i.jsx)(A.dOG, {
                checked: !o,
                onChange: function() {
                    T.A.setDisableClickableRegions(!o)
                }
            })]
        })]
    })
}

function ek() {
    let e, {
            runningGame: t,
            runningGameApplication: n
        } = (0, v.A)(),
        s = (0, m.bG)([et.default], () => et.default.getCurrentUser());
    return (0, S.Ay)(() => {
        if (ea.isPlatformEmbedded) return (0, j.a2)(), j.e0
    }), (e = eE(eh), _().isEqual(e, eh) || (el.default.track(e_.HAw.OVERLAY_SETTINGS_UPDATED, e), eh = e), null == s) ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(eu.A, {
            title: eg.intl.string(eg.t["9cb1Uz"]),
            children: [(0, i.jsxs)("div", {
                className: eA.U$,
                children: [(0, i.jsx)(eb, {}), (0, i.jsx)(eO, {}), (0, i.jsx)(ej, {}), (0, i.jsx)(ey, {})]
            }), (0, i.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(eU, {
                runningGame: t,
                runningGameApplication: n
            }), (0, i.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, i.jsxs)(A.D0$, {
            label: eg.intl.string(eg.t.r1TZfh),
            children: [(0, i.jsx)(eG, {}), (0, i.jsx)("div", {
                className: eA.Ri
            })]
        }), (0, i.jsx)(eD, {})]
    })
}