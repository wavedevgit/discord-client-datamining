/** chunk id: 790076 params = (module,exports,require) **/
n.d(t, {
    Ay: () => ek,
    DA: () => eE,
    F1: () => eR,
    G6: () => ep,
    Gj: () => ej,
    Gk: () => ey,
    PP: () => ex,
    VQ: () => eG,
    fE: () => eO,
    nR: () => eN,
    ze: () => eP
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(812729),
    o = n.n(r),
    d = n(284009),
    c = n.n(d),
    u = n(735438),
    _ = n.n(u),
    g = n(311907),
    A = n(990078),
    m = n(397927),
    h = n(544420),
    p = n(97260),
    x = n(391973),
    E = n(684013),
    T = n(117178),
    S = n(56562),
    C = n(964486),
    I = n(793574),
    f = n(587895),
    N = n(429913),
    b = n(15285),
    v = n(286237),
    O = n(843402),
    j = n(769015),
    R = n(496885),
    y = n(810412),
    P = n(93465),
    D = n(206885),
    L = n(41984),
    G = n(589051),
    M = n(833551),
    U = n(515183),
    k = n(592598),
    V = n(395011),
    w = n(663677),
    H = n(682763),
    B = n(237984),
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
    ea = n(403362),
    er = n(723702),
    eo = n(350535),
    ed = n(9302),
    ec = n(780964),
    eu = n(790174),
    e_ = n(652215),
    eg = n(672396);
n(392164);
var eA = n(985018),
    em = n(101128);
let eh = eT(null),
    ep = 1,
    ex = 25,
    eE = [0, 5, 10, 15, 20, 25];

function eT(e) {
    let t = es.default.getNotificationPositionMode(),
        n = t !== e_.G6Q.DISABLED,
        i = en.Ay.getOverlayKeybind(),
        s = en.Ay.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: k.A.isNotificationDisabled(eg.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eo.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eo.dI)(s.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ei.default.enabled
    }
}

function eS(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: l,
        action: r,
        hint: o,
        warning: d,
        onClick: c,
        "aria-label": u,
        className: _
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(em.HS, _),
        children: [(0, i.jsxs)(m.sqX, {
            "aria-label": u,
            onClick: c,
            children: [null != t && (0, i.jsx)("div", {
                className: em.x_,
                children: t
            }), (0, i.jsxs)("div", {
                className: em.rN,
                children: [null != n && (0, i.jsx)("div", {
                    className: em.$t,
                    children: n
                }), (0, i.jsxs)("div", {
                    className: em.c8,
                    children: [(0, i.jsx)(m.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: em.SZ,
                        children: s
                    }), null != l && (0, i.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: l
                    }), null != o && (0, i.jsx)(m.Text, {
                        variant: "text-xxs/medium",
                        color: "text-muted",
                        children: o
                    })]
                }), (0, i.jsx)("div", {
                    className: em.a$,
                    children: r
                })]
            })]
        }), (0, i.jsx)("div", {
            className: em.Om,
            children: d
        })]
    })
}

