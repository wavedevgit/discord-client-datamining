/** chunk id: 147905 params = (module,exports,require) **/
i.d(t, {
    Ay: () => K,
    FT: () => M,
    Ob: () => L
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(497766),
    d = i(311907),
    o = i(397927),
    u = i(442433),
    c = i(391973),
    A = i(684013),
    m = i(401843),
    g = i(765671),
    h = i(717558),
    x = i(964486),
    p = i(775602),
    f = i(659974),
    I = i(66004),
    S = i(142524),
    E = i(534400),
    v = i(342296),
    y = i(481947),
    N = i(616356),
    V = i(961350),
    T = i(555528),
    j = i(430452),
    C = i(485296),
    w = i(977997),
    _ = i(996439),
    D = i(427262),
    O = i(810412),
    b = i(652215),
    k = i(985018),
    G = i(975424);

function M(e) {
    switch (e) {
        case b.OSZ.LARGE:
            return o._3J.SIZE_32;
        case b.OSZ.SMALL:
            return o._3J.SIZE_24;
        default:
            return o._3J.SIZE_32
    }
}

function L(e) {
    return o.vCh[e].size
}
let R = () => i.e("15423").then(i.t.bind(i, 155147, 19)).then(e => {
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
    U = {
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

function Y(e, t) {
    let [i, n] = s.useState(null != e && e > Date.now() - 1e4), [l, a] = s.useState(!1), [r, d] = s.useState(!0);
    return (0, x.Ay)(() => {
        i && !t && (d(!1), setTimeout(() => {
            a(!0)
        }, 16))
    }), (0, x.Ay)(() => {
        let e = setTimeout(() => {
            n(!1), setTimeout(() => {
                a(!1)
            }, 16)
        }, 2600);
        return () => clearTimeout(e)
    }), s.useMemo(() => ({
        showConnectedAnimation: l,
        recentlyConnected: i,
        hideConnectedAnimation: r,
        setHideConnectedAnimation: d
    }), [l, i, r, d])
}
let z = s.memo(function(e) {
        let {
            nick: t,
            connectedOn: i,
            isSettingsPreview: l,
            voiceBackgroundWidth: u,
            rightAlign: c = !1
        } = e, {
            showConnectedAnimation: A,
            recentlyConnected: m,
            hideConnectedAnimation: h,
            setHideConnectedAnimation: x
        } = Y(i, l), {
            ref: f,
            width: I
        } = (0, g.Ay)(), S = (0, d.bG)([p.A], () => p.A.useReducedMotion), E = m ? "entering" : "exiting", {
            width: v
        } = (0, r.useSpring)({
            ...P[E],
            width: A ? I : u
        }), {
            opacity: y
        } = (0, r.useSpring)({
            ...U[E],
            opacity: +!!A,
            onRest: () => {
                A || x(!0)
            }
        }), N = s.useMemo(() => h || S ? "none" : "block", [h, S]);
        return (0, n.jsx)(r.animated.div, {
            className: a()(G.rH, {
                [G.pG]: c
            }),
            style: {
                width: v,
                opacity: y,
                display: N
            },
            children: (0, n.jsxs)("div", {
                ref: f,
                className: a()(G.LB, {
                    [G.RP]: "exiting" === E,
                    [G.kb]: !c,
                    [G.pG]: c
                }),
                children: [c && (0, n.jsx)(o.akl, {
                    importData: R,
                    shouldAnimate: !S,
                    className: G.lY
                }), (0, n.jsx)("div", {
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: k.intl.format(k.t.uFcReq, {
                            nick: t
                        })
                    })
                }), !c && (0, n.jsx)(o.akl, {
                    importData: R,
                    shouldAnimate: !S,
                    className: G.lY
                }), (0, n.jsx)("div", {
                    className: G.k1
                })]
            })
        })
    }),
    Z = s.memo(function(e) {
        let {
            avatarSize: t,
            userId: i,
            channelId: s,
            guildId: l
        } = e, a = 2 * t, r = -(t / 2);
        return (0, n.jsx)("div", {
            className: G.QZ,
            style: {
                top: r,
                left: r,
                width: a,
                height: a
            },
            children: (0, n.jsx)(I.A, {
                userId: i,
                channelId: s,
                guildId: l,
                containerDimensions: {
                    width: a,
                    height: a
                }
            })
        })
    }),
    F = s.memo(o.euF),
    W = s.memo(function(e) {
        let {
            channel: t,
            flipped: i = !1,
            locked: l = !1,
            user: r,
            nick: u,
            displayNameMode: c,
            displayUserMode: A,
            size: x = b.OSZ.LARGE,
            onClick: p,
            onContextMenu: I,
            context: v,
            guildId: T,
            isSettingsPreview: D = !1,
            voiceState: k,
            showStreamPreview: R,
            onShowStreamPreview: P,
            onWatchStream: U,
            connectedOn: W,
            ref: K
        } = e, X = (0, d.bG)([V.default], () => V.default.getId() === r.id, [r.id]), {
            ref: B,
            width: q
        } = (0, g.Ay)(), {
            showConnectedAnimation: H
        } = Y(W, D), J = k?.sessionId, Q = t.id, $ = r.id, [ee] = (0, d.bG)([w.A], () => [w.A.getVoiceStateForChannel(Q, $) ?? w.A.getVoiceStateForSession($, J), w.A.getVoiceStateVersion()], [Q, $, J], _.D), et = D ? k : ee ?? k, [ei, en, es] = (0, d.yK)([j.Ay], () => X ? [!j.Ay.isSupported() || j.Ay.isSelfMute() || j.Ay.isSelfMutedTemporarily(), j.Ay.isSelfDeaf(), !1] : [!j.Ay.isSupported() || j.Ay.isLocalMute(r.id), !1, j.Ay.isLocalVideoDisabled(r.id)], [X, r.id]), el = (0, d.bG)([N.A], () => {
            let e = N.A.getCurrentUserActiveStream();
            return null != e && e.ownerId !== r.id && N.A.getViewerIds(e).filter(e => e === r.id).length > 0
        }, [r.id]), ea = D && k?.discoverable, er = (0, h.A)({
            userId: r.id,
            context: v
        }) || ea, ed = (0, d.bG)([N.A], () => N.A.getStreamForUser(r.id, T)), eo = null != ed, eu = s.useCallback(() => {
            (R || null != eo) && P(null)
        }, [P, R, eo]), ec = s.useCallback(() => (0, n.jsx)(S.A, {
            user: r,
            channel: t,
            onWatch: () => {
                null != ed && ((0, m.A9)(ed, {
                    forceMultiple: !0,
                    noFocus: !0
                }), eu(), U(ed ?? null))
            },
            onAction: () => U,
            previewIsOpen: R,
            location: b.ThZ.UNLOCKED_OVERLAY,
            hideTip: !0
        }), [r, t, ed, R, eu, U]), eA = s.useCallback(e => {
            l || I?.(e, r)
        }, [l, I, r]), em = s.useCallback(() => {
            l || null != eo && P(r.id)
        }, [l, P, eo, r]), eg = l || D, eh = s.useMemo(() => M(x), [x]), ex = s.useMemo(() => L(eh), [eh]), ep = s.useMemo(() => r.getAvatarURL(T, ex), [r, T, ex]), ef = (0, d.bG)([C.A], () => C.A.getVoiceVolume($));
        return A === b.f5z.ONLY_WHILE_SPEAKING && eg && !er || null == et ? null : i ? (0, n.jsxs)(o.DUT, {
            innerRef: K,
            className: a()(G.q7, {
                [G.zY]: er,
                [G.bG]: !l,
                [G.zq]: i,
                [G.cU]: H
            }),
            onClick: l ? void 0 : e => p?.(e, r),
            onContextMenu: eA,
            onMouseEnter: em,
            onMouseLeave: eu,
            children: [eg && (c === b.pwA.NEVER || !er && c === b.pwA.ONLY_WHILE_SPEAKING) ? null : (0, n.jsx)(o.YNO, {
                targetElementRef: B,
                position: "left",
                renderPopout: ec,
                shouldShow: R,
                onRequestClose: eu,
                spacing: 0,
                children: () => (0, n.jsxs)("div", {
                    className: G.Xh,
                    ref: B,
                    children: [(0, n.jsx)(y.Kc, {
                        guildId: T,
                        user: r,
                        video: et.selfVideo,
                        isStreaming: eo,
                        className: G.ZA,
                        iconClassName: G.Ow,
                        isWatching: el,
                        localMute: ei && !X,
                        localVideoDisabled: es,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || en && !X,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    }), !D && (0, n.jsx)(E.Ay, {
                        primaryGuild: r.primaryGuild,
                        userId: r.id,
                        contextGuildId: T,
                        className: G.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, O.YX)(b.uss.VOICE_V3, {
                                type: O.Z5.VOICE,
                                value: O.IP.PROFILE_OPENED,
                                userId: r.id
                            })
                        }
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: u
                    })]
                })
            }), !X && (0, n.jsx)(z, {
                nick: u,
                connectedOn: W,
                isSettingsPreview: D,
                voiceBackgroundWidth: q,
                rightAlign: !0
            }), (0, n.jsx)(F, {
                className: a()(G.my, {
                    [G.yS]: ef === -1 / 0
                }),
                size: eh,
                src: ep,
                isSpeaking: er,
                voiceDb: ef,
                speakingStylesConfig: {
                    spreadDirection: f.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), (0, n.jsx)(Z, {
                avatarSize: ex,
                userId: r.id,
                channelId: t.id,
                guildId: t.getGuildId()
            })]
        }) : (0, n.jsxs)(o.DUT, {
            innerRef: K,
            className: a()(G.q7, {
                [G.zY]: er,
                [G.bG]: !l,
                [G.zq]: i,
                [G.cU]: H
            }),
            onClick: l ? void 0 : e => p?.(e, r),
            onContextMenu: eA,
            onMouseEnter: em,
            onMouseLeave: eu,
            children: [(0, n.jsx)(F, {
                className: a()(G.my, {
                    [G.yS]: ef === -1 / 0
                }),
                size: eh,
                src: ep,
                isSpeaking: er,
                voiceDb: ef,
                speakingStylesConfig: {
                    spreadDirection: f.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), !X && (0, n.jsx)(z, {
                nick: u,
                connectedOn: W,
                isSettingsPreview: D,
                voiceBackgroundWidth: q
            }), eg && (c === b.pwA.NEVER || !er && c === b.pwA.ONLY_WHILE_SPEAKING) ? null : (0, n.jsx)(o.YNO, {
                targetElementRef: B,
                position: "right",
                renderPopout: ec,
                shouldShow: R,
                onRequestClose: eu,
                spacing: 0,
                children: () => (0, n.jsxs)("div", {
                    className: a()(G.Xh, {
                        [G.$A]: eo
                    }),
                    ref: B,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: u
                    }), !D && (0, n.jsx)(E.Ay, {
                        primaryGuild: r.primaryGuild,
                        userId: r.id,
                        contextGuildId: T,
                        className: G.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, O.YX)(b.uss.VOICE_V3, {
                                type: O.Z5.VOICE,
                                value: O.IP.PROFILE_OPENED,
                                userId: r.id
                            })
                        }
                    }), (0, n.jsx)(y.Kc, {
                        guildId: T,
                        user: r,
                        video: et.selfVideo,
                        isStreaming: eo,
                        className: G.ZA,
                        iconClassName: G.Ow,
                        isWatching: el,
                        localMute: ei && !X,
                        localVideoDisabled: es,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || en && !X,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    })]
                })
            })]
        })
    }),
    K = s.memo(function(e) {
        let {
            widgetId: t,
            channel: l,
            sortedVoiceState: a,
            displayNameMode: r,
            displayUserMode: d,
            locked: o,
            flipped: m,
            size: g,
            isPreviewingInGame: h,
            isSettingsPreview: x,
            context: p
        } = e, f = s.useRef(null), {
            user: I,
            member: S,
            voiceState: E,
            connectedOn: y
        } = a, [N, V] = s.useState(null), [j, C] = s.useState(null);
        s.useEffect(() => {
            o && C(null)
        }, [o]), s.useEffect(() => {
            null != N && (0, O.YX)(b.uss.VOICE_V3, {
                type: O.Z5.GO_LIVE,
                value: O.IP.STREAM_PREVIEWED
            })
        }, [N]);
        let w = e => {
                V(e)
            },
            _ = (e, t) => {
                x || (0, u.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([i.e("97262"), i.e("87997"), i.e("42537")]).then(i.bind(i, 180812));
                    return (0, O.YX)(b.uss.VOICE_V3, {
                        type: O.Z5.VOICE,
                        value: O.IP.SETTINGS_OPENED,
                        userId: t.id
                    }), i => (0, n.jsx)(e, {
                        ...i,
                        user: t,
                        channelId: l?.id,
                        guildId: l?.guild_id,
                        mediaEngineContext: p,
                        onShowProfile: () => C(t.id),
                        appContext: b.BRT.OVERLAY,
                        onWatchStream: () => {
                            (0, O.YX)(b.uss.VOICE_V3, {
                                type: O.Z5.GO_LIVE,
                                value: O.IP.ENABLED,
                                userId: t.id
                            })
                        }
                    })
                })
            },
            k = s.useCallback(e => {
                let i = T.A.getWidget(t)?.layoutId,
                    n = null != i ? T.A.getWidgetsForLayout(i)?.find(e => e.type === b.uss.GO_LIVE) : null;
                null == n || n.pinned || ((0, c.v0)(n.id), A.A.track(b.HAw.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: l?.guild_id,
                    channel_id: l?.id,
                    channel_type: l?.type,
                    widget_type: b.uss.GO_LIVE
                })), null != e && null != n && (0, O.YX)(b.uss.VOICE_V3, {
                    type: O.Z5.GO_LIVE,
                    value: O.IP.ENABLED,
                    userId: e.ownerId
                })
            }, [l, t]);
        if (null == I || null == l || null == E) return null;
        let G = o || h;
        return (0, n.jsx)(v.A, {
            targetElementRef: f,
            user: I,
            guildId: l.guild_id,
            channelId: l.id,
            appContext: b.BRT.OVERLAY,
            shouldShow: j === I.id,
            onRequestClose: () => C(null),
            spacing: 24,
            children: () => (0, n.jsx)(W, {
                ref: f,
                guildId: l?.guild_id,
                user: I,
                connectedOn: y,
                nick: S?.nick ?? D.Ay.getName(I),
                flipped: m,
                voiceState: E,
                displayNameMode: r,
                displayUserMode: d,
                size: g,
                locked: G,
                onContextMenu: _,
                onClick: _,
                context: p,
                channel: l,
                showStreamPreview: I.id === N,
                onShowStreamPreview: w,
                onWatchStream: k,
                isSettingsPreview: x
            })
        }, I.id)
    })