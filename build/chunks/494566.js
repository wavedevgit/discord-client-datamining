/** chunk id: 494566, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GF: () => eu,
    LK: () => eg,
    NO: () => eh,
    Yb: () => es,
    pp: () => eo,
    sm: () => ed,
    un: () => ec
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(377802),
    o = n(348858),
    s = n(416696),
    u = n(621956),
    c = n(446080),
    d = n(397927),
    h = n(827343),
    p = n(442433),
    f = n(956793),
    g = n(793574),
    m = n(688810),
    A = n(617354),
    y = n(980923),
    O = n(206018),
    v = n(750765),
    b = n(18235),
    E = n(183184),
    _ = n(47167),
    S = n(713654),
    x = n(880144),
    I = n(338771),
    j = n(263063),
    C = n(178442),
    T = n(209932),
    w = n(989799),
    N = n(167579),
    P = n(704877),
    D = n(173660),
    R = n(675991),
    L = n(848362),
    k = n(594831),
    M = n(222692),
    z = n(709562),
    V = n(996744),
    U = n(85612),
    G = n(277342),
    H = n(616356),
    Y = n(961350),
    F = n(71393),
    W = n(430452),
    K = n(383501),
    Z = n(309010),
    B = n(287809),
    X = n(977997),
    J = n(810412),
    Q = n(823901),
    q = n(592598),
    $ = n(395011),
    ee = n(243612),
    et = n(652215),
    en = n(985018),
    ei = n(991256);

function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function el(e) {
    let t = r.useRef(null);
    return r.useEffect(() => {
        if (e) {
            var n;
            null == (n = t.current) || n.call(t), t.current = null
        }
    }, [e]), e => (t.current = e, e)
}

function ea(e) {
    let {
        ref: t,
        isActive: n,
        disabled: r,
        iconComponent: l,
        iconColor: a,
        tooltip: o,
        defaultColor: s = "primaryDark",
        highlightedColor: u = "primaryDark",
        caretColor: c,
        popoutOpen: d,
        onClick: h,
        popoutDisabled: p,
        onPopoutClick: f,
        onMouseEnter: g,
        onMouseLeave: m,
        onContextMenu: A,
        isTrayButton: y
    } = e, O = function(e, t) {
        if (null == e) return {};
        var n, i, r, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }(e, ["ref", "isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "isTrayButton"]);
    return (0, i.jsx)(z.l, {
        ref: t,
        onClick: null != h ? h : () => {},
        color: n ? u : s,
        className: ei.x6,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: p,
        label: o,
        isTrayButton: y,
        onMouseEnter: e => {
            null == g || g(e)
        },
        onMouseLeave: e => {
            null == m || m(e)
        },
        iconComponent: l,
        iconColor: a,
        caretColor: c,
        isActive: n,
        onContextMenu: A,
        onPopoutClick: f,
        "aria-label": O["aria-label"]
    })
}

function eo(e) {
    var t;
    let {
        voiceChannel: n,
        locked: a
    } = e, o = r.useRef(null), {
        suppress: s,
        selfMute: u,
        mute: c
    } = (0, D.A)(n), h = u || c || s, p = (0, y.A)(u, c, s, !1), {
        Component: f,
        play: m,
        events: A
    } = (0, G.q)(h);
    r.useEffect(() => () => m(), [m, h]);
    let v = el(a),
        b = e => t => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.MICROPHONE,
                value: J.IP.SETTINGS_OPENED
            })
        },
        _ = null == (t = (0, ee.b4)()) ? void 0 : t.id,
        S = (0, l.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(_)),
        x = (0, V.Cg)({
            location: g.A.OVERLAY,
            autoTrackExposure: !0
        });
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e, n = v(t);
            return x ? (0, i.jsx)(U.a, {
                wide: !0,
                showOutputDevices: !0,
                onSettingsButtonClick: n,
                showSearchBar: !S
            }) : (0, i.jsx)(O.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: r
            } = t;
            return (0, i.jsx)(ea, {
                ref: o,
                iconComponent: f,
                isActive: h,
                highlightedColor: "red",
                tooltip: p,
                onClick: () => {
                    (0, E.A)(c, s, et.JJy.OVERLAY), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                        type: J.Z5.MICROPHONE,
                        value: h ? J.IP.ENABLED : J.IP.DISABLED,
                        userId: Y.default.getId()
                    })
                },
                onPopoutClick: b(n),
                onContextMenu: b(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    A.onMouseEnter()
                },
                onMouseLeave: () => {
                    A.onMouseLeave()
                },
                isTrayButton: !0
            })
        }
    })
}

function es(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, l = r.useRef(null), {
        selfDeaf: a,
        deaf: s
    } = (0, N.A)(t), u = a || s, {
        Component: c,
        play: h,
        events: {
            onMouseEnter: p,
            onMouseLeave: f
        }
    } = (0, o.I)(u ? "undeafen" : "deafen"), g = s ? d.TJE : c;
    r.useEffect(() => () => h(), [u, h]);
    let m = () => {
            (0, b.A)(s, et.JJy.OVERLAY), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.AUDIO,
                value: s ? J.IP.ENABLED : J.IP.DISABLED,
                userId: Y.default.getId()
            })
        },
        y = e => t => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.AUDIO,
                value: J.IP.SETTINGS_OPENED
            })
        },
        v = el(n);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(O.A, {
                onClose: v(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: r
            } = t;
            return (0, i.jsx)(ea, {
                ref: l,
                iconComponent: g,
                tooltip: (0, A.A)(a, s, !1),
                isActive: u,
                highlightedColor: "red",
                onClick: m,
                onContextMenu: y(n),
                onMouseEnter: p,
                onMouseLeave: f,
                onPopoutClick: y(n),
                popoutOpen: r,
                isTrayButton: !0
            })
        }
    })
}

function eu(e) {
    var t;
    let {
        voiceChannel: n,
        locked: a
    } = e, o = r.useRef(null), s = (0, l.bG)([W.A], () => W.A.isVideoEnabled()), u = (0, l.bG)([W.A], () => Object.values(W.A.getVideoDevices())[0]), p = null == (t = null == u ? void 0 : u.disabled) || t, f = !1 === p, g = (0, P.A)(n), m = e => {
        h.A.setVideoEnabled(e)
    }, A = e => t => {
        e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.CAMERA,
            value: J.IP.SETTINGS_OPENED
        })
    }, y = () => {
        p ? f ? m(!0) : (0, M.A)() : m(!s), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.CAMERA,
            value: s ? J.IP.DISABLED : J.IP.ENABLED,
            userId: Y.default.getId()
        })
    }, {
        Component: O,
        play: b,
        events: {
            onMouseEnter: E,
            onMouseLeave: _
        }
    } = (0, c.K)(s ? "disable" : "enable"), S = null != n ? (0, R.Q)({
        enabled: s,
        cameraUnavailable: p,
        hasPermission: g,
        channel: n
    }) : void 0;
    r.useEffect(() => () => b(), [s, b]);
    let x = el(a),
        I = null == n || !g;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(v.A, {
                onClose: x(t),
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: r
            } = t;
            return (0, i.jsx)(ea, {
                ref: o,
                iconComponent: O,
                tooltip: S,
                onClick: y,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: A(n),
                popoutOpen: r,
                onContextMenu: A(n),
                onMouseEnter: E,
                onMouseLeave: _,
                disabled: I,
                isTrayButton: !0
            })
        }
    })
}

function ec(e) {
    let t, {
            voiceChannel: n,
            locked: a
        } = e,
        o = r.useRef(null),
        u = (0, l.bG)([B.default], () => B.default.getCurrentUser()),
        c = (0, P.A)(n),
        h = (0, l.cf)([W.A], () => (0, x.A)(W.A)),
        p = (0, l.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        f = (0, l.bG)([$.A], () => $.A.getTargetPID()),
        g = (0, Q.y)({
            pid: f,
            allowOneClickGoLive: !0,
            analyticsLocation: et.ThZ.UNLOCKED_OVERLAY
        }),
        m = () => {
            g(), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.GO_LIVE,
                value: J.IP.ENABLED,
                userId: Y.default.getId()
            })
        },
        A = null != p;
    if (A) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = c ? null != e ? en.intl.format(en.t.AB5gTy, {
            game: e.name
        }) : en.intl.string(en.t.FeUKeA) : en.intl.string(en.t.uQn9B8)
    }
    let y = () => {
            if (A) return (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.GO_LIVE,
                value: J.IP.DISABLED,
                userId: Y.default.getId()
            }), (0, I.A)(p, !1);
            m()
        },
        O = e => t => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.SCREEN_SHARE,
                value: J.IP.SETTINGS_OPENED
            })
        },
        {
            Component: v,
            events: {
                onMouseEnter: b,
                onMouseLeave: E
            },
            play: _
        } = (0, s.c)(A ? "disable" : "enable");
    r.useEffect(() => () => _(), [A, _]);
    let S = el(a);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(L.A, {
                channel: n,
                currentUser: u,
                activeStreams: A ? [p] : [],
                handleGoLive: m,
                onClose: S(t),
                appContext: et.BRT.OVERLAY,
                disableChangeWindows: !0
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, n) => {
            let {
                onClick: r
            } = e, {
                isShown: l
            } = n;
            return (0, i.jsx)(ea, {
                ref: o,
                iconComponent: v,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: A,
                highlightedColor: "green",
                onClick: y,
                popoutOpen: l,
                popoutDisabled: !A,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: b,
                onMouseLeave: E,
                disabled: !h || !c,
                isTrayButton: !0
            })
        }
    })
}

function ed(e) {
    var t;
    let {
        voiceChannel: a,
        locked: o
    } = e, s = r.useRef(null), c = null != (t = null == a ? void 0 : a.getGuildId()) ? t : null, {
        mute: h,
        suppress: f
    } = (0, D.A)(a), g = (0, l.bG)([W.A], () => W.A.isDeaf()), A = null == a || h || f || g, {
        analyticsLocations: y
    } = (0, m.Ay)();

    function O(e) {
        null != c && ((0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.SOUNDBOARD,
            value: J.IP.SETTINGS_OPENED
        }), (0, p.L3)(e, async () => {
            let {
                default: e
            } = await n.e("51111").then(n.bind(n, 323002));
            return t => (0, i.jsx)(e, er({
                sourceAnalyticsLocations: y,
                guildId: c
            }, t))
        }))
    }
    let {
        Component: v,
        events: {
            onClick: b,
            onMouseEnter: E,
            onMouseLeave: _
        }
    } = (0, u.E)(), S = el(o), x = (0, l.bG)([T.A, Y.default], () => T.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return A || null == a ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(w.A, {
                guildId: c,
                channel: a,
                onClose: S(t),
                analyticsSource: "action bar button"
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: r
            } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: v,
                tooltip: h ? en.intl.string(en.t["Ox4/zU"]) : f ? en.intl.string(en.t["+YBKYI"]) : g ? en.intl.string(en.t.X1lQli) : void 0,
                onClick: e => {
                    b(), (0, J.YX)(et.uss.QUICK_ACTIONS, {
                        type: J.Z5.SOUNDBOARD,
                        value: J.IP.PANEL_OPENED,
                        userId: Y.default.getId()
                    }), n(e)
                },
                highlightedColor: x,
                defaultColor: x,
                onContextMenu: O,
                onMouseEnter: E,
                onMouseLeave: _,
                isActive: r,
                popoutOpen: r,
                disabled: A,
                isTrayButton: !0
            })
        }
    })
}

function eh(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, o = r.useRef(null), s = (0, l.bG)([Z.A], () => Z.A.getVoiceChannelId() === (null == t ? void 0 : t.id)), u = () => {
        (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.CALL_BUTTON,
            value: J.IP.DISABLED,
            userId: Y.default.getId()
        }), s && f.default.disconnect()
    }, c = (e, t) => {
        f.default.selectVoiceChannel(e), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.CALL_BUTTON,
            value: J.IP.ENABLED,
            userId: Y.default.getId(),
            secondaryValue: t
        })
    }, [h, p] = r.useTransition(), g = e => t => {
        p(() => {
            e(t)
        }), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.CALL_BUTTON,
            value: J.IP.SETTINGS_OPENED
        })
    }, {
        Component: m,
        events: {
            onMouseEnter: A,
            onMouseLeave: y
        }
    } = (0, a.O)(), O = el(n), v = (0, k.qZ)(), b = s ? m : d._jp;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, i.jsx)(k.Ay, {
                allAvailableChannelRows: v,
                currentVoiceChannel: t,
                onClose: O(n),
                onSelect: c
            })
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: r
            } = t;
            return (0, i.jsx)(ea, {
                ref: o,
                iconComponent: b,
                tooltip: s ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: s ? u : g(n),
                defaultColor: s ? "disconnect" : void 0,
                onMouseEnter: A,
                onMouseLeave: y,
                onContextMenu: g(n),
                isActive: r,
                onPopoutClick: s ? g(n) : void 0,
                popoutOpen: r,
                isTrayButton: !0
            })
        }
    })
}

function ep(e) {
    let {
        voiceChannel: t
    } = e, n = (0, l.bG)([F.A], () => F.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: ei.rK
                }), (0, i.jsxs)("div", {
                    className: ei._C,
                    children: [(0, i.jsx)(j.A, {
                        guild: n,
                        size: j.A.Sizes.SMOL,
                        className: ei.$f
                    }), (0, i.jsx)(d.Text, {
                        tag: "div",
                        variant: "text-sm/medium",
                        color: "text-strong",
                        className: ei.J5,
                        children: n.name
                    })]
                })]
            });
        default:
            return null
    }
}

function ef(e) {
    let {
        voiceChannel: t
    } = e, n = (0, S.gU)(t), r = (0, _.Ay)(t);
    return (0, i.jsxs)("div", {
        className: ei.Wh,
        children: [null != n && (0, i.jsx)(d.Text, {
            tag: "div",
            color: "text-muted",
            variant: "text-xs/normal",
            className: ei.p,
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor"
            })
        }), null != r && (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: ei.HA,
            children: r
        })]
    })
}

function eg(e) {
    var t, n;
    let {
        voiceChannel: r
    } = e, a = null == r ? void 0 : r.id, o = (0, l.cf)([K.A], () => ({
        quality: K.A.getQuality(),
        state: K.A.getState(),
        lastPing: K.A.getLastPing()
    })), s = (0, l.bG)([X.A], () => null != a && X.A.hasVideo(a), [a]);
    return null != a && null != r && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(C.A, (t = er({}, o), n = n = {
            channelId: a,
            hasVideo: s,
            connectionStatusTextVariant: "text-sm/medium"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)), (0, i.jsx)(ep, {
            voiceChannel: r
        }), (0, i.jsx)("div", {
            className: ei.rK
        }), (0, i.jsx)(ef, {
            voiceChannel: r
        })]
    })
}