function eC(e) {
    let {
        children: t,
        className: n,
        onExpand: l,
        ...r
    } = e, [o, d] = s.useState(!1);
    return (0, i.jsx)(m.Nt8, {
        className: em.uR,
        collapsibleContent: (0, i.jsx)("div", {
            className: em.oV,
            children: t
        }),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, i.jsx)(eS, {
                ...r,
                onClick: e => {
                    var n;
                    d(n = !o), l?.(n), t?.(e)
                },
                className: a()(em.AC, n),
                action: (0, i.jsxs)("div", {
                    className: em.rc,
                    children: [r.action, o ? (0, i.jsx)(m.abt, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "var(--interactive-text-active)"
                    }) : (0, i.jsx)(m._BQ, {
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
let eI = new Set([L.AR.INITIALIZING, L.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, L.AR.WAITING_FOR_MODULE_TRACKING, L.AR.WAITING_FOR_OVERLAY_OPEN, L.AR.WAITING_FOR_POPOUT_OPEN, L.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, L.AR.WAITING_FOR_REACT_INITIALIZATION, L.AR.WAITING_FOR_PID_FOCUS, L.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
    ef = e => {
        e.preventDefault(), e.stopPropagation()
    };

function eN() {
    let {
        runningGame: e,
        runningGameApplication: t
    } = (0, v.A)(), n = e?.pid, l = (0, g.bG)([M.default], () => null == e || null == n ? null : M.default.getTrackedGameByPid(n), [e, n], o()), {
        enabledLegacy: a,
        enabledOOP: r
    } = (0, g.cf)([Q.A, ee.A], () => null == e && null == l ? {
        enabledLegacy: !1,
        enabledOOP: !1
    } : null == e ? {
        enabledLegacy: l?.legacyEnabled ?? !1,
        enabledOOP: l?.oopEnabled ?? !1
    } : (0, b.hw)(e, !1, [Q.A, ee.A]), [e, l]), d = (0, g.bG)([b.Ay, Q.A, ee.A], () => null == e ? null : (0, b.xU)(e, b.Ay, Q.A, ee.A), [e], o()), [c, u] = s.useState(r), [_, p] = s.useState(a), [x, T] = s.useState(!1);
    s.useEffect(() => {
        u(r), p(a)
    }, [r, a]);
    let I = !(0, ed.supportsLegacy)(),
        f = !(0, ed.supportsOutOfProcess)(),
        {
            legacyEnabled: N,
            oopEnabled: O
        } = (0, g.cf)([M.default], () => M.default.getGlobalEnabledStatus()),
        P = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case y.OverlayToggledClientSettingType.LEGACY_GAME:
                    p(t), h.A.toggleOverlay(e, t, c), i = !t && _;
                    break;
                case y.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), h.A.toggleOverlay(e, _, t), s = !t && c;
                    break;
                case y.OverlayToggledClientSettingType.LEGACY:
                    E.A.setEnabled(t, O), (0, y.Q3)(t, y.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case y.OverlayToggledClientSettingType.OOP:
                    E.A.setEnabled(N, t), (0, y.Q3)(t, y.OverlayToggledClientSettingType.OOP, e.id ?? null)
            }(i || s) && (0, w.L)(i ? y.OverlayToggledClientSettingType.LEGACY_GAME : y.OverlayToggledClientSettingType.OOP_GAME, e.id ?? null)
        },
        D = I && f,
        G = !N && !O,
        U = !c && !N && _ && !I,
        k = !_ && !O && c && !f,
        V = l?.overlayMethod === L.Ue.Disabled,
        H = l?.state === L.AR.OVERLAY_RENDERING && !V,
        B = l?.state != null && eI.has(l.state) && !V,
        F = l?.overlayMethod === L.Ue.OutOfProcess,
        Y = l?.overlayMethod === L.Ue.OutOfProcessLimitedInteraction,
        z = l?.overlayMethod === L.Ue.Hook,
        X = l?.state === L.AR.OVERLAY_CRASHED || l?.state === L.AR.OVERLAY_CRASHED_DISABLED,
        W = !c && !_,
        [Z, q] = (() => {
            switch (!0) {
                case H && F:
                    return [eA.intl.format(eA.t.hFVBIg, {
                        overlayMethod: eA.intl.string(eA.t.a3eXSw),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-positive",
                                children: e
                            }, t)
                        }
                    }), null];
                case H && Y:
                    return [eA.intl.format(eA.t.hFVBIg, {
                        overlayMethod: eA.intl.string(eA.t["506Aba"]),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-warning",
                                children: e
                            }, t)
                        }
                    }), null];
                case H && z:
                    return [eA.intl.format(eA.t.hFVBIg, {
                        overlayMethod: eA.intl.string(eA.t.bvlpDR),
                        overlayMethodHook: function(e, t) {
                            return (0, i.jsx)(m.Text, {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: e
                            }, t)
                        }
                    }), function() {
                        switch (!0) {
                            case l?.fullscreenType !== S.aI.BORDERLESS_FULLSCREEN:
                                return eA.intl.string(eA.t.mJmbeC);
                            case f:
                                return eA.intl.string(eA.t.C7bLTQ);
                            case !l?.oopEnabled:
                                return eA.intl.string(eA.t.WiY24u);
                            case !O:
                                return eA.intl.string(eA.t.cAFVsL);
                            case !l?.supportsOutOfProcess:
                                return eA.intl.string(eA.t.XcGEcs);
                            default:
                                return eA.intl.string(eA.t.bJXH2v)
                        }
                    }()];
                case X:
                    return [eA.intl.string(eA.t.OFC2aw), null];
                case D:
                    return [eA.intl.string(eA.t.m7X4az), null];
                case G:
                    return [eA.intl.string(eA.t["9DUS5l"]), null];
                case W:
                    return [eA.intl.string(eA.t.nQ9EdJ), null];
                case U:
                case k:
                    return [eA.intl.string(eA.t.VWUn0a), null];
                case B:
                    if (F) return [eA.intl.string(eA.t["s8+CFq"]), null];
                    if (z) return [eA.intl.string(eA.t.JEEdqt), null];
                    if (Y) return [eA.intl.string(eA.t.pzBMwY), null];
                    return [eA.intl.string(eA.t["2Xhy9k"]), null];
                case null == l:
                    return [eA.intl.string(eA.t.vwHPRi), null];
                case V: {
                    let e = l?.fullscreenType === S.aI.FULLSCREEN ? eA.intl.string(eA.t.mJmbeC) : null;
                    return [eA.intl.string(eA.t.VPW4XY), e]
                }
                default:
                    return [eA.intl.string(eA.t.ONovP5), null]
            }
        })();
    (0, C.Ay)(() => {
        h.A.getDetectableGames()
    });
    let [J, $] = s.useMemo(() => B ? ["text-muted", m.LU0.colors.TEXT_MUTED.css] : H && Y ? ["text-feedback-warning", m.LU0.colors.TEXT_FEEDBACK_WARNING.css] : H && F ? ["text-feedback-positive", m.LU0.colors.TEXT_FEEDBACK_POSITIVE.css] : H && z ? ["text-strong", m.LU0.colors.TEXT_STRONG.css] : ["interactive-text-default", m.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css], [B, H, Y, F, z]);
    return null == e ? null : (0, i.jsxs)(eC, {
        onExpand: T,
        className: x ? em.tx : void 0,
        title: (0, i.jsxs)(i.Fragment, {
            children: [t?.name ?? d?.name ?? e?.gameName ?? "", null != d && d.verified ? (0, i.jsx)(A.m, {
                text: eA.intl.string(eA.t["4PJP5p"]),
                children: (0, i.jsx)(R.A, {
                    size: 16,
                    color: m.LU0.colors.BACKGROUND_BRAND.css,
                    children: (0, i.jsx)(m.Uzd, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: m.LU0.colors.WHITE.css
                    })
                })
            }) : null]
        }),
        description: Z,
        hint: null != q ? q : void 0,
        header: (0, i.jsxs)(i.Fragment, {
            children: [H || B ? (0, i.jsx)(m.kN9, {
                size: "xxs",
                color: $
            }) : (0, i.jsx)("div", {
                className: em.W4
            }), (0, i.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: J,
                children: eA.intl.string(eA.t.CDOx3w)
            })]
        }),
        icon: (0, i.jsx)(j.A, {
            game: t,
            pid: e?.pid,
            size: j.M.MEDIUM
        }),
        "aria-label": eA.intl.string(eA.t["87O5GC"]),
        action: (0, i.jsx)(m.DUT, {
            onClick: e => ef(e),
            children: (0, i.jsx)(m.dOG, {
                checked: c && O || _ && N,
                disabled: D,
                onChange: t => {
                    ((t, n) => {
                        if (null == e) return;
                        let i = !1,
                            s = !1;
                        switch (n) {
                            case "game":
                                h.A.toggleOverlay(e, t, t), p(t), u(t), i = !t && _, s = !t && c;
                                break;
                            case "global":
                                E.A.setEnabled(t, t), i = !t && N, s = !t && O;
                                break;
                            case "both":
                                E.A.setEnabled(t, t), h.A.toggleOverlay(e, t, t), p(t), u(t), i = !t && N || !t && _, s = !t && O || !t && c
                        }
                        let l = null;
                        i ? l = "game" === n ? y.OverlayToggledClientSettingType.LEGACY_GAME : y.OverlayToggledClientSettingType.LEGACY : s && (l = "game" === n ? y.OverlayToggledClientSettingType.OOP_GAME : y.OverlayToggledClientSettingType.OOP), null != l && (0, w.L)(l, e.id ?? null)
                    })(t, ((e, t) => {
                        let n = !t && e,
                            i = !O && c,
                            s = !N && _,
                            l = !c && O,
                            a = !_ && N;
                        switch (!0) {
                            case n && (i || s) && (l || a):
                                return "both";
                            case n && (i || s):
                                return "global";
                            default:
                                return "game"
                        }
                    })(t, c && O || _ && N))
                }
            })
        }),
        warning: (0, i.jsx)(K.A, {
            className: em.Hh,
            game: e
        }),
        children: [(0, i.jsx)(eS, {
            title: eA.intl.string(eA.t["7BlVIs"]),
            description: eA.intl.string(eA.t.ndgADE),
            hint: O ? void 0 : eA.intl.string(eA.t.cAFVsL),
            "aria-label": eA.intl.string(eA.t["7BlVIs"]),
            action: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(m.dOG, {
                    checked: c && O,
                    disabled: f,
                    onChange: e => {
                        e && !O ? P(e, y.OverlayToggledClientSettingType.OOP) : P(e, y.OverlayToggledClientSettingType.OOP_GAME)
                    }
                }), (0, i.jsx)("div", {
                    className: em.Kz
                })]
            })
        }), (0, i.jsx)(eS, {
            title: eA.intl.string(eA.t.BfFpW1),
            description: eA.intl.string(eA.t.OzInYk),
            hint: N ? void 0 : eA.intl.string(eA.t["3sYHXm"]),
            "aria-label": eA.intl.string(eA.t.BfFpW1),
            action: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(m.dOG, {
                    checked: _ && N,
                    disabled: I,
                    onChange: e => {
                        e && !N ? P(e, y.OverlayToggledClientSettingType.LEGACY) : P(e, y.OverlayToggledClientSettingType.LEGACY_GAME)
                    }
                }), (0, i.jsx)("div", {
                    className: em.Kz
                })]
            })
        })]
    })
}

