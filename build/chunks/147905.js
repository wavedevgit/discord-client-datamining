/** chunk id: 147905 params = (module,exports,require) **/
n.d(t, {
    Ay: () => B,
    FT: () => U,
    Ob: () => L
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(825638),
    o = n(311907),
    u = n(397927),
    d = n(442433),
    c = n(391973),
    h = n(684013),
    g = n(401843),
    m = n(765671),
    f = n(717558),
    A = n(964486),
    I = n(775602),
    E = n(66004),
    p = n(556525),
    _ = n(142524),
    S = n(534400),
    x = n(342296),
    T = n(481947),
    C = n(616356),
    N = n(961350),
    v = n(555528),
    y = n(430452),
    M = n(485296),
    b = n(977997),
    R = n(996439),
    D = n(427262),
    O = n(810412),
    w = n(652215),
    j = n(985018),
    k = n(458509);

function U(e) {
    switch (e) {
        case w.OSZ.LARGE:
            return u._3J.SIZE_32;
        case w.OSZ.SMALL:
            return u._3J.SIZE_24;
        default:
            return u._3J.SIZE_32
    }
}

function L(e) {
    return u.vCh[e].size
}
let G = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    }),
    P = {
        entering: {
            config: {
                mass: .2,
                tension: 180,
                friction: 14
            }
        },
        exiting: {
            config: {
                mass: 1,
                tension: 80,
                friction: 10,
                clamp: !0
            }
        }
    },
    F = {
        entering: {
            config: {
                mass: .5,
                tension: 240,
                friction: 10
            }
        },
        exiting: {
            config: {
                mass: 1.5,
                tension: 300,
                friction: 30,
                clamp: !0
            },
            delay: 300
        }
    };