function eb(e) {
    let {
        game: t,
        gameApplication: n
    } = e, l = s.useMemo(() => null == t ? null : "pid" in t ? t.pid : null, [t]), a = (0, g.bG)([f.A], () => null != n ? n : f.A.getApplication(t?.id), [n, t]);
    return (0, i.jsx)(j.A, {
        game: a,
        pid: l,
        size: j.M.SMALL
    })
}

function ev(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: l,
        getEnabledFromStatus: a,
        onChange: r,
        clientSettingType: o,
        ariaLabel: d
    } = e, c = (0, g.cf)([b.Ay, Q.A, ee.A], () => (0, b.xU)(t, b.Ay, Q.A, ee.A)), u = (0, g.cf)([Q.A, ee.A], () => (0, b.hw)(t, !1, [Q.A, ee.A]), [t]), _ = a(u), [A, h] = s.useState(_);
    return s.useEffect(() => {
        h(_)
    }, [_]), (0, i.jsx)(eS, {
        title: t.name,
        icon: (0, i.jsx)(eb, {
            game: c,
            gameApplication: n
        }),
        "aria-label": d,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.dOG, {
                checked: A,
                disabled: l,
                onChange: e => {
                    let n;
                    return n = !e && A, void(h(e), r(e, c, u), n && (0, w.L)(o, c.id ?? t?.id ?? null))
                }
            }), (0, i.jsx)("div", {
                className: em.Kz
            })]
        })
    })
}

function eO() {
    let [e, t] = s.useState(!1), {
        legacyEnabled: n,
        oopEnabled: l
    } = (0, g.cf)([M.default], () => M.default.getGlobalEnabledStatus()), a = (0, g.yK)([b.Ay], () => b.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), r = (0, N.A)(a.map(e => e.id)), o = !(0, ed.supportsLegacy)(), d = e => {
        E.A.setEnabled(e, l);
        let t = b.Ay.getCurrentGameForAnalytics()?.id ?? null;
        (0, y.Q3)(e, y.OverlayToggledClientSettingType.LEGACY, t), !e && n && (0, w.L)(y.OverlayToggledClientSettingType.LEGACY, t)
    }, c = (e, t, n) => {
        let {
            enabledOOP: i
        } = n;
        h.A.toggleOverlay(t, e, i)
    }, u = s.useMemo(() => (0, ed.supportsLegacy)() ? o ? eA.intl.string(eA.t.r9jEVw) : eA.intl.string(eA.t.OzInYk) : eA.intl.string(eA.t["8Ox6/E"]), [o]);
    return 0 === a.length ? (0, i.jsx)(eS, {
        title: eA.intl.string(eA.t.BfFpW1),
        description: u,
        "aria-label": eA.intl.string(eA.t.BfFpW1),
        className: em.dA,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.dOG, {
                checked: n,
                disabled: o,
                onChange: e => d(e)
            }), D.O && (0, i.jsx)("div", {
                className: em.Kz
            })]
        })
    }) : (0, i.jsxs)(eC, {
        onExpand: t,
        className: e ? em.tx : void 0,
        title: eA.intl.string(eA.t.BfFpW1),
        description: u,
        "aria-label": eA.intl.string(eA.t.BfFpW1),
        action: (0, i.jsx)(m.DUT, {
            onClick: e => ef(e),
            children: (0, i.jsx)(m.dOG, {
                checked: n,
                disabled: o,
                onChange: e => d(e)
            })
        }),
        children: [(0, i.jsx)("div", {
            className: em.SC,
            children: (0, i.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eA.intl.string(eA.t.FzoWRo)
            })
        }), (0, i.jsx)(m.IpV, {
            className: em.XG,
            children: a.map((e, t) => (0, i.jsx)(ev, {
                rawGame: e,
                clientSettingType: y.OverlayToggledClientSettingType.LEGACY_GAME,
                supportDisabled: o,
                gameApplication: r[t],
                getEnabledFromStatus: e => {
                    let {
                        enabledLegacy: t
                    } = e;
                    return t
                },
                onChange: c,
                ariaLabel: eA.intl.format(eA.t.hvPYsF, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function ej() {
    let [e, t] = s.useState(!1), {
        oopEnabled: n,
        legacyEnabled: l
    } = (0, g.cf)([M.default], () => M.default.getGlobalEnabledStatus()), a = !(0, ed.supportsOutOfProcess)(), r = (0, g.yK)([b.Ay], () => b.Ay.getGamesSeen(!0)).filter(e => !(0, X.n1)(e)), o = (0, N.A)(r.map(e => e.id)), d = e => {
        let t = !e && n;
        E.A.setEnabled(l, e);
        let i = b.Ay.getCurrentGameForAnalytics()?.id ?? null;
        (0, y.Q3)(e, y.OverlayToggledClientSettingType.OOP, i), t && (0, w.L)(y.OverlayToggledClientSettingType.OOP, i)
    }, c = (e, t, n) => {
        let {
            enabledLegacy: i
        } = n;
        h.A.toggleOverlay(t, e, i)
    }, u = s.useMemo(() => D.O ? a ? eA.intl.string(eA.t.C7bLTQ) : eA.intl.string(eA.t.ndgADE) : eA.intl.string(eA.t.m7X4az), [a]);
    return 0 === r.length ? (0, i.jsx)(eS, {
        title: eA.intl.string(eA.t["7BlVIs"]),
        description: u,
        "aria-label": eA.intl.string(eA.t["7BlVIs"]),
        className: em.dA,
        action: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.dOG, {
                checked: n,
                disabled: a,
                onChange: e => d(e)
            }), D.O && (0, i.jsx)("div", {
                className: em.Kz
            })]
        })
    }) : (0, i.jsxs)(eC, {
        onExpand: t,
        className: e ? em.tx : void 0,
        title: eA.intl.string(eA.t["7BlVIs"]),
        description: u,
        "aria-label": eA.intl.string(eA.t["7BlVIs"]),
        action: (0, i.jsx)(m.DUT, {
            onClick: e => ef(e),
            children: (0, i.jsx)(m.dOG, {
                checked: n,
                disabled: a,
                onChange: e => d(e)
            })
        }),
        children: [(0, i.jsx)("div", {
            className: em.SC,
            children: (0, i.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: eA.intl.string(eA.t.FzoWRo)
            })
        }), (0, i.jsx)(m.IpV, {
            className: em.XG,
            children: r.map((e, t) => (0, i.jsx)(ev, {
                rawGame: e,
                clientSettingType: y.OverlayToggledClientSettingType.OOP_GAME,
                gameApplication: o[t],
                supportDisabled: a,
                getEnabledFromStatus: e => {
                    let {
                        enabledOOP: t
                    } = e;
                    return t
                },
                onChange: c,
                ariaLabel: eA.intl.format(eA.t.nByTd3, {
                    gameName: e.name
                }).toString()
            }, e.id))
        })]
    })
}

function eR() {
    return (0, G.X4)(I.A.USER_SETTINGS) ? (0, i.jsx)(eS, {
        title: eA.intl.string(eA.t["z4/l+V"]),
        description: eA.intl.string(eA.t["3aZq/0"]),
        action: (0, i.jsx)(m.Button, {
            variant: "primary",
            text: eA.intl.string(eA.t.s2nVhG),
            onClick: () => {
                (0, B.b)(I.A.USER_SETTINGS, e_.BRT.APP)
            }
        }),
        "aria-label": eA.intl.string(eA.t["z4/l+V"])
    }) : null
}

function ey(e) {
    let {
        isLegacySettings: t = !1
    } = e, n = (0, g.bG)([en.Ay], () => en.Ay.getOverlayKeybind()), s = !(0, ed.supportsLegacy)(), l = !(0, ed.supportsOutOfProcess)(), [a, r] = (0, g.yK)([b.Ay], () => [b.Ay.canShowAdminWarning, b.Ay.getVisibleGame()], []), o = (0, W.NP)(), d = null != r && r.elevated && a && !o, u = !(0, en.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: em.hc,
        children: (0, i.jsxs)("div", {
            className: em.eH,
            children: [(0, i.jsxs)("div", {
                className: em.Bu,
                children: [(0, i.jsx)(m.Text, {
                    variant: t ? "text-md/semibold" : "text-md/medium",
                    color: "text-strong",
                    children: eA.intl.string(eA.t.VsAZcC)
                }), d && (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: em.y7,
                    children: eA.intl.string(eA.t.NsowVa)
                }), u && (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: em.y7,
                    children: eA.intl.string(eA.t["UNoTw/"])
                })]
            }), (0, i.jsx)("div", {
                className: em.IH,
                children: (0, i.jsx)(T.A, {
                    disabled: s && l,
                    defaultValue: null != n ? n.shortcut : [],
                    onChange: function(e) {
                        c()(null != n, "Keybind should never be undefined"), p.A.setKeybind({
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
        title: eA.t.eVE4LX,
        description: eA.t["72WNqk"],
        disabledSetting: P.M.TEXT_CHAT,
        key: ec.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT
    }, {
        title: eA.t.oifnSh,
        description: eA.t.bgU5r0,
        disabledSetting: P.M.WELCOME_GENERAL,
        key: ec.X.OVERLAY_NOTIFICATIONS_WELCOME
    }, {
        title: eA.t.hqsZJW,
        description: eA.t.kHjdqc,
        disabledSetting: P.M.GO_LIVE_NUDGE,
        key: ec.X.OVERLAY_NOTIFICATIONS_GO_LIVE
    }, {
        title: eA.t.sop3rn,
        description: eA.t.pjgffc,
        disabledSetting: P.M.GAME_ACTIVITY,
        key: ec.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY
    }, {
        title: eA.t["2QVhbb"],
        description: eA.t.wQ4ilB,
        disabledSetting: P.M.NOW_PLAYING,
        key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING
    }, t && {
        title: eA.t.giM9fA,
        description: eA.t.EhAfWj,
        disabledSetting: P.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let {
                showNowPlayingForDifferentGames: e
            } = (0, G.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"), t = (0, g.bG)([k.A], () => k.A.isNotificationDisabledBySetting(P.M.NOW_PLAYING));
            return !!e && !t
        }
    }, e && {
        title: eA.t["5/21FT"],
        description: eA.t.EIzwfA,
        disabledSetting: P.M.FRIEND_STREAM_WATCH_NUDGE,
        key: ec.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
        usePredicate: () => {
            let {
                enabled: e
            } = (0, G.QC)("OverlayV3StreamWatchNudge");
            return e
        }
    }].filter(e => !1 !== e).filter(Boolean)
}

function eD() {
    let {
        enabled: e
    } = (0, G.QC)("OverlayV3StreamWatchNudge"), {
        showNowPlayingForDifferentGames: t
    } = (0, G.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"), n = (0, g.bG)([k.A], () => k.A.getDisabledNotifications()), s = eP(e, t && !n.has(P.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: em.AO,
        children: [(0, i.jsx)(m.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: eA.intl.string(eA.t.xOE5bA)
        }), s.map(e => {
            let t;
            return (0, i.jsxs)("div", {
                className: em.vx,
                children: [(0, i.jsxs)("div", {
                    className: em.LS,
                    children: [(0, i.jsx)(m.Text, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        children: eA.intl.string(e.title)
                    }), (0, i.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eA.intl.string(e.description)
                    })]
                }), (0, i.jsx)(m.dOG, {
                    checked: !n.has(e.disabledSetting),
                    onChange: (t = e.disabledSetting, e => {
                        E.A.setNotificationDisabledSetting(t, !e)
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

function eG(e) {
    let t, {
            isLegacySettings: n = !1
        } = e,
        l = (0, g.bG)([et.default], () => et.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: d
        } = (0, g.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode()
        })),
        [c] = s.useState(() => [eL(eA.intl.string(eA.t.C0ZDvo), !0, !1), eL(eA.intl.string(eA.t.iOtj8E), !1, !1, !0), eL(eA.intl.string(eA.t["0oqNgL"]), !1, !0)]),
        u = (0, g.bG)([V.A, $.A], () => {
            let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, F.ZO)(t) ? t : null
        }),
        _ = u?.meta?.voiceStatesMaxShown ?? 8,
        A = [null != l ? ((t = eL(l.username)).user = l, t) : null, ...c].filter(ea.Vq),
        h = [new Map(A.map(e => [e.user.id, e])), A.map(e => e.user.id)],
        p = (0, i.jsx)(m.NPJ, {
            theme: e_.NJ8.MIDNIGHT,
            children: e => (0, i.jsxs)("div", {
                className: a()(em.Y5, e),
                children: [(0, i.jsx)("div", {
                    className: em.kJ,
                    children: (0, i.jsx)(Y.DH, {
                        id: "voice-widget",
                        title: eA.intl.string(eA.t.KNJ6Vq),
                        channel: (0, Z.createChannelRecord)({
                            id: "123",
                            name: "Test Channel",
                            type: e_.rbe.GUILD_VOICE,
                            guild_id: "456"
                        }),
                        overlayVoiceStates: h,
                        displayNameMode: o,
                        displayUserMode: d,
                        avatarSizeMode: r,
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
                    className: em.R$,
                    children: [(0, i.jsx)(z.Pl, {
                        children: eA.intl.string(eA.t.KNJ6Vq)
                    }), (0, i.jsx)(z.CS, {}), (0, i.jsx)(z.O0, {
                        id: u?.id ?? "voice-widget",
                        pinned: u?.pinned ?? !1
                    })]
                })]
            })
        });
    return n ? p : (0, i.jsx)("div", {
        className: em.F9,
        children: p
    })
}

function eM() {
    let {
        avatarSizeMode: e,
        displayNameMode: t,
        displayUserMode: n
    } = (0, g.cf)([es.default], () => ({
        avatarSizeMode: es.default.getAvatarSizeMode(),
        displayNameMode: es.default.getDisplayNameMode(),
        displayUserMode: es.default.getDisplayUserMode()
    })), s = (0, g.bG)([V.A, $.A], () => {
        let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
        if (null == e) return null;
        let t = $.A.getWidget(e.id);
        return null != t && (0, F.ZO)(t) ? t : null
    }), l = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: em.ri,
        children: [(0, i.jsx)(m.l6P, {
            label: eA.intl.string(eA.t.dnvZSg),
            options: [{
                id: "large",
                label: eA.intl.string(eA.t.YcOxtr),
                value: e_.OSZ.LARGE
            }, {
                id: "small",
                label: eA.intl.string(eA.t.BKIKqx),
                value: e_.OSZ.SMALL
            }],
            onSelectionChange: E.A.setAvatarSizeMode,
            value: e,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)(m.l6P, {
            label: eA.intl.string(eA.t.J0dpcB),
            options: [{
                id: "always",
                label: eA.intl.string(eA.t.nBmDrT),
                value: e_.pwA.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eA.intl.string(eA.t["2OvIZY"]),
                value: e_.pwA.ONLY_WHILE_SPEAKING
            }, {
                id: "never",
                label: eA.intl.string(eA.t.ekjlPL),
                value: e_.pwA.NEVER
            }],
            onSelectionChange: E.A.setDisplayNameMode,
            value: t,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)(eG, {
            isLegacySettings: !0
        }), (0, i.jsx)(m.l6P, {
            label: eA.intl.string(eA.t.swsWWC),
            options: [{
                id: "always",
                label: eA.intl.string(eA.t.nBmDrT),
                value: e_.f5z.ALWAYS
            }, {
                id: "only-while-speaking",
                label: eA.intl.string(eA.t["2OvIZY"]),
                value: e_.f5z.ONLY_WHILE_SPEAKING
            }],
            onSelectionChange: E.A.setDisplayUserMode,
            value: n,
            selectionMode: "single",
            fullWidth: !0
        }), (0, i.jsx)("div", {
            className: em.xJ,
            children: (0, i.jsx)(m.Apm, {
                label: eA.intl.string(eA.t["X/Uyzc"]),
                initialValue: l,
                onValueRender: e => e < ep ? eA.intl.string(eA.t.nrUzFL) : `${Math.floor(e)}`,
                minValue: ep - 1,
                maxValue: ex,
                onValueChange: function(e) {
                    null != s && (e < ep ? (0, x.cC)(s.id, {
                        voiceStatesMaxShown: -1
                    }) : (0, x.cC)(s.id, {
                        voiceStatesMaxShown: Math.floor(e)
                    }))
                },
                markers: eE,
                barStyles: {
                    background: m.LU0.colors.BACKGROUND_MOD_STRONG.css
                },
                fillStyles: {
                    background: m.LU0.colors.BACKGROUND_BRAND.css
                },
                onMarkerRender: e => e < ep ? eA.intl.string(eA.t.nrUzFL) : `${Math.floor(e)}`
            })
        })]
    })
}

function eU(e) {
    let {
        runningGame: t,
        runningGameApplication: n
    } = e, l = n?.id, a = (0, g.bG)([k.A], () => k.A.isLimitedInteractionOverrideEnabled(l), [l]), r = s.useMemo(() => null != t && (0, U.qJ)(t.pid), [t]), o = (0, g.bG)([es.default], () => es.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: em.U$,
        children: [(0, i.jsx)(ey, {
            isLegacySettings: !0
        }), null != l && (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                className: em.yB,
                children: [(0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eA.intl.string(eA.t.wgVQND)
                }), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eA.intl.string(eA.t["5SsyF5"])
                })]
            }), (0, i.jsx)(m.dOG, {
                checked: a || r,
                disabled: r,
                onChange: e => {
                    null != n && (0, H.x8)(n.id, e)
                }
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                className: em.yB,
                children: [(0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: eA.intl.string(eA.t["+eFXxq"])
                }), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: eA.intl.string(eA.t.kivMAp)
                })]
            }), (0, i.jsx)(m.dOG, {
                checked: !o,
                onChange: function() {
                    E.A.setDisableClickableRegions(!o)
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
        s = (0, g.bG)([et.default], () => et.default.getCurrentUser());
    return (0, C.Ay)(() => {
        if (er.isPlatformEmbedded) return (0, O.a2)(), O.e0
    }), (e = eT(eh), _().isEqual(e, eh) || (el.default.track(e_.HAw.OVERLAY_SETTINGS_UPDATED, e), eh = e), null == s) ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(eu.A, {
            title: eA.intl.string(eA.t["9cb1Uz"]),
            children: [(0, i.jsxs)("div", {
                className: em.U$,
                children: [(0, i.jsx)(eN, {}), (0, i.jsx)(ej, {}), (0, i.jsx)(eO, {}), (0, i.jsx)(eR, {})]
            }), (0, i.jsx)("div", {
                className: em.Ri
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(eU, {
                runningGame: t,
                runningGameApplication: n
            }), (0, i.jsx)("div", {
                className: em.Ri
            })]
        }), (0, i.jsxs)(m.D0$, {
            label: eA.intl.string(eA.t.r1TZfh),
            children: [(0, i.jsx)(eM, {}), (0, i.jsx)("div", {
                className: em.Ri
            })]
        }), (0, i.jsx)(eD, {})]
    })
}