function V(e, t) {
    let [n, i] = r.useState(null != e && e > Date.now() - 1e4), [l, s] = r.useState(!1), [a, o] = r.useState(!0);
    return (0, A.Ay)(() => {
        n && !t && (o(!1), setTimeout(() => {
            s(!0)
        }, 16))
    }), (0, A.Ay)(() => {
        let e = setTimeout(() => {
            i(!1), setTimeout(() => {
                s(!1)
            }, 16)
        }, 2600);
        return () => clearTimeout(e)
    }), r.useMemo(() => ({
        showConnectedAnimation: l,
        recentlyConnected: n,
        hideConnectedAnimation: a,
        setHideConnectedAnimation: o
    }), [l, n, a, o])
}
let z = r.memo(function(e) {
        let {
            nick: t,
            connectedOn: n,
            isSettingsPreview: l,
            voiceBackgroundWidth: d,
            rightAlign: c = !1
        } = e, {
            showConnectedAnimation: h,
            recentlyConnected: g,
            hideConnectedAnimation: f,
            setHideConnectedAnimation: A
        } = V(n, l), {
            ref: E,
            width: p
        } = (0, m.Ay)(), _ = (0, o.bG)([I.A], () => I.A.useReducedMotion), S = g ? "entering" : "exiting", {
            width: x
        } = (0, a.useSpring)({
            ...P[S],
            width: h ? p : d
        }), {
            opacity: T
        } = (0, a.useSpring)({
            ...F[S],
            opacity: +!!h,
            onRest: () => {
                h || A(!0)
            }
        }), C = r.useMemo(() => f || _ ? "none" : "block", [f, _]);
        return (0, i.jsx)(a.animated.div, {
            className: s()(k.rH, {
                [k.pG]: c
            }),
            style: {
                width: x,
                opacity: T,
                display: C
            },
            children: (0, i.jsxs)("div", {
                ref: E,
                className: s()(k.LB, {
                    [k.RP]: "exiting" === S,
                    [k.kb]: !c,
                    [k.pG]: c
                }),
                children: [c && (0, i.jsx)(u.akl, {
                    importData: G,
                    shouldAnimate: !_,
                    className: k.lY
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: j.intl.format(j.t.uFcReq, {
                            nick: t
                        })
                    })
                }), !c && (0, i.jsx)(u.akl, {
                    importData: G,
                    shouldAnimate: !_,
                    className: k.lY
                }), (0, i.jsx)("div", {
                    className: k.k1
                })]
            })
        })
    }),
    H = r.memo(function(e) {
        let {
            avatarSize: t,
            userId: n,
            channelId: r,
            guildId: l
        } = e, s = 2 * t, a = -(t / 2);
        return (0, i.jsx)("div", {
            className: k.QZ,
            style: {
                top: a,
                left: a,
                width: s,
                height: s
            },
            children: (0, i.jsx)(E.A, {
                userId: n,
                channelId: r,
                guildId: l,
                containerDimensions: {
                    width: s,
                    height: s
                }
            })
        })
    }),
    Y = r.memo(u.euF),
    W = r.memo(function(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: l = !1,
            user: a,
            nick: d,
            displayNameMode: c,
            displayUserMode: h,
            size: A = w.OSZ.LARGE,
            onClick: I,
            onContextMenu: E,
            context: x,
            guildId: v,
            isSettingsPreview: D = !1,
            voiceState: j,
            showStreamPreview: G,
            onShowStreamPreview: P,
            onWatchStream: F,
            connectedOn: W,
            ref: B
        } = e, Z = (0, o.bG)([N.default], () => N.default.getId() === a.id, [a.id]), {
            ref: X,
            width: K
        } = (0, m.Ay)(), {
            showConnectedAnimation: $
        } = V(W, D), q = j?.sessionId, J = t.id, Q = a.id, [ee] = (0, o.bG)([b.A], () => [b.A.getVoiceStateForChannel(J, Q) ?? b.A.getVoiceStateForSession(Q, q), b.A.getVoiceStateVersion()], [J, Q, q], R.D), et = D ? j : ee ?? j, [en, ei, er] = (0, o.yK)([y.Ay], () => Z ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1] : [!y.Ay.isSupported() || y.Ay.isLocalMute(a.id), !1, y.Ay.isLocalVideoDisabled(a.id)], [Z, a.id]), el = (0, o.bG)([C.A], () => {
            let e = C.A.getCurrentUserActiveStream();
            return null != e && e.ownerId !== a.id && C.A.getViewerIds(e).filter(e => e === a.id).length > 0
        }, [a.id]), es = D && j?.discoverable, ea = (0, f.A)({
            userId: a.id,
            context: x
        }) || es, eo = (0, o.bG)([C.A], () => C.A.getStreamForUser(a.id, v)), eu = null != eo, ed = r.useCallback(() => {
            (G || null != eu) && P(null)
        }, [P, G, eu]), ec = r.useCallback(() => (0, i.jsx)(_.A, {
            user: a,
            channel: t,
            onWatch: () => {
                null != eo && ((0, g.A9)(eo, {
                    forceMultiple: !0,
                    noFocus: !0
                }), ed(), F(eo ?? null))
            },
            onAction: () => F,
            previewIsOpen: G,
            location: w.ThZ.UNLOCKED_OVERLAY,
            hideTip: !0
        }), [a, t, eo, G, ed, F]), eh = r.useCallback(e => {
            l || E?.(e, a)
        }, [l, E, a]), eg = r.useCallback(() => {
            l || null != eu && P(a.id)
        }, [l, P, eu, a]), em = l || D, ef = r.useMemo(() => U(A), [A]), eA = r.useMemo(() => L(ef), [ef]), eI = r.useMemo(() => a.getAvatarURL(v, eA), [a, v, eA]), eE = (0, o.bG)([M.A], () => M.A.getVoiceVolume(Q));
        return h === w.f5z.ONLY_WHILE_SPEAKING && em && !ea || null == et ? null : n ? (0, i.jsxs)(u.DUT, {
            innerRef: B,
            className: s()(k.q7, {
                [k.zY]: ea,
                [k.bG]: !l,
                [k.zq]: n,
                [k.cU]: $
            }),
            onClick: l ? void 0 : e => I?.(e, a),
            onContextMenu: eh,
            onMouseEnter: eg,
            onMouseLeave: ed,
            children: [em && (c === w.pwA.NEVER || !ea && c === w.pwA.ONLY_WHILE_SPEAKING) ? null : (0, i.jsx)(u.YNO, {
                targetElementRef: X,
                position: "left",
                renderPopout: ec,
                shouldShow: G,
                onRequestClose: ed,
                spacing: 0,
                children: () => (0, i.jsxs)("div", {
                    className: k.Xh,
                    ref: X,
                    children: [(0, i.jsx)(T.Kc, {
                        guildId: v,
                        user: a,
                        video: et.selfVideo,
                        isStreaming: eu,
                        className: k.ZA,
                        iconClassName: k.Ow,
                        isWatching: el,
                        localMute: en && !Z,
                        localVideoDisabled: er,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || ei && !Z,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    }), !D && (0, i.jsx)(S.Ay, {
                        primaryGuild: a.primaryGuild,
                        userId: a.id,
                        contextGuildId: v,
                        className: k.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, O.YX)(w.uss.VOICE_V3, {
                                type: O.Z5.VOICE,
                                value: O.IP.PROFILE_OPENED,
                                userId: a.id
                            })
                        }
                    }), (0, i.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: d
                    })]
                })
            }), !Z && (0, i.jsx)(z, {
                nick: d,
                connectedOn: W,
                isSettingsPreview: D,
                voiceBackgroundWidth: K,
                rightAlign: !0
            }), (0, i.jsx)(Y, {
                className: s()(k.my, {
                    [k.yS]: eE === -1 / 0
                }),
                size: ef,
                src: eI,
                isSpeaking: ea,
                voiceDb: eE,
                speakingStylesConfig: {
                    spreadDirection: p.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), (0, i.jsx)(H, {
                avatarSize: eA,
                userId: a.id,
                channelId: t.id,
                guildId: t.getGuildId()
            })]
        }) : (0, i.jsxs)(u.DUT, {
            innerRef: B,
            className: s()(k.q7, {
                [k.zY]: ea,
                [k.bG]: !l,
                [k.zq]: n,
                [k.cU]: $
            }),
            onClick: l ? void 0 : e => I?.(e, a),
            onContextMenu: eh,
            onMouseEnter: eg,
            onMouseLeave: ed,
            children: [(0, i.jsx)(Y, {
                className: s()(k.my, {
                    [k.yS]: eE === -1 / 0
                }),
                size: ef,
                src: eI,
                isSpeaking: ea,
                voiceDb: eE,
                speakingStylesConfig: {
                    spreadDirection: p.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), !Z && (0, i.jsx)(z, {
                nick: d,
                connectedOn: W,
                isSettingsPreview: D,
                voiceBackgroundWidth: K
            }), em && (c === w.pwA.NEVER || !ea && c === w.pwA.ONLY_WHILE_SPEAKING) ? null : (0, i.jsx)(u.YNO, {
                targetElementRef: X,
                position: "right",
                renderPopout: ec,
                shouldShow: G,
                onRequestClose: ed,
                spacing: 0,
                children: () => (0, i.jsxs)("div", {
                    className: s()(k.Xh, {
                        [k.$A]: eu
                    }),
                    ref: X,
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: d
                    }), !D && (0, i.jsx)(S.Ay, {
                        primaryGuild: a.primaryGuild,
                        userId: a.id,
                        contextGuildId: v,
                        className: k.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, O.YX)(w.uss.VOICE_V3, {
                                type: O.Z5.VOICE,
                                value: O.IP.PROFILE_OPENED,
                                userId: a.id
                            })
                        }
                    }), (0, i.jsx)(T.Kc, {
                        guildId: v,
                        user: a,
                        video: et.selfVideo,
                        isStreaming: eu,
                        className: k.ZA,
                        iconClassName: k.Ow,
                        isWatching: el,
                        localMute: en && !Z,
                        localVideoDisabled: er,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || ei && !Z,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    })]
                })
            })]
        })
    }),
    B = r.memo(function(e) {
        let {
            widgetId: t,
            channel: l,
            sortedVoiceState: s,
            displayNameMode: a,
            displayUserMode: o,
            locked: u,
            flipped: g,
            size: m,
            isPreviewingInGame: f,
            isSettingsPreview: A,
            context: I
        } = e, E = r.useRef(null), {
            user: p,
            member: _,
            voiceState: S,
            connectedOn: T
        } = s, [C, N] = r.useState(null), [y, M] = r.useState(null);
        r.useEffect(() => {
            u && M(null)
        }, [u]), r.useEffect(() => {
            null != C && (0, O.YX)(w.uss.VOICE_V3, {
                type: O.Z5.GO_LIVE,
                value: O.IP.STREAM_PREVIEWED
            })
        }, [C]);
        let b = e => {
                N(e)
            },
            R = (e, t) => {
                A || (0, d.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
                    return (0, O.YX)(w.uss.VOICE_V3, {
                        type: O.Z5.VOICE,
                        value: O.IP.SETTINGS_OPENED,
                        userId: t.id
                    }), n => (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channelId: l?.id,
                        guildId: l?.guild_id,
                        mediaEngineContext: I,
                        onShowProfile: () => M(t.id),
                        appContext: w.BRT.OVERLAY,
                        onWatchStream: () => {
                            (0, O.YX)(w.uss.VOICE_V3, {
                                type: O.Z5.GO_LIVE,
                                value: O.IP.ENABLED,
                                userId: t.id
                            })
                        }
                    })
                })
            },
            j = r.useCallback(e => {
                let n = v.A.getWidget(t)?.layoutId,
                    i = null != n ? v.A.getWidgetsForLayout(n)?.find(e => e.type === w.uss.GO_LIVE) : null;
                null == i || i.pinned || ((0, c.v0)(i.id), h.A.track(w.HAw.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: l?.guild_id,
                    channel_id: l?.id,
                    channel_type: l?.type,
                    widget_type: w.uss.GO_LIVE
                })), null != e && null != i && (0, O.YX)(w.uss.VOICE_V3, {
                    type: O.Z5.GO_LIVE,
                    value: O.IP.ENABLED,
                    userId: e.ownerId
                })
            }, [l, t]);
        if (null == p || null == l || null == S) return null;
        let k = u || f;
        return (0, i.jsx)(x.A, {
            targetElementRef: E,
            user: p,
            guildId: l.guild_id,
            channelId: l.id,
            appContext: w.BRT.OVERLAY,
            shouldShow: y === p.id,
            onRequestClose: () => M(null),
            spacing: 24,
            children: () => (0, i.jsx)(W, {
                ref: E,
                guildId: l?.guild_id,
                user: p,
                connectedOn: T,
                nick: _?.nick ?? D.Ay.getName(p),
                flipped: g,
                voiceState: S,
                displayNameMode: a,
                displayUserMode: o,
                size: m,
                locked: k,
                onContextMenu: R,
                onClick: R,
                context: I,
                channel: l,
                showStreamPreview: p.id === C,
                onShowStreamPreview: b,
                onWatchStream: j,
                isSettingsPreview: A
            })
        }, p.id)
    })